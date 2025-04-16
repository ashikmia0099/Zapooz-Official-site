import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";





// get api

export async function GET(req) {
    const dbcollection = await MongoDBConnection("contact_us")
    const data = await dbcollection.find({}).toArray();
    return Response.json(data);

}





// post api

export async function POST(req) {
    const postedData = await req.json(); // ✅ CORRECT WAY in Next.js
    const dbcollection = await MongoDBConnection("contact_us");
    const result = await dbcollection.insertOne(postedData);
    return Response.json(result);
}

