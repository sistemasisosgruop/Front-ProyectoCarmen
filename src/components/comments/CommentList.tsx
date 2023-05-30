import { useState } from 'react'
import { useLang } from '@hooks/useLang'
import { BiLoader } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs'

const CommentList = (): JSX.Element => {
  const [activeComment, setActiveComment] = useState<number | null>(null)
  const { t } = useLang()

  const toggleFullComment = (commentIndex: number): void => {
    setActiveComment(commentIndex === activeComment ? null : commentIndex)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-end mb-4 sm:mb-0">
        <select className="rounded-xl bg-white border border-gray-300 px-6 py-2">
          <option className="inline-block rounded-xl text-red-700">
            Lo mas reciente
          </option>
          <option>Mejor calificacion</option>
          <option>Peor calificacion</option>
        </select>
      </div>
      <div className="mb-8">
        <p className="text-lg text-dark font-bold">
          {t('general.comments', { comments: 10 })}
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {[...Array(3)].map((_, index, array) => (
          <>
            <article key={index}>
              <div className="flex justify-between items-center mb-4">
                <p className="text-dark font-bold">Jane Doe</p>
                <div className="flex justify-start items-center gap-2 text-orange">
                  <BsStarFill size={18} />
                  <BsStarFill size={18} />
                  <BsStarFill size={18} />
                  <BsStarFill size={18} />
                  <BsStarFill size={18} />
                </div>
              </div>
              <p
                className={`text-dark mb-2 ${
                  activeComment === index ? '' : 'line-clamp-4 md:line-clamp-3'
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                at iste animi dignissimos inventore quo blanditiis voluptate,
                recusandae nihil vitae eum ducimus porro reiciendis veritatis,
                aliquid quod cum iure illum? Quo hic maxime error consequatur
                tempora eum iure, mollitia inventore. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Alias at iste animi dignissimos
                inventore quo blanditiis voluptate, recusandae nihil vitae eum
                ducimus porro reiciendis veritatis, aliquid quod cum iure illum?
                Quo hic maxime error consequatur tempora eum iure, mollitia
                inventore.
              </p>
              <p className="text-gray-600 text-sm flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => {
                    toggleFullComment(index)
                  }}
                  className="hover:underline"
                >
                  {activeComment === index
                    ? t('general.show_less')
                    : t('general.show_more')}
                </button>
                <span>{t('general.hours_ago', { time: 10 })}</span>
              </p>
            </article>
            {index === array.length - 1 || (
              <hr className="border-none py-[0.5px] bg-gray-200" />
            )}
          </>
        ))}
        <div className="grid place-content-center">
          <button
            type="button"
            className="flex justify-center items-center gap-2 px-6 py-1 rounded-xl border border-blue text-blue font-bold"
          >
            <BiLoader size={24} />
            <span>{t('general.see_more_comments')}</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default CommentList
