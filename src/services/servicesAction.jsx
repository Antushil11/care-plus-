"use server";

export const getSingleServices = async (id) => {
  const res = await fetch(
    `https://care-plus-livid-ten.vercel.app/api/server/${id}`,
  );

  const data = await res.json();

  return data;
};

export const getAllServices = async () => {
  const res = await fetch(`https://care-plus-livid-ten.vercel.app/api/server`);

  await new Promise((reslove) =>
    setTimeout(() => {
      reslove();
    }, 3000),
  );

  const data = await res.json();

  return data;
};
