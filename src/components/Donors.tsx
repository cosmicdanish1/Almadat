import EmptyGlassHeadline from "./ui/EmptyGlassHeadline"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"
const Donors = () => {
  return (
  <>
<section className="w-full py-10 scroll-smooth">
  <div>
    <h4 className="text-center text-6xl font-thin">Meet Our Donor</h4>
    <EmptyGlassHeadline />


<div className="overflow-x-auto  scrollbar-hide cursor-grab active:cursor-grabbing">
      <div className="flex gap-6 w-[1000px] md:w-[1200px] mx-auto scroll-smooth snap-x">
        {/* Donor Cards */}
        {[p1, p2, p3, p4, p5].map((img, index) => {
          const names = ["Danish", "Fiza", "Shifa", "Akashy", "Manak"];
          return (
            <div key={index} className="shrink-0 w-[250px] flex flex-col items-center gap-2">
              <img src={img} alt={`Donor ${index + 1}`} className="w-45 h-45 rounded-full object-cover" />
              <h1 className="text-lg font-extralight">{names[index]}</h1>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

  </>
  )
}

export default Donors