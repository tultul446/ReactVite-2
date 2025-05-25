import React from 'react'
import { cn } from '../../lib/utils/index'


const ButtonCn = ({children, className }) => {
  return (
    <>
    <button className={cn("  max-w-[200px] md::h-[42px] border  border-[#d4c8c8] bg-white pt-[10px] pr-[18px]     pb-[16px] pl-[10px] gap-3 rounded-[6px] text-[#71717A] text-sm button" ,
      className
    )}>{ children }</button>
      
    </>
  )
}

export default ButtonCn;


  