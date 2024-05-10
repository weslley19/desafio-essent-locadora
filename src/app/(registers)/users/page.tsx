"use client"

import DataTable from "@/components/shared/data-table/data-table"
import Modal from "@/components/shared/modals/modal"
import { TableCell, TableRow } from "@/components/ui/table"
import { useUsers } from "./core/hooks/useUsers"
import FormUser from "./form-user/form-user"

const User = (): JSX.Element => {
  const { openModal, handleOpenCloseModal } = useUsers()

  const Body = (): JSX.Element => (
    <>
      <TableRow>
        <TableCell>Teste</TableCell>
        <TableCell>Teste</TableCell>
        <TableCell>Teste</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Teste</TableCell>
        <TableCell>Teste</TableCell>
        <TableCell>Teste</TableCell>
      </TableRow>
    </>
  )

  return (
    <>
      <Modal
        title="Criar usuário"
        labelButton="Adicionar usuário"
        open={openModal}
        onClose={handleOpenCloseModal}
      >
        <FormUser />
      </Modal>

      <DataTable
        title="Lista de usuários"
        header={["Name", "Email", "Role"]}
        body={<Body />}
        className="mt-6"
      />
    </>
  )
}

export default User
