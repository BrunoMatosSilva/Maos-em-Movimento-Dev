import { Title } from "@/app/components/Title";
import { ListAnamanesis } from "./components/ListAnamnesis";
import { NavLink } from "@/app/components/NavLink";

export default function AnamnesiId() {
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Lista de Anamnese" />
        <div className="mt-4">
        <NavLink href="/anamnesis/register/123456" name="Nova Ficha" />
        </div>
      <ListAnamanesis />
    </div>
  )
}