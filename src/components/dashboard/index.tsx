import { ArrowDown, DollarSign, Users, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import GraphicMonths from "./components/graphic-months";
import { getPerson } from "@/app/(auth)/person/actions";
import { getMovies } from "@/app/(auth)/movies/action";

export default async function Dashboard() {
  const clients = await getPerson({ id: 1 })
  const movies = await getMovies()

  const data: Array<{ label: string, icon: JSX.Element, value: string }> = [
    { label: 'Clientes', icon: <Users size={16} />, value: String(clients?.length ?? 0) },
    { label: 'Filmes', icon: <Wallet size={16} />, value: String(movies?.length ?? 0)},
    { label: 'Alugados', icon: <ArrowDown size={16} />, value: '15' },
    { label: 'Total', icon: <DollarSign size={16} />, value: 'R$ 835.52' },
  ]

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card key={index} className="rounded-xl">
            <CardHeader className="space-y-0 pb-3 flex flex-row justify-between items-center">
              <CardTitle className="text-sm">{item.label}</CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent className="pb-4 text-2xl font-bold">{item.value}</CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4" />

      <GraphicMonths />
    </>
  )
}
