'use client'

import { Button } from "@/app/components/Button"
import { Input } from "@/app/components/Input"
import { FieldValues, useForm } from "react-hook-form"

export const EditForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues:{
      name: 'Bruno Matos Silva',
      date: '1991-09-11',
      fone: '11977553377',
      cep: '07152230',
      rua: 'João Dias',
      numero: '57',
      bairro: 'Parque Santos Dumont',
      cidade: 'Guarulhos',
    }
  })

  const onSubmit = (data: any) => {
    console.log(data)

  }

  return(
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-6 px-2 mt-14 w-full md:max-w-[800px]"
    >
          <div className="w-full">
          <Input
          id="name"
          label="Nome:"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Nome Completo"
          />
          </div>

          <div className="w-full flex justify-around">
          <Input
          id="date"
          label="Data de Nascimento:"
          required
          type="date"
          register={register}
          errors={errors}
          placeholder="99/99/9999"
          />

          <Input
          id="fone"
          label="Telefone:"
          required
          type="fone"
          register={register}
          errors={errors}
          placeholder="(11)9 9999-9999*"
          />

          <Input
          id="cep"
          label="CEP:"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="00000-000*"
          />
          </div>

          <div className="flex w-full gap-2">
            <div className="flex-1">
            <Input
            id="rua"
            label="Rua:"
            required
            type="text"
            register={register}
            errors={errors}
            placeholder="Rua*"
            />
          </div>

          <Input
          id="numero"
          label="Número:"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Nº*"
          />
          </div>

          <Input
          id="complemento"
          label="Complemento:"
          type="text"
          register={register}
          errors={errors}
          placeholder="Complemento"
          />

        <div className="flex w-full gap-2">
          <div className="flex-1">
            <Input
            id="bairro"
            label="Bairro:"
            required
            type="text"
            register={register}
            errors={errors}
            placeholder="Bairro*"
            />
          </div>

          <div className="flex-1">
            <Input
            id="cidade"
            label="Cidade:"
            required
            type="text"
            register={register}
            errors={errors}
            placeholder="Cidade*"
            />
          </div>
          </div>

          <div className="flex w-full">
            <Button type="submit">
              Alterar
            </Button>
          </div>
      </form>
  )
}