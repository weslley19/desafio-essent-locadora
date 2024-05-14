import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { getMovies } from "./movies/action";
import { getRented } from "./rented/actions";

export default async function Home() {
  const session = auth()
  console.log(session)
  if (!session) {
    redirect('/site')
  }

  const movies = await getMovies()
  const rented = await getRented()

  return (
    <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-1">
      <Card className="bg-container hover:border-slate-50">
        <CardHeader>
          <CardTitle>Total de Filmes</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">{movies.data.length ?? 0}</CardContent>
      </Card>
      <Card className="bg-container hover:border-slate-50">
        <CardHeader>
          <CardTitle>Filmes Alugados</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">{rented.data.length ?? 0}</CardContent>
      </Card>
      <Card className="bg-container hover:border-slate-50">
        <CardHeader>
          <CardTitle>Entrada</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">
          R$ {rented.data.reduce((acc, curr) => acc + Number(curr.totalAmount), 0).toFixed(2)}
        </CardContent>
      </Card>
    </div>
  );
}
