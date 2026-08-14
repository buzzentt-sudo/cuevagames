import Link from "next/link";
import GameCard from "@/components/GameCard";
import CategoryCard from "@/components/CategoryCard";
import { getFeaturedGames, getLatestGames } from "@/data/games";
import { categories } from "@/data/categories";

export default function HomePage() {
  const featuredGames = getFeaturedGames();
  const latestGames = getLatestGames(8);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Cueva<span className="text-primary">Games</span>
          </h1>
          <p className="mt-4 max-w-xl animate-fade-in text-base text-neutral-300 sm:text-lg">
            Tu guarida de videojuegos. Descubrí títulos destacados, explorá
            por categoría y encontrá tu próxima obsesión.
          </p>
          <Link
            href="/games"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-light"
          >
            Explorar juegos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Destacados */}
      <section
        aria-labelledby="destacados-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mb-6 flex items-end justify-between">
          <h2
            id="destacados-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Juegos destacados
          </h2>
          <Link
            href="/games"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Últimos juegos */}
      <section
        aria-labelledby="ultimos-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mb-6 flex items-end justify-between">
          <h2
            id="ultimos-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Últimos juegos
          </h2>
          <Link
            href="/games"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {latestGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Categorías */}
      <section
        aria-labelledby="categorias-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mb-6 flex items-end justify-between">
          <h2
            id="categorias-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Categorías
          </h2>
          <Link
            href="/categories"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Ver todas
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
