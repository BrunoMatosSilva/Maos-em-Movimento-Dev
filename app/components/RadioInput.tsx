import { FieldValues, UseFormRegister } from "react-hook-form"

interface RadioInputProps {
  id: string;
  value: string;
  name: string;
  register: UseFormRegister<FieldValues>
}

export const RadioInput = ({ register, id, value, name }: RadioInputProps) => {
  return(
    <label 
      htmlFor={id}
      className="text-sm md:text-base"
    >
      <input
        {...register(name)}
        type="radio"
        value={value}
        id={id}
        className="mr-1"
        />
        {value}
      </label>
  )
}