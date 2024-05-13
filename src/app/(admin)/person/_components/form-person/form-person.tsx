"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import Loading from "@/components/shared/loading/loading"
import { useFormPerson } from "./core/hook/useFormUser"
import Modal from "@/components/shared/modals/modal"
import { usePerson } from "../../core/hooks/usePerson"
import Select from "@/components/shared/select/select"
import { SelectItem } from "@/components/ui/select"

const FormPerson = (): JSX.Element => {
  const { hookForm, onSubmit } = useFormPerson()
  const { openModal, handleOpenCloseModal } = usePerson()

  return (
    <Modal
      title="Criar Pessoa"
      labelButton="Adicionar pessoa"
      open={openModal}
      onClose={handleOpenCloseModal}
    >
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <Label>Nome:</Label>
          <Input {...hookForm.register('name')} />
          {hookForm.formState.errors.name && <span className="text-xs	text-red-600">{hookForm.formState.errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Data de ascimento:</Label>
          <Input {...hookForm.register('birthday')} />
          {hookForm.formState.errors.birthday && <span className="text-xs	text-red-600">{hookForm.formState.errors.birthday.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>CPF:</Label>
          <Input {...hookForm.register('cpf')} />
          {hookForm.formState.errors.cpf && <span className="text-xs	text-red-600">{hookForm.formState.errors.cpf.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Tipo de usuário:</Label>
          <Select hookForm={hookForm} index="TypePersonType">
            <SelectItem value="1">Usuário</SelectItem>
            <SelectItem value="2">Cliente</SelectItem>
            <SelectItem value="3">Ator</SelectItem>
            <SelectItem value="4">Diretor</SelectItem>
          </Select>
          {hookForm.formState.errors.TypePersonType && <span className="text-xs	text-red-600">{hookForm.formState.errors.TypePersonType.message}</span>}
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

export default FormPerson
