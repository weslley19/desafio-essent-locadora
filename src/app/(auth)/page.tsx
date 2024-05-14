import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = auth()
  console.log(session)
  if (!session) {
    redirect('/site')
  }

  return (
    <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-1">
      <Card className="bg-container hover:border-slate-50">
        <CardHeader>
          <CardTitle>Total de Filmes</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">20</CardContent>
      </Card>
      <Card className="bg-container hover:border-slate-50">
        <CardHeader>
          <CardTitle>Filmes Alugados</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">15</CardContent>
      </Card>
      <Card className="bg-container hover:border-slate-50">
        <CardHeader>
          <CardTitle>Entrada</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">R$ 150,00</CardContent>
      </Card>
    </div>
  );
}
