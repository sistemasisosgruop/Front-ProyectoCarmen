import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  imagePath: string
  imageAlt: string
  score?: number
  minHeight?: string
}

function CardHover({ children, imagePath, imageAlt, score, minHeight = 'min-h-[380px]' }: Props) {
  return (
    <div className="inline-block relative h-full w-full rounded-xl border border-white group/description cursor-pointer transition-all overflow-hidden">
      <img
        src={imagePath}
        alt={imageAlt}
        loading="lazy"
        className={`
          w-full h-full object-cover object-center group-hover/description:scale-125 duration-200
          ${minHeight ?? ''}
        `}
      />
      {score !== undefined && (
        <div className="invisible absolute top-2 right-2 bg-white px-2 py-1 rounded-xl group-hover/description:visible">
          <p className="text-dark font-bold">{score}</p>
        </div>
      )}

      <div className="md:invisible absolute z-20 bg-white bottom-0 left-0 px-4 py-4 w-full md:group-hover/description:visible rounded-b-md">
        {children}
      </div>
    </div>
  )
}

export default CardHover
