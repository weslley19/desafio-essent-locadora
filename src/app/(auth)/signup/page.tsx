"use client"

import Loading from "@/components/shared/loading/loading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusIcon } from "@radix-ui/react-icons"
import { useRegister } from "./core/hook/useRegister"

const Register = (): JSX.Element => {
  const { hookForm, onSubmit, requestEndpoint } = useRegister()

  return (
    <form onSubmit={hookForm.handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 mb-4">
        <Label>Nome:</Label>
        <Input {...hookForm.register('name')} />
        {hookForm.formState.errors.name && <span className="text-xs	text-red-600">{hookForm.formState.errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label>E-mail:</Label>
        <Input {...hookForm.register('email')} />
        {hookForm.formState.errors.email && <span className="text-xs	text-red-600">{hookForm.formState.errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <Label>Senha:</Label>
        <Input {...hookForm.register('password')} type="password" />
        {hookForm.formState.errors.password && <span className="text-xs	text-red-600">{hookForm.formState.errors.password.message}</span>}
      </div>

      <Button variant={"default"} disabled={requestEndpoint}>
        <PlusIcon className="mr-2" />
        Cadastrar
        {requestEndpoint && <Loading />}
      </Button>
    </form>
  )
}

export default Register
