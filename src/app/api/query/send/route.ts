import ApiResponse from "@/types/response";
import { NextRequest } from "next/server";
import { querySchema } from "@/schemas/query";
import Query from "@/models/query";
import dbConnect from "@/db/db";

export async function POST(req: NextRequest): Promise<Response> {
    dbConnect.then((connection) => {})
        .catch((err) => {
            return Response.json(
                new ApiResponse(
                    500,
                    false,
                    "Database not connected",
                    {}
                )
            )
        })
    
    try {
        const { name, email, content } = await req.json()
        querySchema.parse(
            {
                name,
                email,
                content
            }
        )
        const query = await Query.create({
            name,
            email,
            content,
        })
        if (!query) {
            return Response.json(
                new ApiResponse(
                    500,
                    false,
                    "Internal server error in sending the query!",
                    {}
                )
            )
        }
        return Response.json(
            new ApiResponse(
                200,
                true,
                "Query saved successfully",
                {}
            )
        )
    } catch (error) {
        return Response.json(
            new ApiResponse(
                500,
                false,
                "Internal error in sending the query!",
                {}
            )
        )
    }
}