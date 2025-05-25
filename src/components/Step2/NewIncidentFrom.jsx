import React from 'react'
import Container from '../common/Container'
import ButtonCn from './ButtonCn'
import { Link, useNavigate } from 'react-router'


const NewIncidentFrom = () => {
  const navigate = useNavigate();
 
  const gotoMap = () => {
    navigate('/IncidentMap')
  }
  


  return (
    <section className='h-auto'>
      <Container >'

           {/* New Incident Header section */}
           <header className='md:-ml-9 w-[1340px] bg-[#E4E4E7] py-5 px-10 -mt-6'>

<div className='space-y-3 md:space-y-0 md:flex md:justify-between md:items-center mx-auto'>

<div className='flex items-center gap-4'>
 <button className='text-xl font-bold text-[#a0a0a3] w-[41px] h-[41px] rounded-full bg-[#f8f8fd]'>
 <i className="fa-solid fa-xmark"></i>
 </button>
  <div>
    <p className='text-[12px] w-[179px] h-[15px] text-[#71717A]'>Home - Incidents - New Incident</p>
    <h3 className='w-[163px] h-[33px] font-semibold text-[26px] '>New Incident</h3>
  </div>

</div>


<div className='hidden md:flex items-center'>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#FB923C] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 <span className='w-[98px] h-[5px] top-[24.5px] bg-[#c1c0bf] '></span>
 
</div>

<div  className='flex items-center gap-4'>
 <ButtonCn className='px-10 text-sm'>Back</ButtonCn>
 <ButtonCn
  onClick={() => gotoMap()}
 className='px-10 text-sm'>
  <Link to='/IncidentMap'>
  Next step
  </Link>
 </ButtonCn>
</div>


</div>

</header>


            {/* New Incident Form section */}
        <div className='ml-2 text-center mt-10 w-[242px]  md:w-[752px]  lg:w-[1340px] h-full md:h-[597px]'>
            <div className='w-auto md:w-[600px] lg:w-[752px] md:h-[366px] h-auto space-y-[25px] mx-auto'>
            <div className='text-start space-y-6 lg:space-y-4'>
                <h1 className=' mt-5 md:mt-1 lg:mt-.5 text-[24px] font-bold w-auto  md:w-[600px] lg:w-[700px] h-[49px]  lg:h-[31px]'> Let’s give the incident a title?</h1>
                <p className='mt-5 md:mt-1 lg:mt-.5 text-[14px] min-w-[230px] md:w-[301px]  lg:w-[371px] h-[26px] lg:h-[11px] font-[400] text-[#71717A]'>Make a title that will easily identify the incidents</p>
                <input type="text" id='text' value='Add title here...' placeholder='Add title here...' className='max-w-[330px] lg:max-w-[782px] xl:w-full h-[50px] rounded-[6px] border-[1px] border-[#F4F4F5] text-[#4c4c51] bg-[#ececf8] px-4 active:bg-[#e6d1bf]'/>
            </div>




            <div className='text-start space-y-10 lg:space-y-4'>

          <h1 className='py-1 min-w-[230px]  sm:w-[400px] md:w-[500px] lg:w-[700px] h-[49px] lg:h-[31px] text-[24px] font-[700]'>Describe what happened during the incident?</h1>
       
         <p className='py-4 min-w-[230px] ms:w[350px] md:w-[400px] lg:w-[436px] h-[38px] lg:h-[10px] font-[400] text-[14px] text-[#71717A]'>Share some information about the incident. The when, where, how. </p>
        
         <textarea id='text' value='Type here' placeholder='Type here' rows="4" cols="50" className='bg-[#ececf8] mt-7 max-w-[300px]  md:max-w-[452px] lg:max-w-[752px] xl:w-full  h-[127px] rounded-[6px] border-[1px] border-zinc-100 active:bg-[#e6d1bf] p-4'></textarea>
            </div>
        </div>
        </div>

      </Container>
    </section>
  )
}

export default NewIncidentFrom
