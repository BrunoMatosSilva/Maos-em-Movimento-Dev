import { Title } from "@/app/components/Title";
import { FormRegisterTherapie } from "./components/FormRegisterTherapie";

export default function Register() {
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Cadastrar Terapia" />
        <FormRegisterTherapie />
    </div>
  )
}