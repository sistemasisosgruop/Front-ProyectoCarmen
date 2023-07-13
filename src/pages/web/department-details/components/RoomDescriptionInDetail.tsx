import { useLang } from '@hooks/useLang'
import Button from '@components/Button'
import { MdBedroomParent } from 'react-icons/md'
import { RiHotelBedFill } from 'react-icons/ri'
import { FaBath } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'

import { type Department } from 'types/department'

interface Props {
  department: Department
}

function RoomDescriptionInDetail({ department }: Props) {
  const { t } = useLang()

  return (
    <>
      <h4 className="text-xl font-bold mb-4">{t('pages.rooms.overview')}</h4>
      <ul className="flex flex-wrap justify-center items-center gap-4">
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
          <span>{t('pages.rooms.beds', { numberBeds: department?.numBeds })}</span>
        </li>
        <li className="flex jutify-start items-center gap-2 text-blue">
          <FaBath size={18} />
          <span>
            {t('pages.rooms.bathrooms', { numberBathrooms: department?.numBathrooms })}
          </span>
        </li>
      </ul>

      <div className="my-4">
        <p>{department?.description}</p>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 mb-8">
        <h4 className="text-xl font-bold">{t('pages.rooms.what_it_offers')}</h4>
        <ul className="">
          {department?.details?.amenities?.map((amenitie, index) => (
            <li key={index} className="text-blue list-item list-disc list-inside">
              {amenitie}
            </li>
          ))}
        </ul>

        <Button
          text={t('general.view_more') ?? ''}
          background="bg-white"
          textColor="text-dark"
          extraClasses="w-auto sm:w-auto mt-4"
        />
      </div>

      <div>
        <h4 className="text-xl font-bold">{t('pages.rooms.services')}</h4>
        <ul className="">
          {department?.details?.services?.map((service, index) => (
            <li key={index} className="text-orange text-lg font-bold list-disc list-inside">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default RoomDescriptionInDetail
