import { Title } from "@/app/components/Title";
import { RegisterService } from "./components/RegisterService";

export default function Register() {
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Cadastra Serviço" />
      <div className="w-full flex flex-1 justify-center" >
        <RegisterService />
      </div>
    </div>
  )
}