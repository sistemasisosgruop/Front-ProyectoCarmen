import { useLang } from '@hooks/useLang'
import { AiFillStar } from 'react-icons/ai'

function HeaderTestimonials() {
  const { t } = useLang()

  const customerCommentsTranslation = t('pages.home.customer_comments')

  return (
    <>
      <div className="xl:px-32">
        <h2 className="text-2xl font-bold text-center xl:text-4xl">
          <span className="text-orange">{customerCommentsTranslation.split(' ').splice(0, 2).join(' ')}</span>
          &nbsp;
          {customerCommentsTranslation.split(' ').splice(2).join(' ')}
        </h2>
        <p className="text-xl text-dark text-center xl:text-2xl">{t('pages.home.description')}</p>
        <hr className="border-b-2 border-b-gray-400 mt-4" />
      </div>
      <div className="flex justify-center items-center gap-8 py-8 xl:gap-32">
        <p className="flex flex-col justify-center items-center gap-1 text-center">
          <span className="text-2xl text-dark font-bold xl:text-6xl">5.0</span>
          <span className="text-sm md:text-base">{t('pages.home.qualification')}</span>
        </p>
        <div className="text-yellow-600 flex justify-start gap-2">
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} size={32} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HeaderTestimonials
