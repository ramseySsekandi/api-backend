import { db } from "@/prisma/db";
import { ICategories } from "@/types/categories";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    try {
        const { title, description }:ICategories = await request.json()
        const category = await db.category.create({
            data:{ title, description }
        })
        
        return NextResponse.json({
            message: 'Created Category',
            data: category,
            error: null,
        },{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'Failed',
            error: true,
        },{status:500})
    }
}

export async function GET() {
    try {
        const categories= await db.category.findMany({
        })
        
        return NextResponse.json({
            message: 'Created Category',
            data: categories,
            error: null,
        },{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'Failed',
            data: null,
            error: true,
        },{status:500})
    }
}