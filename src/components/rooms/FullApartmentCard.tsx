import { useLang } from '@hooks/useLang'
import ButtonLinkSm from '@components/ButtonLinkSm'
import CardHover from '@components/CardHover'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { MdBedroomParent } from 'react-icons/md'

interface Props {
  id: number | string
  href: string
  imagePath: string
  alt: string
}

const FullApartmentCard = ({ id, href, imagePath, alt }: Props): JSX.Element => {
  const { t } = useLang()

  return (
    <div
      className={`
        h-full flex flex-col rounded-xl overflow-hidden
        ${id === 0 ? 'col-span-6 row-span-2 sm:col-span-6 lg:col-span-2 lg:row-span-2' : ''}
        ${id === 1 ? 'col-span-6 row-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-1' : ''}
        ${id === 2 ? 'col-span-6 row-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-2' : ''}
        ${id === 3 ? 'col-span-6 row-span-2 sm:col-span-6 lg:col-span-2 lg:row-span-1' : ''}
      `}
    >
      <CardHover
        href={href}
        imagePath={imagePath}
        alt={alt}
        score={'4.5'}
        minHeight='min-h-[220px]'
      >
        <article className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <p className='text-xl font-bold text-dark'>
              Departamento
            </p>
            <div>
              <p className='text-lg text-blue'>
                S/.&nbsp;
                <strong className='text-dark font-bold'>
                  90.00
                </strong>
              </p>
              <p className='text-gray-400 text-sm font-bold'>
                Por noche
              </p>
            </div>
          </div>
          <div className='flex justify-between items-end'>
            <ul className='space-y-2'>
              <li className='flex justify-start items-center gap-2'>
                <MdBedroomParent size={18} className='text-blue' />
                <span>
                  4 habitaciones
                </span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <FaMapMarkerAlt size={18} className='text-blue' />
                <span>
                  Cusco
                </span>
              </li>
              <li className='flex justify-start items-center gap-2'>
                <HiUsers size={18} className='text-blue' />
                <span>
                  Hasta 8 personas
                </span>
              </li>
            </ul>
            <ButtonLinkSm
              to='/habitaciones/detalle'
              text={t('general.view_more')}
              background='bg-orange'
            />
          </div>
        </article>
      </CardHover>
    </div>
  )
}

export default FullApartmentCard
