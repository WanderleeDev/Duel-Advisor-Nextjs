import Link from "next/link";
import BackgroundHome from "@/shared/components/BackgroundHome";

export default function HomePage() {
  const sections = [
    {
      name: "Catálogo de Cartas",
      href: "/card-catalog",
      description: "Explora y gestiona tu colección de cartas",
    },
    {
      name: "Editor de IA",
      href: "/ai-editor",
      description: "Crea y optimiza estrategias con IA",
    },
    {
      name: "Simulador de Duelos",
      href: "/duel-simulator",
      description: "Practica y mejora tus estrategias",
    },
    {
      name: "Mi Deck",
      href: "/my-deck",
      description: "Construye y administra tus mazos",
    },
  ];

  return (
    <main className="min-h-screen h-full">
      <BackgroundHome />
      <h1 className="sr-only">Duels Advisor Home Menu</h1>
      <div className="bg-black/20 backdrop-blur-sm min-h-dvh content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 font-belwe"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.name}</h2>
              <p className="text-gray-600">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
