'use client'

import { Button } from "@/app/components/Button"
import { ModalService } from "@/app/components/ModalService"
import { XCircle } from "@phosphor-icons/react"
import * as Dialog from '@radix-ui/react-dialog';


export const UpdateService = () => {

  const handleDeleteService = () => {

  }

  return(
    <Dialog.Root>
    <form noValidate className='flex flex-col px-2 gap-8 mt-14 w-full max-w-[800px]'>
        <h3 className="border-b border-gray-200 text-blue-800 font-semibold">Terapias</h3>
        <div className='flex flex-col w-full'>
          <div className='flex w-full justify-end'>
          <Dialog.Trigger asChild>
            <button
            onClick={handleDeleteService}
            className='bg-green-600 text-white rounded px-4 py-1 transition-colors hover:bg-green-800'>
              + Terapia
            </button>
            </Dialog.Trigger>
          </div>
        <div className='grid grid-cols-4 gap-2 mt-4'>
            <span 
            className='flex items-center justify-center hover:text-gray-400 group bg-red-400 rounded py-2 px-6 transition-colors text-sm overflow-hidden hover:bg-gray-600'>
              <p className='text-white  transition-all group-hover:text-opacity-0 font-semibold'>Acumputura</p>
              <button className="flex absolute invisible transition-all group-hover:visible"
              onClick={() => {}}
              type="button"
              >
                <XCircle
                className="text-red-600 transition-colors hover:text-red-400" 
                size={24} />
              </button>
            </span>
        </div>
    </div>
    <ModalService 
    title="Qual foi a terapia realizada?"
    isTherapies=""
    />
    <div className="sticky">
    <Button>
      Alterar
    </Button>
    </div>
    </form>
    </Dialog.Root>
  )
}