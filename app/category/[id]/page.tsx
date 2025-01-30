import { fetchCategory } from '@/actions/categories'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, Trash2 } from 'lucide-react'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} =await params
    const category = await fetchCategory(id)
    console.log(category)
  return (
    <div>
        <Card>
              <CardHeader>
                <CardTitle>
                <div className="container flex justify-between">
                  <div className="">{category?.title}</div>                  
                    {/* Icons */}
                    <Trash2 color="red" size={16} />
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
