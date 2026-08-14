// Datos de juegos de ejemplo (mock data).
// Pensado para migrarse a una base de datos más adelante: el shape
// de "Game" puede mapearse 1:1 a una tabla/colección "games", y el
// campo "id" ya funciona como slug/clave primaria legible.

export interface Game {
  id: string;
  title: string;
  platform: string[];
  genre: string[];
  categories: string[]; // slugs de data/categories.ts
  shortDescription: string;
  description: string;
  developer: string;
  publisher: string;
  releaseYear: number;
  rating: number; // 0 a 10
  gradient: string; // clases de Tailwind para la portada placeholder
  icon: string; // emoji representativo, se usa como "portada"
  featured?: boolean;
}

export const games: Game[] = [
  {
    id: "sombras-del-abismo",
    title: "Sombras del Abismo",
    platform: ["PC", "PlayStation", "Xbox"],
    genre: ["Acción", "RPG"],
    categories: ["accion", "rpg"],
    shortDescription:
      "Un souls-like oscuro donde cada combate es una lección de supervivencia.",
    description:
      "Sombras del Abismo te sumerge en un reino en ruinas gobernado por criaturas olvidadas. Con un sistema de combate exigente y una progresión profunda de habilidades, cada enfrentamiento pone a prueba tu paciencia y tu estrategia. Explorá mazmorras interconectadas, descubrí secretos y enfrentá jefes memorables en un viaje pensado para quienes disfrutan del desafío.",
    developer: "Estudio Ceniza",
    publisher: "CuevaGames Publishing",
    releaseYear: 2024,
    rating: 9.1,
    gradient: "from-purple-700 via-violet-800 to-indigo-900",
    icon: "🗡️",
    featured: true,
  },
  {
    id: "nexus-tactico",
    title: "Nexus Táctico",
    platform: ["PC"],
    genre: ["Estrategia"],
    categories: ["estrategia"],
    shortDescription:
      "Estrategia por turnos con escuadrones personalizables y campañas ramificadas.",
    description:
      "Nexus Táctico pone en tus manos el mando de un escuadrón de élite en un conflicto interplanetario. Cada decisión importa: la posición del terreno, el orden de turnos y la gestión de recursos definen el resultado de cada misión. Incluye editor de escuadrones y más de 40 misiones con final variable.",
    developer: "Cóndor Games",
    publisher: "CuevaGames Publishing",
    releaseYear: 2023,
    rating: 8.6,
    gradient: "from-slate-700 via-slate-800 to-zinc-900",
    icon: "♟️",
    featured: true,
  },
  {
    id: "velocidad-extrema-gt",
    title: "Velocidad Extrema GT",
    platform: ["PC", "PlayStation", "Xbox", "Switch"],
    genre: ["Carreras", "Deportes"],
    categories: ["carreras", "deportes"],
    shortDescription:
      "Arcade de carreras con más de 60 autos y circuitos urbanos vibrantes.",
    description:
      "Recorré ciudades reimaginadas a toda velocidad en Velocidad Extrema GT. Con un modelo de manejo arcade accesible pero profundo, personalización total de vehículos y modo carrera online con temporadas, es el título ideal para partidas rápidas o maratones de fin de semana.",
    developer: "Turbo Studios",
    publisher: "CuevaGames Publishing",
    releaseYear: 2024,
    rating: 8.3,
    gradient: "from-cyan-600 via-blue-700 to-indigo-800",
    icon: "🏎️",
    featured: true,
  },
  {
    id: "reino-de-cristal",
    title: "Reino de Cristal",
    platform: ["PC", "Switch"],
    genre: ["RPG", "Aventura"],
    categories: ["rpg", "aventura"],
    shortDescription:
      "Un RPG colorido de mundo abierto con un sistema de crafteo profundo.",
    description:
      "En Reino de Cristal explorás un archipiélago fragmentado por una antigua guerra mágica. Reclutá compañeros, forjá tu propio equipo con el sistema de crafteo elemental y tomá decisiones que cambian el curso de la historia. Más de 50 horas de contenido principal y secundario.",
    developer: "Luz de Luna Interactive",
    publisher: "CuevaGames Publishing",
    releaseYear: 2022,
    rating: 8.9,
    gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    icon: "💎",
    featured: true,
  },
  {
    id: "el-ultimo-refugio",
    title: "El Último Refugio",
    platform: ["PC", "PlayStation"],
    genre: ["Terror", "Aventura"],
    categories: ["terror", "aventura"],
    shortDescription:
      "Sobrevivís, racionás recursos y tomás decisiones que nadie te va a perdonar.",
    description:
      "Después del colapso, un grupo de sobrevivientes se refugia en una estación abandonada. Gestioná recursos escasos, tomá decisiones morales difíciles y enfrentá amenazas que acechan tanto afuera como adentro del refugio. Narrativa ramificada con múltiples finales.",
    developer: "Estudio Ceniza",
    publisher: "CuevaGames Publishing",
    releaseYear: 2023,
    rating: 8.7,
    gradient: "from-neutral-800 via-neutral-900 to-black",
    icon: "🕯️",
  },
  {
    id: "saltos-de-neon",
    title: "Saltos de Neón",
    platform: ["PC", "Switch", "Mobile"],
    genre: ["Plataformas", "Indie"],
    categories: ["plataformas", "indie"],
    shortDescription:
      "Plataformero de precisión con estética synthwave y bandera sonora propia.",
    description:
      "Saltos de Neón es un plataformero de precisión ambientado en una ciudad synthwave que late al ritmo de su propia banda sonora original. Más de 100 niveles, mecánicas de doble salto y dash, y un modo contrarreloj para los más competitivos.",
    developer: "Pixel Nocturno",
    publisher: "CuevaGames Indie",
    releaseYear: 2024,
    rating: 8.4,
    gradient: "from-pink-600 via-fuchsia-700 to-purple-800",
    icon: "🌆",
    featured: true,
  },
  {
    id: "imperio-de-arena",
    title: "Imperio de Arena",
    platform: ["PC"],
    genre: ["Estrategia", "Simulación"],
    categories: ["estrategia", "simulacion"],
    shortDescription:
      "Construí tu imperio comercial en el desierto, gestión de recursos en tiempo real.",
    description:
      "Levantá ciudades, comerciá con caravanas y defendé tu imperio de invasores en Imperio de Arena. Un 4X con foco en la gestión económica, diplomacia entre facciones y una campaña histórica de más de 30 misiones.",
    developer: "Cóndor Games",
    publisher: "CuevaGames Publishing",
    releaseYear: 2021,
    rating: 8.0,
    gradient: "from-amber-600 via-orange-700 to-yellow-800",
    icon: "🏜️",
  },
  {
    id: "furia-arcade",
    title: "Furia Arcade",
    platform: ["PC", "PlayStation", "Xbox", "Switch"],
    genre: ["Acción", "Plataformas"],
    categories: ["accion", "plataformas"],
    shortDescription:
      "Beat 'em up cooperativo para hasta 4 jugadores con combos brutales.",
    description:
      "Furia Arcade recupera el espíritu de los clásicos beat 'em up con gráficos modernos y combate cooperativo local u online para hasta 4 jugadores. Elegí entre 8 personajes con estilos únicos y desbloqueá combos devastadores.",
    developer: "Retro Forge",
    publisher: "CuevaGames Publishing",
    releaseYear: 2023,
    rating: 8.2,
    gradient: "from-red-600 via-rose-700 to-orange-800",
    icon: "👊",
  },
  {
    id: "granja-serena",
    title: "Granja Serena",
    platform: ["PC", "Switch", "Mobile"],
    genre: ["Simulación", "Indie"],
    categories: ["simulacion", "indie"],
    shortDescription:
      "Un simulador relajante de vida rural, sin prisa y sin combate.",
    description:
      "Escapá a la tranquilidad de Granja Serena: cultivá, pescá, conocé a los vecinos del pueblo y decorá tu granja a tu gusto. Sin combate, sin límites de tiempo agresivos, pensado para jugar a tu propio ritmo.",
    developer: "Pixel Nocturno",
    publisher: "CuevaGames Indie",
    releaseYear: 2022,
    rating: 9.0,
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    icon: "🌾",
    featured: true,
  },
  {
    id: "campeones-del-estadio",
    title: "Campeones del Estadio",
    platform: ["PlayStation", "Xbox"],
    genre: ["Deportes"],
    categories: ["deportes"],
    shortDescription:
      "Fútbol arcade competitivo con modo carrera y ligas online.",
    description:
      "Armá tu equipo, subilo de categoría y competí en ligas online en Campeones del Estadio. Controles accesibles con profundidad táctica real, modo carrera de jugador y editor de equipos personalizado.",
    developer: "Turbo Studios",
    publisher: "CuevaGames Publishing",
    releaseYear: 2024,
    rating: 8.1,
    gradient: "from-green-600 via-lime-700 to-emerald-800",
    icon: "⚽",
  },
  {
    id: "eco-de-la-cripta",
    title: "Eco de la Cripta",
    platform: ["PC"],
    genre: ["Terror", "RPG"],
    categories: ["terror", "rpg"],
    shortDescription:
      "Roguelike de terror con permadeath y generación procedural de mazmorras.",
    description:
      "Cada corrida en Eco de la Cripta es distinta: mazmorras generadas proceduralmente, un sistema de permadeath que sube la tensión al máximo y una atmósfera sonora diseñada para no dejarte respirar.",
    developer: "Estudio Ceniza",
    publisher: "CuevaGames Publishing",
    releaseYear: 2023,
    rating: 8.5,
    gradient: "from-red-900 via-neutral-900 to-black",
    icon: "💀",
  },
  {
    id: "voladores-del-viento",
    title: "Voladores del Viento",
    platform: ["Switch", "PC"],
    genre: ["Aventura", "Plataformas"],
    categories: ["aventura", "plataformas"],
    shortDescription:
      "Explorá islas flotantes con planeo y física de viento como mecánica central.",
    description:
      "Voladores del Viento te invita a recorrer un archipiélago de islas flotantes usando corrientes de viento como mecánica principal de movimiento. Diseño artístico pintado a mano y una banda sonora orquestada acompañan cada descubrimiento.",
    developer: "Luz de Luna Interactive",
    publisher: "CuevaGames Indie",
    releaseYear: 2024,
    rating: 9.2,
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    icon: "🪁",
    featured: true,
  },
  {
    id: "circuito-nocturno",
    title: "Circuito Nocturno",
    platform: ["PC", "Mobile"],
    genre: ["Carreras"],
    categories: ["carreras"],
    shortDescription:
      "Carreras urbanas ilegales de noche, con tuning completo de vehículos.",
    description:
      "Dominá las calles en carreras clandestinas nocturnas. Personalizá cada tuerca de tu auto, subí de reputación en distintas bandas y desafiá al jefe de cada distrito en Circuito Nocturno.",
    developer: "Turbo Studios",
    publisher: "CuevaGames Publishing",
    releaseYear: 2022,
    rating: 7.9,
    gradient: "from-violet-700 via-indigo-800 to-slate-900",
    icon: "🌃",
  },
  {
    id: "colonia-cero",
    title: "Colonia Cero",
    platform: ["PC"],
    genre: ["Simulación", "Estrategia"],
    categories: ["simulacion", "estrategia"],
    shortDescription:
      "Gestioná una colonia espacial: recursos, moral y crisis inesperadas.",
    description:
      "Fundá y gestioná una colonia en un planeta hostil. Balanceá producción de recursos, moral de los colonos y eventos aleatorios que ponen a prueba cada una de tus decisiones. Un simulador de gestión profundo con final abierto.",
    developer: "Cóndor Games",
    publisher: "CuevaGames Publishing",
    releaseYear: 2021,
    rating: 8.3,
    gradient: "from-zinc-700 via-neutral-800 to-slate-900",
    icon: "🛰️",
  },
  {
    id: "duelo-de-titanes",
    title: "Duelo de Titanes",
    platform: ["PC", "PlayStation", "Xbox"],
    genre: ["Acción"],
    categories: ["accion"],
    shortDescription:
      "Fighting 3v3 competitivo con rollback netcode y ranking global.",
    description:
      "Elegí tu equipo de tres luchadores y competí online con rollback netcode de última generación. Duelo de Titanes ofrece un sistema de combos accesible para principiantes pero con techo competitivo altísimo.",
    developer: "Retro Forge",
    publisher: "CuevaGames Publishing",
    releaseYear: 2024,
    rating: 8.8,
    gradient: "from-orange-600 via-red-700 to-rose-900",
    icon: "🥊",
  },
  {
    id: "senda-del-bosque",
    title: "Senda del Bosque",
    platform: ["Switch", "Mobile"],
    genre: ["Aventura", "Indie"],
    categories: ["aventura", "indie"],
    shortDescription:
      "Aventura narrativa contemplativa sobre un viaje de reencuentro familiar.",
    description:
      "Una aventura narrativa breve pero intensa sobre volver a un hogar que ya no es el mismo. Senda del Bosque prioriza la exploración pausada y los pequeños detalles por sobre los desafíos mecánicos.",
    developer: "Pixel Nocturno",
    publisher: "CuevaGames Indie",
    releaseYear: 2023,
    rating: 8.6,
    gradient: "from-lime-600 via-green-700 to-emerald-800",
    icon: "🍂",
  },
];

export function getGameById(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}

export function getFeaturedGames(): Game[] {
  return games.filter((g) => g.featured);
}

export function getLatestGames(limit = 8): Game[] {
  return [...games]
    .sort((a, b) => b.releaseYear - a.releaseYear)
    .slice(0, limit);
}

export function getGamesByCategory(categorySlug: string): Game[] {
  return games.filter((g) => g.categories.includes(categorySlug));
}

export function getRelatedGames(game: Game, limit = 4): Game[] {
  return games
    .filter(
      (g) =>
        g.id !== game.id &&
        g.categories.some((c) => game.categories.includes(c))
    )
    .slice(0, limit);
}
