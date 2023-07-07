import Link from "next/link"


export const Menu = () => {
  return(
    <div className="w-full flex items-center justify-center bg-blue-900 text-white text-base p-2">
      <div className="flex gap-4">
        <Link
        className="transition-all hover:text-gray-400 "
        href="/">
          Pacientes
        </Link> |
        <Link 
        className="transition-all hover:text-gray-400 "
        href="/therapie">
          Terapias
        </Link> |
        <Link 
        className="transition-all hover:text-gray-400 "
        href="/confirm">
          Confirmar
        </Link>
      </div>
    </div>
  )
}