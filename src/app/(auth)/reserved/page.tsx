"use client"

import { TableCell, TableRow } from "@/components/ui/table"
import { ReservedMovieProps } from "./core/validation/interfaces"
import DataTable from "@/components/shared/data-table/data-table"
import { Badge } from "@/components/ui/badge"

const Reserved = (): JSX.Element => {
  const rents: ReservedMovieProps[] = [
    { locator: 'Weslley', movie: 'Filme 1', withdrawal: '10/10/2021', devolution: '10/10/2021', hour: '10:00', total: 'R$ 0,00', situation: 'Pendente' },
    { locator: 'Weslley', movie: 'Filme 2', withdrawal: '10/10/2021', devolution: '10/10/2021', hour: '10:00', total: 'R$ 0,00', situation: 'Pendente' },
    { locator: 'Weslley', movie: 'Filme 3', withdrawal: '10/10/2021', devolution: '10/10/2021', hour: '10:00', total: 'R$ 0,00', situation: 'Pendente' },
    { locator: 'Weslley', movie: 'Filme 4', withdrawal: '10/10/2021', devolution: '10/10/2021', hour: '10:00', total: 'R$ 0,00', situation: 'Pendente' },
  ]

  const Body = (): JSX.Element => (
    <>
      {rents.map((rent, index) => (
        <TableRow key={index}>
          <TableCell>{rent.locator}</TableCell>
          <TableCell>{rent.movie}</TableCell>
          <TableCell>{rent.withdrawal}</TableCell>
          <TableCell>{rent.devolution}</TableCell>
          <TableCell>{rent.total}</TableCell>
          <TableCell>
            <Badge className="bg-yellow-500	text-white">{rent.situation}</Badge>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
  return (
    <>
      <DataTable
        title="Pedidos de reserva "
        header={["Locador", "Filme", "Retirada", "Devolução", "Total", "Situação"]}
        body={<Body />}
        className="mt-6"
      />
    </>
  )
}

export default Reserved
