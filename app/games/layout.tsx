import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juegos",
  description:
    "Explorá el catálogo completo de videojuegos de CuevaGames. Buscá por nombre, género, plataforma o categoría.",
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
