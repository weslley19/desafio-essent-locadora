import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "../(auth)/signin/page"
import Register from "../(auth)/signup/page"


const Page = (): JSX.Element => {
  return (
    <Tabs defaultValue="signin" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="signin">Entrar</TabsTrigger>
        <TabsTrigger value="signup">Cadastrar-se</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Login />
      </TabsContent>
      <TabsContent value="signup">
        <Register />
      </TabsContent>
    </Tabs>
  )
}

export default Page
