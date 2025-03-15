
import EmptyGlass from '../../assets/eamtyglassloading.png'
const EmptyGlassHeadline = () => {
  return (
    <>
    <div className='relative w-full flex items-center justify-center mt-12 mb-9 shadow-2xl'>
  <div className='relative bg-[#4979D1] w-46 h-1  rounded-2xl  top-[-7px]  '/>
  <img src={EmptyGlass} alt="EmptyGlass"  className='absolute  w-25 h-25' />
  </div> 
    </>
  )
}

export default EmptyGlassHeadline