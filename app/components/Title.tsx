'use client'

import { ArrowCircleLeft } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TitleProps {
  isBackNav?: boolean;
  title: string;
}

export const Title = ({isBackNav, title}: TitleProps) => {
  const navigate = useRouter();

  const onNavBack = () => {
    navigate.back();
  }

  return(
    <div className="w-full mt-6 flex justify-center">
      <div className="w-full mx-2 h-150px max-w-[500px] flex items-center justify-between border-b-[1px] border-gray-200">
        {isBackNav ? (<button onClick={onNavBack}>
          <ArrowCircleLeft size={34} color="283460" />
        </button>) : ""}

        <Image src="/images/logo.png" alt="Logo" width={65} height={100} className="w-[65px] md:w-[100px]" unoptimized />
        <h1 className="text-xl md:text-3xl text-blue-900 font-barrio">{title}</h1>
      </div>
    </div>
  )
}