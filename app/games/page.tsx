"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import GameCard from "@/components/GameCard";
import SearchBar from "@/components/SearchBar";
import { games } from "@/data/games";
import { categories } from "@/data/categories";

function GamesCatalog() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredGames = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return games.filter((game) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        game.title.toLowerCase().includes(normalizedQuery) ||
        game.genre.some((g) => g.toLowerCase().includes(normalizedQuery)) ||
        game.platform.some((p) => p.toLowerCase().includes(normalizedQuery));

      const matchesCategory =
        !activeCategory || game.categories.includes(activeCategory);

      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Juegos</h1>
        <p className="mt-2 text-neutral-400">
          Explorá el catálogo completo de CuevaGames.
        </p>
      </header>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <SearchBar
          defaultValue={query}
          onChange={setQuery}
          onSubmit={setQuery}
          placeholder="Buscar por nombre, género o plataforma..."
          inputId="search-catalog"
          className="sm:max-w-sm"
        />
      </div>

      {/* Filtro de categorías */}
      <div
        role="group"
        aria-label="Filtrar por categoría"
        className="mb-8 flex flex-wrap gap-2"
      >
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          aria-pressed={activeCategory === null}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === null
              ? "border-primary bg-primary text-white"
              : "border-border bg-surface text-neutral-300 hover:border-primary/50"
          }`}
        >
          Todas
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveCategory(category.slug)}
            aria-pressed={activeCategory === category.slug}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? "border-primary bg-primary text-white"
                : "border-border bg-surface text-neutral-300 hover:border-primary/50"
            }`}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Resultados */}
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-border bg-surface px-6 py-10 text-center text-neutral-400">
          No encontramos juegos que coincidan con tu búsqueda.
        </p>
      )}
    </div>
  );
}

export default function GamesPage() {
  return (
    <Suspense fallback={null}>
      <GamesCatalog />
    </Suspense>
  );
}
