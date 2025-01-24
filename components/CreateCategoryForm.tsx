"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function CreateCategoryForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <form className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description"  required />
      </div>
      <Button type="submit">Create Category</Button>
    </form>
  )
}

