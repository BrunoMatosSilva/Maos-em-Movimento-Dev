import { Title } from "@/app/components/Title";
import { EditForm } from "./components/EditForm";

export default function PatientId() {
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Editar Paciente" />
      <div className="w-full flex flex-1 justify-center" >
        <EditForm />
      </div>
    </div>
  )
}