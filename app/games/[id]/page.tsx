import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/GameCard";
import { games, getGameById, getRelatedGames } from "@/data/games";

interface GamePageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return games.map((game) => ({ id: game.id }));
}

export function generateMetadata({ params }: GamePageProps): Metadata {
  const game = getGameById(params.id);

  if (!game) {
    return { title: "Juego no encontrado" };
  }

  return {
    title: game.title,
    description: game.shortDescription,
    openGraph: {
      title: `${game.title} | CuevaGames`,
      description: game.shortDescription,
      type: "website",
    },
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameById(params.id);

  if (!game) {
    notFound();
  }

  const relatedGames = getRelatedGames(game);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb simple */}
      <nav aria-label="Ruta de navegación" className="mb-6 text-sm text-neutral-400">
        <Link href="/" className="hover:text-primary">
          Inicio
        </Link>{" "}
        /{" "}
        <Link href="/games" className="hover:text-primary">
          Juegos
        </Link>{" "}
        / <span className="text-neutral-300">{game.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Portada grande */}
        <div
          role="img"
          aria-label={`Portada de ${game.title}`}
          className={`flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br ${game.gradient} text-8xl shadow-glow sm:h-80 lg:h-full`}
        >
          <span aria-hidden="true">{game.icon}</span>
        </div>

        {/* Info principal */}
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {game.title}
          </h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {game.genre.map((g) => (
              <span
                key={g}
                className="rounded-full border border-border bg-surface-light px-3 py-1 text-xs font-medium text-accent"
              >
                {g}
              </span>
            ))}
          </div>

          <p className="mt-5 text-neutral-300">{game.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-border bg-surface p-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                Plataformas
              </dt>
              <dd className="mt-1 text-sm text-white">
                {game.platform.join(", ")}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                Desarrollador
              </dt>
              <dd className="mt-1 text-sm text-white">{game.developer}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                Publicador
              </dt>
              <dd className="mt-1 text-sm text-white">{game.publisher}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                Año
              </dt>
              <dd className="mt-1 text-sm text-white">{game.releaseYear}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">
                Puntaje
              </dt>
              <dd className="mt-1 text-sm text-white">{game.rating} / 10</dd>
            </div>
          </div>

          <button
            type="button"
            aria-label={`Jugar ${game.title} (próximamente disponible)`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-light"
          >
            Jugar ahora
            <span aria-hidden="true">▶</span>
          </button>
        </div>
      </div>

      {/* Juegos relacionados */}
      {relatedGames.length > 0 && (
        <section
          aria-labelledby="relacionados-heading"
          className="mt-16 border-t border-border pt-10"
        >
          <h2
            id="relacionados-heading"
            className="mb-6 text-2xl font-bold text-white"
          >
            Juegos relacionados
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedGames.map((relatedGame) => (
              <GameCard key={relatedGame.id} game={relatedGame} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
