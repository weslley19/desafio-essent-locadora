import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import FormSignin from "./_components/form-signin"

export default function Login() {
  return (
    <>
      <div className="w-svh h-svh flex justify-center items-center bg-container">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <FormSignin />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
