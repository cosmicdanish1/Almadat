import qr from '../assets/qr_img.png'

const QRDonation = () => {
  return (
    <section className="px-0 py-12 text-center bg-red-400">
        <h2 className="text-6xl text-white">MAKE  A DONATION</h2>
        <div className="mt-5">
            <img src={qr} alt="QR Code" className='shadow-amber-300 h-[405px] rounded-[44px] w-[391px] mx-auto'/>
        </div>
        <p className='mt-5 text-7xl text-white animate-in'>For UPI Payment pls Scan the QR</p>
    </section>
  )
}

export default QRDonation