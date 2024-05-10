import DataTable from "@/components/shared/data-table/data-table"
import { TableCell, TableRow } from "@/components/ui/table"

const User = (): JSX.Element => {
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
    <DataTable
    title="Lista de usuários"
      header={["Name", "Email", "Role"]}
      body={<Body />}
    />
  )
}

export default User
