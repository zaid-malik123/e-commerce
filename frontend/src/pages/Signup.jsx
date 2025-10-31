import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const navigate = useNavigate();

  // 🧠 Step 1: Create state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🖊 Step 2: Handle input changes (update state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🚀 Step 3: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can send this formData to backend API here
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      
      {/* Navbar */}
      <div
        onClick={() => navigate("/")}
        className="w-full h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
      >
        <img className="w-[40px]" src={Logo} alt="Logo" />
        <h2 className="text-xl font-semibold">OneCart</h2>
      </div>

      {/* Header Text */}
      <div className="w-full mt-5 flex flex-col items-center justify-center gap-[10px]">
        <span className="text-[28px] font-bold">Registration Page</span>
        <span className="text-[16px] text-gray-300">
          Welcome to OneCart — Place your order with ease
        </span>
      </div>

      {/* Form Box */}
      <div className="max-w-[500px] w-[90%] mt-8 bg-[#00000040] border border-[#96969635] rounded-2xl shadow-lg p-8 backdrop-blur-md">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full h-[45px] px-4 rounded-lg bg-[#1f1f1f] text-white outline-none border border-[#3a3a3a] focus:border-[#00bcd4] transition"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-[45px] px-4 rounded-lg bg-[#1f1f1f] text-white outline-none border border-[#3a3a3a] focus:border-[#00bcd4] transition"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full h-[45px] px-4 rounded-lg bg-[#1f1f1f] text-white outline-none border border-[#3a3a3a] focus:border-[#00bcd4] transition"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full h-[45px] bg-[#00bcd4] hover:bg-[#0097a7] rounded-lg text-white font-semibold mt-3 transition"
          >
            Create Account
          </button>

          {/* OR Line */}
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="w-1/3 h-[1px] bg-gray-500"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="w-1/3 h-[1px] bg-gray-500"></div>
          </div>

          {/* Google Signup */}
          <div className="w-full h-[45px] bg-[#42656cae] hover:bg-[#517f86ae] rounded-lg flex items-center justify-center gap-[10px] cursor-pointer transition">
            <FcGoogle size={22} />
            <span>Register with Google</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
