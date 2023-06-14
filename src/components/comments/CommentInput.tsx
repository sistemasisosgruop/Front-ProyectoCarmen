import { useState } from 'react'
import { useLang } from '@hooks/useLang'
import { BsStarFill } from 'react-icons/bs'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const CommentInput = () => {
  const [selectedStar, setSelectedStar] = useState(0)
  const { t } = useLang()

  const handleStarClick = index => {
    setSelectedStar(index + 1)
  }

  return (
    <form>
      <h4 className="text-dark text-center text-2xl font-bold">
        {t('general.add_review')}
      </h4>
      <p className="text-dark text-center">
        {t('general.add_comment_rate_us')}
      </p>
      <div className="mt-8">
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                handleStarClick(index)
              }}
              className={`${
                index <= selectedStar - 1 ? 'text-orange' : 'text-gray-400'
              }`}
            >
              <BsStarFill size={24} />
            </button>
          ))}
        </div>
        <div className="relative">
          <textarea
            name="comment"
            placeholder={`${t('general.add_comment')}...`}
            className="w-full border border-gray-400 rounded-xl px-4 pt-2 pb-16 outline-none resize-none focus:border-orange"
            rows={12}
          ></textarea>
          <button
            type="button"
            className="absolute bottom-4 right-4 bg-orange flex justify-center items-center gap-2 text-white font-bold px-6 py-2 rounded-xl"
          >
            <span>{t('general.comment')}</span>
            <HiOutlineArrowSmRight size={20} />
          </button>
        </div>
      </div>
    </form>
  )
}

export default CommentInput
