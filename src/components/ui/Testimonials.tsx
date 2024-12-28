import { TESTIMONIALS } from "@/constants"

const Testimonials = () => {
  return (
    <div className="container mx-auto my-20 border-b pb-10">
        <h2 className="mb-20 text-center text-3xl tracking-tighter 
        sm:text-4xl lg:text-5xl">
            What Our Clients Says
        </h2>
        <div className="flex flex-wrap">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="">

              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Testimonials
