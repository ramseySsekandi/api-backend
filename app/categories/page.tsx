import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CategoryList() {
  const categories = [
    { id: 1, title: "Electronics", description: "Gadgets and devices for everyday use" },
    { id: 2, title: "Books", description: "Physical and digital books for all ages" },
    { id: 3, title: "Clothing", description: "Apparel and accessories for men, women, and children" },
    { id: 4, title: "Home & Garden", description: "Everything you need for your home and outdoor spaces" },
  ]
  return (
    <div className="space-y-4">
      {categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      )}
      <div className="container mx-auto p-4">
      <Link href='categories/create-category'><Button >Create Category</Button></Link>
      </div>
    </div>
  )}