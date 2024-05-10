"use client"

import DataTable from "@/components/shared/data-table/data-table"
import Modal from "@/components/shared/modals/modal"
import { TableCell, TableRow } from "@/components/ui/table"
import { usePerson } from "./core/hooks/usePerson"
import FormPerson from "./form-person/form-person"
import { PersonProps, PersonRole } from "./core/validation/interfaces"

const Person = (): JSX.Element => {
  const { openModal, handleOpenCloseModal } = usePerson()

  const person: PersonProps[] = [
    { name: 'Weslley', email: 'weslley@email.com', role: PersonRole.CLIENT },
    { name: 'Weslley', email: 'weslley@email.com', role: PersonRole.ACTOR },
    { name: 'Weslley', email: 'weslley@email.com', role: PersonRole.USER },
    { name: 'Weslley', email: 'weslley@email.com', role: PersonRole.DIRECTOR },
  ]

  const Body = (): JSX.Element => (
    <>
      {person.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.role}</TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <Modal
        title="Criar pessoa"
        labelButton="Adicionar pessoa"
        open={openModal}
        onClose={handleOpenCloseModal}
      >
        <FormPerson />
      </Modal>

      <DataTable
        title="Lista de pessoas"
        header={["Nome", "E-mail", "Cargo"]}
        body={<Body />}
        className="mt-6"
      />
    </>
  )
}

export default Person
