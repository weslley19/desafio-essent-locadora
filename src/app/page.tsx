import Header from "@/components/shared/header/header";
import ListItem from "@/components/shared/sidebar/list-item";
import SideBar from "@/components/shared/sidebar/sidebar";
import { DesktopIcon, EnvelopeOpenIcon, HomeIcon, PersonIcon, PlayIcon, RocketIcon, TokensIcon } from "@radix-ui/react-icons";
import User from "./(registers)/users/page";
import GroupListItem from "@/components/shared/sidebar/group-list-item";

export default function Home() {
  return (
    <div className="flex font-extralight">
      <SideBar>
        <ListItem><TokensIcon className="mr-3" /> Home</ListItem>
        <GroupListItem title="CADASTROS">
          <ListItem><HomeIcon className="mr-3" /> Cliente</ListItem>
          <ListItem><PersonIcon className="mr-3" /> Usuário</ListItem>
        </GroupListItem>
        <GroupListItem title="LOCAÇÃO">
          <ListItem><PlayIcon className="mr-3" /> Filmes</ListItem>
          <ListItem><PersonIcon className="mr-3" /> Atores</ListItem>
          <ListItem><RocketIcon className="mr-3" /> Diretores</ListItem>
          <ListItem><DesktopIcon className="mr-3" /> Alugados</ListItem>
        </GroupListItem>

      </SideBar>
      <div className="w-full flex flex-col">
        <Header />
        <main className="container flex-grow py-8 bg-content">
          <User />
        </main>
      </div>
    </div>
  );
}
