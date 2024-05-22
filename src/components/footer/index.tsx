import { Copyright, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className="h-12 px-3 flex justify-between items-center text-xs">
        <div className="flex justify-between items-center gap-2">
          Feito com <Heart size={16} />
        </div>
        <div className="flex justify-between items-center gap-1">
          {year} <Copyright size={16} /> - Todos os direitos reservados
        </div>
      </footer>
    </>
  )
}
