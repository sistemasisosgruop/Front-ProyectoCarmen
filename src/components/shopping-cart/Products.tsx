import Product from './Product'

const Products = (): JSX.Element => {
  return (
    <div className='w-full flex flex-col justify-between gap-4'>
      {[...Array(2)].map((_, index) => (
        <>
          <Product key={index} />
          <hr className='border-none bg-gray-200 w-full py-[0.5px]' />
        </>
      ))}
    </div>
  )
}

export default Products
