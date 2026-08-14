"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBarProps {
  /** Valor inicial del campo */
  defaultValue?: string;
  /** Se llama en cada cambio, útil para filtrar en vivo (ej: /games) */
  onChange?: (value: string) => void;
  /** Se llama al enviar el formulario. Si no se pasa, navega a /games?q=... */
  onSubmit?: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputId?: string;
}

export default function SearchBar({
  defaultValue = "",
  onChange,
  onSubmit,
  placeholder = "Buscar juegos...",
  className = "",
  inputId = "search-input",
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue);
  const router = useRouter();

  function handleChange(newValue: string) {
    setValue(newValue);
    onChange?.(newValue);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value);
    } else {
      router.push(value ? `/games?q=${encodeURIComponent(value)}` : "/games");
    }
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 ${className}`}
    >
      <label htmlFor={inputId} className="sr-only">
        Buscar juegos
      </label>
      <div className="relative flex-1">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0012.3 12.3z"
          />
        </svg>
        <input
          id={inputId}
          type="search"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-border bg-surface-light py-2 pl-9 pr-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Buscar"
      >
        Buscar
      </button>
    </form>
  );
}
