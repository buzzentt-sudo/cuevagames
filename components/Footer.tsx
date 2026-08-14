import Link from "next/link";
import { categories } from "@/data/categories";

export default function Footer() {
  const year = new Date().getFullYear();
  const featuredCategories = categories.slice(0, 5);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <span aria-hidden="true" className="text-2xl">
              🎮
            </span>
            <span>
              Cueva<span className="text-primary">Games</span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-neutral-400">
            Tu catálogo de videojuegos: descubrí, explorá y encontrá tu
            próximo juego favorito.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navegación
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/games"
                className="transition-colors hover:text-primary"
              >
                Juegos
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="transition-colors hover:text-primary"
              >
                Categorías
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Categorías destacadas
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            {featuredCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            CuevaGames
          </h3>
          <p className="mt-3 text-sm text-neutral-400">
            Plataforma en construcción. Próximamente: cuentas de usuario,
            reseñas y panel de administración.
          </p>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-neutral-500 sm:px-6 lg:px-8">
        © {year} CuevaGames. Todos los derechos reservados.
      </div>
    </footer>
  );
}
