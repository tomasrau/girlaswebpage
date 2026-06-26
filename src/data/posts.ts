export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  dateISO: string;
  category: string;
  readTime: string;
  author: 'Ina' | 'Valu';
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'viajar-sola-primer-vez',
    title: '10 consejos para viajar sola por primera vez',
    excerpt: 'Elegiste ir. Eso ya es lo más difícil. Ahora te contamos todo lo que necesitás saber antes de hacer la valija y subir a ese avión.',
    image: '/images/blog/viajar-sola.jpg',
    date: '12 de marzo, 2026',
    dateISO: '2026-03-12',
    category: 'Consejos',
    readTime: '6 min',
    author: 'Ina',
    content: `
<p>La primera vez que viajé sola me fui a Brasil con una mochila, un vuelo de madrugada y muchas dudas. Hoy, varios viajes después, te cuento lo que ojalá alguien me hubiera dicho antes.</p>

<h2>1. Elegí un destino amigable para empezar</h2>
<p>No tenés que empezar con el destino más difícil del mundo. Brasil, Uruguay, Colombia, Chile o incluso un destino dentro de Argentina son perfectos para el primer viaje sola. Buscá lugares con buena infraestructura turística, comunidad de viajeras activa y reseñas recientes de mujeres que ya estuvieron.</p>

<h2>2. Investigá el destino antes de llegar</h2>
<p>Leé blogs, grupos de Facebook de viajeras, Reddit, e Instagram. Fijate en qué barrios alojarte, qué zonas evitar de noche, cómo moverse, cuánto cuesta un taxi desde el aeropuerto. Cuanto más sabés antes de llegar, más tranquila te sentís cuando estás ahí.</p>

<h2>3. Elegí bien el alojamiento los primeros días</h2>
<p>Los primeros días son clave. Si viajás sola por primera vez, los hostels con buenas reviews de mujeres son increíbles: tienen cocinas compartidas, espacios comunes y gente siempre dispuesta a armar planes. Si preferís privacidad, hoteles boutique bien ubicados te dan base segura. Lo importante: que esté bien ubicado, con reviews recientes y que tenga recepción las 24 horas.</p>

<h2>4. Avisá siempre a dónde vas</h2>
<p>Mandá tu itinerario a alguien de confianza. No para que te controlen, sino para que sepan dónde estás si pasa algo. Con compartir la ubicación en tiempo real con una amiga o tu familia ya es suficiente. También podés dejar anotado el nombre y dirección del hotel en algún papel en la mochila.</p>

<h2>5. Viajá ligera, en serio</h2>
<p>La mochila pesada es enemiga de la viajera sola. Cuanto menos llevás, más libre te movés. La regla de oro: si dudás si llevar algo, no lo llevés. En casi cualquier destino podés comprar lo que necesitás. Una valija de cabina o mochila mediana es suficiente para dos semanas.</p>

<h2>6. Aprendé frases básicas del idioma local</h2>
<p>No tenés que ser políglota. Pero saber decir "¿dónde está...?", "¿cuánto cuesta?", "no, gracias" y "ayuda" en el idioma local cambia todo. La gente siempre responde mejor cuando intentás hablar su idioma, aunque sea con acento.</p>

<h2>7. Confiá en tu intuición</h2>
<p>Si algo no te cierra, no lo hagas. Si una persona te incomoda, alejate. Si un plan no te convence, decís que no. Tu intuición es tu mejor GPS. Las mujeres tenemos una capacidad enorme de leer situaciones; escuchala.</p>

<h2>8. Conectate con otras viajeras</h2>
<p>Los hostels, los free tours, los grupos de WhatsApp de viajeras y las comunidades en Instagram son recursos increíbles. No tenés que hacer todo sola: podés armar planes con personas que conocés en el camino, compartir taxi, ir a una excursión en grupo. Viajar sola no significa estar sola todo el tiempo.</p>

<h2>9. Tené siempre un plan B de plata</h2>
<p>Llevá efectivo local y dólares (o euros, según el destino) además de tus tarjetas. Siempre. Una tarjeta bloqueada en el exterior o un cajero que no funcione puede ser una pesadilla si no tenés efectivo de respaldo. Y si el país tiene inflación o controles cambiarios, informate antes de viajar.</p>

<h2>10. Date el permiso de cambiar los planes</h2>
<p>El mayor privilegio de viajar sola es que el itinerario lo manejás vos. Si querés quedarte un día más en algún lugar, quedáte. Si querés saltearte una atracción turística para tomar mate mirando el mar, hacelo. Viajás sola, los planes son tuyos.</p>

<hr />

<p><strong>Una última cosa:</strong> el miedo a viajar sola no desaparece del todo antes del primer viaje. Desaparece cuando ya estás ahí, tomando el primer colectivo, probando la primera comida nueva, charlando con la primera extraña que se convierte en compañera de aventura. Ese momento es tuyo.</p>
    `.trim(),
  },
  {
    slug: 'mejores-destinos-mujeres-viajeras',
    title: 'Los 7 destinos imperdibles para mujeres viajeras',
    excerpt: 'América del Sur tiene algunos de los destinos más vibrantes, seguros y únicos del mundo para mujeres que viajan. Estos son los que no podés perderte.',
    image: '/images/blog/destinos-mujeres.jpg',
    date: '5 de abril, 2026',
    dateISO: '2026-04-05',
    category: 'Destinos',
    readTime: '8 min',
    author: 'Valu',
    content: `
<p>Después de años organizando viajes para mujeres, hay destinos que vuelven una y otra vez. No son los más instagrameables ni los más baratos, sino los que dejan algo. Los que hacen que las viajeras quieran volver.</p>

<h2>1. Florianópolis, Brasil</h2>
<p>La Isla de la Magia, como la llaman los locales, tiene todo: playas de agua turquesa, laguna de dunas, surf, lagoa da concepção con bares flotantes, y una energía que mezcla lo relajado con lo festivo. Es segura para moverse, tiene excelente gastronomía y la comunidad de viajeras que pasa por ahí es increíble. Las playas del sur (Lagoinha do Leste, Solidão) son para las que buscan naturaleza pura; las del norte (Jurerê Internacional, Ingleses) para las que quieren ambiente y vida nocturna.</p>

<h2>2. Cartagena de Indias, Colombia</h2>
<p>El casco amurallado de Cartagena es uno de esos lugares que te sacude de entrada. Calles de colores, flores en los balcones, música que sale de todos lados, comida increíble. Las islas del Rosario están a una hora en lancha y son un paraíso. La ciudad tiene una energía femenina muy particular: poderosa, festiva y acogedora. Ideal para combinar cultura, playa y gastronomía en pocos días.</p>

<h2>3. Bariloche, Argentina</h2>
<p>Bariloche no es solo para el invierno. En verano es un destino de trekking, kayak, bike, lagos cristalinos y atardeceres que no tienen nombre. En invierno, las pistas de Cerro Catedral, el chocolate caliente y la nieve. En cualquier época: paisajes que te dejan sin palabras y una calidad de destino que pocas ciudades argentinas tienen. Ideal para grupos de amigas que quieren aventura con comodidad.</p>

<h2>4. Lima, Perú</h2>
<p>Lima es una de las mejores ciudades gastronómicas del mundo, sin discusión. Miraflores y Barranco son barrios seguros, llenos de arte, restaurantes increíbles, mercados y vida cultural. Es perfecta como punto de partida para explorar Perú (Cusco, Machu Picchu, el lago Titicaca) o simplemente para quedarse unos días a comer bien, tomar pisco sour y caminar por el malecón frente al Pacífico.</p>

<h2>5. Valle de Elqui, Chile</h2>
<p>Este destino es uno de los más especiales de Sudamérica. El Valle de Elqui, en la región de Coquimbo, combina cielos despejados perfectos para astronomía, viñedos de pisco, spas termales y una energía particular que lo hace favorito de quienes buscan retiro, meditación y naturaleza. Los pueblitos de Pisco Elqui y Montegrande son pequeños, tranquilos y auténticos. Ideal para una escapada de desconexión real.</p>

<h2>6. Montevideo, Uruguay</h2>
<p>La capital uruguaya es la más subestimada de la región. Tiene una rambla de 22 kilómetros frente al Río de la Plata, bares llenos de historia, mercado del puerto para comer bien, y una calidad de vida que se siente en cada esquina. Es segura, tranquila y perfecta para recorrer a pie. Además, desde Montevideo podés hacer excursiones a Colonia del Sacramento y a Punta del Este, que son gemas en sí mismas.</p>

<h2>7. Pipa, Rio Grande do Norte, Brasil</h2>
<p>Pipa es el tipo de destino que te engancha sin avisarte. Las barrancas rojizas sobre el mar, las playas de agua verde esmeralda, el ambiente relajado de quien decidió quedarse a vivir ahí, las caipirinhas al atardecer. Es uno de los destinos favoritos de la comunidad Girlas: salvaje, hermoso y con una energía que no se encuentra en muchos lugares del mundo. Si no fuiste, falta poco.</p>

<hr />

<p>La lista podría seguir: Medellín, Salta, San Andrés, Cusco, el Nordeste argentino... América Latina es enorme y cada destino tiene algo único para dar. La pregunta no es a dónde ir, sino cuándo empezás a planear.</p>
    `.trim(),
  },
  {
    slug: 'que-llevar-surf-trip',
    title: '¿Qué llevar a un surf trip?: Los infaltables',
    excerpt: 'Ya confirmaste tu lugar. Ahora la gran pregunta: ¿qué meto en la valija? Acá te contamos lo que no puede faltar en un surf trip bien armado.',
    image: '/images/blog/surf-trip.jpg',
    date: '20 de junio, 2026',
    dateISO: '2026-06-20',
    category: 'Guías',
    readTime: '5 min',
    author: 'Ina',
    content: `
<p>Organizar el bolso para un surf trip parece complicado al principio, especialmente si es la primera vez. ¿Llevo tabla? ¿Cuántos trajes de baño necesito? ¿El rashguard cuenta como ropa o como equipo? Tranquila: en Girlas armamos este listado después de varios viajes para que no se te olvide nada importante.</p>

<h2>Equipamiento de surf</h2>
<p>Si vas a un destino con escuela o alquiler de tablas (como Pipa o Itamambuca), no necesitás llevar tabla propia. Podés alquilar ahí según el tipo de ola y tu nivel. Lo que sí conviene tener:</p>
<ul>
  <li><strong>Rashguard:</strong> protege del sol y del roce con la tabla. Llevá al menos 2.</li>
  <li><strong>Reef booties</strong> si el fondo es rocoso o de coral.</li>
  <li><strong>Leash propio</strong> si tenés, aunque en general te lo prestan con la tabla.</li>
  <li><strong>Wax</strong> del tipo que corresponde a la temperatura del agua (tropical, warm, cool).</li>
</ul>

<h2>Ropa y trajes de baño</h2>
<p>Regla de oro: más trajes de baño de los que creés necesitar. Cuando surf dos veces por día, secás mal o el calor los mantiene húmedos. Lo ideal:</p>
<ul>
  <li>3 o 4 trajes de baño (tops y bottoms que combinen entre sí).</li>
  <li>2 o 3 rashguards de colores y mangas distintas.</li>
  <li>Shorts de playa y ropa liviana para la tarde/noche.</li>
  <li>Un par de sandalias cómodas y uno de zapatillas livianas.</li>
  <li>Buzo o campera liviana para las noches frescas.</li>
</ul>

<h2>Protección solar y skincare</h2>
<p>El combo playa + agua + viento es el peor para la piel. No subestimes esto:</p>
<ul>
  <li><strong>Protector solar SPF 50+</strong> resistente al agua y en cantidad generosa. En los destinos de surf lo usás 2-3 veces por día.</li>
  <li><strong>Protector labial con SPF.</strong></li>
  <li>Hidratante para el cuerpo y la cara (el sol y la sal resecan mucho).</li>
  <li>Shampoo para cabello con sal y sol (hay productos específicos).</li>
  <li>Áloe vera o after-sun para si igual te quemás.</li>
</ul>

<h2>Accesorios esenciales</h2>
<ul>
  <li>Bolso de playa grande y resistente al agua.</li>
  <li>Toalla de microfibra (liviana y seca rápido).</li>
  <li>Anteojos de sol con UV 400.</li>
  <li>Sombrero o gorra para los momentos fuera del agua.</li>
  <li>Botella de agua reutilizable (hidratarse durante el surf es clave).</li>
  <li>Bolsita impermeable para el celular.</li>
</ul>

<h2>Salud y bienestar</h2>
<ul>
  <li>Ibuprofeno o analgésico (los músculos del surf duelen los primeros días).</li>
  <li>Antihistamínico si sos alérgica a algún insecto o planta.</li>
  <li>Repelente de mosquitos (básico en Brasil y zonas tropicales).</li>
  <li>Tiritas y desinfectante para los pequeños raspones.</li>
  <li>Tus medicamentos habituales.</li>
</ul>

<h2>Documentos y finanzas</h2>
<ul>
  <li>Pasaporte o DNI vigente.</li>
  <li>Fotocopia o foto del documento guardada en el celular y en el mail.</li>
  <li>Efectivo local + dólares de respaldo + tarjeta de crédito/débito internacional.</li>
  <li>Seguro de viaje (no lo salteés: un golpe en el agua en el exterior puede ser muy caro).</li>
  <li>Número de la embajada argentina en el destino.</li>
</ul>

<hr />

<p>Lo que no te digo: llevá menos ropa de la que creés necesitar y más protector solar del que te parece suficiente. Eso es lo que pasa en todos los surf trips, sin excepción.</p>

<p>¿Tenés dudas sobre qué llevar al surf trip de Girlas? Escribinos por WhatsApp y te ayudamos a armar tu bolso ideal según el destino.</p>
    `.trim(),
  },
  {
    slug: 'blogear-viaje-naturaleza',
    title: 'Consejos para blogear un viaje a la naturaleza',
    excerpt: 'Cómo capturar, editar y contar un viaje a la naturaleza sin perderte de vivirlo. Guía práctica para viajeras que quieren crear contenido auténtico.',
    image: '/images/blog/blogear-naturaleza.jpg',
    date: '15 de mayo, 2026',
    dateISO: '2026-05-15',
    category: 'Tips',
    readTime: '7 min',
    author: 'Valu',
    content: `
<p>Hay algo que me pasó en varios viajes: llegar a un lugar increíble, sacar cien fotos pensando en el contenido, y darme cuenta después de que ninguna captura lo que realmente sentí ahí. Con el tiempo aprendí que blogear un viaje a la naturaleza es un arte distinto al de documentar una ciudad. Te cuento lo que me funcionó.</p>

<h2>Antes de salir: planificá el contenido sin sobre-planificarlo</h2>
<p>Tener un esquema general de qué querés mostrar (el camino de llegada, el paisaje, el momento del atardecer, la comida local) te ayuda a no llegar en blanco. Pero no te esclavices al plan. Los mejores momentos en la naturaleza son siempre los que no planeás. Si estás muy enfocada en el contenido que tenés que capturar, te perdés el de verdad.</p>

<h2>La cámara: no necesitás la más cara</h2>
<p>El celular moderno hace fotos increíbles al aire libre. Si tenés un iPhone o un Android de gama media-alta de los últimos 3 años, tenés más de lo necesario para crear contenido de calidad. Lo que sí importa más que el equipo:</p>
<ul>
  <li><strong>La hora de la luz:</strong> la golden hour (una hora después del amanecer y una antes del atardecer) hace cualquier paisaje mágico. La luz del mediodía aplana todo.</li>
  <li><strong>La composición:</strong> aprendé la regla de los tercios. Ponés el horizonte en un tercio de la imagen, no en el centro. Cambia todo.</li>
  <li><strong>La estabilidad:</strong> si querés hacer videos, un pequeño gimbal o una selfie stick estabilizadora marca la diferencia.</li>
</ul>
<p>Si querés llevar cámara, una Sony ZV-E10 o una GoPro son opciones livianas y versátiles para naturaleza.</p>

<h2>Qué tipo de contenido funciona en viajes de naturaleza</h2>
<p>Los viajes a la naturaleza tienen algo que los destinos urbanos no tienen: silencio, espacio y cambio de luz constante. Aprovechalo:</p>
<ul>
  <li><strong>Videos cortos de ambiente:</strong> el sonido de un río, el viento en los árboles, las olas. Sin hablar, sin música. Esos videos son los que más engagement generan porque la gente los pone con auriculares.</li>
  <li><strong>Fotos de escala:</strong> una figura humana pequeña frente a un paisaje enorme. Comunica aventura y libertad de una manera que las fotos de cerca no pueden.</li>
  <li><strong>Detalles inesperados:</strong> la flor en el sendero, las huellas en la arena, la sombra de un árbol. Los detalles cuentan una historia que el paisaje general no siempre puede.</li>
  <li><strong>Momentos reales del grupo:</strong> risas, esfuerzo, sorpresa, descanso. El contenido humano siempre conecta más que el paisajístico.</li>
</ul>

<h2>Cómo editar fotos desde el celular sin que queden artificiales</h2>
<p>Lightroom Mobile (gratis) es el editor que uso. Mis ajustes base para fotos de naturaleza:</p>
<ul>
  <li>Exposición: +0.2 a +0.4 si la foto quedó oscura.</li>
  <li>Sombras: subir para recuperar detalle en zonas oscuras.</li>
  <li>Blancos: bajar un poco para evitar cielos quemados.</li>
  <li>Claridad: +10 a +20 para texturas (agua, rocas, pasto).</li>
  <li>Tonos de color: en fotos de playa, bajar un poco la saturación del azul y subir la del verde da resultados naturales y tropicales a la vez.</li>
</ul>
<p>Clave: que tus fotos se parezcan a lo que realmente viste. La naturaleza ya es hermosa sin filtros exagerados.</p>

<h2>Cómo contar el viaje (el texto importa)</h2>
<p>El error más común: describir lo que se ve en la foto en el pie de foto. "Atardecer en Bariloche." Todos lo saben, lo están mirando. Lo que la gente quiere leer es cómo te hizo sentir, qué pensaste, qué te sorprendió, qué cambió en vos. El viaje a la naturaleza es también un viaje interno, y eso es lo que engancha a quien te lee.</p>

<h2>La regla de oro: desconectate para conectarte</h2>
<p>El contenido más auténtico se crea cuando vivís el momento primero y lo documentás después. No al revés. Si llegás a un mirador increíble y lo primero que hacés es buscar el ángulo para la foto, algo se perdió. Primero mirá. Respirá. Sentilo. Y después sacá el celular.</p>

<hr />

<p>Blogear un viaje a la naturaleza es también una forma de procesarlo, de encontrarle el sentido. Pero ese sentido aparece cuando el viaje te ocurrió a vos, no a la cámara. La mejor foto siempre es la que hacés cuando ya tenés todo lo demás guardado en el corazón.</p>
    `.trim(),
  },
];

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);
