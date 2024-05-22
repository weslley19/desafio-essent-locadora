import { TableCell, TableRow } from "@/components/ui/table"
import { getRented } from "./actions"
import FormRented from "./_components/form-rented/form-rented"
import { dateBrFormat, moneyMask } from "@/lib/utils"
import DataTable from "@/components/data-table"
import { getPerson } from "../person/actions"
import { getMovies } from "../movies/action"

export default async function Rented() {
  const rented = await getRented()
  const persons = await getPerson()
  const movies = await getMovies()

  const Body = (): JSX.Element => (
    <>
      {rented?.map((rent, index) => (
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
      <FormRented
        locadores={persons!}
        movies={movies!}
      />

      <div className="mt-10" />

      <DataTable
        title="Filmes alugados"
        header={["Locador", "Filme", "Retirada", "Devolução", "Multa", "Total", "Situação"]}
        body={<Body />}
        total={rented?.length ?? 0}
      />
    </>
  )
}
