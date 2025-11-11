import Logo from "../assets/logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { serverUrl } from "../App";
import { setUser } from "../redux/slice/userSlice";
const Nav = () => {
  const { user } = useSelector((state) => state.userSlice);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async ()=>{
    try {
      const res = await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true})
      dispatch(setUser(null)) 
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-[10] fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div className="w-[30%] flex items-center justify-start gap-[10px]">
        <img className="w-[30px]" src={Logo} alt="" />
        <h1 className="text-[25px] text-black font-sans">OneCart</h1>
      </div>

      <div className="w-[40%]">
        <ul className="flex items-center justify-center gap-[19px] text-white">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            HOME
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            COLLECTION
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            ABOUT
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            CONTACT
          </li>
        </ul>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-[20px]">
       {
        !showSearch &&  <IoSearchCircleOutline
          onClick={() => setShowSearch((prev) => !prev)}
          className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
        />
       }
        {showSearch && (
          <RxCross1
            onClick={() => setShowSearch((prev) => !prev)}
            className="w-[30px] h-[30px] text-[#000000] cursor-pointer"
          />
        )}
        {!user && (
          <FaCircleUser  onClick={()=> setShowProfile(prev => !prev)} className="w-[28px] h-[28px] text-[#000000] cursor-pointer" />
        )}
        {user && (
          <div onClick={()=> setShowProfile(prev => !prev)} className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center cursor-pointer">
            {user ? user.name.slice(0, 1) : ""}
          </div>
        )}
        <FaCartShopping className="w-[30px] h-[30px] text-[#000000] cursor-pointer" />
        <p className="absolute w-[18px] h-[18px] items-center md: flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px]">
          0
        </p>
      </div>
      {showSearch && (
        <div className="w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] top-0 right-0 flex items-center justify-center">
          <input
            placeholder="Search Here"
            className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[18px] text-white"
            type="text"
          />
        </div>
      )}

      {showProfile && <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
        <ul className="w-[100%] h-[100%] flex items-start justify-around flex flex-col text-[17px] py-[10px] text-white">
          {!user ? <li onClick={()=> navigate("/login")} className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">Login</li>:<li onClick={()=>{handleLogout(), setShowProfile(false)}} className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">LogOut</li> }
          <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">Orders</li>
          <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">About</li>
        </ul>
      </div>}
    </div>
  );
};

export default Nav;
