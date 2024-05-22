import { getPerson } from "@/app/(auth)/person/actions"
import Forms from "./forms"

export default async function NewMovie () {
  const cast = await getPerson()

  return (
    <>
      <Forms cast={cast!} />
    </>
  )
}
