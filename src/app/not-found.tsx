import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <>
      <div className="w-svw	h-svh flex flex-col justify-center items-center">
        <h1 className="text-[6rem]">404</h1>
        <h3 className="text-[2rem] mb-2">Página não encontrada</h3>
        <p className="mb-10">Você veio para uma página que não existe</p>

        <Link href="/">
          <Button variant={"default"}>Voltar para Home</Button>
        </Link>
      </div>
    </>
  )
}
