'use client'

import { NotePencil, Trash } from "@phosphor-icons/react"
import Link from "next/link"
import * as Dialog from '@radix-ui/react-dialog';
import { ModalDelete } from "@/app/components/ModalDelete";

export const ListService = () => {

    const handleDeletePacient = () => {
  
    }

  return(
    <Dialog.Root>
      <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-barrio">
            Nome do paciente
          </h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3">
            Data cadastrada
          </h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3">
          </h2>
        </div>
      </div>
        
          <div className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
          
            <p className="text-sm md:text-base font-semibold">
              Bruno Matos Silva
            </p>

            <p className="text-sm md:text-base font-semibold">
              15/06/2023
            </p>
          
          <div className="flex-col flex items-center md:flex-row">
          <Link href={`/service/update/31321211321`} className="md:ml-2 md:mt-0 mt-2 transition-all hover:opacity-70">
            <NotePencil size={24} color="#283460" />
          </Link>
          <Dialog.Trigger asChild>
            <button className="md:ml-2 transition-all hover:opacity-70"
            onClick={handleDeletePacient}
            >
              <Trash size={24} color="red" />
            </button>
          </Dialog.Trigger>
          </div>
        </div>
        <ModalDelete />
    </Dialog.Root>
  )
}
