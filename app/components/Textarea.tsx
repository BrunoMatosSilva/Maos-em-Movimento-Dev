'use client'

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps {
  label: string;
  id: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  disabled?: boolean;
  placeholder?: string;
}

export const Textarea = ({
  label,
  id,
  required,
  register,
  errors,
  disabled,
  placeholder
}: TextareaProps) => {
  return(
    <div className='flex gap-2'>
      <label
      htmlFor={id}
      className='text-sm leading-6 text-gray-900 font-semibold'
      >
        {label}
      </label>
      <div className='flex-1'>
        <textarea
        id={id}
        placeholder={placeholder}
        autoComplete={id}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(`
        form-input resize-none w-full pl-2 h-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6
        `,
        errors[id] && "focus:ring-rose-500",
        disabled && "opaciy-50 cursor-default"
        )}
        />
      </div>
    </div>
  )
}