'use client'

import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast'

export default function DeleteCategoryForm({id}:{id:string|undefined}) {
    const router = useRouter();
  const onDelete = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    try {
      const res = await fetch(`
        ${baseUrl}/api/categories/${id}
        `,{
          method:'DELETE',
          headers: {
            "content-type" : "application/json"
          }
        })
        console.log(res)
        toast.success("Removed Successfully")
        router.push('/categories')
      } catch (error) {
      console.log(error)
      toast.error("Failed to delete")
    }
  }
  return (
    <button onClick={()=>{onDelete()}}>
    <Trash2 color="red" size={16} />
    </button>
  )
}