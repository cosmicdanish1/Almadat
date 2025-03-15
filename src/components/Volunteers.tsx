
import img1 from '../assets/g1.png'
const Volunteers = () => {
  return (
    <>
<section className='px-0 py-12 text-center'>
  <h2 className='text-6xl text-black'>Meet Our Volunteer</h2>
  <div className=''>
    <article className='inline-block m-5 w-[30%] max-sm:w-[90%]'>
      <img src={img1} alt=""  className='w-full h-auto'/>
      <h3 className='mt-2.5 text-4xl text-black'>Geet Kumari</h3>
      <p className='text-sm text-black py-1'>CTO,Almadat</p>
    </article>
    <article className='inline-block m-5 w-[30%] max-sm:w-[90%]'>
    <img src={img1} alt=""  className='w-full h-auto'/>
      <h3 className='mt-2.5 text-4xl text-black'>Geet Kumari</h3>
      <p className='text-sm text-black py-1'>CTO,Almadat</p>
      
    </article>
    <article className='inline-block m-5 w-[30%] max-sm:w-[90%]'>
    <img src={img1} alt=""  className='w-full h-auto'/>
      <h3 className='mt-2.5 text-4xl text-black'>Geet Kumari</h3>
      <p className='text-sm text-black py-1'>CTO,Almadat</p>

    </article>
  </div>
  <button className='px-5 py-2.5 mt-5 text-4xl text-white bg-red-400 rounded-2xl hover:bg-red-500 transition-colors focus:outline-neutral-800 focus:ring-2 focus:ring-red-300'>Join Us</button>
</section>
    
    </>
  )
}

export default Volunteers