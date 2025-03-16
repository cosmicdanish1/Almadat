import qr from '../assets/qr_img.png'

const QRDonation = () => {
  return (
  //   <section className="px-0 py-12 text-center bg-red-400 rounded-4xl">
  //   <h2 className="text-5xl text-white font-thin">MAKE A DONATION</h2>
  //   <div className="mt-12 flex  items-center justify-between space-y-8 px-70">
  //     <p className='text-white text-6xl font-light text-left'>For UPI Payment, please scan the QR</p>
  //     <div className="bg-white p-6 rounded-[48px] shadow-2xl">
  //       <img src={qr} alt="QR Code" className='h-[405px] w-[391px] rounded-[44px]' />
  //     </div>
  //   </div>
  // </section>
  <>
  <section className=' w-[85%] mx-auto px-0 py-12 text-center items-center bg-[#EF5D5E] rounded-4xl drop-shadow-2xl '>
    <div className='flex flex-col justify-center'>
      <h2 className='text-5xl font-light text-white'>MAKE A DONATION</h2>
      <div className='flex justify-center mt-18 gap-28 drop-shadow-2xl'>
        <p className='text-8xl text-left text-white font-light '>For UPI <br /> Payment, <br /> Please Scan the QR</p>
        <div className='bg-white p-6 rounded-2xl mb-10 drop-shadow-[0_35px_35px_rgba(0,0,0,1)] inset-shadow-sm'>
          <img src={qr} alt="QR Code" className='h-[300px] w-[300px] rounded-4xl inset-shadow-sm shadow-2xs' />
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default QRDonation