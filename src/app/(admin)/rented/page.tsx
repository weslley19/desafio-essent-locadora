import DataTable from "@/components/shared/data-table/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { getRented } from "./actions"
import FormRented from "./_components/form-rented/form-rented"
import { dateBrFormat, moneyMask } from "@/lib/utils"

export default async function Rented() {
  const rented = await getRented()

  const Body = (): JSX.Element => (
    <>
      {rented.data.map((rent, index) => (
        <TableRow key={index}>
          <TableCell>{rent.renter.name}</TableCell>
          <TableCell>{rent.movie.title}</TableCell>
          <TableCell>{dateBrFormat(rent.rentalDate as string)}</TableCell>
          <TableCell>{dateBrFormat(rent.returnDate as string)}</TableCell>
          <TableCell>R$ {moneyMask(rent.lateFee)}</TableCell>
          <TableCell>R$ {moneyMask(rent.totalAmount)}</TableCell>
          <TableCell>{rent.status}</TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <FormRented />

      <DataTable
        title="Filmes alugados"
        header={["Locador", "Filme", "Retirada", "Devolução", "Multa", "Total", "Situação"]}
        body={<Body />}
        className="mt-6"
      />
    </>
  )
}
