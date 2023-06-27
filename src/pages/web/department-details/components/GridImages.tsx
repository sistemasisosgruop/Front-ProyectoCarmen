import { useLang } from '@hooks/useLang'
import Button from '@components/Button'
import { HiOutlinePhoto } from 'react-icons/hi2'

interface Props {
  images: string[]
}

function GridImages({ images }: Props) {
  const { t } = useLang()

  return (
    <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 md:row-span-2 lg:grid-cols-5 h-[380px] max-h-[380px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image of department ${index + 1}`}
          className={`
            w-full h-full rounded-xl object-cover object-center
            ${index === 0 ? 'col-span-2 md:col-span-2 md:row-span-2 lg:col-span-3' : ''}
            ${index === 1 ? 'col-span-1 lg:col-span-2 lg:row-span-1' : ''}
            ${
              index === 3
                ? 'col-span-2 md:max-h-[280px] md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-1'
                : ''
            }
          `}
        />
      ))}
      <article className="absolute bottom-4 left-4">
        <Button
          text={t('pages.rooms.show_more_photos')}
          background="bg-white"
          textColor="text-dark"
          showIcon={true}
          icon={HiOutlinePhoto}
          position="left"
        />
      </article>
    </div>
  )
}

export default GridImages
