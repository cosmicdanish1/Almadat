import a1 from "../assets/a1.png"

const AboutUs = () => {
  return (
   <>
   
  <section className="flex flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
    <div className="w-1/2 text-left">
    <h2 className="text-5xl font-semibold text-black mb-4">
      We Stand to Help Fellow human being
    </h2>

    <p className="text-2xl  text-black md-6">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum 
      illum aliquid blanditiis? Possimus obcaecati, non quas laborum rem nemo al
      iquam, perspiciatis ab facilis accusantium enim? Est eius tempora sapiente sed.
    </p>
    <button className="px-5 py-2.5 text-xl mt-6 color-red text-white rounded-2xl hover:bg-red-500">See More</button>
    </div>

    <div className="md:w-1/2">
      <img src={a1} alt="" className="w-full max-w-[500px] rounded-2xl shadow-2xl mx-auto"/>
    </div>
  </section>


  <section className=" flex md:flex-row-reverse items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-5xl font-semibold text-black mb-4">
      We Stand to Help Fellow Human Being
      </h2>
      <p className="text-2xl text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptate repudiandae ut nemo saepe consectetur dolor quis illum necessitatibus ipsum laudantium mollitia quae voluptates officiis culpa maiores, aliquid amet iusto.</p>
      <button className="px-5 py-2.5 text-2xl text-white color-red rounded-2xl hover:bg-red-500">See more
      </button>
    </div>
    
    <div className="md:w-1/2">
      <img src={a1} alt="" className="w-full max-w-[500px] rounded-2xl shadow-2xl mx-auto"/>
    </div>

  </section>
   
   </>
  )
}

export default AboutUs