'use client'

import { Button } from "@/app/components/Button"
import { Input } from "@/app/components/Input"
import { RadioInput } from "@/app/components/RadioInput"
import { Textarea } from "@/app/components/Textarea"
import { useForm } from "react-hook-form"

export const RegisterForm = () => {
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
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-6 px-2 my-14 w-full md:max-w-[800px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Fumante: </p>
            <RadioInput 
            name="smoker" 
            id="smoker-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="smoker" 
            id="smoker-não" 
            value="Não" 
            register={register} 
            />
        </div>

        <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Insônia: </p>
            <RadioInput 
            name="insonia" 
            id="insonia-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="insonia" 
            id="insonia-não" 
            value="Não" 
            register={register} 
            />
          </div>
        

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Stress: </p>
            <RadioInput 
            name="stress" 
            id="stress-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="stress" 
            id="stress-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Anemia: </p>
            <RadioInput 
            name="anemia" 
            id="anemia-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="anemia" 
            id="anemia-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Gestante: </p>
            <RadioInput 
            name="gestante" 
            id="gestante-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="gestante" 
            id="gestante-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Diabético(a): </p>
            <RadioInput 
            name="diabetico" 
            id="diabetico-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="diabetico" 
            id="diabetico-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-1">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Doença Circular: </p>
            <RadioInput 
            name="circulatoria" 
            id="circulatoria-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="circulatoria" 
            id="circulatoria-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Dor na Perna: </p>
            <RadioInput 
            name="perna" 
            id="perna-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="perna" 
            id="perna-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Enxaqueca: </p>
            <RadioInput 
            name="enxaqueca" 
            id="enxaqueca-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="enxaqueca" 
            id="enxaqueca-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Hipertenso(a): </p>
            <RadioInput 
            name="hipertenso" 
            id="hipertenso-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="hipertenso" 
            id="hipertenso-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Alergia: </p>
            <RadioInput 
            name="alergia" 
            id="alergia-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="alergia" 
            id="alergia-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Dor na Coluna: </p>
            <RadioInput 
            name="coluna" 
            id="coluna-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="coluna" 
            id="coluna-não" 
            value="Não" 
            register={register} 
            />
          </div>

          </div>

          <p className='text-sm mt-4 md:text-base text-blue-600 font-bold'>Pratica atividade física?</p>
          <div className="flex items-center gap-2">
            <RadioInput 
            name="fisica" 
            id="fisica-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="fisica" 
            id="fisica-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="w-full">
          <Input
          id="doença-fisica"
          label="Se sim, Qual?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Informe o nome"
          />
          </div>

          <div className="w-full">
          <Input
          id="outra-doença-fisica"
          label="Alguma outra doença?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Informe o nome"
          />
          </div>

          <p className='text-sm mt-4 md:text-base text-blue-600 font-bold'>Fez alguma cirurgia?</p>
          <div className="flex items-center gap-2">
            <RadioInput 
            name="cirurgia" 
            id="cirurgia-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="cirurgia" 
            id="cirurgia-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="w-full">
          <Input
          id="doença-cirurgia"
          label="Se sim, Qual?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Informe o nome"
          />
          </div>

          <p className='text-sm mt-4 md:text-base text-blue-600 font-bold'>Faz uso de algum medicamento?</p>
          <div className="flex items-center gap-2">
            <RadioInput 
            name="medicamento" 
            id="medicamento-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="medicamento" 
            id="medicamento-não" 
            value="Não" 
            register={register} 
            />
          </div>

          <div className="w-full">
          <Input
          id="doença-medicamento"
          label="Se sim, Qual?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Informe o nome"
          />
          </div>

          <div className="w-full">
          <Textarea
          id="queixa"
          label="Qual sua queixa principal?"
          required
          register={register}
          errors={errors}
          placeholder="Escreva a queixa em detalhes"
          />
          </div>

          <div className="w-full">
          <Textarea
          id="frase"
          label="Qual sua frase mais usada?"
          required
          register={register}
          errors={errors}
          placeholder="Escreva a frase"
          />
          </div>

          <div className="w-full">
          <Input
          id="projeto"
          label="Como conheceu o projeto?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Instagram, Indicação..."
          />
          </div>

        <div>
            <Button
            type="submit"
            >
              Cadastrar
            </Button>
        </div>
    </form>
  )
}