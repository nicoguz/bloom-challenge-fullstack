"use client";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { getFaqsWithConfigs } from "@/utils/faqs";
import { BrandWithConfig, Faqs } from "@/utils/interfaces";


export default function FrequentlyAsked() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState<BrandWithConfig | null>(null);
  const [faqs, setFaqs] = useState<Faqs[] | null>(null);
  const [openIds, setOpenIds] = useState<number[]>([]);
  const brandId = params.id

  useEffect(() => {
    const fetchBrand = async () => {
      const resp = await fetch(`http://localhost:8000/brands/${brandId}`);
      const data: BrandWithConfig = await resp.json();
      setBrand(data);
      setLoading(false);
    };
    fetchBrand();
  }, []);

  useEffect(() => {
    if (!brand) return;
    setFaqs(getFaqsWithConfigs(brand));
  }, [brand])

  function toggleAnswer(id: number) {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  }

  return (
    <main className="relative min-h-screen">
      <div className="px-6 py-8">
        <header className="flex flex-row justify-between items-center">
          <button
            onClick={() => router.back()}
            className="back-btn"
          >
            <FaArrowLeft size={20} />
            <span className="text-sm font-medium">Volver</span>
          </button>

          {brand ? (
            <Image
              className="h-14 w-auto"
              src={`/images/${brand.img}`}
              alt="Logo"
              width={400}
              height={100}
            />
          ) : (
            <Image
              className="h-14 w-auto"
              src="/images/Logo-Bloom.png"
              alt="Logo"
              width={400}
              height={100}
            />
          )}
        </header>

        <div className="mx-auto max-w-4xl">
          {loading ? (
            <div className="flex flex-row items-center justify-center gap-8 mt-30">
              <div className="animate-spin rounded-full h-15 w-15 border-4 border-gray-300 border-t-neutral-700"></div>
              <p className="text-4xl font-medium">Cargando...</p>
            </div>
          ) : (
            <>
              {/* Titulo */}
              <div className="mb-16 text-center">
                <h1 className="text-3xl font-bold tracking-[0.35em] text-neutral-700">
                  PREGUNTAS FRECUENTES
                </h1>
              </div>
              {faqs && faqs.map((section) => (
                <section key={section.category} className="mb-16">
                  {/* Línea superior */}
                  <div className="h-px w-full bg-neutral-200 mb-10" />

                  {/* Título sección */}
                  <h2 className="mb-10 text-xl font-semibold tracking-wide text-neutral-700">
                    {section.category}
                  </h2>

                  {/* Preguntas */}
                  <div className="">
                    {section.items.map((item) => {
                      const isOpen = openIds.includes(item.id);
                      return (
                        <article
                          key={item.question}
                          className=""
                        >
                          <div
                            className="flex flex-row justify-start items-center hover:cursor-pointer"
                            id={item.id.toString()}
                            onClick={() => toggleAnswer(item.id)}
                          >
                            <FaChevronRight
                              size={20}
                              className={`
                                question-arrow
                                transition-all duration-300
                                rounded-4xl p-2 w-8 h-8 ${
                                isOpen ? "rotate-90" : "rotate-0"
                              }`}
                            />
                            <h3 className="text-lg font-semibold ml-4">
                              {item.question}
                            </h3>

                          </div>
                          <div
                            className={`text-base leading-7 text-neutral-700
                              overflow-hidden transition-all duration-300 ease-in-out
                              ${isOpen ? "max-h-50 opacity-100 mt-4" : "max-h-0 opacity-0"}
                            `}
                            id={`answer-${item.id}`}
                          >
                            {item.answer}
                          </div>

                          {/* Separador inferior */}
                          <div className="my-8 h-px w-full bg-neutral-200" />
                        </article>
                      )
                    })}
                  </div>
                </section>
              ))}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
