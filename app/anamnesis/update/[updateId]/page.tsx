import { Title } from "@/app/components/Title";
import { UpdateForm } from "./components/UpdateForm";

export default function UpdateId(){
    return(
      <div className="w-full h-full flex flex-col items-center">
          <Title isBackNav title="Editar Anamnese" />
        <div className="w-full flex flex-1 justify-center" >
          <UpdateForm />
        </div>
      </div>
    )
}