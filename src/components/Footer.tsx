import { FOOTER } from "@/constants"
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react"

const Footer = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap border-b border-neutral-700">
          <div className="w-full sm:h-1/2 lg:w-6/12 p-4">
            <h2>RealEs</h2>
            <p className="lg:max-w-sm py-8 text-sm">{FOOTER.description}</p>
            <div className="flex flex-wrap gap-4 my-10">
              <FacebookIcon />
              <InstagramIcon />
              <GithubIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
