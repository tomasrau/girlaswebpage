// ── Versionado ───────────────────────────────────────────────────
// google-sheets.gs — version: v1
// Last synced to Apps Script deployment: 2026-08-13
// Repo: github.com/tomasrau/girlaswebpage — scripts/google-sheets.gs
// IMPORTANTE: este archivo se versiona en git pero NO se despliega
// automáticamente. Al modificarlo acá, hay que copiar/pegar el
// contenido en el editor de Apps Script del Sheet y guardar ahí
// también. Subí el número de versión de arriba en cada copy-paste
// para poder correlacionar qué commit está corriendo en producción.

// ── Configuración ────────────────────────────────────────────────
const SHEET_NAME  = 'Reseñas';
const HEADERS     = ['Timestamp', 'Nombre', 'Instagram', 'Destino', 'Estrellas', 'NPS', 'Volvería', 'Reseña', 'Estado'];

// ── Recibe el formulario del sitio web ───────────────────────────
function doPost(e) {
  try {
    const p = e.parameter;
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
    }
    sheet.appendRow([
      new Date().toISOString(),
      p.name        || '',
      p.instagram   || '',
      p.destination || '',
      parseInt(p.stars)  || 0,
      parseInt(p.nps)    || 0,
      p.wouldReturn || '',
      p.review      || '',
      'Pendiente',
    ]);
    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: err.message });
  }
}

// ── Devuelve las reseñas aprobadas como JSON (lee GitHub Actions) ─
function doGet(e) {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) return jsonResponse_([]);

    const rows = sheet.getDataRange().getValues();
    if (rows.length <= 1) return jsonResponse_([]);

    const result = rows.slice(1)
      .filter(r => r[8] === 'Aprobada')
      .map((r, i) => ({
        id:              `r_${i}`,
        name:            r[1],
        instagramHandle: r[2] || undefined,
        destination:     r[3],
        stars:           parseInt(r[4]) || 5,
        nps:             parseInt(r[5]) || 10,
        wouldReturn:     r[6] || 'si',
        text:            r[7],
        date:            r[0] instanceof Date
                           ? r[0].toISOString().split('T')[0]
                           : String(r[0]).split('T')[0],
        featured:        false,
      }));

    return jsonResponse_(result);
  } catch (err) {
    return jsonResponse_([]);
  }
}

// ── Dispara el deploy en GitHub ──────────────────────────────────
function triggerDeploy_() {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('GITHUB_TOKEN');
  const repo  = props.getProperty('GITHUB_REPO');
  if (!token || !repo) return;

  UrlFetchApp.fetch(`https://api.github.com/repos/${repo}/dispatches`, {
    method:             'post',
    muteHttpExceptions: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept':        'application/vnd.github.v3+json',
      'Content-Type':  'application/json',
    },
    payload: JSON.stringify({ event_type: 'testimonial-submitted' }),
  });
}

// ── Helper ───────────────────────────────────────────────────────
function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function onEstadoChange(e) {
  const range = e.range;
  if (range.getColumn() !== 9) return;
  // Disparar en cualquier cambio de estado — aprobar o revertir
  triggerDeploy_();
}


// Ejecutar UNA VEZ desde el editor para instalar el trigger
function createTrigger() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  // Evitar duplicados
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'onEstadoChange')
    .forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger('onEstadoChange')
    .forSpreadsheet(ss)
    .onEdit()
    .create();

  SpreadsheetApp.getUi().alert('✓ Trigger instalado correctamente.');
}

function testDeploy() {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('GITHUB_TOKEN');
  const repo  = props.getProperty('GITHUB_REPO');
  
  Logger.log('Token: ' + (token ? token.substring(0, 8) + '...' : 'NO ENCONTRADO'));
  Logger.log('Repo: ' + (repo || 'NO ENCONTRADO'));
  
  const response = UrlFetchApp.fetch(`https://api.github.com/repos/${repo}/dispatches`, {
    method:             'post',
    muteHttpExceptions: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept':        'application/vnd.github.v3+json',
      'Content-Type':  'application/json',
    },
    payload: JSON.stringify({ event_type: 'testimonial-submitted' }),
  });
  
  Logger.log('Status: ' + response.getResponseCode());
  Logger.log('Response: ' + response.getContentText());
}