/**
 * @typedef {Object} SocialLinks
 * @property {string} [facebook]
 * @property {string} [instagram]
 */

/**
 * @typedef {Object} Place
 * @property {string} name
 * @property {string} description
 * @property {SocialLinks} [social]
 * @property {string} [note]
 * @property {string} query
 * @property {string} [coordinates]
 * @property {string} [busDirections]
 * @property {string[]} [images]
 */

/**
 * @typedef {Object} RegionData
 * @property {string} description
 * @property {Place[]} places
 */

/**
 * @typedef {Object} RegionMeta
 * @property {string} name
 * @property {string} color
 * @property {string} departments
 */

/** @type {Record<string, RegionMeta>} */

const REGIONES = {
  occidente: {
    name: "Occidental",
    color: "#8a9a4b",
    departments: "Ahuachapán, Sonsonate y Santa Ana",
  },
  central: {
    name: "Central",
    color: "#3e7a4f",
    departments: "San Salvador, La Libertad, La Paz y más",
  },
  oriente: {
    name: "Oriental",
    color: "#8a5a32",
    departments: "San Miguel, Usulután, Morazán y La Unión",
  },
};

// DATOS
const IMAGE_DIRECTORY = "/img/";
const DATA = {
  occidente: {
    description:
      "Entre cafetales y pueblos coloridos, el occidente te invita a disfrutar de antojitos tradicionales, dulces artesanales y café de altura en un clima fresco y acogedor.",
    places: [
      {
        name: "Entre Nubes",
        description:
          "Hermoso lugar al aire libre con una gran variedad de platillos típicos: sopa de gallina, buñuelos con chilate, riguas, almuerzo típico y opciones vegetarianas.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100064457178444",
          instagram: "https://www.instagram.com/cafeentrenubes/",
        },
        query: "Entre Nubes, Ataco, Ahuachapán",
        coordinates: "13.848514,-89.832074",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 hacia Sonsonate. Al llegar a Sonsonate, transborda a la Ruta 249 con rumbo a Ahuachapán y pídele al motorista que te baje sobre la carretera entre Ataco y Apaneca, justo frente a Entre Nubes.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Toma la Ruta 249 o la Ruta 20 con dirección a Apaneca/Ataco y avísale al motorista que vas para el restaurante Entre Nubes.<br>
                        <b>Opción 3:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 210 hacia Ahuachapán. Una vez en Ahuachapán, transborda a la Ruta 249 hacia Ataco/Apaneca y bájate en el restaurante`,
        images: [
          "OCCIDENTE/Entre Nubes/imagen1.jpg",
          "OCCIDENTE/Entre Nubes/imagen2.jpg",
          "OCCIDENTE/Entre Nubes/imagen3.jpg",
        ],
      },
      {
        name: "El Jardín de Celeste",
        description:
          "Un espacio rodeado de exuberantes jardines y áreas verdes que también ofrece hospedaje en cabañas de montaña. Ideal para disfrutar en familia.",
        social: {
          facebook: "https://www.facebook.com/eljardindeceleste",
          instagram: "https://www.instagram.com/eljardindeceleste.oficial/",
        },
        query: "El Jardín de Celeste, Ataco, Ahuachapán",
        coordinates: "13.7105,-89.6531",
        busDirections: `<b>Opción 1:</b> Desde San Salvador (Vía Sonsonate): Terminal de Occidente toma Ruta 205 a Sonsonate, transborda a Ruta 249 y pide parada en El Jardín de Celeste.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Toma Ruta 249 o 238 hacia Ataco/Apaneca y baja en el restaurante.<br>
                        <b>Opción 3:</b> Desde Santa Ana: Terminal Francisco Lara Pineda toma Ruta 210 hacia Ahuachapán y transborda a Ruta 249.`,
        images: [
          "OCCIDENTE/El Jardin de Celeste/imagen1.jpg",
          "OCCIDENTE/El Jardin de Celeste/imagen2.jpg",
          "OCCIDENTE/El Jardin de Celeste/imagen3.jpg",
          "OCCIDENTE/El Jardin de Celeste/imagen4.jpg",
          "OCCIDENTE/El Jardin de Celeste/imagen5.jpg",
        ],
      },
      {
        name: "Plaza El Bosque",
        description:
          "Complejo recreativo y plaza al aire libre rodeada de un pinar con clima fresco. Cuenta con diversas alternativas gastronómicas y zonas de aventura.",
        social: {
          facebook: "https://www.facebook.com/plazaelbosque87",
          instagram:
            "https://www.instagram.com/plazaelbosqueahuachapan/?hl=es-la",
        },
        query: "Plaza del Bosque, Ahuachapán",
        coordinates: "13.8495,-89.8351",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 hacia Sonsonate. Al llegar, transborda a la Ruta 249 rumbo a Ahuachapán. Una vez en la ciudad de Ahuachapán, puedes tomar un microbús local o un mototaxi directo hacia la plaza.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Ve a la Terminal Francisco Lara Pineda y toma la Ruta 210 directa hacia Ahuachapán. Al llegar a la terminal de Ahuachapán, toma el transporte local o camina hacia la zona de la plaza según tu ubicación exacta.`,
        images: [
          "OCCIDENTE/Plaza El Bosque/imagen1.jpg",
          "OCCIDENTE/Plaza El Bosque/imagen2.jpg",
          "OCCIDENTE/Plaza El Bosque/imagen3.jpg",
        ],
      },
      {
        name: "Restaurante Rincon Tipico de El Sopón",
        description:
          "Restaurante rustico con comida típica salvadoreña, como sopas, almuerzos y postres caseros. Ideal para disfrutar de un ambiente familiar y acogedor.",
        social: {
          facebook: "https://www.facebook.com/Rincontipicosantaana",
          instagram:
            "https://www.instagram.com/restauranterincontipico/?hl=es-la",
        },
        query: "Restaurante Rincon Tipico de El Sopón, Santa Ana",
        coordinates: "13.981372337372681, -89.55839734232842",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 201 directa hacia la ciudad de Santa Ana. Una vez en la terminal de Santa Ana, puedes tomar un taxi o abordar un microbús urbano local que te acerque a la zona céntrica (cerca de la 3ª Avenida Sur).<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 210 hacia Santa Ana. Al llegar a la terminal Francisco Lara Pineda en Santa Ana, trasládate hacia el centro de la ciudad para llegar al restaurante.`,
        images: [
          "OCCIDENTE/Restaurante Rincon Tipico de El Sopon/imagen1.jpg",
          "OCCIDENTE/Restaurante Rincon Tipico de El Sopon/imagen2.jpg",
          "OCCIDENTE/Restaurante Rincon Tipico de El Sopon/imagen3.jpg",
        ],
      },
      {
        name: "Cafe Tejas",
        description:
          "Restaurante acojedor con tintes rusticos, mesas de billar y un menu tipico de comida salvadoreña. Ideal para disfrutar de un ambiente familiar y relajado.",
        social: {
          facebook: "https://www.facebook.com/cafetejas.santaana",
          instagram: "https://www.instagram.com/cafetejas_santaana/?hl=es-la",
        },
        query: "Cafe Tejas, calle 13 poniente, Santa Ana",
        coordinates: "13.981748859112143, -89.55369339814943",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 201 directa hacia Santa Ana. Al llegar a la terminal en Santa Ana, toma un microbús urbano o un taxi que te lleve directamente hacia la 13 Calle Poniente y Avenida Independencia.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 210 hacia Santa Ana. Una vez en la terminal Francisco Lara Pineda, trasládate en transporte local hacia la zona de la 13 Calle Poniente.`,
        images: [
          "OCCIDENTE/Cafe Tejas/imagen1.jpg",
          "OCCIDENTE/Cafe Tejas/imagen2.jpg",
          "OCCIDENTE/Cafe Tejas/imagen3.jpg",
          "OCCIDENTE/Cafe Tejas/imagen4.jpg",
        ],
      },

      {
        name: "Casa Margarita - Cocina Tradicional Santaneca",
        description:
          "Comedor familiar con platillos típicos de Santa Ana, como sopa de gallina india, tamales y almuerzos caseros.",
        note: "Redes: Facebook e Instagram no disponibles, pero puedes buscar reseñas en Google Maps",
        query: "Casa Margarita - Cocina Tradicional Santaneca, Santa Ana",
        coordinates: "13.981789015190174, -89.56384058465683",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 201 directa hacia Santa Ana. Al bajar en la terminal de Santa Ana, toma un microbús urbano o un taxi que te acerque a la zona de la 23 Calle Poniente.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 210 hacia Santa Ana. Una vez en la terminal Francisco Lara Pineda, toma el transporte local hacia el sector de la 23 Calle Poniente donde se ubica el restaurante.`,
        images: [
          "OCCIDENTE/Casa Margarita/imagen1.jpg",
          "OCCIDENTE/Casa Margarita/imagen2.jpg",
          "OCCIDENTE/Casa Margarita/imagen3.jpg",
        ],
      },

      {
        name: "Artisant",
        description:
          "Un lugar con un ambiente hogareño y acogedor, en el cual hay una buena variedad de platillos tipicos, asados, sopas y hamburguesas.",
        social: {
          facebook: "https://www.facebook.com/ArtisantSantaana",
          instagram: "https://www.instagram.com/artisantsantaana/?hl=es-la",
        },
        query: "Artisant, Santa Ana",
        coordinates: "13.994982449700828, -89.5555596184765",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 201 directa hacia Santa Ana. Al llegar a la terminal en Santa Ana, toma un microbús urbano o un taxi que te lleve directo hacia el centro histórico, específicamente por los alrededores del Callejón Sur de la Catedral.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 210 hacia Santa Ana. Una vez en la terminal Francisco Lara Pineda, trasládate en transporte local o camina hacia el centro de la ciudad para llegar a la zona de la catedral.`,
        images: [
          "OCCIDENTE/Artisant/imagen1.jpg",
          "OCCIDENTE/Artisant/imagen2.jpg",
          "OCCIDENTE/Artisant/imagen3.jpg",
          "OCCIDENTE/Artisant/imagen4.jpg",
        ],
      },

      {
        name: "La Finca - Tipicos y Asados",
        description:
          "Hermosa hacienda con un ambiente familiar y acogedor, donde se pueden disfrutar de platillos típicos salvadoreños y asados a la parrilla.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=61591595156692",
          instagram: "https://www.instagram.com/lafincatipicos.sv/?hl=es-la",
        },
        query: "La Finca - Tipicos y Asados, Sonsonate",
        coordinates: "13.847769193629075, -89.6761823338216",
        busDirections: `Opción 1: Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 hacia Sonsonate. Pídele al motorista que te baje sobre la carretera en el tramo entre Nahuizalco y Sonsonate (cerca de la Cancha Altamira / Cantón Los Arenales), justo frente al restaurante.<br>
                        Opción 2: Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 216 hacia Sonsonate. Al llegar a Sonsonate, transborda a un microbús o bus local que suba hacia Nahuizalco por la carretera principal y pídele parada en la zona de Los Arenales.<br>
                        Opción 3: Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 249 con dirección a Sonsonate (pasando por Apaneca, Juayúa y Nahuizalco). Pídele al motorista que te baje sobre la carretera antes de llegar a Sonsonate, específicamente en el sector del restaurante.`,
        images: [
          "OCCIDENTE/La Finca - Tipicos y Asados/imagen1.jpg",
          "OCCIDENTE/La Finca - Tipicos y Asados/imagen2.jpg",
          "OCCIDENTE/La Finca - Tipicos y Asados/imagen3.jpg",
          "OCCIDENTE/La Finca - Tipicos y Asados/imagen4.jpg",
        ],
      },

      {
        name: "Restaurante Finca Santa Teresa",
        description:
          "Restaurante con una decoracion rustica, areas de juegos para niños y un menu variado de comida tipica salvadoreña, asados y desaunos. Otorga un ambiente familiar y acojedor para el publico.",
        social: {
          facebook: "https://www.facebook.com/FincaStaTeresa",
          instagram: "https://www.instagram.com/finca_santa_teresa/?hl=es-la",
        },
        query: "Restaurante Finca Santa Teresa, Sonsonate",
        coordinates: "13.71222062498682, -89.72433369149509",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 directa hacia Sonsonate. Al llegar a la terminal de Sonsonate, toma un transporte local (como un bus hacia Juayúa/Ahuachapán por la ruta vieja o un taxi/tuk-tuk) que te lleve hacia la zona rural o desvío correspondiente de la finca.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 216 hacia Sonsonate. Una vez en Sonsonate, transborda a un microbús o transporte local que se dirija hacia la zona norte del departamento.<br>
                        <b>Opción 3:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 249 con dirección a Sonsonate (pasando por Apaneca y Juayúa). Pídele al motorista que te baje en el desvío o tramo de carretera más cercano que conecta con la finca.`,
        images: [
          "OCCIDENTE/Restaurante Finca Santa Teresa/imagen1.jpg",
          "OCCIDENTE/Restaurante Finca Santa Teresa/imagen2.jpg",
          "OCCIDENTE/Restaurante Finca Santa Teresa/imagen3.jpg",
          "OCCIDENTE/Restaurante Finca Santa Teresa/imagen4.jpg",
        ],
      },

      {
        name: "El Paraisal",
        description:
          "Restaurante acogedor,con una decoracion sencilla y un menu variado de diferentes comidas tipicas salvadoreñas.",
        social: {
          facebook: "https://www.facebook.com/Restaurante.ElParaisal",
        },
        query: "El Paraisal, Sonsonate",
        coordinates: "13.739620992345944, -89.70095540498771",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 hacia Sonsonate. Al llegar a Sonsonate, puedes tomar un transporte local (como un bus o microbús de la zona) que te lleve sobre la carretera hacia los destinos del norte o la ruta hacia Juayúa/Ahuachapán, y pedir parada en el sector de El Paraisal.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 216 hacia Sonsonate. Una vez en la terminal de Sonsonate, transborda a un bus o microbús local que recorra la carretera principal hacia el norte del departamento.<br>
                        <b>Opción 3:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 249 con dirección a Sonsonate (pasando por Apaneca y Juayúa). Pídele al motorista que te indique o te baje sobre la carretera en la zona del restaurante.`,

        images: [
          "OCCIDENTE/El Paraisal/imagen1.jpg",
          "OCCIDENTE/El Paraisal/imagen2.jpg",
          "OCCIDENTE/El Paraisal/imagen3.jpg",
        ],
      },
    ],
  },
  central: {
    description:
      "El corazón de la gastronomía salvadoreña. Disfruta de pupusas recién hechas, tamales y comida casera en mercados, plazas y rincones llenos de tradición.",
    places: [
      {
        name: "Kuskatan",
        description:
          "Restaurante con alta calidad el cual es caracterizado por sus pupusas de maíz y de arroz, así como otros platillos  como pasteles, nuegados y riguas.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100063705752617",
          instagram: "https://www.instagram.com/kuskatans/?hl=es-la",
        },
        coordinates: "13.697249023852292, -89.19003092033101",
        query: "Kuskatan,Plaza Libertad, San Salvador",
        busDirections: `<b>Opción 1:</b> En San Salvador (Desde otras zonas de la capital): Toma cualquier ruta de bus o microbús que circule por el Centro Histórico de San Salvador (como las que pasan por la Calle Arce o la 4ª Calle Poniente) y bájate en las inmediaciones de la Plaza Libertad; el local se encuentra sobre la plaza.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 201 hacia San Salvador (Terminal de Occidente). Desde allí, aborda un microbús urbano o bus que te lleve directo al Centro Histórico hasta la zona de la Plaza Libertad.<br>
                        <b>Opción 3:</b> Desde Sonsonate: Dirígete a la terminal de Sonsonate y toma la Ruta 205 hacia San Salvador (Terminal de Occidente). Al llegar, transborda a un microbús o bus del transporte colectivo urbano que se dirija hacia el centro de la ciudad.`,
        images: [
          "CENTRO/Kuskatan/imagen1.jpg",
          "CENTRO/Kuskatan/imagen2.jpg",
          "CENTRO/Kuskatan/imagen3.jpg",
        ],
      },

      {
        name: "Tipicos El Mirador",
        description:
          "Restaurante de comida típica salvadoreña y pupusas con vistas panorámicas privilegiadas hacia la capital, ideal para tardes de café o cenar al aire libre.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100063862963536r",
          instagram: "https://www.instagram.com/tipicoselmirador/?hl=es-la",
        },
        coordinates: "13.648344107939677, -89.2186744049892",
        query: "Tipicos El Mirador,Calle antigua a Huizucar, San Salvador",
        busDirections: `<b>Opción 1:</b> En San Salvador (Desde el centro o terminales): Dirígete al centro de San Salvador (cerca del Parque Cuscatlán o la zona del Mercado Central) y toma la Ruta 12 o la Ruta 2, que suben hacia los Planes de Renderos. Pídele al motorista que te baje sobre la Calle Antigua a Huizúcar en el sector del restaurante.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 201 hacia la Terminal de Occidente en San Salvador. Desde ahí, aborda un bus o microbús hacia el centro y transborda a una ruta que suba a los Planes de Renderos.<br>
                        <b>Opción 3:</b> Desde Sonsonate: Dirígete a la terminal de Sonsonate y toma la Ruta 205 hacia la Terminal de Occidente en San Salvador. Al llegar, toma el transporte colectivo hacia el centro de la capital y transborda a la ruta que te lleve hacia la zona de los Planes de Renderos y la calle a Huizúcar.`,
        images: [
          "CENTRO/Tipicos El Mirador/imagen1.jpg",
          "CENTRO/Tipicos El Mirador/imagen2.jpg",
          "CENTRO/Tipicos El Mirador/imagen3.jpg",
          "CENTRO/Tipicos El Mirador/imagen4.jpg",
        ],
      },

      {
        name: "Tomadulu",
        description:
          "Un espacio gastronómico y bar de playa con ambiente relajado sobre la costa del Pacífico, perfecto para disfrutar de mariscos, bebidas frías y la brisa marina.",
        social: {
          facebook: "https://www.facebook.com/Tomadulu",
          instagram: "https://www.instagram.com/tomadulusv/?hl=es-la",
        },
        coordinates: "13.493406604160059, -89.42521283197776",
        query: "Tomadulu, La Libertad",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete al Terminal de Buses de Oriente (en el Boulevard del Ejército). Toma la Ruta 125 con dirección a Chalatenango o Nueva Concepción. Pídele al motorista que te baje en el desvío hacia El Paraíso / Embalse Cerrón Grande o en la zona cercana al Cantón Santa Bárbara sobre la carretera Longitudinal del Norte, donde podrás abordar un transporte local o mototaxi hacia el restaurante.<br>
                        <b>Opción 2:</b> Desde Sonsonate: Dirígete a la terminal de Sonsonate y toma la Ruta 205 hacia la Terminal de Occidente en San Salvador. Desde allí, cruza hacia la zona del Boulevard del Ejército (Terminal de Oriente) para abordar la Ruta 125 hacia Chalatenango y bájate en el desvío rumbo a El Paraíso.`,
        images: [
          "CENTRO/Tomadulu/imagen1.jpg",
          "CENTRO/Tomadulu/imagen2.jpg",
          "CENTRO/Tomadulu/imagen3.jpg",
          "CENTRO/Tomadulu/imagen4.jpg",
          "CENTRO/Tomadulu/imagen5.jpg",
        ],
      },

      {
        name: "La Cocina de de Marina",
        description:
          "Restaurante campestre a orillas o cerca del embalse Cerrón Grande, famoso por sus pescados fritos, mariscos frescos y comida casera.",
        social: {
          facebook:
            "https://www.facebook.com/La-Cocina-de-Marina-100063862963536",
          instagram: "https://www.instagram.com/lacocinademarina/?hl=es-la",
        },
        coordinates: "14.08061219563114, -89.10250241107686",
        query: "La Cocina de Marina, Chalatenango, Cantón Santa Barbara",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete al Terminal de Buses de Oriente (en el Boulevard del Ejército). Toma la Ruta 125 con dirección a Chalatenango o Nueva Concepción. Pídele al motorista que te baje en el desvío hacia El Paraíso / Embalse Cerrón Grande o en la zona cercana al Cantón Santa Bárbara sobre la carretera Longitudinal del Norte, donde podrás abordar un transporte local o mototaxi hacia el restaurante.<br>
                        <b>Opción 2:</b> Desde Sonsonate: Dirígete a la terminal de Sonsonate y toma la Ruta 205 hacia la Terminal de Occidente en San Salvador. Desde allí, cruza hacia la zona del Boulevard del Ejército (Terminal de Oriente) para abordar la Ruta 125 hacia Chalatenango y bájate en el desvío rumbo a El Paraíso.`,
        images: [
          "CENTRO/La Cocina de Marina/imagen1.jpg",
          "CENTRO/La Cocina de Marina/imagen2.jpg",
          "CENTRO/La Cocina de Marina/imagen3.jpg",
          "CENTRO/La Cocina de Marina/imagen4.jpg",
        ],
      },

      {
        name: "Rancho Bambu",
        description:
          "Un destino turístico y restaurante campestre rodeado de naturaleza y bambuzales, ideal para disfrutar de platillos locales y un día de descanso.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100075750405272",
        },
        coordinates: "14.035411999979484, -88.91861349333927",
        query: "Rancho Bambu, Chalatenango",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma la Ruta 125 con dirección a Chalatenango. Al llegar a la ciudad de Chalatenango, toma un transporte local o mototaxi que te acerque directamente al establecimiento.<br>
                        <b>Opción 2:</b> Desde Nueva Concepción (Chalatenango): Si te encuentras en el norte del departamento, dirígete a la terminal o zona céntrica de Nueva Concepción y toma un bus o microbús de la Ruta 125 (o rutas locales que conectan hacia la cabecera departamental de Chalatenango) y bájate en el sector de Rancho Bambú.`,
        images: [
          "CENTRO/Rancho Bambu/imagen1.jpg",
          "CENTRO/Rancho Bambu/imagen2.jpg",
          "CENTRO/Rancho Bambu/imagen3.jpg",
          "CENTRO/Rancho Bambu/imagen4.jpg",
        ],
      },

      {
        name: "La Teca de Don Napo",
        description:
          "Restaurante especializado en mariscos frescos, pescados preparados al gusto y platillos tradicionales en un ambiente familiar y ameno.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100054241580756",
        },
        coordinates: "14.033022485996144, -88.96244607301392",
        query: "La Teca de Don Napo - Restaurante de maricos, Ahuachapan",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma la Ruta 125 o buses locales que se dirijan hacia la zona norte de Chalatenango. Pídele al motorista que te baje en el desvío o tramo cercano al Cantón San José, donde podrás tomar un transporte local o mototaxi hacia el restaurante.<br>
                        <b>Opción 2:</b> Desde Nueva Concepción: Dirígete a la zona céntrica o terminal y toma un bus o microbús que conecte hacia el sector de Chalatenango / Cantón San José, indicándole al conductor tu destino.  `,
        images: [
          "CENTRO/La Teca de Don Napo/imagen1.jpg",
          "CENTRO/La Teca de Don Napo/imagen2.jpg",
          "CENTRO/La Teca de Don Napo/imagen3.jpg",
          "CENTRO/La Teca de Don Napo/imagen4.jpg",
        ],
      },

      {
        name: "La Cuadra",
        description: "Un ameno restaurante y espacio al aire libre famoso por sus carnes asadas, platillos criollos y ambiente rústico campestre.",
        social: {
          facebook: "https://www.facebook.com/lacuadra.2021",
        },
        coordinates: "14.081891786756202, -89.02767065582177",
        query: "La Cuadra, Chalatenango, Santa Rita",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma la Ruta 125 con dirección a Chalatenango. Pídele al motorista que te baje sobre la carretera Troncal del Norte a la altura del municipio de Santa Rita (o en el desvío hacia El Tronconal), desde donde puedes tomar un mototaxi o transporte local directo al restaurante.<br>
                        <b>Opción 2:</b> Desde Nueva Concepción: Dirígete a la zona de abordaje y toma un bus o microbús que circule por la Carretera Troncal del Norte con dirección hacia el sur (hacia San Salvador / Chalatenango) y bájate en la zona de Santa Rita para conectar con el transporte local.`,
        images: [
          "CENTRO/La Cuadra/imagen1.jpg",
          "CENTRO/La Cuadra/imagen2.jpg",
          "CENTRO/La Cuadra/imagen3.jpg",
          "CENTRO/La Cuadra/imagen4.jpg",
          "CENTRO/La Cuadra/imagen5.jpg"
        ],
      },

      {
        name: "El Rincon de Annie",
        description: "Un acogedor rincón gastronómico y cafetería que combina platillos confortables, desayunos y postres artesanales en un ambiente tranquilo y familiar.",
        social: {
          facebook:"https://www.facebook.com/elrincondeannie05",
          instagram: "https://www.instagram.com/rincondannie/?hl=es-la",
        },
        coordinates: "13.648757963052237, -89.2659548",
        query: "El Rinco de Annie, Nuevo Cuscatlan",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la zona del Parque Infantil o al Bolevar de los Próceres / Carretera al Puerto de La Libertad para tomar un bus o microbús que conecte hacia Antiguo Cuscatlán o Nuevo Cuscatlán (como los microbuses de la Ruta 42 o rutas locales que suben desde el centro comercial Las Cascadas / Merliot). Una vez en el centro de Nuevo Cuscatlán, el local está ubicado cerca de la 3ª Calle Poniente.<br>
                        <b>Opción 2:</b> Desde Santa Tecla (La Libertad): Dirígete al centro de Santa Tecla (cerca del mercado municipal o parques principales) y toma los microbuses o buses de la Ruta 42-A o microbuses locales que realizan el viaje directo hacia el casco urbano de Nuevo Cuscatlán.`,
        images: [
          "CENTRO/El Rincon de Annie/imagen1.jpg",
          "CENTRO/El Rincon de Annie/imagen2.jpg",
          "CENTRO/El Rincon de Annie/imagen3.jpg",
          "CENTRO/El Rincon de Annie/imagen4.jpg",
          "CENTRO/El Rincon de Annie/imagen5.jpg",
        ],

      },

      {
        name: "El Comal Santa Elena",
        description: "Especializado en platillos típicos salvadoreños, pupusas y cocina tradicional servidos con el toque hogareño y en un entorno moderno.",
        social: {
          facebook: "https://www.facebook.com/elcomaltipicos",
          instagram: "https://www.instagram.com/elcomalsantaelena/?hl=es-la",
        },
        coordinates: "13.652500675008119, -89.26378858964647",
        query: "El comal Santa Elena, Nuevo Cuscatlan",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la zona de Santa Elena / redondel de las Naciones Unidas o toma un bus/microbús hacia Antiguo Cuscatlán o Santa Tecla (como la Ruta 42 o rutas que conectan con el bulevar Orden de Malta). Desde allí, puedes tomar un transporte local, microbús o taxi que transite hacia el Bulevar Cuscatlán en Plaza Paradiso (Nuevo Cuscatlán).<br>
                        <b>Opción 2:</b> Desde Santa Tecla (La Libertad): Dirígete al centro o a las zonas de conexión comercial (como redondel El Platillo o Multiplaza) y toma un microbús o bus que circule hacia la zona de Santa Elena y Nuevo Cuscatlán.`,
        images: [
          "CENTRO/El Comal Santa Elena/imagen1.jpg",
          "CENTRO/El Comal Santa Elena/imagen2.jpg",
          "CENTRO/El Comal Santa Elena/imagen3.jpg"
        ],
      },
      
      {
        name: "Casa Castilla",
        description: "Un espacio acogedor que destaca por su gastronomía estilo gourmet/casera, ideal para almuerzos ejecutivos, reuniones o eventos privados.",
        social: {
          facebook: "https://www.facebook.com/ProductosReinita/?locale=es_LA",
          instagram: "https://www.instagram.com/casacastilla.sv/?hl=es-la"
        },
        coordinates: "13.672000133127405, -89.23897990498878",
        query: "Casa Castilla, Cuscatlan",
        busDirections: `<b>Opción 1:</b> En San Salvador (Desde el centro o zonas aledañas): Toma cualquier bus o microbús urbano que transite cerca de la zona centro o los bulevares principales (como rutas que conectan hacia las cercanías de la Calle Cuscatlán). Puedes bajarte a pocos metros y caminar directamente al establecimiento.<br>
                        <b>Opción 2:</b> Desde Santa Tecla / Antiguo Cuscatlán: Dirígete a la Carretera Panamericana o vías principales que conectan con San Salvador, toma un autobús interurbano hacia la capital y bájate en el sector céntrico adecuado para transbordar a un microbús local que te acerque a la Calle Cuscatlán Oriente.`,
        images:[
          "CENTRO/Casa Castilla/imagen1.jpg",
          "CENTRO/Casa Castilla/imagen2.jpg",
          "CENTRO/Casa Castilla/imagen3.jpg",
          "CENTRO/Casa Castilla/imagen4.jpg"
        ]
      },

      {
        name: "Moris Rooftop",
        description: "Exclusivo bar y restaurante en la azotea del Edificio Veiga que ofrece coctelería de autor y una impresionante vista de 360° a los edificios icónicos del centro.",
        social: {
          facebook: "https://www.facebook.com/MorisRooftop",
          instagram: "https://www.instagram.com/morisrooftop/?hl=es-la",
        },
        coordinates: "13.696618963036512, -89.19076341534262",
        query: "Moris Rooftop, San Salvador, Centro Histórico",
        busDirections: `<b>Opción 1:</b> En San Salvador (Desde zonas residenciales o terminales): Toma cualquier bus o microbús urbano que cruce por el Centro Histórico de San Salvador (como las rutas que transitan cerca de la Catedral Metropolitana, el Teatro Nacional o la Plaza Cívica). Bájate en las inmediaciones del Edificio Veiga o camina un par de cuadras hacia la 6ª Calle Oriente y 2ª Avenida Sur.<br>
                        <b>Opción 2:</b> Desde Santa Tecla o Antiguo Cuscatlán: Dirígete a la parada principal sobre la Carretera Panamericana o el bulevar principal y toma un autobús o microbús (como la Ruta 42 o la Ruta 101) que te lleve directo al centro de San Salvador. Bájate cerca de la zona comercial del centro histórico y camina hacia el Edificio Veiga para ingresar al rooftop.`,
        images: [
          "CENTRO/Moris Rooftop/imagen1.jpg",
          "CENTRO/Moris Rooftop/imagen2.jpg",
          "CENTRO/Moris Rooftop/imagen3.jpg",
          "CENTRO/Moris Rooftop/imagen4.jpg",
         ]
      },

      {
        name: "El Atico",
        description: "Restaurante y café de montaña rodeado de vegetación, caracterizado por su clima fresco, miradores y un menú ideal para compartir al atardecer.",
        social: {
          facebook: "https://www.facebook.com/elaticovolcan",
          instagram: "https://www.instagram.com/elaticoesv/?hl=es-la",
        },
        coordinates: "13.696618963036512, -89.19076341534262",
        query: "El Atico, San Salvador, Boqueron, Volcan",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la zona de la Plaza El Salvador del Mundo o toma un bus o microbús que te lleve hacia Santa Tecla (como la Ruta 42 o Ruta 101). Desde Santa Tecla, puedes tomar transporte local, un microbús hacia el Boquerón o un servicio de taxi/transporte compartido que sube directamente por la Calle al Boquerón hasta la altura del kilómetro 18.5 (Plaza Boquerón).<br>
                        <b>Opción 2:</b> Desde Santa Tecla (La Libertad): Dirígete al parque central de Santa Tecla o a la zona norte de la ciudad, desde donde inician los recorridos hacia el volcán. Toma un transporte local autorizado o un microbús que suba por la ruta turística del Boquerón y pídele al conductor que te baje en el sector de la Plaza Boquerón.`,
        images: [
          "CENTRO/El Atico/imagen1.jpg",  
          "CENTRO/El Atico/imagen2.jpg",
          "CENTRO/El Atico/imagen3.jpg",
          "CENTRO/El Atico/imagen4.jpg",
          "CENTRO/El Atico/imagen5.jpg"
        ]
      },

      {
        name: "La Casona Cafe y Tipicos",
        description: "Pintoresco café sobre la Carretera Panorámica con hermosa vista hacia el Lago de Ilopango, famoso por sus antojitos típicos y café de altura.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100063968706730",
          instagram: "https://www.instagram.com/lacasona_cafeytipicos/?hl=es-la",
        },
        coordinates: "13.617403549576176, -89.04923375767129",
        query: "La Casona Cafe y Tipicos, San Francisco, Chinameca",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la zona del Parque Infantil o al sector oriental de la capital para tomar un autobús o microbús que circule hacia el oriente (por la Carretera Panamericana o con rumbo hacia Cojutepeque / San Vicente), o bien conecta hacia los buses que suben hacia la Carretera Panorámica (como los que van hacia San Francisco Chinameca). Pídele al motorista que te baje exactamente en el kilómetro 25 sobre la Panorámica.<br>
                        <b>Opción 2:</b> Desde Ilopango / Santo Tomás: Toma el transporte local que conecta la zona suroriental con la Carretera Panorámica, la cual atraviesa directamente San Francisco Chinameca y pasa frente al sector del restaurante.`,
        images: [
          "CENTRO/La Casona Cafe y Tipicos/imagen1.jpg",  
          "CENTRO/La Casona Cafe y Tipicos/imagen2.jpg",
          "CENTRO/La Casona Cafe y Tipicos/imagen3.jpg",
          "CENTRO/La Casona Cafe y Tipicos/imagen4.jpg",
          "CENTRO/La Casona Cafe y Tipicos/imagen5.jpg"
        ]
      },

      {
        name: "Restaurante y mirador los llanitos",
        description: "Mirador y restaurante familiar que ofrece vistas espectaculares al lago, aire fresco y una amplia variedad de carnes, mariscos y platillos típicos.",
        social: { 
          facebook: "https://www.facebook.com/Restauranteymiradorlosllanitos/?locale=es_LA",  
          instagram: "https://www.instagram.com/mirador_los_llanitos/?hl=es",
        },
        coordinates: "13.62223681902225, -89.05642802513651",
        query: "Restaurante y mirador los llanitos, San Francisco, Chinameca",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la zona del Parque Infantil o al sector oriental de la capital para tomar un autobús o microbús que circule hacia el oriente (por la Carretera Panamericana o con rumbo hacia Cojutepeque / San Vicente), o bien conecta hacia los buses que suben hacia la Carretera Panorámica (como los que van hacia San Francisco Chinameca). Pídele al motorista que te baje exactamente en el kilómetro 25 sobre la Panorámica.<br>
                        <b>Opción 2:</b> Desde Ilopango / Santo Tomás: Toma el transporte local que conecta la zona suroriental con la Carretera Panorámica, la cual atraviesa directamente San Francisco Chinameca y pasa frente al sector del restaurante.`,
        images: [
          "CENTRO/Restaurante y mirador los llanitos/imagen1.jpg",
          "CENTRO/Restaurante y mirador los llanitos/imagen2.jpg",
          "CENTRO/Restaurante y mirador los llanitos/imagen3.jpg",
          "CENTRO/Restaurante y mirador los llanitos/imagen4.jpg",
          "CENTRO/Restaurante y mirador los llanitos/imagen5.jpg"
        ]
      },

      {
        name: "La Bodeguita del Cerdito",
        description:"Restaurante con una hermosa vista panoramica de la ciudad, menu variado de comida tipica salvadoreña y bebidas.",
        social: {
          facebook: "https://www.facebook.com/bodeguitadelcerdito.ilobasco/",
          instagram: "https://www.instagram.com/labodeguita.ilobasco/",
        },
        coordinates: "13.617403549576176, -89.04923375767129",
        query: "La Bodeguita del Cerdito, San Francisco, Chinameca",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la zona del Parque Infantil o al oriente de la capital para tomar un autobús o microbús que se dirija hacia la Carretera Panorámica o rumbo a San Francisco Chinameca (pasando por zonas como Santo Tomás o Santiago Nonualco según la ruta). Pídele al motorista que te baje específicamente en el kilómetro 24, frente al acceso del mirador y restaurante.<br>
                        <b>Opción 2:</b> Desde Santo Tomás / Ilopango: Toma el transporte colectivo que conecta la zona sur del departamento con la Carretera Panorámica, la cual cruza directamente por San Francisco Chinameca hasta la zona del Caserío La Montaña.`,
        images: [
          "CENTRO/La Bodeguita del Cerdito/imagen1.jpg",
          "CENTRO/La Bodeguita del Cerdito/imagen2.jpg",
          "CENTRO/La Bodeguita del Cerdito/imagen3.jpg",     
        ] 
      },
    ],
  },
  oriente: {
    description:
      "Golfo, playas y montañas. Mariscos frescos, sopas tradicionales y fiestas que duran días.",
    places: [
      {
        name: "Finca San Rafael",
        description:
          "Una pintoresca finca cafetalera que combina naturaleza, senderos, clima fresco de montaña y un café/restaurante con vistas hermosas.",
        social: {
          facebook: "https://www.facebook.com/fincasanrafaelelsalvador/?locale=es_LA",
          instagram: "https://www.instagram.com/fincasanrafael9/?hl=es",
        },
        coordinates: "13.51151279440854, -88.48970442698605",
        query: "Finca San Rafael, Usulután, Alegría",
        busDirections:`<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús de la Ruta 302 con dirección a Usulután o Berlín. Pídele al motorista que te baje en el Desvío de Alegría (sobre la Carretera del Litoral o Panamericana según la vía de la ruta). Desde el desvío, puedes tomar un microbús o transporte local que sube directamente al casco urbano de Alegría y hacia la zona cafetalera de la finca.<br>
                       <b>Opción 2:</b> Desde San Miguel: Dirígete a la terminal de buses de San Miguel y toma un autobús que se dirija hacia el poniente (hacia Usulután o Santiago de María), bajándote en el Desvío de Alegría. Desde ahí, aborda el transporte local que asciende hacia el municipio de Alegría y el sector de la finca.`,
        images: [
          "ORIENTE/Finca San Rafael/imagen1.jpg",
          "ORIENTE/Finca San Rafael/imagen2.jpg",
          "ORIENTE/Finca San Rafael/imagen3.jpg",
          "ORIENTE/Finca San Rafael/imagen4.jpg",
        ],
      },
      {
        name: "Restaurante TierraMar",
        description:
          "Ubicado en pleno corazón del pueblo frente al parque central, ofrece una variada carta de gastronomía local e internacional en un ambiente cálido.",
        social: {
          facebook: "https://www.facebook.com/restaurantetierramar/?locale=es_LA",
          instagram: "https://www.instagram.com/tierramarsv/?hl=en",
        },
        coordinates: "13.340675484848955, -88.47710668280591",
        query: "Restaurante TierraMar, Usulután, Alegría",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús de la Ruta 302 con dirección a Usulután o Berlín. Pídele al motorista que te baje en el Desvío de Alegría (sobre la carretera principal). Desde ese desvío, aborda un microbús o transporte local que asciende directamente hacia el casco urbano de Alegría, el cual te dejará a pocos pasos del parque central y del restaurante.<br>
                        <b>Opción 2:</b> Desde San Miguel: Dirígete a la terminal de buses de San Miguel y toma un autobús que circule hacia el poniente (con rumbo a Usulután o Santiago de María), bajándote en el Desvío de Alegría. Desde ahí, toma el transporte local que sube hacia el pueblo de Alegría.`,
        images: [
          "ORIENTE/Restaurante TierraMar/imagen1.jpg",
          "ORIENTE/Restaurante TierraMar/imagen2.jpg",
          "ORIENTE/Restaurante TierraMar/imagen3.jpg",
          "ORIENTE/Restaurante TierraMar/imagen4.jpg",
        ],
      },
      {
        name: "Torolomo",
        description:
          "Reconocido restaurante de carnes a la parrilla, cortes finos y gastronomía criolla en una ubicación tradicional de la ciudad oriental.",
        social: {
          facebook: "https://www.facebook.com/torolomoSV",
          instagram: "https://www.instagram.com/torolomosv/?hl=en"
        },
        coordinates: "13.484687244106246, -88.18090264232869",
        query: "Torolomo, San Miguel, Barrio San Felipe",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús directo de la Ruta 301 con dirección a San Miguel. Al llegar a la terminal de San Miguel, toma un microbús o bus urbano local que circule hacia la zona del Barrio San Felipe, o un taxi que te lleve directamente al establecimiento.<br>
                        <b>Opción 2:</b> Desde Usulután: Dirígete a la terminal de buses de Usulután y toma un autobús que se dirija hacia el oriente (San Miguel). Al arribar a la terminal migueleña, aborda el transporte urbano local o un mototaxi/taxi que conecte con el Barrio San Felipe.`,
        images: [
          "ORIENTE/Torolomo/imagen1.jpg",
          "ORIENTE/Torolomo/imagen2.jpg",
          "ORIENTE/Torolomo/imagen3.jpg",
          "ORIENTE/Torolomo/imagen4.jpg",
        ],
      },
      {
        name: "El Barrilito",
        description: "Un punto de encuentro clásico en el centro de San Miguel para disfrutar de bebidas, botanas, mariscos y comida popular entre amigos.",
        social: {
          facebook: "https://www.facebook.com/elbarrilito.sv",
          instagram: "https://www.instagram.com/elbarrilito.sv/?hl=en"
        },
        coordinates: "13.488533883460907, -88.18022533232869",
        query: "El Barrilito, San Miguel",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús directo de la Ruta 301 hacia San Miguel. Al llegar a la terminal migueleña, toma un microbús urbano, un taxi o camina unas pocas cuadras hacia el sector céntrico de la 5ª Calle Poniente.<br>
                        <b>Opción 2:</b> Desde Usulután o municipios cercanos: Dirígete a la terminal de buses de tu localidad y toma un autobús que viaje hacia la ciudad de San Miguel. Una vez en la terminal de buses de San Miguel, aborda el transporte urbano local que te acerque directamente al centro y a la zona de la 5ª Calle Poniente`,
        images: [
          "ORIENTE/El Barrilito/imagen1.jpg",
          "ORIENTE/El Barrilito/imagen2.jpg",
          "ORIENTE/El Barrilito/imagen3.jpg",
          "ORIENTE/El Barrilito/imagen4.jpg",
        ],
      },
      {
        name: "Cabañas y Mirador El Pericón",
        description:
          "Un destino ecológico y de montaña en la zona alta de Morazán, perfecto para disfrutar de vistas impresionantes, clima helado y comida rústica.",
        social: {
          facebook: "https://www.facebook.com/cabanasymiradorelpericon",
          instagram: "https://www.instagram.com/cabanasymiradorelpericon/?hl=en"
        },
        coordinates: "13.952369684461946, -88.13204784024003",
        query: "Cabañas y Mirador El Pericón, Morazán, Arambala",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús de la Ruta 304 con dirección a San Francisco Gotera (Morazán). Al llegar a San Francisco Gotera, trasládate a la terminal local y toma un autobús o microbús que viaje hacia el municipio norteño de Arambala. Desde el casco urbano de Arambala, puedes tomar un transporte local, mototaxi o vehículo 4x4 que suba directamente hacia el sector del mirador y las cabañas.<br>
                        <b>Opción 2:</b> Desde San Miguel: Dirígete a la terminal de buses de San Miguel y toma un autobús directo hacia San Francisco Gotera. Una vez en Gotera, aborda la conexión en autobús o microbús hacia Arambala y completa el trayecto final con transporte local de la zona montañosa.`,
        images: [
          "ORIENTE/Cabanas y Mirador El Pericon/imagen1.jpg",
          "ORIENTE/Cabanas y Mirador El Pericon/imagen2.jpg",
          "ORIENTE/Cabanas y Mirador El Pericon/imagen3.jpg",
          "ORIENTE/Cabanas y Mirador El Pericon/imagen4.jpg",
        ],
      },
      {
        name: "Restaurante La Villa San Francisco",
        description:
          "Un restaurante acogedor en la cabecera departamental, conocido por su atención cercana y menú variado de cocina nacional.",
        social: {
          facebook: "https://www.facebook.com/restaurantelavillasanfrancisco",
        },
        coordinates: "13.696339839515732, -88.10575027116434",
        query: "Restaurante La Villa San Francisco, Morazán, San Francisco Gotera",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús de la Ruta 304 directo hacia San Francisco Gotera. Una vez que llegues a la terminal de Gotera, puedes caminar unas pocas cuadras o tomar un mototaxi o taxi local que te lleve directamente sobre la Calle Joaquín Rodezno.<br>
                        <b>Opción 2:</b> Desde San Miguel: Dirígete a la terminal de buses de San Miguel y toma un autobús o microbús que viaje hacia San Francisco Gotera. Al arribar a la terminal de destino en Gotera, aborda el transporte urbano local o un mototaxi para llegar al restaurante en cuestión de minutos.`,
        images: [
          "ORIENTE/Restaurante La Villa San Francisco/imagen1.jpg",
          "ORIENTE/Restaurante La Villa San Francisco/imagen2.jpg",
          "ORIENTE/Restaurante La Villa San Francisco/imagen3.jpg",
          "ORIENTE/Restaurante La Villa San Francisco/imagen4.jpg",
        ],
      },
      {
        name: "Foresto Restaurante",
        description: "Espacio gastronómico rodeado del bosque de pino de Morazán, enfocado en platillos gourmet, carnes y una experiencia de contacto directo con la naturaleza.",
        social: {
          facebook: "https://www.facebook.com/forestorestaurante",
          instagram: "https://www.instagram.com/forestorestaurante/"
        },
        coordinates: "13.700000, -88.100000",
        query: "Foresto Restaurante, Morazán, Jocoaitique",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús de la Ruta 304 con dirección a San Francisco Gotera. Al llegar a la terminal de Gotera, toma un autobús o microbús de conexión norteña que se dirija hacia el municipio de Jocoaitique. Una vez en el casco urbano, puedes abordar un transporte local o mototaxi para llegar al restaurante.<br>
                        <b>Opción 2:</b> Desde San Miguel: Dirígete a la terminal de buses de San Miguel y toma un autobús hacia San Francisco Gotera. Al arribar a Gotera, haz el transbordo correspondiente en el transporte que sube hacia los municipios del norte de Morazán, incluyendo Jocoaitique.`,
        images: [
          "ORIENTE/Foresto Restaurante/imagen1.jpg",
          "ORIENTE/Foresto Restaurante/imagen2.jpg",
          "ORIENTE/Foresto Restaurante/imagen3.jpg",
          "ORIENTE/Foresto Restaurante/imagen4.jpg",
        ],
      },
      {
        name: "Casa Blanca Restaurant La Unión",
        description: "Elegante y tradicional restaurante en La Unión que ofrece mariscos frescos, carnes y platillos típicos con excelente sazón oriental.",
        social: {
          facebook: "https://www.facebook.com/RestaurantCasaBlancaLaunion",
          instagram: "https://www.instagram.com/casablancarestaurant.sv/"
        },
        coordinates: "13.337806675503428, -87.83770899630082",
        query: "Casa Blanca Restaurant La Unión, La Unión, Barrio Concepción",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús directo de la Ruta 304 con dirección a la ciudad de La Unión. Al llegar a la terminal de La Unión, puedes tomar un mototaxi, un taxi o caminar unas pocas cuadras hacia el sector del Barrio Concepción donde se encuentra el restaurante.<br>
                        <b>Opción 2:</b> Desde San Miguel: Dirígete a la terminal de buses de San Miguel y toma un autobús o microbús que viaje hacia la ciudad de La Unión. Una vez en el destino final en La Unión, aborda un transporte local rápido (como un mototaxi) para llegar sin complicaciones al Barrio Concepción.`,
        images: [
          "ORIENTE/Casa Blanca Restaurant La Union/imagen1.jpg",
          "ORIENTE/Casa Blanca Restaurant La Union/imagen2.jpg",
          "ORIENTE/Casa Blanca Restaurant La Union/imagen3.jpg",
          "ORIENTE/Casa Blanca Restaurant La Union/imagen4.jpg",
        ],
      },
      {
        name: "Restaurante La Bahía",
        description: "Ubicado cerca de la zona costera, es el lugar ideal para degustar cócteles de conchas, pescados y mariscadas con vista al Golfo de Fonseca.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100064268101878",
          instagram: "https://www.instagram.com/explore/locations/912012172228169/restaurante-la-bahia/?hl=en"
        },
        coordinates: "13.339309950994743, -87.84174303858146",
        query: "Restaurante La Bahía, La Unión",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma un autobús directo de la Ruta 304 con dirección a la ciudad de La Unión. Al llegar a la terminal de La Unión, toma un mototaxi, un taxi o camina hacia la zona costera o céntrica del puerto para llegar al restaurante.<br>
                        <b>Opción 2:</b> Desde San Miguel: Dirígete a la terminal de buses de San Miguel y toma un autobús o microbús que viaje hacia la ciudad de La Unión. Una vez en la terminal de destino de La Unión, aborda un transporte local rápido (como un mototaxi) que te acerque directamente al establecimiento frente a la bahía.`,
        images: [
          "ORIENTE/Restaurante La Bahia/imagen1.jpg",
          "ORIENTE/Restaurante La Bahia/imagen2.jpg",
          "ORIENTE/Restaurante La Bahia/imagen3.jpg",
          "ORIENTE/Restaurante La Bahia/imagen4.jpg",
        ],
      },
    ],
  },
};

// FUNCIONES PARA LA NAVEGACIÓN Y RENDERIZADO DE CONTENIDO
const app = document.querySelector("#app");

// Funciones Para generar URLs de Google Maps y Waze
function googleMapsUrl(place) {
  if (place.coordinates) {
    return `https://www.google.com/maps/search/?api=1&query=${place.coordinates}`;
  }
  const searchQuery = place.query || place.name;
  const search = encodeURIComponent(`${searchQuery}, El Salvador`);
  return `https://www.google.com/maps/search/?api=1&query=${search}`;
}

function googleReviewsUrl(place) {
  const searchQuery = place.query || place.name;
  const search = encodeURIComponent(`${searchQuery}, El Salvador`);
  return `https://www.google.com/maps/search/?api=1&query=${search}`;
}

function wazeUrl(place) {
  if (place.coordinates) {
    return `https://waze.com/ul?ll=${place.coordinates}&navigate=yes`;
  }
  const searchQuery = place.query || place.name;
  const search = encodeURIComponent(`${searchQuery}, El Salvador`);
  return `https://waze.com/ul?q=${search}&navigate=yes`;
}

// Funciones para renderizar el contenido

function renderHome() {
  const regionLinks = Object.entries(REGIONES)
    .map(
      ([key, region]) => `
        <a href="#/${key}" class="region-card" style="border-top: 4px solid ${region.color}">
          <span class="dot" style="background-color: ${region.color}"></span>
          <div>
            <h3>${region.name}</h3>
            <p>${region.departments}</p>
          </div>
        </a>`,
    )
    .join("");

  app.innerHTML = `
    <section class="hero">
      <h1>Lugares Recomendados</h1>
      <div class="intro">
        <p class="intro-text">
          Descubre los sabores, tradiciones y rincones gastronómicos de El Salvador. 
          Desde los cafetales en las montañas hasta la frescura del marisco en la costa, 
          recorre cada región a través de su comida.
        </p>
      </div>
    </section>

    <section class="pick" aria-labelledby="region-heading">
      <img class="map" src="/img/sv.svg" alt="Mapa de El Salvador" />
      <h2 id="region-heading">Elige una región para ver sus lugares favoritos</h2>
      <div class="legend">
        ${regionLinks}
      </div>
    </section>
  `;
}

function renderGallery(place) {
  if (!place.images?.length) {
    return `
      <div class="gallery">
        <div class="gallery-main photo-placeholder" role="img" aria-label="Fotografía no disponible">
          <span>Sin fotos disponibles</span>
        </div>
      </div>`;
  }

  const images = place.images.map((path) => encodeURI(IMAGE_DIRECTORY + path));
  const thumbnails = images
    .map(
      (src, index) => `
        <button class="thumbnail" type="button" data-image="${src}" aria-label="Ver foto ${index + 1}">
          <img src="${src}" alt="" loading="lazy" />
        </button>`,
    )
    .join("");

  return `
    <div class="gallery">
      <div class="gallery-main">
        <img src="${images[0]}" alt="${place.name}" loading="lazy" />
      </div>
      <div class="thumbnails">
        ${thumbnails}
      </div>
    </div>`;
}

function renderDirections(place) {
  const busDirections = place.busDirections
    ? `
      <p class="bus">
        <strong>🚌 Cómo llegar en bus:</strong><br>
        ${place.busDirections.replace(/\n/g, "<br>")}
      </p>`
    : "";

  return `
    <section class="how" aria-label="Cómo llegar">
      <h4>Cómo llegar y Navegación</h4>
      ${busDirections}
      <div class="maps">
        <a class="map-btn gmaps" href="${googleMapsUrl(place)}" target="_blank" rel="noopener noreferrer">
          📍 Google Maps
        </a>
        <a class="map-btn waze" href="${wazeUrl(place)}" target="_blank" rel="noopener noreferrer">
          🚗 Waze
        </a>
      </div>
    </section>`;
}

function renderPlace(place) {
  const note = place.note ? `<p class="s">${place.note}</p>` : "";
  const socialHtml = renderSocialLinks(place.social);

  return `
    <article class="item">
      <div class="place-info">
        <h3>${place.name}</h3>
        <p class="d">${place.description}</p>
        ${socialHtml}
        ${note}
        <div class="reviews">
          <a href="${googleReviewsUrl(place)}" target="_blank" rel="noopener noreferrer">
            ⭐ Ver reseñas de visitantes en Google Maps
          </a>
        </div>
        ${renderDirections(place)}
      </div>
      ${renderGallery(place)}
    </article>`;
}

function renderRegion(key) {
  const region = REGIONES[key];
  const data = DATA[key];

  app.innerHTML = `
    <div class="region-container">
      <a class="back" href="#/">← Volver a regiones</a>
      <h1 class="rname">${region.name}</h1>
      <p class="rblurb">${data.description}</p>
      <h2 class="sec">Lugares recomendados</h2>
      <div class="places-list">
        ${data.places.map(renderPlace).join("")}
      </div>
    </div>
  `;
}

function renderSocialLinks(social) {
  if (!social) return "";
  let links = "";
  if (social.instagram) {
    links += `<a href="${social.instagram}" target="_blank" rel="noopener noreferrer" class="social-btn instagram">Instagram</a>`;
  }
  if (social.facebook) {
    links += `<a href="${social.facebook}" target="_blank" rel="noopener noreferrer" class="social-btn facebook">Facebook</a>`;
  }
  return links ? `<div class="social-links">${links}</div>` : "";
}

// Función para manejar la navegación basada en hash
function route() {
  const regionKey = decodeURIComponent(window.location.hash.slice(2));
  if (REGIONES[regionKey]) {
    renderRegion(regionKey);
  } else {
    renderHome();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const thumbnail = event.target.closest(".thumbnail");
  if (!thumbnail) return;

  const mainImage = thumbnail
    .closest(".gallery")
    .querySelector(".gallery-main img");
  mainImage.src = thumbnail.dataset.image;
});

window.addEventListener("hashchange", route);
route();
