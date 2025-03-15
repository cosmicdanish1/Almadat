import EmptyGlassHeadline from "./ui/EmptyGlassHeadline"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"
const Donors = () => {
  return (
  <>
  <section className="w-full h-full mb-25">
    <div>
      <h4 className="text-center text-6xl font-thin">Meet Our Donor</h4>
      <EmptyGlassHeadline/>

      <div className="flex flex-row justify-center gap-9">
        <div className="flex-col gap-2">
        <img src={p1} alt="Donor 1"  className="w-50 h-50 rounded-full"/>
        <h1 className="mt-5"> Volinter</h1>
        </div>
        
        <div className="flex-col gap-2">
        <img src={p2} alt="Donor 1"  className="w-50 h-50 rounded-full"/>
        <h1 className="mt-5"> Volinter</h1>
        </div>

        <div className="flex-col gap-2">
        <img src={p3} alt="Donor 1"  className="w-50 h-50 rounded-full"/>
        <h1 className="mt-5"> Volinter</h1>
        </div>

        <div className="flex-col gap-2">
        <img src={p4} alt="Donor 1"  className="w-50 h-50 rounded-full"/>
        <h1 className="mt-5"> Volinter</h1>
        </div>

        <div className="flex-col gap-2">
        <img src={p5} alt="Donor 1"  className=" w-32 h-32 rounded-full"/>
        <h1 className="mt-5"> Volinter</h1>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Donors