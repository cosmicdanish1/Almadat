

const Donation = () => {
    return (
        <>
            {/* <section className='bg-[#E15B5B] text-center py-16 px-6'>
                <h1 className='text-5xl font-bold text-black'>
                    READY TO DO <br /> <span>INCREDIBLE?</span>
                </h1>
                <p className='text-sm text-black mt-4 max-w-lg mx-auto'> You give but little when you give of your possessions. It is when you give of yourself.

                </p>
                <div className='mt-6'>
                    <button className='bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-800 transition'>
                        Donate Now
                    </button>
                </div>

            </section> */}

            <section className="bg-[#E15B5B] text-center py-16 px-6">
                <div className="flex flex-row justify-center">
                    <h1 className="text-5xl font-semibold font-kaisei text-black">READY TO DO <br /> <span>INCREDIBLE ?</span></h1>
                    <div>

                    <div className="ml-12">
                     <p className="text-sm text-black mt-4 max-w-lg max-auto text-left ">You give but little when you give of your possessions. It is when you give of yourself.
                    </p>

                        <button className="bg-black flex justify-center text-white flex h-10 text-center w-[30%]  px-4 py-5 text-center rounded-4xl mt-3 text-lg font-light  drop-shadow-[0_35px_35px_rgba(0,0,7,1)] hover:bg-gray-800 transition-colors">Donate Now</button>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Donation