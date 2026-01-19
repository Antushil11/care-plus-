"use client";

import { UserContext } from "@/context/user_context";
import { signup } from "@/services/users.services";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useState } from "react";

export default function SignupPage() {
  const { setUser } = use(UserContext);
  const router = useRouter();
  const [error, setError] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const nid = e.target.nid.value.trim();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const contact = e.target.contact.value.trim();
    const password = e.target.password.value.trim();
    const photoURL = e.target.photoURL.value.trim();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters and include 1 uppercase & 1 lowercase letter.",
      );
      return;
    }

    if (!nid || !contact) {
      setError("NID and Contact are required.");
      return;
    }

    const Currentuser = { nid, name, email, contact, photoURL,password , role:"user"};
    setUser(Currentuser);
    console.log(Currentuser)

    const res = await signup(Currentuser)

    if(res.status !== 201){
        alert( "Failed to create account");
        setIsSumitting(false);
        return;
    }


    alert("Registration Successful!");
    router.push("/services");
  };

  return (
    <div className="min-h-screen flex items-center justify-center perspective-[1200px]">
      <div
        className="
        w-[400px] p-10 rounded-2xl
      
        bg-primary backdrop-blur-xl
        shadow-[0_25px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]
        transform rotate-x-6 -rotate-y-6
        transition-transform duration-500 hover:rotate-x-0 hover:rotate-y-0
      "
      >
        <h2 className="text-white text-2xl font-semibold text-center">
          Create Account
        </h2>
        <p className="text-gray-200 text-center text-sm mt-1 mb-8">
          Please fill in your details to register
        </p>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6 flex flex-col items-center">
            <div className="w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-white bg-gray-700 flex items-center justify-center">
              {photoPreview ? (
                <Image
                  src={photoPreview}
                  alt="Profile Preview"
                  width={96} 
                  height={96}
                  className="rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">Preview</span>
              )}
            </div>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter photo URL"
              value={photoPreview}
              onChange={(e) => setPhotoPreview(e.target.value)}
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white outline-none py-2 text-center"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="nid"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white outline-none py-2"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-valid:-top-2 peer-valid:text-xs peer-valid:text-white">
              NID No
            </label>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="name"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white outline-none py-2"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-valid:-top-2 peer-valid:text-xs peer-valid:text-white">
              Name
            </label>
          </div>

          <div className="relative mb-4">
            <input
              type="email"
              name="email"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white outline-none py-2"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-valid:-top-2 peer-valid:text-xs peer-valid:text-white">
              Email
            </label>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="contact"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white outline-none py-2"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-valid:-top-2 peer-valid:text-xs peer-valid:text-white">
              Contact
            </label>
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white outline-none py-2"
            />
            <label className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-valid:-top-2 peer-valid:text-xs peer-valid:text-white">
              Password
            </label>
          </div>

          {error && (
            <p className="text-red-400 text-xs mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white btn btn-outline "
          >
            Register
          </button>
        </form>

        <p className="text-gray-200 text-xs text-center mt-6">
          Already have an account? <span className="font-semibold">Login</span>
        </p>
      </div>
    </div>
  );
}
