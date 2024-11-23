import { FEATURED_PROPERTIES } from "@/constants"
import Image from "next/image"
import Link from "next/link"

function FeaturedProperties() {
  return (
    <div className="container mx-auto border-b py-6 pb-10">
        <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
            Featured Properties
        </h2>
        <div className="flex flex-wrap">
            {FEATURED_PROPERTIES.map((property, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
                    <Link href="#" className="m-2 inline-block">
                        <div className="p-8">
                            <Image 
                            className="mb-8 rounded-md object-cover" 
                            src={property.image} 
                            width={300}
                            height={300}
                            alt={property.name} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProperties
