import React from 'react'
import Container from '../common/Container'
import { GetCards } from '../../lib/db'
import{ Link, useNavigate } from 'react-router'
const GetStart = () => {

const navigate = useNavigate();
 
const gotoNewIncident = () => {
  navigate('/NewIncident')
}

  return (
    <section className='text-center w-full lg:w-[1440px] h-[774px] mt-4 lg:mt-10 md:mt-7 lg:ml-5'>
     <Container>
        
        <h1 className=' text-3xl font-bold text-[#09090B ]'>Let’s get started </h1>
        <p  className='text-sm text-[#71717A] mt-2 font-semibold '>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br/>dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
        

        <div className='flex justify-center items-center mt-4'>
            <span className='w-[20px] h-[20px] rounded-[50%] bg-zinc-400'></span>
             <span className='w-[200px] h-[2px]  bg-zinc-400'></span>
            <span className='w-[20px] h-[20px] rounded-[50%] bg-zinc-400'></span>
            <span className='w-[200px] h-[2px]  bg-zinc-400'></span>
            <span className='w-[20px] h-[20px] rounded-[50%] bg-zinc-400'></span>
        </div>


         <div className='lg:flex md:flex lg:justify-center lg:items-center ml-5  space-y-[20px] lg:space-y-1 md:space-x-[20px] mt-6 '>
            {GetCards.map((item, i) => (
                <div key={i} className='bg-[#F4F4F5] p-4 w-[245px] h-[270px] space-y-6 hover:bg-[#f8f0ec]  hover:shadow-lg'>
                   <img src={item.icon} alt='' />
                    <h3 className=' text-start w-[190px] h-[43px] text-[20px] font-bold'>{item.title}</h3> 
                    <p className='mt-5 w-[195px] text-start text-sm text-[#71717A] '>{item.p}</p>
                </div>
            ))}
         </div>

         
         <button 
         
         onClick={() => gotoNewIncident()}

         className='mt-5 max-w-[370px] md:h-[42px] border  border-[#d4c8c8] bg-white px-6  gap-3 rounded-[3px] text-lg font-semibold text-[#71717A] button'>
           <Link to={'/NewIncident'}>
          Get start
          </Link>
          </button>
        </Container> 
    </section>
  )
}

export default GetStart
