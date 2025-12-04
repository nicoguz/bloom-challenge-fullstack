import Image from "next/image";
import { useRouter } from "next/navigation";

export const Home = () => {
  const router = useRouter();
  let brands = [];

  const handleNavigate = () => {
    router.push("/frequently-asked");
  }

  for (let i = 0; i < 4; i++) {
    brands.push(
      <div className="col-span-1 row-span-1 border border-gray-100 rounded-xl hover:shadow-xl hover:cursor-pointer">
        <Image
          className="h-full w-full"
          src="/images/Logo-Bloom.png"
          alt="Logo"
          width={400}
          height={100}
          onClick={handleNavigate}
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-700">
      <div className="flex h-full w-full flex-col p-8">
        <Image
          className="h-14 w-auto self-end"
          src="/images/Logo-Bloom.png"
          alt="Logo"
          width={400}
          height={100}
        />
        <div>
          <h1 className="text-center text-4xl">Bloom Reuse</h1>
        </div>
      </div>
      <div className="flex h-full w-full align-center justify-center p-8">
        <div className="grid gap-10 grid-cols-2 grid-rows-2 w-5xl">
          {brands}
        </div>
      </div>
    </main>
  );
};
