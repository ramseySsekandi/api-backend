"use server"

import { ICategories } from "@/types/categories"
export const fetchCategories  = async () => {
    const API = "https://api-backend-eight-pearl.vercel.app/api/categories"
    try {
        const res = await fetch(API)
        const categories = await res.json()
        // console.log(product.data)
        return categories.data as ICategories[]
    } catch (error) {
        console.log(error)
        return []
    }
     
}