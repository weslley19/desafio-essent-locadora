import { getTypesPerson } from "@/app/(auth)/type-person/actions"
import Select from "@/components/shared/select/select"
import { SelectItem } from "@/components/ui/select"

interface SelectTypePersonProps {
  hookForm: any
}

export default async function SelectTypePerson({ hookForm }: SelectTypePersonProps) {
  const typesPerson = await getTypesPerson()

  return (
    <>
      <Select hookForm={hookForm} index="TypePersonType">
        {typesPerson.data.map((type, index) => (
          <SelectItem key={index} value={type.id.toString()}>{type.name}</SelectItem>
        ))}
      </Select>
    </>
  )
}

