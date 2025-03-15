

const Footer = () => {
  return (
    <>
    <footer className='bg-white py-12 px-6 border-t-4 border-[#E15B5B]'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left'>
            {/* Company info */}
            <div>
                <h2 className='text-xl font-semibold'>ALMADAT</h2>
                <p className='text-sm text-gray-600 mt-2'>©2010-2022 Almadat is part of ALMADAT Ltd <br /> All rights reserved
                </p>
                <div className='flex justify-center md:justify-start gap-3 mt-4'>
                    <a href="" className='text-blue-500 text-2xl'>A</a>
                    <a href="" className='text-blue-400 text-2xl'>A</a>
                    <a href="" className='text-blue-600 text-2xl'>A</a>
                    <a href="" className='text-blue-500 text-2xl'>A</a>
                </div>
            </div>

            <div>
                <h3 className='font-semibold'>Navigation</h3>
                <ul className='text-gray-600 mt-2 space-y-1'>
                    <li><a href="" className="hover:text-black">About Us</a></li>
                    <li><a href="" className="hover:text-black">Our Work</a></li>
                    <li><a href="" className="hover:text-black">Contact Us</a></li>
                    <li><a href="" className="hover:text-black"> Join Us</a></li>
                </ul>
            </div>

            <div>
                <h3 className='font-semibold'>Help</h3>
                <ul className='text-gray-600 mt-2 space-y-1'>
                    <li><a href="" className='hover:text-black'>FAQ</a></li>
                    <li><a href="" className='hover:text-black'>Terms of Use</a></li>
                    <li><a href="" className='hover:text-black'>Privacy Policy</a></li>

                </ul>

                
               
            </div>


            <div>
            <h3 className='font-semibold '>Contact</h3>
            <ul className='mt-2'>
                <p className='text-gray-600 text-sm'>cosmicdanish@outlook.com</p>
                <p className="text-gray-600  text-sm">+9176982829866</p>

            </ul>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer