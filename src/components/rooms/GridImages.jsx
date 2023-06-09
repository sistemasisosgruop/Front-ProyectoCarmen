import { useLang } from '@hooks/useLang'
import Button from '@components/Button'
import { HiOutlinePhoto } from 'react-icons/hi2'



const GridImages = ({ images }) => {
  const { t } = useLang()

  return (
    <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 md:row-span-2 lg:grid-cols-5 h-[380px] max-h-[380px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.path}
          alt={image.alt}
          className={`
            w-full h-full rounded-xl object-cover object-center
            ${
              index === 0
                ? 'col-span-2 md:col-span-2 md:row-span-2 lg:col-span-3'
                : ''
            }
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
          isIcon
          icon={<HiOutlinePhoto size={18} />}
          position="left"
        />
      </article>
    </div>
  )
}

export default GridImages
