import React from 'react'

const Button = () => {
  return (
    <div className='flex justify-end items-center gap-5 '>

      <button className='  max-w-[200px] md:h-[42px] border  border-[#d4c8c8] bg-white pt-[10px] pr-[18px]     pb-[16px] pl-[10px] gap-3 rounded-[6px] text-[#71717A] text-sm button'>
        <i className="fa-solid fa-magnifying-glass mr-2"></i>
      Search incident</button>

      <button className='  max-w-[200px] md::h-[42px] border  border-[#d4c8c8] bg-white pt-[10px] pr-[18px]     pb-[16px] pl-[10px] gap-3 rounded-[6px] text-[#71717A] text-sm button'>Sort By: Date modified</button>

      <button className=' max-w-[200px] md:h-[42px] border  border-[#d4c8c8] bg-white pt-[10px] pr-[18px] pb-[16px] pl-[10px] gap-3 rounded-[6px] text-sm text-[#71717A] button'>Cypher AI</button>
    </div>
  )
}

export default Button;
