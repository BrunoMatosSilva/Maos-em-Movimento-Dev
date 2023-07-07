import { Input } from "../components/Input"
import { LoaderModal } from "../components/LoaderModal"
import { Title } from "../components/Title"
import { RegisterForm } from "./components/RegisterForm"

export default function Patient() {


  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Novo Paciente" />
      <div className="w-full flex flex-1 justify-center" >
        <RegisterForm />
      </div>
    </div>
  )
}