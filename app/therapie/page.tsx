import { NavLink } from "../components/NavLink";
import { Title } from "../components/Title";
import { ListTherapies } from "./components/ListTherapies";

export default function Therapie(){
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Terapias" />
        <div className="mt-4">
        <NavLink href="/therapie/register" name="Nova Terapia" />
        </div>
        <ListTherapies />
    </div>
  )
}