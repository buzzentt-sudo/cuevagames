import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Categorías",
  description:
    "Explorá los juegos de CuevaGames organizados por categoría: acción, RPG, estrategia, terror y mucho más.",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Categorías
        </h1>
        <p className="mt-2 text-neutral-400">
          Encontrá juegos según el estilo que más te guste.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
