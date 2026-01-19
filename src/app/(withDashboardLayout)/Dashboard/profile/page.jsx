"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  /* Loading state */
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  /* Not authenticated */
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-bold">Not logged in</h2>
          <p className="mt-2 text-neutral-content">
            Please login to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen   flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-200 h-100  shadow-xl">

    
        <div className="flex flex-col items-center p-6">
          <div className="avatar">
            <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src={session.user?.image || "https://i.pravatar.cc/150"}
                width={20}
                height={20}
                alt="Profile"
              />
            </div>
          </div>

          <h2 className="mt-4 text-xl font-bold">
            {session.user?.name || "Anonymous User"}
          </h2>
          <p className="text-sm text-neutral-content">
            {session.user?.email}
          </p>
        </div>

        {/* Actions */}
        <div className="card-actions justify-center pb-6">
          <button className="btn btn-outline btn-secondary">
            Edit Profile
          </button>
          <button
            onClick={() => signOut()}
            className="btn btn-primary btn-outline"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
