import { Title } from "@/app/components/Title";
import { RegisterForm } from "./components/RegisterForm";

export default function Register(){
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Ficha de Anamnese" />
      <div className="w-full flex flex-1 justify-center" >
        <RegisterForm />
      </div>
    </div>
  )
}