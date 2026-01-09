export const services = [
    {
        id: 1,
        name: "Web Development",
    },
    {
        id: 2,
        name: "Graphic Design",
    }
]

export async function GET(request){
    return Response.json({
        status:200,
        message:"Services fetched successfully",
    })
}