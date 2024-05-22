"use client"

import { useFormSignin } from "./core/hook/useFormSignin"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FormSignin() {
  const { hookForm, onSubmit } = useFormSignin()

  return (
    <>
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-1.5 mb-4">
          <Label>Usuário</Label>
          <Input {...hookForm.register('username')} placeholder="Informe seu usuário" />
          {hookForm.formState.errors.username && <span className="text-xs	text-red-600">{hookForm.formState.errors.username.message}</span>}
        </div>
        <div className="flex flex-col space-y-1.5 mb-8">
          <Label>Senha</Label>
          <Input {...hookForm.register('password')} placeholder="Informe sua senha" type="password" />
          {hookForm.formState.errors.password && <span className="text-xs	text-red-600">{hookForm.formState.errors.password.message}</span>}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={hookForm.formState.isSubmitting}
        >
          Entrar {hookForm.formState.isSubmitting && <span className="ml-2 animate-pulse w-5 h-5 bg-content rounded-full"></span>}
        </Button>
      </form>
    </>
  )
}
