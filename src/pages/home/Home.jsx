import WhyUs from "../../components/WhyUs/WhyUs"
import About from "../../components/WhyUs/WhyUs"
import Hero from "../../components/hero/Hero"

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium  tracking-wide">
        Welcome to DigiTwo Solutions 🚀
      </h1>
      <Hero/>
      <WhyUs/>
    </div>
  )
}

export default Home