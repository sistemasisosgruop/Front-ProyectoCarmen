interface ImageProps {
  path: string
  alt: string
}

interface Props {
  images: ImageProps[]
}

const GridImages = ({ images }: Props): JSX.Element => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:row-span-2 lg:grid-cols-5 h-[380px] max-h-[380px]'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.path}
          alt={image.alt}
          className={`
            w-full h-full rounded-xl object-cover object-center
            ${index === 0 ? 'md:col-span-2 md:row-span-2 lg:col-span-3' : ''}
            ${index === 1 ? 'lg:col-span-2 lg:row-span-1' : ''}
            ${index === 3 ? 'md:max-h-[280px] md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-1' : ''}
          `}
        />
      ))}
    </div>
  )
}

export default GridImages
