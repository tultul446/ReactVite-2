import React from 'react'
import Container from '../common/Container'
import Button from '../common/Button'
import { DashboardData } from '../../lib/db'
import ChatWithCypher from './ChatWith'


const Dashboard = ( ) => {
  return (
   
       
    <section>
     <Container>
      

     <div className='lg:flex justify-between items-center bg-[#E4E4E7] w-full lg:w-[1340px] mx-auto lg:-ml-9 p-2 md:p-3 lg:p-5' >
   <div>
    <p className='text-sm text-[#71717A]'>Welcome back</p>
    <h1 className='text-4xl font-bold  '>Dashboard</h1>
   </div>
    <Button/>

   </div>
 
<div >

  <div className='mt-6 grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px] max-w-auto lg:h-[709] h-auto mx-auto  '>

  {DashboardData.map((item, i) => (
            <div key={i}  className=''>
 <img src={item.imag} alt="" className='w-[306px]' />
        <h3 className='font-bold text-[16px] text-[#09090B] '>{item.title}</h3>
        <p className='text-sm text-[#71717A]'>{item.des}</p>
        <p className='font-bold text-[16px]'>{item.tk}</p>
        </div> 
          
        ))}

       
         {/* Chat with Cypher section */}
       <div className='flex justify-end items-center mb-3'>

          <div >

           <ChatWithCypher/>
          </div>

         </div>
       </div>

  </div>
        </Container> 
    </section>
  )
}

export default Dashboard
