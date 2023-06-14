import { AiFillStar } from 'react-icons/ai'

const Comment = () => {
  return (
    <article className="py-4 px-4 bg-blue mr-4 rounded-xl md:px-8 md:mr-8">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-2">
        <div className="flex flex-col justify-start">
          <p className="text-xl text-white font-bold">Yoel Valverde</p>
          <p className="text-gray-200 text-sm">05 de Marzo del 2003</p>
        </div>
        <div className="flex justify-start items-start gap-1 mt-4 sm:mt-0">
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} size={18} className="text-white" />
          ))}
        </div>
      </div>
      <p className="text-xl text-white text-center">
        &quot;Scelerisque viverra mauris in aliquam sem fringilla ut morbi
        tincidunt augue interdum velit euismod in pellentesque massa placerat
        duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in
        ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed
        arcu non odio euismod lacinia at quis risus sed vulputate.&ldquo;
      </p>
    </article>
  )
}

export default Comment
