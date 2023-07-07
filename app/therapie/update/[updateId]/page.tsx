import { Title } from "@/app/components/Title";
import { FormUpdateTherapie } from "./components/FormUpdateTherapie";

export default function Update() {
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Editar Terapia" />
        <FormUpdateTherapie />
    </div>
  )
}