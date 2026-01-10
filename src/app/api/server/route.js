import { connect } from "@/app/lib/dbConnect";

const servicesCollection = connect("services");

export async function GET(request) {
  const result = await servicesCollection.find().toArray();
  return Response.json(result);
}
export async function POST(request) {
  const service = await request.json();

  if (!service?.serviceDetail?.serviceSlug) {
    return Response.json({
      status: 400,
      message: "Invalid service data"
    });
  }

  const result = await servicesCollection.insertOne(service);
  return Response.json(result);
}


// export async function POST(request) {
//   const { message } = await request.json();

//   if (!message || typeof message !== "string") {
//     return Response.json({
//       status: 400,
//       message: "Please send a massage",
//     });
//   }

//   const newServices = {message, date:new Date().toISOString()};

//   const result = await servicesCollection.insertOne(newServices)




//   return Response.json(result);
// }
