import { AiFillStar } from 'react-icons/ai'

const Comment = (): JSX.Element => {
  return (
    <article className='py-4 px-8 bg-blue mr-8 rounded-xl'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex flex-col justify-start'>
          <p className='text-xl text-white font-bold'>
            Yoel Valverde
          </p>
          <p className='text-gray-200 text-sm'>
            05 de Marzo del 2003
          </p>
        </div>
        <div className='flex justify-start items-start gap-1'>
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} size={18} className='text-white' />
          ))}
        </div>
      </div>
      <p className='text-xl text-white text-center'>
        &quot;Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate.&ldquo;
      </p>
    </article>
  )
}

export default Comment
