import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";


export async function GET(req){
    const dbcollection = await MongoDBConnection("all_blogs");
    const data = await dbcollection.find({}).toArray();

    return Response.json(data)
}



// post api create

export async function POST(req){
    const postedData = await req.json();
    const dbcollection = await MongoDBConnection('all_blogs');
    const result = await dbcollection.insertOne(postedData);
    return Response.json(result)
}




