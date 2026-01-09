import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
const servicesCollection = connect("services");


export async function GET(request,{params}){
    const {id} = await params;


    if(id.length !=24){
        return Response.json({
            status:400,
            message:"send correct _id"
        })
    }

    const query ={_id:new ObjectId(id)}

    const result = await servicesCollection.findOne(query)

    

    return Response.json(result)
    
}

export async function DELETE(request,{params}){
    const {id} = await params;


    if(id.length !=24){
        return Response.json({
            status:400,
            message:"send correct _id"
        })
    }

    const query ={_id:new ObjectId(id)}

    const result = await servicesCollection.deleteOne(query)

    

    return Response.json(result)
    
}


export async function PATCH(request,{params}){
    const {id} = await params;
    const{message} = await request.json()


    if(id.length !=24){
        return Response.json({
            status:400,
            message:"send correct _id"
        })
    }

     if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please send a massage",
    });
  }

    const query ={_id:new ObjectId(id)}

    const newData ={
        $set:{
            message
        }
    }

    const result = await servicesCollection.updateOne(query, newData)

    

    return Response.json(result)
    
}