"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import { useFormTypePerson } from "./hook/useFormTypePerson"
import { useTypePerson } from "../../core/hook/useTypePerson"
import Modal from "@/components/modal"

const FormTypePerson = (): JSX.Element => {
  const { hookForm, onSubmit } = useFormTypePerson()
  const { openModal, handleOpenCloseModal } = useTypePerson()

  return (
    <Modal
      title="Criar Tipo Pessoa"
      labelButton="Adicionar tipo"
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
            {hookForm.formState.isSubmitting && <span>...</span>}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default FormTypePerson
