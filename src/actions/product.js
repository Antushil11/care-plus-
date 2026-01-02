"use server";

import { dbConnect,collections } from "@/lib/dbConnect";


export const getProducts = async () =>{
    const services = await dbConnect(collections.SERVICES).find().toArray();
    return services;

}



export const getSingleProduct = async (id) =>{
    if(!id || typeof id !== "string" ||  id.length !== 24){
        return {};
    }

    const query = {_id: new Object(id)};

    const service = await dbConnect(collections.SERVICES).findOne(query)
    return service
}

