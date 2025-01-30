"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ICategories } from "@/types/categories";
import toast from "react-hot-toast";
import { useState } from "react";


export default function CreateCategoryForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ICategories>();
  const [loading, setLoading] = useState(false)
  const onSubmit = async (data:ICategories) => {
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    try {
      setLoading(true)
      const res = await fetch(`
        ${baseUrl}/api/categories
        `,{
          method:'POST',
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(data)
        })
        console.log(res)
        toast.success("Created Successfully")
        setLoading(false)
      } catch (error) {
      console.log(error)
      toast.error("Failed to Create")
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" {
          ...register('title', { required: true })
        } />
        {errors?.title && <span className="text-red-500">This field is required</span>}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {
          ...register('description', { required: true, maxLength: {
            value: 50, // Set your max length here
            message: 'Maximum length is 50 characters'
        } })
        } />
         {errors.description?.type === 'required' && (
                    <span className="text-red-500">This field is required</span>
                )}
                {errors.description?.type === 'maxLength' && (
                    <span className="text-red-500">{errors.description.message}</span>
                )}
      </div>
      <Button type="submit">{loading === true? 'Creating...': 'Create Category'}</Button>
    </form>
  )
}

