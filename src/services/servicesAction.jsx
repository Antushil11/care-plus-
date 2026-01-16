"use server";

export const getSingleServices = async (id) => {
  const res = await fetch(`http://localhost:3000/api/server/${id}`);

  const data = await res.json();

  return data;
};


export const getAllServices = async () => {
  const res = await fetch(`http://localhost:3000/api/server`);

  await new Promise((reslove) =>
    setTimeout(() => {
      reslove();
    }, 3000)
  );

  const data = await res.json();

  return data;
};