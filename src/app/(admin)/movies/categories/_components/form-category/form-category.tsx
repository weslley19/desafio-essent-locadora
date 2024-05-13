"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import Loading from "@/components/shared/loading/loading"
import Modal from "@/components/shared/modals/modal"
import { useFormCategory } from "./core/hook/useFormCategory"
import { useCategory } from "../../core/hook/useCategory"

const FormCategory = (): JSX.Element => {
  const { hookForm, onSubmit } = useFormCategory()
  const { openModal, handleOpenCloseModal } = useCategory()

  return (
    <Modal
      title="Criar categoria"
      labelButton="Adicionar categoria"
      open={openModal}
      onClose={handleOpenCloseModal}
    >
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <Label>Nome:</Label>
          <Input {...hookForm.register('name')} />
          {hookForm.formState.errors.name && <span className="text-xs	text-red-600">{hookForm.formState.errors.name.message}</span>}
        </div>

        <hr className="my-5" />

        <div className="flex justify-end">
          <Button variant={"default"} disabled={hookForm.formState.isSubmitting}>
            <CheckIcon className="mr-2" />
            Confirmar
            {hookForm.formState.isSubmitting && <Loading />}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default FormCategory
