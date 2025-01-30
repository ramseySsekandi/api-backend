import { db } from "@/prisma/db"
import { ICategories } from "@/types/categories"
import { NextRequest, NextResponse } from "next/server"


// Del
export async function DELETE(request: NextRequest,{
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const {id} = await params

    try {
        const deletedCategory = await db.category.delete({
            where:{
                id
            }
        })
        return NextResponse.json({
            message: 'Deleted Successfully',
            data: deletedCategory,
            error: null,
        },{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
                    message: 'Failed',
                    error: true,
                },{status:500})
    }
}

//Update

export async function PUT (request: NextRequest,{
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const {id} = await params
    const data:ICategories = await request.json()
    try {
        const updatedCategory = await db.category.update({
            where:{
                id
            },
            data
        })
        return NextResponse.json({
            message: 'Updated Successfully',
            data: updatedCategory,
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

// Get single
export async function GET (request: NextRequest,{
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const {id} = await params
    try {
        const category = await db.category.findUnique({
            where:{
                id
            },
        })
        return NextResponse.json({
            message: 'Fetched Successfully',
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