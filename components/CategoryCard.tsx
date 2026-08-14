import Link from "next/link";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      aria-label={`Ver categoría ${category.name}`}
      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-30`}
      />
      <span
        aria-hidden="true"
        className="relative mb-6 text-3xl transition-transform duration-300 group-hover:scale-110"
      >
        {category.icon}
      </span>
      <h3 className="relative text-lg font-semibold text-white">
        {category.name}
      </h3>
      <p className="relative mt-1 text-sm text-neutral-400">
        {category.description}
      </p>
    </Link>
  );
}
