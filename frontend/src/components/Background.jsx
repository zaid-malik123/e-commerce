import slide1 from "../assets/girl.webp"
import slide2 from "../assets/back3.avif"
import slide3 from "../assets/back4.jpg"


const Background = ({heroCount}) => {
  if(heroCount === 0){
    return <img className="w-[40%] h-[100%] float-right overflow-auto object-cover" src={slide1} alt="" />
  }
  else if(heroCount === 1){
    return <img className="w-[40%] h-[100%] float-right overflow-auto object-cover" src={slide2} alt="" />
  }
  else if(heroCount === 2){
    return <img className="w-[40%] h-[100%] float-right overflow-auto object-cover" src={slide3} alt="" />
  }
}

export default Background
