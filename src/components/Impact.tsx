import Awards from "../assets/Awards.png";
import Project from "../assets/Project.png";
import book from "../assets/book.png";
import Help from "../assets/Connectivity.png";
import Volunter from "../assets/volunteer.png";
import Education from "../assets/Education.png";

const Impact = () => {
  return (
  <>
  <section className='px-0 py-12 text-center bg-[#E15B5B]'>
    <h2 className='text-6xl text-white'>Our Impect</h2>
        <div className='flex justify-center gap-40 items-center mt-5 flex-wrap'>
            <div className='flex flex-col items-center p-4'>
                <img src={Project} alt="Project" className="mb-2" />
                <p className='text-6xl font-bold text-white'>500+</p>
                <p className='text-2xl font-bold text-white'>Project Complite</p>
            </div>
            <div className='flex flex-col items-center p-4'>
              <img src={book} alt="book" className="mb-2"/>
                <p className='text-6xl font-bold text-white'>50</p>
                <p className='text-2xl font-bold text-white'>Book</p>
            </div>
            <div className='flex flex-col items-center p-4'>
                <img src={Help} alt="Help" className="mb-2"/>
                <p className='text-6xl font-bold text-white'>100+</p>
                <p className='text-2xl font-bold text-white'>Help</p>
            </div>
            <div className='flex flex-col items-center p-4' >
                <img src={Volunter} alt="Education" className="mb-2"/>
                <p className='text-6xl font-bold text-white'>40</p>
                <p className='text-2xl font-bold text-white'>Volunteer</p>
            </div>
            
            <div className='flex flex-col items-center p-4'>
                <img src={Awards} alt="Awards" className="mb-2"/>
                <p className='text-6xl font-bold text-white'>20</p>
                <p className='text-2xl font-bold text-white'>Awards</p>
            </div>
            <div className='flex flex-col items-center p-4' >
                <img src={Education} alt="Education" className="mb-2"/>
                <p className='text-6xl font-bold text-white'>10</p>
                <p className='text-2xl font-bold text-white'>Education</p>
            </div>
            
        </div>
    
  </section>
  </>
  )
}

export default Impact