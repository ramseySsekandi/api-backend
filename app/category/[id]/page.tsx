import { fetchCategory } from '@/actions/categories'
import DeleteCategoryForm from '@/components/DeleteCategoryForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Pen } from 'lucide-react'
import Link from 'next/link'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} =await params
    const category = await fetchCategory(id)
  return (
    <div className='flex justify-center items-center h-svh'>
        <Card>
              <CardHeader>
                <CardTitle>
                  <div className="container space-x-6 flex justify-between">
                  <div className="">{category?.title}</div>
                  <div className=" flex space-x-2 justify-center items-center">
                    {/* Icons */}
                    <Link href='/categories/update-category'>
                    <Pen size={16} color="gray" />
                    </Link>
                    <DeleteCategoryForm id={category?.id}/>
                  </div>
                </div>
                </CardTitle>   
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{category?.description}</p>
              </CardContent>
            </Card>
    </div>
  )
}
