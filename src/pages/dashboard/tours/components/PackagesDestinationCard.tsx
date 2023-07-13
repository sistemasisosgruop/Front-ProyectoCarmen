import { useLang } from '@hooks/useLang'
import ButtonLinkSm from '@components/ButtonLinkSm'
import CardHover from '@components/CardHover'
import { Link } from 'react-router-dom'

interface Props {
  href: string
  imagePath: string
  imageAlt: string
}

function PackagesDestinationCard({ href, imagePath, imageAlt }: Props) {
  const { t } = useLang()

  return (
    <Link to={href} className="w-full h-full inline-block">
      <CardHover imagePath={imagePath} imageAlt={imageAlt}>
        <article className="flex justify-between items-center">
          <p className="uppercase text-xs">Descubre</p>
          <p className="fon-bold text-lg">
            desde $ 105.00 <span className="text-gray-600"> /persona</span>
          </p>
        </article>
        <h3 className="text-2xl font-bold mb-4">Matrimonial</h3>
        <div className="flex justify-center items-center">
          <ButtonLinkSm to="/destinos-populares/detalle" text={t('general.view_more')} background="bg-orange" />
        </div>
      </CardHover>
    </Link>
  )
}

export default PackagesDestinationCard
