import DataTable from "@/components/shared/data-table/data-table"
import { getTypesPerson } from "./actions"
import { TableCell, TableRow } from "@/components/ui/table"
import FormTypePerson from "./_components/form-type-person/form-type-person"

export default async function TypePerson() {
  const typesPerson = await getTypesPerson()

  const Body = (): JSX.Element => (
    <>
      {typesPerson.data.map((typePerson, index) => (
        <TableRow key={index}>
          <TableCell>{typePerson.name}</TableCell>
          <TableCell>{typePerson.createdAt ?? '-'}</TableCell>
        </TableRow>
      ))}
    </>
  )
  return (
    <>
      <FormTypePerson />

      <DataTable
        title="Tipos de pessoas"
        header={["Nome", "Criado em"]}
        body={<Body />}
        className="mt-6"
      />
    </>
  )
}
