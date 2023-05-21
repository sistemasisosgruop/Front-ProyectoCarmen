import { useLang } from '@hooks/useLang'
import Tabs from '@components/Tabs'
import TabItem from '@components/TabItem'
import SearchLodging from './SearchLodging'
import SearchFlights from './SearchFlights'
import SearchTourPackage from './SearchTourPackage'
import { FiHome } from 'react-icons/fi'
import { BsAirplane } from 'react-icons/bs'
import { BiBriefcaseAlt } from 'react-icons/bi'

const ServiceSearch = (): JSX.Element => {
  const { t } = useLang()

  return (
    <div className='absolute top-[75vh] z-10 xl:top-[70vh]'>
      <Tabs
        tabContainerStyles='flex justify-center items-center sm:justify-start'
        inactiveTabStyle='bg-blue border-t-2 border-t-blue text-white font-bold'
        activeTabStyle='bg-white border-t-2 border-t-blue text-dark font-bold'
      >
        <TabItem icon={<FiHome />} label={t('general.lodging')}>
          <SearchLodging />
        </TabItem>
        <TabItem icon={<BsAirplane />} label={t('general.flights')}>
          <SearchFlights />
        </TabItem>
        <TabItem icon={<BiBriefcaseAlt />} label={t('general.tour_packages')}>
          <SearchTourPackage />
        </TabItem>
      </Tabs>
    </div>
  )
}

export default ServiceSearch
