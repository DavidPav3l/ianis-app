import MultiForm from "@/components/custom/MultiForm";

import Image from "next/image";
import logoImg from "@/assets/logo.jpg";

export default function Home() {
  return (
    <>
      <header className="mx-auto flex h-[130px] w-[90%] max-w-screen-lg items-start justify-start">
        <Image src={logoImg} className="w-40" alt="Schools for inclusion" />
      </header>
      <main className="mx-auto min-h-[calc(100vh_-_130px)] pt-[10vh] lg:pt-[15vh]">
        <div className="relative mx-auto w-[90%] max-w-screen-lg space-y-10 rounded-md border-2 border-black bg-white px-4 py-8 shadow-zinc-300 sm:px-8 sm:py-14 lg:p-16">
          <MultiForm />
        </div>
      </main>
    </>
  );
}
