import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Login from "../signin/page"
import Register from "../signup/page"

const Authentication = () => {
  return (
    <Tabs defaultValue="signin" className="w-[400px] absolute top-1/2	left-1/2	transform -translate-x-1/2 -translate-y-1/2">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Entrar</TabsTrigger>
        <TabsTrigger value="signup">Cadastrar-se</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Preencha os campos pra entrar no sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Login />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Cadastro</CardTitle>
            <CardDescription>Preencha os campos para se cadastrar no sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Register />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default Authentication
