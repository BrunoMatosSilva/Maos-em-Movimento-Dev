import { NavLink } from "@/app/components/NavLink";
import { Title } from "@/app/components/Title";
import { ListService } from "./components/ListService";

export default function Service(){
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Serviço do Dia" />
        <div className="mt-4">
        <NavLink href="/service/register/123456" name="Cadastra Serviço" />
        </div>
        <ListService />
    </div>
  )
}