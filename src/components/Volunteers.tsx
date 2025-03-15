
import img1 from '../assets/g1.png'
import whatsapp from '../assets/WhatsApp_icon.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/Instagram_icon.png'

import EmptyGlassHeadline from './ui/EmptyGlassHeadline'
const Volunteers = () => {
  return (
    <>
<section className='px-0 py-12 text-center'>
  <h2 className='text-6xl text-black'>Meet Our Volunteer</h2>
   <EmptyGlassHeadline/>
   
  <div className=''>

    <article className='inline-block m-5 w-[30%] max-sm:w-[90%]'>
      <img src={img1} alt=""  className='w-full h-auto '/>
      <h3 className='mt-2.5 text-4xl text-black'>Geet Kumari</h3>
      <p className='text-sm text-black py-1'>CTO,Almadat</p>
     <div className='flex flex-row justify-center gap-4 mt-3 '>
      
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="whatsapp" className='w-10 h-10 shadow-2xl' />
      </a>

      <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="facebook" className='w-10 h-10 shadow-2xl'/>
      </a>

      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="instagram" className='w-8 h-8 shadow-2xl mt-1 '/>
    </a>
      </div>  
    </article>
    <article className='inline-block m-5 w-[30%] max-sm:w-[90%]'>
    <img src={img1} alt=""  className='w-full h-auto'/>
      <h3 className='mt-2.5 text-4xl text-black'>Geet Kumari</h3>
      <p className='text-sm text-black py-1'>CTO,Almadat</p>
      <div className='flex flex-row justify-center gap-4 mt-3 '>
      
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="whatsapp" className='w-10 h-10 shadow-2xl' />
      </a>

      <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="facebook" className='w-10 h-10 shadow-2xl'/>
      </a>

      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="instagram" className='w-8 h-8 shadow-2xl mt-1 '/>
    </a>
      </div> 
      
    </article>
    <article className='inline-block m-5 w-[30%] max-sm:w-[90%]'>
    <img src={img1} alt=""  className='w-full h-auto'/>
      <h3 className='mt-2.5 text-4xl text-black'>Geet Kumari</h3>
      <p className='text-sm text-black py-1'>CTO,Almadat</p>

      <div className='flex flex-row justify-center gap-4 mt-3 '>
      
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="whatsapp" className='w-10 h-10 shadow-2xl' />
      </a>

      <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="facebook" className='w-10 h-10 shadow-2xl'/>
      </a>

      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="instagram" className='w-8 h-8 shadow-2xl mt-1 '/>
    </a>
      </div> 

    </article>
  </div>
  <button className='px-5 py-2.5 mt-5 text-4xl w-50 text-white bg-red-400 rounded-2xl hover:bg-red-500 transition-colors focus:outline-neutral-800 focus:ring-2 focus:ring-red-300'>Join Us</button>
</section>
    
    </>
  )
}

export default Volunteers