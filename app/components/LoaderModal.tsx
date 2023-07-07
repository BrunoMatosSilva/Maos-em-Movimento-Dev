'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { BeatLoader } from "react-spinners"

export const LoaderModal = () => {
  return(
      <div className="bg-background/[.7] backdrop-blur-sm fixed w-full h-full left-0 top-0 flex items-center justify-center">
        <BeatLoader size={40} color="#cd2f20" />
      </div>
  )
}