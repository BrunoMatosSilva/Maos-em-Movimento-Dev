import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';

const terapias = [
  {
    id: 1,
    name: "Reflexologia",
  },
  {
    id: 2,
    name: "Acumputura",
  },
  {
    id: 3,
    name: "Reiki",
  },
  {
    id: 4,
    name: "Shiatsu",
  },
]

type ModalServiceProps = {
  title: string;
  isTherapies: any;
  visible?: boolean;
  onCancel?: () => void;
}

export const ModalService = ({title, visible, onCancel}: ModalServiceProps) => {
  return(
    <Dialog.Portal>
      <AnimatePresence>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}

      className="bg-black/[.7] backdrop-blur-sm fixed w-full h-full left-0 top-0 flex items-center justify-center">
        <motion.div 
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0 }}
        exit={{opacity: 0, y: 50}}

        className="rounded bg-background shadow-md max-w-[280px] md:max-w-[450px] w-full p-4 md:p-6">
          <h1 className="text-base md:text-2xl font-semibold text-gray-700">
            {title}
          </h1>
          
          <form className='mt-8'>
            <select 
            className='text-sm md:text-base w-full rounded bg-gray-300 h-12 px-2 appearance-none'
            >
              <option value="Nenhuma">Terapias -</option>
              {terapias.map((therapie) => (
                <option key={therapie.id} value={JSON.stringify(therapie)}>{therapie.name}</option>
              ))}
            </select>
          </form>
          <footer className="mt-8 w-full flex justify-end gap-4">
          <Dialog.Close asChild>
            <button 
            onClick={onCancel} 
            type="button" 
            className="text-sm md:text-base rounded p-4 text-gray-400 transition-all hover:text-gray-600 font-semibold"
            >
              Cancelar
            </button>
            </Dialog.Close>
            
            <button 
            onClick={() => {}}
            type="button" 
            className="text-sm md:text-base rounded bg-green-400 transition-all hover:bg-green-900 p-4 text-white font-semibold"
            >
              Adicionar
            </button>
          </footer>
        </motion.div>
      </motion.div>
      </AnimatePresence>
    </Dialog.Portal>
  )
}