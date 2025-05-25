import React from 'react'
import { Link } from 'react-router';
import { navItems } from '../../lib/db';

const MobileMenu = ({toggleMenu}) => {
  return (
    <div className='lg:hidden  absolute top-0 left-0 w-full h-[400PX] bg-white z-50 p-6 overflow-hidden'>
    
     <div className='flex justify-between items-end pb-6'>
    
     <button className=' font-bold text-2xl self-end' aria-label='Close Menu' onClick={toggleMenu}>
     <i className="fa-solid fa-xmark text-red-500"></i>
     </button>

     </div>
     <div className='space-y-4'>
        {
            navItems.map(({label, link}, i) => (
            <Link to={link} key={i}
            className='block text-lg text-gray-700 hover:text-[#059DBE] transition-colors duration-150 '
            >{label}</Link>
        ))}
     </div>

    </div>
  )
}

export default MobileMenu;