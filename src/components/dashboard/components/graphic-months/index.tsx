"use client"

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { useTheme } from "next-themes"

export default function GraphicMonths() {
  return (
    <Card className="w-auto rounded-xl">
      <CardHeader>
        <CardTitle>Controle de gastos</CardTitle>
        <CardDescription>Entradas e saídas dos últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent className="mt-10">
        <BarChart />
      </CardContent>
    </Card>
  )
}

function BarChart() {
  const { theme } = useTheme()

  return (
    <div className="aspect-[20/5]" >
      <ResponsiveBar
        data={[
          { name: "Junho", entradas: 111, saidas: 99 },
          { name: "Julho", entradas: 157, saidas: 87 },
          { name: "Agosto", entradas: 129, saidas: 89 },
          { name: "Setembro", entradas: 187, saidas: 151 },
          { name: "Outubro", entradas: 119, saidas: 127 },
          { name: "Novembro", entradas: 20, saidas: 121 },
        ]}
        keys={["entradas", "saidas"]}
        indexBy="name"
        groupMode="grouped"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: ".8125rem",
              textTransform: "capitalize",
              borderRadius: "6px",
              color: "#000"
            },
          },
          text: {
            fill: theme === "dark" ? "#FAFAFA" : "#171A1C"
          }
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
      />
    </div>
  )
}
