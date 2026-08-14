import Link from "next/link";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
      <Link
        href={`/games/${game.id}`}
        aria-label={`Ver detalles de ${game.title}`}
        className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {/* Portada placeholder con gradiente + icono */}
        <div
          role="img"
          aria-label={`Portada de ${game.title}`}
          className={`flex h-40 items-center justify-center bg-gradient-to-br ${game.gradient} text-5xl transition-transform duration-300 group-hover:scale-105 sm:h-44`}
        >
          <span aria-hidden="true">{game.icon}</span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <div>
            <h3 className="line-clamp-1 text-base font-semibold text-white sm:text-lg">
              {game.title}
            </h3>
            <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
              {game.platform.join(" · ")}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {game.genre.slice(0, 2).map((g) => (
              <span
                key={g}
                className="rounded-full border border-border bg-surface-light px-2.5 py-0.5 text-[11px] font-medium text-accent"
              >
                {g}
              </span>
            ))}
          </div>

          <p className="line-clamp-2 flex-1 text-sm text-neutral-400">
            {game.shortDescription}
          </p>

          <span className="mt-1 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-primary-light">
            Ver detalles
          </span>
        </div>
      </Link>
    </article>
  );
}
