import { useEffect, useState } from "react"
import Background from "../components/Background"
import Hero from "../components/Hero"


const Home = () => {
  const heroData = [
    {text1: "30% off the limited Offer", text2: "Style that"},
    {text1: "Explore Ovr Best Collection", text2: "Limited time Only"},
    {text1: "Explore Our Best of Bold Fashion", text2: "Shop Now"},
  ]
  const [heroCount, setHeroCount] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setHeroCount(prevCount => (prevCount === 2 ? 0 : prevCount + 1))
    },3000)
    return ()=> clearInterval(interval)
  },[])
  return (
    <div className="overflow-x-hidden relative top-[70px]">
    <div className="w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
      <Background heroCount={heroCount}/>
      <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]}/>
    </div>
    </div>
  )
}

export default Home
