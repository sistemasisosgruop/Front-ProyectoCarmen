import Tabs from '../Tabs'
import TabItem from '../TabItem'
import SearchLodging from './SearchLodging'
import SearchFlights from './SearchFlights'
import { FiHome } from 'react-icons/fi'
import { BsAirplane } from 'react-icons/bs'
import { BiBriefcaseAlt } from 'react-icons/bi'
import SearchTourPackage from './SearchTourPackage'

const ServiceSearch = (): JSX.Element => {
  return (
    <div className='mt-16 xl:absolute xl:top-[82vh] xl:z-10 xl:mt-0'>
      <Tabs
        tabContainerStyles='flex justify-center items-center sm:justify-start'
        inactiveTabStyle='bg-blue border-t-2 border-t-blue text-white font-bold'
        activeTabStyle='bg-white border-t-2 border-t-blue text-dark font-bold'
      >
        <TabItem icon={<FiHome />} label='Hospedaje'>
          <SearchLodging />
        </TabItem>
        <TabItem icon={<BsAirplane />} label='Vuelos'>
          <SearchFlights />
        </TabItem>
        <TabItem icon={<BiBriefcaseAlt />} label='Paquete Turístico'>
          <SearchTourPackage />
        </TabItem>
      </Tabs>
    </div>
  )
}

export default ServiceSearch
