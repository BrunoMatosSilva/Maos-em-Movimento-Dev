
import { NavLink } from "../components/NavLink";
import { Title } from "../components/Title";
import { ListPacients } from "./components/ListPacients";
import { Search } from "./components/Search";

export default function Home({qtyOfPacients = 1}) {
  return (
    <main className="w-full h-full flex flex-col mb-4 items-center relative">
      <Title title="Lista de Pacientes" />
      <div className="w-full flex justify-center" >
          <div className="w-full max-w-[500px] h-[50px] mt-[20px] px-2">
            <Search />
          </div>
        </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-between items-center w-full max-w-[800px] h-[50px] mt-8 mx-2">
        <h3 className="text-base md:text-2xl font-bold">{qtyOfPacients} Pacientes</h3>
        <NavLink href="/patient" name="Novo Paciente" />
        </div>
      </div>
      <ListPacients />
    </main>
  )
}
