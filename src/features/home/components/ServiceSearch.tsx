import { useLang } from '@hooks/useLang'
import { useTabs } from '@hooks/useTabs'
import Tabs from '@components/Tabs'
import TabItem from '@components/TabItem'
import SearchLodging from './SearchLodging'
import SearchFlights from './SearchFlights'
import SearchTourPackage from './SearchTourPackage'
import { FiHome } from 'react-icons/fi'
import { BsAirplane } from 'react-icons/bs'
import { BiBriefcaseAlt } from 'react-icons/bi'

function ServiceSearch() {
  const { t } = useLang()
  const { activeTab, switchTab } = useTabs(0)

  return (
    <div className="absolute left-0 top-[480px] z-20 sm:top-[420px] md:top-[420px] xl:top-[480px]">
      <Tabs
        tabContainerStyles="flex"
        inactiveTabStyle="bg-blue border-t-2 border-t-blue text-white font-bold"
        activeTabStyle="bg-white border-t-2 border-t-blue text-dark font-bold"
        contentContainerStyles="w-auto bg-white p-8"
        activeTab={activeTab}
        switchTab={switchTab}
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
