'use client'

import { NotePencil, Trash } from "@phosphor-icons/react"
import Link from "next/link"
import * as Dialog from '@radix-ui/react-dialog';
import { ModalDelete } from "@/app/components/ModalDelete";

export const ListPacients = ({qtyOfPacients = 2}) => {

  const handleDeletePacient = () => {

  }

  return(
    <Dialog.Root>
    <div className="flex flex-col items-center justify-center w-full">
      {qtyOfPacients > 0 && (
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-barrio">Nome</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-barrio">Telefone</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-barrio">Fichas</h2>
        </div>
      </div>
      )}
      
        <div className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
          <Link href={`/pacient/`} className="decoration-0 transition-all hover:opacity-70">
            <p className="font-semibold text-sm max-w-[100px] md:text-base md:min-w-[300px] whitespace-nowrap overflow-hidden">
              Bruno Matos Silva
            </p>
          </Link>
          <span className="text-sm md:text-base">11 97755-3377</span>
          <div className="flex-col flex items-center md:flex-row">
          <Link className="bg-blue-900 text-white font-semibold rounded-md p-[10px] transition-all hover:bg-blue-800 text-sm md:text-base" 
          href={`/anamnesis/13213131`}>Anamnese</Link>
          <Link className="mt-2 md:ml-2 md:mt-0 bg-blue-900 text-white font-semibold rounded-md p-[10px] transition-all hover:bg-blue-800 text-sm md:text-base" 
          href={`/service/1313143`}>Serviço</Link>
          <Link className="mt-2 md:ml-2 md:mt-0 bg-blue-900 text-white font-semibold rounded-md p-[10px] transition-all hover:bg-blue-800 text-sm md:text-base" 
          href={`/paymant/1234546`}>Recibo</Link>
          <Link href={`/patient/123456`} className="md:ml-2 md:mt-0 mt-2 transition-all hover:opacity-70">
            <NotePencil size={24} color="#283460" />
          </Link>
          <Dialog.Trigger asChild>
            <button 
            className="md:ml-2 transition-all hover:opacity-70"
            onClick={handleDeletePacient}
            >
              <Trash size={24} color="red" />
            </button>
          </Dialog.Trigger>
          </div>
        </div>

        <ModalDelete />
    </div>
    </Dialog.Root>
  )
}