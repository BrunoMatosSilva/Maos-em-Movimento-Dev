import { Title } from "@/app/components/Title";
import { UpdateService } from "./components/UpdateService";

export default function Update() {
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Alterar Serviço" />
      <div className="w-full flex flex-1 justify-center" >
        <UpdateService />
      </div>
    </div>
  )
}