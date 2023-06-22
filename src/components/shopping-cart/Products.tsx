import Product from './Product'

function Products() {
  return (
    <div className="w-full flex flex-col justify-between gap-4">
      {[...Array(2)].map((_, index) => (
        <div key={index}>
          <Product />
          <hr className="border-none bg-gray-200 w-full py-[0.5px]" />
        </div>
      ))}
    </div>
  )
}

export default Products
