import React, { useState } from "react";
import Balloons from "../components/Balloons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage({ onContinue }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleLogin = () => {
    if (!profilePic) {
      toast.error("Please upload a profile picture!");
      return;
    }

    if (email === "anjali@kabrion.com" && password === "Anjali@123") {
      toast.success("Login successful!");
      onContinue(profilePic);
    } else {
      toast.error("Invalid email or password!");
    }
  };

  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fuchsia-200 via-rose-100 to-amber-100 relative overflow-hidden">
      <Balloons />
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-8 max-w-sm w-full shadow-xl relative z-10 flex flex-col items-center">
        {/* Greeting */}
        <h1 className="text-3xl font-extrabold mb-4 animate-bounce text-rose-600 text-center">
          🎉 Happy Birthday Anjali Ma'am 🎉
        </h1>
        <p className="text-sm mb-4 font-medium text-slate-700">
          From Innocent Avinash
        </p>

        {/* Login Form */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-2xl border border-slate-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-2xl border border-slate-300"
        />

        {/* Profile Picture */}
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePic}
          className="w-full mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-slate-900 text-white py-2 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
