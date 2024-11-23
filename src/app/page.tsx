import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <HowItWorks />
     <FeaturedProperties />
    </>
  )
}

export default Home;
