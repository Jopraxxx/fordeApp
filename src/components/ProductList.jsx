import { useState } from 'react'

const initialProducts = [
  { id: 1, name: 'Product 1', description: 'This is product 1', price: 19.99 },
  { id: 2, name: 'Product 2', description: 'This is product 2', price: 29.99 },
  { id: 3, name: 'Product 3', description: 'This is product 3', price: 39.99 },
]

function ProductList() {
  const [products] = useState(initialProducts)

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList

