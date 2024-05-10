"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import Loading from "@/components/shared/loading/loading"
import { useLogin } from "./core/hook/useLogin"

const Login = (): JSX.Element => {
  const { hookForm, onSubmit, requestEndpoint } = useLogin()

  return (
    <form onSubmit={hookForm.handleSubmit(onSubmit)}>
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
        <CheckIcon className="mr-2" />
        Entrar
        {requestEndpoint && <Loading />}
      </Button>
    </form>
  )
}

export default Login
