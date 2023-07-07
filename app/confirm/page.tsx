import { Title } from "../components/Title";
import { Header } from "./components/Header";
import { LisTherapies } from "./components/ListTherapies";

export default function Confirm() {
  return(
    <div className="w-full h-full flex flex-col items-center">
        <Title isBackNav title="Confirmar Terapia" />
        <Header />
        <LisTherapies />
    </div>
  )
}