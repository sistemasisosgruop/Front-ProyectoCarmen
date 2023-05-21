import { useLang } from '@hooks/useLang'
import ButtonLink from '@components/ButtonLink'
import CardHover from '@components/CardHover'

interface Props {
  href: string
  imagePath: string
  alt: string
}

const PromotionCard = ({ href, imagePath, alt }: Props): JSX.Element => {
  const { t } = useLang()

  return (
    <CardHover
      href={href}
      imagePath={imagePath}
      alt={alt}
      score={'4.5'}
    >
      <article className='flex justify-between items-center gap-4'>
        <h4 className='text-gray-600 text-sm uppercase'>
          Habitación
        </h4>
        <p className='text-base font-bold'>
          $ 45.00&nbsp;<span className='text-gray-400'>/ día</span>
        </p>
      </article>
      <h3 className='text-lg font-bold uppercase my-4'>
        Matrimonial
      </h3>
      <ButtonLink
        to='/'
        text={t('general.view_more')}
        background='bg-orange'
      />
    </CardHover>
  )
}

export default PromotionCard
