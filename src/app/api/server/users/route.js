import { connect } from "@/app/lib/dbConnect";

export async function POST(request) {
  try {
    const users = await connect("users");
    console.log("user consloer: ",users)
    const data = await request.json();

    const exist = await users.findOne({ email: data.email });
    if (exist) {
      return new Response(
        JSON.stringify({ status: 400, message: "User already exists" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newUser = await users.insertOne(data);

    return new Response(
      JSON.stringify({ status: 201, message: "User created successfully", data: newUser }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Failed to create user:", err);
    return new Response(
      JSON.stringify({ status: 500, message: "Failed to create user" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
