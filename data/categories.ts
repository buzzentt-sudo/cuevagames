// Datos de categorías. Estructura pensada para poder migrarse a una
// base de datos real más adelante sin cambiar la forma en que se
// consumen desde los componentes (mismo shape de objeto).

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  gradient: string; // clases de Tailwind para el fondo degradado
}

export const categories: Category[] = [
  {
    slug: "accion",
    name: "Acción",
    description: "Adrenalina pura, combate y reflejos al límite.",
    icon: "⚔️",
    gradient: "from-red-600 to-orange-500",
  },
  {
    slug: "aventura",
    name: "Aventura",
    description: "Mundos por explorar e historias para vivir.",
    icon: "🗺️",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    slug: "rpg",
    name: "RPG",
    description: "Construí tu personaje y tu propia leyenda.",
    icon: "🐉",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    slug: "estrategia",
    name: "Estrategia",
    description: "Pensá rápido, planificá mejor, ganá siempre.",
    icon: "♟️",
    gradient: "from-slate-600 to-slate-400",
  },
  {
    slug: "deportes",
    name: "Deportes",
    description: "Competencia, equipos y jugadas de alto nivel.",
    icon: "🏆",
    gradient: "from-emerald-600 to-green-400",
  },
  {
    slug: "terror",
    name: "Terror",
    description: "Tensión, sustos y atmósferas que no dan tregua.",
    icon: "🕯️",
    gradient: "from-neutral-700 to-neutral-900",
  },
  {
    slug: "plataformas",
    name: "Plataformas",
    description: "Saltos precisos y niveles llenos de ritmo.",
    icon: "🍄",
    gradient: "from-pink-600 to-rose-400",
  },
  {
    slug: "carreras",
    name: "Carreras",
    description: "Velocidad, motores y curvas al límite.",
    icon: "🏎️",
    gradient: "from-cyan-600 to-blue-500",
  },
  {
    slug: "simulacion",
    name: "Simulación",
    description: "Gestioná, construí y creá a tu manera.",
    icon: "🏗️",
    gradient: "from-teal-600 to-emerald-500",
  },
  {
    slug: "indie",
    name: "Indie",
    description: "Ideas frescas de estudios independientes.",
    icon: "✨",
    gradient: "from-fuchsia-600 to-pink-500",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
