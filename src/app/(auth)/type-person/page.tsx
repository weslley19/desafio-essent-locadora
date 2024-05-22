import { getTypesPerson } from "./actions"
import { TableCell, TableRow } from "@/components/ui/table"
import FormTypePerson from "./_components/form-type-person/form-type-person"
import { dateBrFormat } from "@/lib/utils"
import DataTable from "@/components/data-table"

export default async function TypePerson() {
  const typesPerson = await getTypesPerson()

  const Body = (): JSX.Element => (
    <>
      {typesPerson.data.map((typePerson, index) => (
        <TableRow key={index}>
          <TableCell>{typePerson.name}</TableCell>
          <TableCell>{dateBrFormat(typePerson.createdAt as string) ?? '-'}</TableCell>
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
      />
    </>
  )
}
