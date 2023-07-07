'use client'

import { Button } from "@/app/components/Button"
import { Input } from "@/app/components/Input"
import { useForm } from "react-hook-form"

export const FormRegisterTherapie = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)

    reset()
  }

  return(
    <form 
    noValidate 
    onSubmit={handleSubmit(onSubmit)} 
    className='flex flex-col gap-6 px-2 mt-14 w-full md:max-w-[800px]'
    >
      <div className="w-full">
        <Input 
        id="name-therapie"
        label="Nome da Terapia"
        required
        type="text"
        register={register}
        errors={errors}
        placeholder="Digite o nome da Terapia"
        />
      </div>

      <div className="w-full">
        <Input 
        id="therapiest"
        label="Profissional que Realiza"
        required
        type="text"
        register={register}
        errors={errors}
        placeholder="Profisisonal que realiza"
        />
      </div>

      <div className="flex w-full">
        <Button
        type="submit"
        >
          Cadastrar
        </Button>
      </div>
    </form>
  )
}