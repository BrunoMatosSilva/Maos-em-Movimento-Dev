import Link from "next/link";

interface NavLinkProps {
  href: string;
  name: string;
}

export const NavLink = ({href, name}: NavLinkProps) => {
  return(
      <Link 
    href={href}
    className="border-[1px] flex items-center text-sm md:text-base h-12 px-2 text-green-700 font-semibold border-green-700 rounded-md shadow-md shadow-gray-300 transition-all hover:bg-green-400 hover:border-green-400 hover:text-white"
    >
      {name}
    </Link>
  )
}