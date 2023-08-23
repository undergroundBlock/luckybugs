import Post from "@/types/Post"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, res: NextResponse, context: {params:{}}) => {
        try {
        const posts: Post[] = Array.from({length: 30}).map((_,index) => {
            return {
                id: (index + 1).toString(),
                title: `Post title ${index}`,
                body: `Post body ${index}`,
            }
        })
        return NextResponse.json({message: "OK", posts}, {status: 200})
    } catch (error) {
        return NextResponse.json(
            {message: "ERROR" , error},
            {status: 500}
        )
    }
}

export const POST = async (req: Request, res: Response) => {


    try {
        // const post = { title, desc, date: new Date(), id: Date.now().toString() }
        // addPost(post)
        const {title, desc} = await req.json()
        const post: Post = await req.json()
        console.log("POST request")
        return NextResponse.json({message: "OK", post}, {status: 201})

    } catch (error) {
        return NextResponse.json(
            {message: "ERROR" , error},
            {status: 500}
        )  
    }
}
