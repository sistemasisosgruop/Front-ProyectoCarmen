import { useLang } from '../../hooks/useLang'
import CommentCard from '../../components/CommentCard'
import { AiFillStar } from 'react-icons/ai'

const Comments = (): JSX.Element => {
  const { t } = useLang()

  return (
    <>
      <div className='xl:px-32'>
        <h2 className='text-2xl tetx-dark font-bold text-center xl:text-4xl'>
          {t('home.commentsSection.theCommentOf')} <span className='text-orange'>{t('home.commentsSection.ourClients')}</span>
        </h2>
        <p className='text-xl text-dark text-center xl:text-2xl'>
          {t('home.commentsSection.description')}
        </p>
        <hr className='border-b-2 border-b-gray-400 mt-4' />
      </div>
      <div className='flex justify-center items-center gap-8 py-8 xl:gap-32'>
        <p className='flex flex-col justify-center items-center gap-1 text-center'>
          <span className='text-2xl text-dark font-bold xl:text-6xl'>
            5.0
          </span>
          <span className='text-sm md:text-base'>
            {t('home.commentsSection.qualification')}
          </span>
        </p>
        <div className='text-yellow-600 flex justify-start gap-2'>
          <AiFillStar size={32} />
          <AiFillStar size={32} />
          <AiFillStar size={32} />
          <AiFillStar size={32} />
          <AiFillStar size={32} />
        </div>
      </div>
      <div className='flex flex-col gap-8 pb-16 md:px-16'>
        <CommentCard
          username='Maria Luisa Paredes Diaz'
          comment='scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate.'
          qualification={5}
        />
        <CommentCard
          username='Edin Yoel Valverde Polo'
          comment='scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate.'
          qualification={5}
        />
      </div>
    </>
  )
}

export default Comments
