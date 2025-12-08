import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/utils/interfaces";

export const Home = () => {
  const router = useRouter();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      const resp = await fetch("http://localhost:8000/brands");
      const data: Brand[] = await resp.json();

      if (data.length > 0) {
        setBrands(data);
      }
      setLoading(false);
    }
    fetchBrands();
  }, [])

  return (
    <main className="min-h-screen">
      <div className="flex h-full w-full flex-col py-8 px-6">
        <Image
          className="h-14 w-auto self-end"
          src="/images/Logo-Bloom.png"
          alt="Logo"
          width={400}
          height={100}
        />
        <div>
          <h1 className="text-center text-4xl">Desafío Dev Bloom Reuse</h1>
          <h2 className="text-center text-2xl mt-5 text-neutral-600">Elige una marca para ir a sus preguntas frecuentes.</h2>
        </div>
      </div>
      <div className="flex h-full w-full align-center justify-center p-8">
        {loading ? (
          <div className="flex flex-row items-center justify-center gap-8 mt-30">
            <div className="animate-spin rounded-full h-15 w-15 border-4 border-gray-300 border-t-neutral-700"></div>
            <p className="text-4xl font-medium">Cargando...</p>
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-2 grid-rows-2 w-5xl">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="col-span-1 row-span-1 border border-zinc-200 shadow-md transition rounded-xl hover:shadow-xl hover:cursor-pointer"
                onClick={() => router.push(`/frequently-asked/${brand.id}`)}
              >
                <Image
                  className="h-full w-full p-10"
                  src={`/images/${brand.img}`}
                  alt={brand.id}
                  width={400}
                  height={100}
                  // onClick={() => router.push(`/frequently-asked/${brand.id}`)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
