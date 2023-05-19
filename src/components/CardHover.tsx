import { Link } from 'react-router-dom'

interface Props {
  children: JSX.Element | JSX.Element[]
  href: string
  imagePath: string
  alt: string
  score?: string | number
}

const CardHover = ({
  children,
  href,
  imagePath,
  alt,
  score
}: Props): JSX.Element => {
  return (
    <Link to={href} className='relative w-full rounded-xl border border-white group/description cursor-pointer transition-all overflow-hidden'>
      <img
        src={imagePath}
        alt={alt}
        className='w-full h-[380px] object-cover object-center group-hover/description:scale-125 duration-200'
      />
      {score !== undefined && (
        <div className='invisible absolute top-2 right-2 bg-white px-2 py-1 rounded-xl group-hover/description:visible'>
          <p className='text-dark font-bold'>
            {score}
          </p>
        </div>
      )}

      <article className='md:invisible absolute z-20 bg-white bottom-0 left-0 px-4 py-4 w-full md:group-hover/description:visible rounded-b-md'>
        {children}
      </article>
    </Link>
  )
}

export default CardHover
