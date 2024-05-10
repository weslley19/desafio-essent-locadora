import Header from "@/components/shared/header/header";
import ListItem from "@/components/shared/sidebar/list-item";
import SideBar from "@/components/shared/sidebar/sidebar";
import { EnvelopeOpenIcon, HomeIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons";
import User from "./(registers)/users/page";

export default function Home() {
  return (
    <div className="flex font-extralight">
      <SideBar>
        <ListItem><HomeIcon className="mr-3" /> Home</ListItem>
        <ListItem><PersonIcon className="mr-3" /> People</ListItem>
        <ListItem><RocketIcon className="mr-3" /> Messages</ListItem>
        <ListItem><EnvelopeOpenIcon className="mr-3" /> Support</ListItem>
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
