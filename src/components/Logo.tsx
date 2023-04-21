import { Link } from 'react-router-dom'

const Logo = (): JSX.Element => {
  return (
    <Link to='/' className='flex flex-col'>
      {/* <img src='' alt='' /> */}
      <span className='text-2xl font-bold'>
        CARMEN
      </span>
      <span className='text-sm break-words'>
        Agencia de Viajes y Turismo
      </span>
    </Link>
  )
}

export default Logo

