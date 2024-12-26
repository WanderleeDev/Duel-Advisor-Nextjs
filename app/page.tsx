import { Link } from "next-view-transitions";
import Image from "next/image";
import MainBanner from "@/shared/components/MainBanner";
import logo from "../public/Yu-Gi-Oh-logo.webp";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <MainBanner />
      <Image
        className="mx-auto block w-72 h-28 sm:w-[400px] sm:h-[143px]"
        src={logo}
        alt="Duel Advisor Logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="mb-4 font-extrabold leading-none text-white select-none font-belwe tracking-wider  text-4xl sm:text-5xl text-stroke">
        Duel Advisor
      </h1>

      <p className="mb-8 text-lg font-thin font-belwe lg:text-xl text-center text-gray-200 select-none py-4 lg:py-6 text-balance max-w-3xl w-full">
        Card catalog, information, strategies and more, create your custom deck
        and get a tailor-made strategy
      </p>
      <nav className="space-y-4">
        <Link
          href="/home"
          className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Entrar a la Aplicación
        </Link>
      </nav>
    </main>
  );
}
