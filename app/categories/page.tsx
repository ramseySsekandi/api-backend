import { fetchCategories } from "@/actions/categories"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pen, Trash2 } from "lucide-react"
import Link from "next/link"

export default async function CategoryList() {
const categories = await fetchCategories()
  return (
    <div className="space-y-4">
      {categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <div className="container mx-auto p-4 w-screen">
        <div className="mb-6 flex justify-between items-center ">
          <h1 className="text-3xl font-bold ">Categories</h1>
         
            <Link href='categories/create-category'><Button >Create Category</Button></Link>
        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, i) => (
            <Card key={i} className="relative">
              <CardHeader>
                <CardTitle>
                <div className="container flex justify-between">
                  <div className="">{category.title}</div>
                  <div className="flex space-x-2 justify-center items-center">
                    {/* Icons */}
                    <Pen size={16} color="gray" />
                    <Trash2 color="red" size={16} />
                  </div>
                </div>
                </CardTitle>   
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
              <div className="absolute right-6 bottom-2">
              <Link href={`category/${category.id}`}><p className="underline text-sm text-blue-500">View</p></Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
      )}
    </div>
  )}