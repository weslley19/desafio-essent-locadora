"use client"

import Modal from "@/components/shared/modals/modal"
import { useRented } from "./core/hook/useRented"
import DataTable from "@/components/shared/data-table/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { RentMovieProps } from "./core/validation/interfaces"

const Rented = (): JSX.Element => {
  const { openModal, handleOpenCloseModal } = useRented()

  const rents: RentMovieProps[] = [
    { locator: 'Weslley', movie: 'Filme 1', withdrawal: '10/10/2021', devolution: '10/10/2021', hour: '10:00', multa: 'R$ 0,00', total: 'R$ 0,00', situation: 'Alugado' },
    { locator: 'Weslley', movie: 'Filme 2', withdrawal: '10/10/2021', devolution: '10/10/2021', hour: '10:00', multa: 'R$ 0,00', total: 'R$ 0,00', situation: 'Alugado' },
    { locator: 'Weslley', movie: 'Filme 3', withdrawal: '10/10/2021', devolution: '10/10/2021', hour: '10:00', multa: 'R$ 0,00', total: 'R$ 0,00', situation: 'Alugado' },
    { locator: 'Weslley', movie: 'Filme 4', withdrawal: '10/10/2021', devolution: '10/10/2021', hour: '10:00', multa: 'R$ 0,00', total: 'R$ 0,00', situation: 'Alugado' },
  ]

  const Body = (): JSX.Element => (
    <>
      {rents.map((rent, index) => (
        <TableRow key={index}>
          <TableCell>{rent.locator}</TableCell>
          <TableCell>{rent.movie}</TableCell>
          <TableCell>{rent.withdrawal}</TableCell>
          <TableCell>{rent.devolution}</TableCell>
          {/* <TableCell>{rent.hour}</TableCell> */}
          <TableCell>{rent.multa}</TableCell>
          <TableCell>{rent.total}</TableCell>
          <TableCell>{rent.situation}</TableCell>
        </TableRow>
      ))}
    </>
  )
  return (
    <>
      <Modal
        title="Novo aluguel"
        labelButton="Adicionar aluguel"
        open={openModal}
        onClose={handleOpenCloseModal}
      >
        ...
      </Modal>

      <DataTable
        title="Lista de filmes alugados"
        header={["Locador", "Filme", "Retirada", "Devolução", "Multa", "Total", "Situação"]}
        body={<Body />}
        className="mt-6"
      />
    </>
  )
}

export default Rented
