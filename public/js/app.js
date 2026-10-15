const departments = [
  {
    name: "Ahuachapán", color: "#183b79", image: "/img/festival-anona.jpg",
    festival: "Festival de la Anona", place: "Parque central de San Pedro Puxtla, Ahuachapán",
    mapQuery: "Parque Central San Pedro Puxtla, Ahuachapan, El Salvador",
    date: "Mediados de agosto (Época de cosecha)",
    foods: ["Atoles y bebidas de anona", "Postres y dulces de anona", "Pupusas y recetas creativas con la fruta"],
    description: "La anona es la protagonista de esta celebración. Productores y emprendedores preparan bebidas, postres y otros alimentos a partir de esta fruta de temporada.",
    source: "https://www.elsalvador.com/turismo/sabores-de-el-salvador/festivales-culturales-el-salvador-gastronomia-turismo-comida-salvadorena/1237034/2025/", sourceLabel: "Calendario de festivales gastronómicos"
  },
  {
    name: "Santa Ana", color: "#1260a7", image: "/img/jocote-corona.jpg",
    festival: "Feria del Jocote de Corona", place: "Parque Natural Cerro Verde, Santa Ana",
    mapQuery: "Parque Natural Cerro Verde, El Salvador",
    date: "Último fin de semana de septiembre o inicios de octubre",
    foods: ["Postres y dulces de jocote", "Atoles y bebidas", "Pupusas y pizza con jocote", "Sorbetes y otras preparaciones de temporada"],
    description: "La feria celebra el jocote de corona con recetas dulces y saladas. El entorno de Cerro Verde permite complementar la visita con sus miradores y senderos habilitados.",
    source: "https://www.elsalvador.com/turismo/sabores-de-el-salvador/festivales-culturales-el-salvador-gastronomia-turismo-comida-salvadorena/1237034/2025/", sourceLabel: "Calendario de festivales gastronómicos"
  },
  {
    name: "Sonsonate", color: "#4c2375", image: "/img/juayua-gastronomia.jpg",
    festival: "Festival Gastronómico de Juayúa", place: "Parque central de Juayúa, Sonsonate",
    mapQuery: "Parque Central de Juayua, Sonsonate, El Salvador",
    date: "Todos los sábados y domingos del año (10:00 AM - 6:00 PM)",
    foods: ["Pupusas y antojitos salvadoreños", "Carnes y platillos preparados al momento", "Comida típica y opciones regionales"],
    description: "Juayúa es conocida por su feria gastronómica permanente. Cada fin de semana los puestos rodean la plaza central ofreciendo una gran variedad de carnes, mariscos y platillos típicos.",
    source: "https://elsalvador.travel/destination/juayua/es/", sourceLabel: "El Salvador Travel: Juayúa"
  },
  {
    name: "Chalatenango", color: "#16734d", image: "/img/maiz.jpg",
    festival: "Festival del Maíz", place: "Parque Central de Chalatenango, El Salvador",
    mapQuery: "Parque Central de Chalatenango, El Salvador",
    date: "Tercer o cuarto fin de semana de agosto",
    foods: ["Riguas y tortitas de elote", "Tamales y atol de elote", "Elotes locos y asados", "Pupusas y otros antojitos"],
    description: "La celebración destaca el maíz y sus preparaciones tradicionales durante la época de la primera cosecha del año.",
    source: "https://www.elsalvador.com/h-entretenimiento/h-turismo/desde-las-pupusas-hasta-la-yuca-diez-festivales-gastronomicos-para-disfrutar-en-el-salvador/1145120/2024/", sourceLabel: "Referencia sobre festivales gastronómicos"
  },
  {
    name: "La Libertad", color: "#d35416", image: "/img/naranja.jpg",
    festival: "Festival de la Naranja", place: "Parque central de San Juan Opico, La Libertad",
    mapQuery: "Parque Central de San Juan Opico, La Libertad, El Salvador",
    date: "Mediados de agosto",
    foods: ["Naranjas y jugos naturales", "Dulces, conservas y postres cítricos", "Bebidas y productos de emprendedores locales"],
    description: "La actividad celebra la cosecha frutícola de la zona opicana, destacando derivados de la naranja y productos agropecuarios locales.",
    source: "https://www.corsatur.gob.sv/agenda-de-actividades/", sourceLabel: "Agenda de actividades turísticas"
  },
  {
    name: "San Salvador", color: "#bd244b", image: "/img/jocote-guayaba.jpg",
    festival: "Festival del Jocote y la Guayaba", place: "Calle Gerardo Barrios, frente al Mercado Central, San Salvador Centro",
    mapQuery: "Calle Gerardo Barrios, San Salvador, El Salvador",
    date: "Mediados de febrero",
    foods: ["Jocote en miel", "Bebidas de jocote y guayaba", "Mermeladas, budines y postres", "Preparaciones creativas con ambas frutas"],
    description: "El festival reúne productores del centro histórico con alimentos elaborados a base de jocote Barón Rojo y guayaba de temporada.",
    source: "https://sansalvador.gob.sv/exitoso-festival-del-jocote-y-la-guayaba-2026/", sourceLabel: "Alcaldía de San Salvador Centro"
  },
  {
    name: "Cuscatlán", color: "#087c8b", image: "/img/chorizo-cojutepeque.jpg",
    festival: "Festival del Chorizo de Cojutepeque", place: "Parque Rafael Cabrera, Cojutepeque, Cuscatlán",
    mapQuery: "Parque Rafael Cabrera, Cojutepeque, El Salvador",
    date: "Primer fin de semana de diciembre",
    foods: ["Chorizos tradicionales de Cojutepeque", "Tortas de chorizo", "Tacos de chorizo", "Pupusas de chorizo"],
    description: "Cojutepeque celebra su producto gastronómico estrella reuniendo a las familias embutidoras tradicionales y emprendedores locales.",
    source: "https://www.elsalvador.com/turismo/sabores-de-el-salvador/festivales-culturales-el-salvador-gastronomia-turismo-comida-salvadorena/1237034/2025/", sourceLabel: "Información sobre festivales gastronómicos"
  },
  {
    name: "La Paz", color: "#b8860b", image: "/img/pupusa-olocuilta.jpg",
    festival: "Festival Nacional de la Pupusa", place: "Pupusódromo El Triángulo, Olocuilta, La Paz",
    mapQuery: "Pupusodromo El Triangulo, Olocuilta, El Salvador",
    date: "Segundo domingo de noviembre (Día Nacional de la Pupusa)",
    foods: ["Pupusas de arroz", "Pupusas revueltas y de queso", "Pupusa gigante récord", "Curtido y salsa de tomate"],
    description: "Olocuilta celebra el Día Nacional de la Pupusa preparando la pupusa de arroz más grande del mundo y actividades culturales todo el día.",
    source: "https://www.elsalvador.com/", sourceLabel: "Consultar información sobre el Festival de la Pupusa"
  },
  {
    name: "San Vicente", color: "#0754a1", image: "/img/panela.jpg",
    festival: "Festival de la Panela", place: "Verapaz, San Vicente, El Salvador",
    mapQuery: "Parque Central Verapaz, San Vicente, El Salvador",
    date: "Durante el mes de marzo (Época de molienda de caña)",
    foods: ["Panela y dulce de atado", "Melcochas y conservas en miel", "Jugo de caña fresco", "Gastronomía típica"],
    description: "Coincidiendo con la época de molienda en los molienderos tradicionales, se muestra el proceso artesanal del dulce de atado y la gastronomía derivada de la caña.",
    source: "https://www.elsalvador.com/turismo/cultura-viva/feria-panela-2026-verapaz-san-vicente-el-salvador/1265896/2026/", sourceLabel: "Feria de la Panela en Verapaz"
  },
  {
    name: "Cabañas", color: "#a31b72", image: "/img/ilobasco-gastronomia.jpg",
    festival: "Feria Gastronómica y Artesanal de Ilobasco", place: "Parque central de Ilobasco, Cabañas",
    mapQuery: "Parque Central de Ilobasco, El Salvador",
    date: "Último domingo de cada mes",
    foods: ["Pupusas y tamales", "Antojitos y dulces típicos", "Platillos preparados por emprendedores locales"],
    description: "Ilobasco organiza ferias periódicas los fines de semana donde se combina el arte en barro con platillos tradicionales de la zona.",
    source: "https://www.laprensagrafica.com/", sourceLabel: "La Prensa Gráfica"
  },
  {
    name: "Usulután", color: "#126b4e", image: "/img/cafe.jpg",
    festival: "Festival del Café", place: "Santiago de María, Usulután",
    mapQuery: "Parque Central Santiago de Maria, Usulutan, El Salvador",
    date: "Mes de marzo (Cierre de cosecha)",
    foods: ["Café de altura preparado al momento", "Postres y repostería a base de café", "Productos artesanales derivados del café"],
    description: "Celebrado en la zona cafetalera de la cordillera Tecapa-Chinameca para conmemorar el trabajo de la cosecha e incentivar el consumo local.",
    source: "https://www.corsatur.gob.sv/agenda-de-actividades/", sourceLabel: "Agenda de actividades turísticas"
  },
  {
    name: "San Miguel", color: "#8b3c13", image: "/img/platillos-regionales.jpg",
    festival: "Feria de Comidas Típicas Migueleñas", place: "Parque Guzmán, San Miguel",
    mapQuery: "Parque Guzman, San Miguel, El Salvador",
    date: "Mediados de noviembre (Fiestas Patronales)",
    foods: ["Pupusas de alhuashte", "Tamales orientales", "Sopa de mondongo y carne asada", "Dulces orientales"],
    description: "Durante el mes de noviembre, en vísperas del Gran Carnaval de San Miguel, el parque central alberga ferias gastronómicas orientales.",
    source: "https://www.corsatur.gob.sv/agenda-de-actividades/", sourceLabel: "Agenda de actividades turísticas"
  },
  {
    name: "Morazán", color: "#5b247d", image: "/img/melcocha.jpg",
    festival: "Festival de la Melcocha", place: "San Esteban Catarina y San Francisco Gotera",
    mapQuery: "Parque Central San Francisco Gotera, Morazan, El Salvador",
    date: "Durante el mes de noviembre",
    foods: ["Melcochas batidas de colores", "Dulces de atado y panelas", "Café de la cordillera y antojitos"],
    description: "Celebración dedicada al dulce tradicional batido a mano, reuniendo a artesanos del dulce de panela y la caña de azúcar.",
    source: "https://www.corsatur.gob.sv/agenda-de-actividades/", sourceLabel: "Agenda de actividades turísticas"
  },
  {
    name: "La Unión", color: "#006a75", image: "/img/mariscos.jpg",
    festival: "Festival del Marisco", place: "Muelle Municipal de La Unión, La Unión",
    mapQuery: "Muelle Municipal La Union, El Salvador",
    date: "Víspera de Semana Santa (Marzo / Abril)",
    foods: ["Cocteles de concha y camarón", "Pescado frito y mariscadas", "Ceviches orientales"],
    description: "Organizado frente al Golfo de Fonseca para impulsar la gastronomía marina y el turismo costero durante la época de verano.",
    source: "https://camarasal.com/xiv-festival-del-marisco-impulsara-el-turismo-y-la-economia-de-la-union-durante-semana-santa-2026/", sourceLabel: "Camarasal: Festival del Marisco 2026"
  }
];

function initApp() {
  const grid = document.querySelector("#departmentGrid");
  const search = document.querySelector("#search");
  const dialog = document.querySelector("#detailDialog");
  const count = document.querySelector("#count");
  const closeBtn = document.querySelector("#closeDialog");
  const menuBtn = document.querySelector("#menuBtn");
  const nav = document.querySelector("#nav");

  if (!grid || !search || !dialog) return;

  function render() {
    const q = search.value.trim().toLocaleLowerCase("es");
    const list = departments.filter(d => d.name.toLocaleLowerCase("es").includes(q));
    grid.innerHTML = list.map(d => `
      <button class="department-card" style="--dept-color:${d.color}" data-dept="${d.name}" aria-label="Ver festival de ${d.name}">
        <img src="${d.image}" alt="Imagen ilustrativa relacionada con ${d.festival}" loading="lazy" onerror="this.onerror=null;this.style.visibility='hidden'">
        <span class="dept-label"><span>${d.name}</span><span class="arrow">›</span></span>
      </button>`).join("");
    if (count) {
      count.textContent = `${list.length} ${list.length === 1 ? "departamento" : "departamentos"}`;
    }
  }

  function showDetail(name) {
    const d = departments.find(x => x.name === name);
    if (!d) return;
    
    const encodedQuery = encodeURIComponent(d.mapQuery);
    const map = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
    
    const coords = {
      "Ahuachapán": { lat: 13.7719, lon: -89.8111 },
      "Santa Ana": { lat: 13.8267, lon: -89.6244 },
      "Sonsonate": { lat: 13.8447, lon: -89.7428 },
      "Chalatenango": { lat: 14.0422, lon: -88.9372 },
      "La Libertad": { lat: 13.8269, lon: -89.3606 },
      "San Salvador": { lat: 13.6933, lon: -89.1925 },
      "Cuscatlán": { lat: 13.7222, lon: -88.9806 },
      "La Paz": { lat: 13.5283, lon: -89.1178 },
      "San Vicente": { lat: 13.6444, lon: -88.8683 },
      "Cabañas": { lat: 13.8483, lon: -88.8481 },
      "Usulután": { lat: 13.4833, lon: -88.5333 },
      "San Miguel": { lat: 13.4814, lon: -88.1781 },
      "Morazán": { lat: 13.6942, lon: -88.1072 },
      "La Unión": { lat: 13.3333, lon: -87.8433 }
    };

    const loc = coords[d.name] || { lat: 13.6929, lon: -89.2182 };

    const waze = `https://www.waze.com/live-map/directions?to=ll.${loc.lat}%2C${loc.lon}&navigate=yes`;

    document.querySelector("#detail").innerHTML = `
      <img class="detail-cover" src="${d.image}" alt="Imagen ilustrativa relacionada con ${d.festival}" onerror="this.onerror=null;this.style.visibility='hidden'">
      <div class="detail-content">
        <span class="eyebrow dark">${d.name} · Festival gastronómico</span>
        <h2>${d.festival}</h2>
        <p>${d.description}</p>
        <div class="detail-meta">
          <div class="meta-box"><b>📅 Época de realización</b><span>${d.date}</span></div>
          <div class="meta-box"><b>📍 Lugar</b><span>${d.place}</span></div>
        </div>
        <h3>Platillos que puedes encontrar</h3>
        <ul class="food-list">${d.foods.map(food => `<li>${food}</li>`).join("")}</ul>
        
        <div class="detail-actions">
          <a class="hero-button" href="${map}" target="_blank" rel="noopener noreferrer">Abrir ubicación en Google Maps <span>↗</span></a>
          <a class="hero-button waze-button" href="${waze}" target="_blank" rel="noopener noreferrer">Abrir en Waze <span>↗</span></a>
        </div>
      </div>`;
    dialog.showModal();
  }

  grid.addEventListener("click", e => {
    const card = e.target.closest("[data-dept]");
    if (card) showDetail(card.dataset.dept);
  });

  search.addEventListener("input", render);

  if (closeBtn) closeBtn.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}