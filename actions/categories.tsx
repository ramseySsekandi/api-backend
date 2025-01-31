"use server"


import { Category } from "@prisma/client"
export const fetchCategories  = async () => {
    const API = "https://api-backend-eight-pearl.vercel.app/api/categories"
    try {
        const res = await fetch(API)
        const categories = await res.json()
        // console.log(product.data)
        return categories.data as Category[]
    } catch (error) {
        console.log(error)
        return []
    }
     
}

export const fetchCategory  = async (id:string) => {
    const API = `https://api-backend-eight-pearl.vercel.app/api/categories/${id}`
    try {
        const res = await fetch(API)
        const category = await res.json()
        // console.log(product.data)
        return category.data as Category
    } catch (error) {
        console.log(error)
       return null
    }   
}