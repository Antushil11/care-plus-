const uri = process.env.MONGODB_URI;


// export const collections ={   
//     SERVICES:'services',
    
// }


const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export const connect=(collection)=>{
  const dbname = process.env.DBNAME;
    return client.db(dbname).collection(collection)
}



