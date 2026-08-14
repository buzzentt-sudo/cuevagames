import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span aria-hidden="true" className="text-6xl">
        🕹️
      </span>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-3 text-neutral-400">
        Parece que este nivel todavía no existe. Volvé al inicio y seguí
        explorando.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-light"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
