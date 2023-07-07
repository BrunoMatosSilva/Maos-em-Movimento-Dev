'use client'

import { Button } from "@/app/components/Button";
import { Select } from "@/app/components/Select"
import { FileSearch } from "@phosphor-icons/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

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

export const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors
  }
} = useForm<FieldValues>({
    defaultValues: {
      name: ''
    }
  })

  const terapieName = watch('name')

  const handleFilter = () => {
    console.log('disparo filtro')
  }

  return(
    <div className="flex justify-center w-full">
        <div className="flex justify-between items-center w-full max-w-[800px] h-[50px] mt-8 mx-2">
          <div className="flex items-center gap-2">
            <p className="text-base font-bold text-blue-400 mt-2">Terapias:</p>
              <Select 
              disabled={isLoading}
              options={terapias.map((terapia) => ({
                value:terapia.id,
                label:terapia.name
              }))}
              onChange={(value) => setValue('name', value, {
                shouldValidate: true
              })}
              onBlur={handleFilter}
              value={terapieName}
              />
          </div>
          <div className="flex items-center">
          <strong>Dia de Hoje: </strong>
          <span>13/06/2023</span>
          </div>
        </div>
    </div>
  )
}