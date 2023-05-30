import { useLang } from '../../hooks/useLang'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Information = (): JSX.Element => {
  const { t } = useLang()

  return (
    <article className="bg-turquoise rounded-b-xl inline-flex flex-wrap justify-start items-center gap-16 px-8 py-4 xl:justify-center xl:items-start">
      <div className="flex justify-start items-center gap-2">
        <FaMapMarkerAlt size={24} className="text-white" />
        <p className="flex flex-col">
          <span className="font-bold text-white">
            {t('components.footer.address')}
          </span>
          <span className="text-sm text-white">
            Av. El Sol, Galerías UNSAAC (Oficina 3)
          </span>
        </p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <BsFillTelephoneFill size={24} className="text-white" />
        <p className="flex flex-col">
          <span className="font-bold text-white">
            {t('components.footer.phone')}
          </span>
          <span className="text-sm text-white">+51 984 748 106</span>
        </p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <MdEmail size={24} className="text-white" />
        <p className="flex flex-col">
          <span className="font-bold text-white">
            {t('components.footer.email')}
          </span>
          <span className="text-sm text-white">agtcarmen@hotmail.com</span>
        </p>
      </div>
    </article>
  )
}

export default Information
