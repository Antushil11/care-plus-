"use client";

import { UserContext } from "@/context/user_context";
import { useRouter } from "next/navigation";
import { use  } from "react";

export default function LoginPage() {

    const { setUser} = use(UserContext);
    const router = useRouter()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        if(email === "as@gmail.com" && password==="1234"){
            
            const Currentuser ={
                email,
                name: email?.split("@")?.[0],

            }
            console.log(Currentuser)
          
            setUser(Currentuser); 
            alert("Login Successfull")
            router.push("/Dashboard")
        }
        else{
            alert("Creatial invalid:")
            setUser(null)
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center  perspective-[1200px]">
      
      <div className="
        w-[380px] p-10 rounded-2xl
        bg-gradient-to-br from-indigo-500 to-purple-700
        bg-white/15 backdrop-blur-xl
        shadow-[0_25px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]
        transform rotate-x-6 -rotate-y-6
        transition-transform duration-500 hover:rotate-x-0 hover:rotate-y-0
      ">
        
        <h2 className="text-white text-2xl font-semibold text-center">
          Welcome Back
        </h2>
        <p className="text-gray-200 text-center text-sm mt-1 mb-8">
          Please login to your account
        </p>

         <form onSubmit={handleSubmit}>
          
          {/* Email */}
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white outline-none py-2"
            />
            <label className="
              absolute left-0 top-1/2 -translate-y-1/2 text-gray-300
              transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white
              peer-valid:-top-2 peer-valid:text-xs peer-valid:text-white
            ">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative mb-8">
            <input
              type="password"
              name="password"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white outline-none py-2"
            />
            <label className="
              absolute left-0 top-1/2 -translate-y-1/2 text-gray-300
              transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white
              peer-valid:-top-2 peer-valid:text-xs peer-valid:text-white
            ">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="
              w-full py-3 rounded-full text-white font-medium
              bg-gradient-to-r from-emerald-400 to-blue-600
              shadow-lg hover:-translate-y-0.5 transition
            "
          >
            Login
          </button>
        </form>

        <p className="text-gray-200 text-xs text-center mt-6">
          <span className="font-semibold">Demo:</span> demo@example.com | 123456
        </p>
      </div>
    </div>
  );
}
