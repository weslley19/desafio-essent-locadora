import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-1">
      <Card>
        <CardHeader>
          <CardTitle>Total de Filmes</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">20</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Filmes Alugados</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">15</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Entrada</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end text-3xl">R$ 150,00</CardContent>
      </Card>
    </div>
  );
}
