import React from 'react'
import Container from '../common/Container';
import { navItems } from '../../lib/db';
import { useState } from 'react';

import MobileMenu from './mobileMenu';
import { Link } from 'react-router';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active , setActive] = useState(0)
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className='bg-[#E4E4E7] w-full  lg:w-[1340px] h-auto  p-3 mx-auto'>
      <Container className='  lg:max-w-[1440px]  bg-[#E4E4E7]'>

        {/* Nav section */}
        <div className='bg-[#E4E4E7] flex justify-between items-center md:max-w-[1269px] h-[41px] lg:gap-[158px] my-[23px] '>
          <div  className='lg:mt-10'>
            <img src="./logo.png" alt=""/>

 </div>


           <div className='w-[570px] h-[18px]'>
            
            {/* navItems */}
          <div 
          className='hidden lg:flex xl:flex  justify-center items-center gap-[15px]  lg:gap-[30px]  mt-10'>
            {navItems.map(({label, link}, i) => (
            <Link to={link} key={i} onClick={() => setActive(i)}  >
                <p 
               className={`text text-sm ${
                active === i ? 'text-black font-bold border-b-2 border-black pb-1' : 'text-[#A1A1AA]'
              }`}>
                  {label}
                  </p>
            </Link>


)) }</div>

           
</div>



<div className='hidden md:flex lg:flex gap-1 mt-10'>
           <img src="./icon1.png" alt="" className='w-[40px] h-[40px] ' />
           <img src="icon2.png" alt=""  className='w-[40px] h-[40px] '/>

           <div className='text-[#A1A1AA]'>
            <p className='text-[16px] font-bold'>Usman Zafar</p>
            <p className='text-[13px] font-semibold'>usmanzafar@gmail.com</p>
           </div>

          </div>



    {/* Mobile Menu */}

    <div className=' flex justify-center items-center gap-2.5'>
            <button className='lg:hidden  z-1'
            onClick={toggleMenu}>
              
                <div className='space-y-1'>
              <span className='block w-7 h-1 bg-black '></span>
              <span className='block w-7 h-1 bg-black '></span>
              <span className='block w-7 h-1 bg-black '></span>
              </div>
              
              </button> 
               
               
            </div>
        </div>
       {isMenuOpen && <MobileMenu toggleMenu={toggleMenu}/>  }


       <div>
  <div className='lg:max-w-[1440px] hidden lg:flex   h-[3px] bg-zinc-400 mt-14'/>
</div>
      


      </Container>
    </nav>
  )
}

export default Navbar;   