import qr from '../assets/qr_img.png'

const QRDonation = () => {
  return (
    <section className="px-0 py-12 text-center bg-red-400 rounded-3xl">
    <h2 className="text-6xl text-white font-thin">MAKE A DONATION</h2>
    <div className="mt-12 flex  items-center justify-between space-y-8 px-70">
      <p className='text-white text-3xl font-light'>For UPI Payment, please scan the QR</p>
      <div className="bg-white p-6 rounded-[48px] shadow-2xl">
        <img src={qr} alt="QR Code" className='h-[405px] w-[391px] rounded-[44px]' />
      </div>
    </div>
  </section>
  )
}

export default QRDonation