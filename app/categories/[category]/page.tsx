import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/GameCard";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getGamesByCategory } from "@/data/games";

interface CategoryPageProps {
  params: { category: string };
}

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    return { title: "Categoría no encontrada" };
  }

  return {
    title: category.name,
    description: `${category.description} Descubrí todos los juegos de la categoría ${category.name} en CuevaGames.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const categoryGames = getGamesByCategory(category.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav aria-label="Ruta de navegación" className="mb-6 text-sm text-neutral-400">
        <Link href="/" className="hover:text-primary">
          Inicio
        </Link>{" "}
        /{" "}
        <Link href="/categories" className="hover:text-primary">
          Categorías
        </Link>{" "}
        / <span className="text-neutral-300">{category.name}</span>
      </nav>

      <header className="mb-8 flex items-center gap-4">
        <span aria-hidden="true" className="text-4xl">
          {category.icon}
        </span>
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-1 text-neutral-400">{category.description}</p>
        </div>
      </header>

      {categoryGames.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-border bg-surface px-6 py-10 text-center text-neutral-400">
          Todavía no hay juegos cargados en esta categoría.
        </p>
      )}
    </div>
  );
}
