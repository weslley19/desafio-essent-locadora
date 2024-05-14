import { getPerson } from "@/app/(auth)/person/actions"
import { getCategories } from "../../categories/actions"
import Forms from "./forms"

export default async function NewMovie () {
  const categories = await getCategories()
  const cast = await getPerson({
    type: 'actor'
  })

  return (
    <>
      <Forms categories={categories.data} cast={cast.data} />
    </>
  )
}
