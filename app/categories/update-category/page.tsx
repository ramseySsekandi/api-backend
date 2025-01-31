import React from 'react'
import EditCategoryForm from '@/components/EditCategoryForm'
import { fetchCategory } from '@/actions/categories'

const EditCategoryPage = async ({params}:{params:Promise<{id:string}>}) => {
  const {id} =await params
  const category = await fetchCategory(id)

  return (
    <div className='container mx-auto p-4'>
        <EditCategoryForm />
    </div>
  )
}

export default EditCategoryPage