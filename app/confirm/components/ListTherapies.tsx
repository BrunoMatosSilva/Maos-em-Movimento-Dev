'use client'

import * as Switch from '@radix-ui/react-switch';
import { useState } from 'react';

export const LisTherapies = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  console.log(isConfirm)

  return(
    <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-barrio">
            Paciente
          </h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-barrio">
            Data
          </h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-barrio">
            Realizada a Terapia
          </h2>
        </div>
      </div>
      
        <div className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
            <p className="font-semibold text-sm md:text-base whitespace-nowrap overflow-hidden">
              Bruno Matos Silva
            </p>
          <span className="text-sm md:text-base">13/06/2023</span>
          <div className="flex-col flex items-center md:flex-row">
          <div className="flex-col flex items-center md:flex-row">
              <Switch.Root
              defaultChecked={isConfirm}
              onCheckedChange={setIsConfirm}
                className="cursor-pointer w-[45px] h-[23px] bg-gray-400 rounded-full relative data-[state=checked]:bg-green-600 outline-none"
              >
              <Switch.Thumb
              className="block w-[19px] h-[19px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[24px]" 
              />
              </Switch.Root>
          </div>
          </div>
        </div>
    </div>
  )
}