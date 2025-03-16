
const Navbar = () => {
    return (
  <>
  
      <header className="flex justify-between items-center px-36 pt-6">
          <h1 className="text-4xl text-green-600 font-bold pt-2">Almadat</h1>
          <div className="pt-3">
              <nav className="flex gap-10  ">
              <a href="#" className="text-2xl text-black hover:text-green-600">Home</a>
              <a href="" className=" text-2xl text-black hover:text-green-600">AboutUs</a>
              <a href="" className=" text-2xl text-black hover:text-green-600">OurWork</a>
              <a href="" className=" text-2xl text-black hover:text-green-600 ">Donation</a>
              <a href="" className=" text-2xl text-black hover:text-green-600">JoinUs</a>
          </nav>
          </div>
          <button className="px-6 py-3 text-xl font-bold text-white bg-[#E15B5B] rounded-3xl shadow-lg ">Contact Us</button>
      </header>
      
  
  </>  )
  }
  
  export default Navbar