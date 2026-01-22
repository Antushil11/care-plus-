"use server";

export const signup = async (data) => {
    console.log(data)
  const res = await fetch(
    `${process.env.NEXT_AUTH_URL || "https://care-plus-livid-ten.vercel.app"}/api/server/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create user");
  }

  //   revalidateTag("users");
  return res.json();
};