import { useLang } from '@hooks/useLang'
import { MdBedroomParent } from 'react-icons/md'
import { RiHotelBedFill } from 'react-icons/ri'
import { FaBath } from 'react-icons/fa'
import { GiHeatHaze } from 'react-icons/gi'
import { HiUsers } from 'react-icons/hi'
import { AiOutlineLike, AiOutlineWifi } from 'react-icons/ai'
import Button from '@components/Button'

const RoomDescriptionInDetail = () => {
  const { t } = useLang()

  return (
    <>
      <h4 className="text-xl font-bold mb-4">{t('pages.rooms.overview')}</h4>
      <ul className="grid grid-cols-2 place-content-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        <li className="flex jutify-start items-center gap-2 text-blue">
          <HiUsers size={18} />
          <span>{t('pages.rooms.up_to_people', { numberPeople: '12' })}</span>
        </li>
        <li className="flex jutify-start items-center gap-2 text-blue">
          <MdBedroomParent size={18} />
          <span>{t('pages.rooms.bedrooms', { numberBedrooms: '4' })}</span>
        </li>
        <li className="flex jutify-start items-center gap-2 text-blue">
          <RiHotelBedFill size={18} />
          <span>{t('pages.rooms.beds', { numberBeds: '2' })}</span>
        </li>
        <li className="flex jutify-start items-center gap-2 text-blue">
          <FaBath size={18} />
          <span>{t('pages.rooms.bathrooms', { numberBathrooms: '2' })}</span>
        </li>
      </ul>

      <div className="my-4">
        <p>
          in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac
          felis donec et odio pellentesque diam volutpat commodo sed egestas
          egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu
          vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu
          sem integer vitae justo eget magna fermentum iaculis eu non diam
        </p>
        <button>{t('general.view_more')}</button>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 mb-8">
        <h4 className="text-xl font-bold">{t('pages.rooms.what_it_offers')}</h4>
        <ul className="">
          <li className="flex jutify-start items-center gap-2 text-blue">
            <AiOutlineWifi size={18} />
            <span>{t('pages.rooms.wifi_included')}</span>
          </li>
          <li className="flex jutify-start items-center gap-2 text-blue">
            <GiHeatHaze size={18} />
            <span>{t('pages.rooms.heating', { numberBedrooms: '4' })}</span>
          </li>
          <li className="flex jutify-start items-center gap-2 text-blue">
            <AiOutlineLike size={18} />
            <span>{t('pages.rooms.free_cancellation')}</span>
          </li>
        </ul>

        <Button
          text={t('general.view_more')}
          background="bg-white"
          textColor="text-dark"
          extraClasses="w-auto sm:w-auto mt-4"
        />
      </div>

      <div>
        <h4 className="text-xl font-bold">{t('pages.rooms.services')}</h4>
        <ul className="">
          <li className="flex jutify-start items-center gap-2 text-orange text-lg font-bold">
            {t('pages.rooms.free_cancellation_until', { time: 3 })}
          </li>
          <li className="flex jutify-start items-center gap-2 text-orange text-lg font-bold">
            {t('pages.rooms.additional_charge_until', { time: 3 })}
          </li>
        </ul>
      </div>
    </>
  )
}

export default RoomDescriptionInDetail
