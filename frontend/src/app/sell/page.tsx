"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function SellMockPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col px-6 py-8">
      {/* Top bar */}
      <header className="flex flex-row justify-between items-center">
        <button
            onClick={() => router.back()}
            className="back-btn"
        >
          <FaArrowLeft size={20} />
          <span className="text-sm font-medium">Volver</span>
        </button>
        <Image
          className="h-14 w-auto"
          src="/images/Logo-Bloom.png"
          alt="Logo"
          width={400}
          height={100}
        />
      </header>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="tracking-[0.35em] text-4xl font-semibold text-neutral-600 mb-6">
          PÁGINA DE VENTA (MOCK)
        </h1>

        <p className="text-neutral-700 text-lg mb-8">
          Aquí irá el flujo real para que un cliente pueda vender sus productos.
        </p>

        <button
          disabled
          className="rounded-full bg-neutral-900 px-6 py-2.5 text-md font-medium text-white shadow-sm hover:bg-neutral-800 disabled:opacity-60"
        >
          Empezar publicación (mock)
        </button>
      </div>
    </main>
  );
}
