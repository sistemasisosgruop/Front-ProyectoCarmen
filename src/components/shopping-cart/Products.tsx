import { useEffect, useState } from 'react'
import Product from './Product'
import { Department } from 'types/department'

function Products() {
  const [productsInCart, setProductsInCart] = useState<Department[]>([])

  useEffect(() => {
    getDepartmentsInCart()
  }, [])

  const getDepartmentsInCart = async () => {
    try {
      const departments = window.localStorage.getItem('departmentCart') ?? ''
      const departmentsJson = await JSON.parse(departments)
      setProductsInCart(departmentsJson)
    } catch (error) {
      throw new Error('Dont products in cart')
    }
  }

  return (
    <div className="w-full flex flex-col justify-between gap-4">
      {productsInCart.map((product) => (
        <div key={product.id}>
          <Product product={product} />
          <hr className="border-none bg-gray-200 w-full py-[0.5px]" />
        </div>
      ))}
    </div>
  )
}

export default Products
