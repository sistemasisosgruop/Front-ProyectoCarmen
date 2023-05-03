import { AiFillStar } from 'react-icons/ai'

interface Props {
  username: string
  comment: string
  qualification: number
}

const CommentCard = ({ username, comment, qualification }: Props): JSX.Element => {
  return (
    <article className='rounded-md border border-gray-200 p-4 bg-gray-100'>
      <div className='flex justify-between items-center mb-2'>
        <p className='text-xl font-bold'>
          {username}
        </p>
        <div className='flex justify-start items-start gap-2 text-yellow-600'>
          <AiFillStar size={24} />
          <AiFillStar size={24} />
          <AiFillStar size={24} />
          <AiFillStar size={24} />
          <AiFillStar size={24} />
        </div>
      </div>
      <div>
        <p>
          <span>
            {comment}
          </span>
          <span className='text-orange font-bold text-center'>
            Ver mas
          </span>
        </p>
        <hr className='border-b border-b-gray-400 my-4' />
        <p className='text-gray-800 text-lg'>
          05 de Marzo del 2003
        </p>
      </div>
    </article>
  )
}

export default CommentCard

