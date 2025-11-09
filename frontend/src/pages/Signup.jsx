import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { name, email, password },
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleGoogleSignup = async () => {
    // Implement Google Signup logic here
    try {
      const res = await signInWithPopup(auth, provider);
      const response = await axios.post(
        `${serverUrl}/api/auth/google-login`,
        {
          name: res.user.displayName,
          email: res.user.email,
        },
        { withCredentials: true }
      );
      console.log("Google Signup response:", response.data);
    } catch (error) {
      console.error("Google Signup failed:", error);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        onClick={() => navigate("/")}
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
      >
        <img className="w-[40px]" src={Logo} alt="" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>
      <div className="w-[100%] h-[100px] flex items-center justify-center flex flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Registration Page</span>
        <span className="text-[16px]">
          Welcome to OneCart , Place your Order
        </span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          onSubmit={handleSignup}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div
            onClick={handleGoogleSignup}
            className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer"
          >
            <FcGoogle size={24} />
            <span>Sign up with Google</span>
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div> Or{" "}
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="UserName"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              type="text"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              type="text"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] rounded-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              type={showPassword ? "text" : "password"}
            />
            {!showPassword ? (
              <FaRegEyeSlash
                onClick={() => setShowPassword(true)}
                className="absolute right-[5%]"
                size={20}
              />
            ) : (
              <FaRegEye
                onClick={() => setShowPassword(false)}
                className="absolute right-[5%]"
                size={20}
              />
            )}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
              Create Account
            </button>
            <p onClick={() => navigate("/login")} className="flex gap-[10px]">
              You have any account?
              <span className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
