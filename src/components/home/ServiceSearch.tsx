import Tabs from '../tabs'
import TabItem from '../tab-item'
import SearchLodging from './SearchLodging'
import SearchFlights from './SearchFlights'
import { FiHome } from 'react-icons/fi'
import { BsAirplane } from 'react-icons/bs'
import { BiBriefcaseAlt } from 'react-icons/bi'
import SearchTourPackage from './SearchTourPackage'

const ServiceSearch = (): JSX.Element => {
  return (
    <div className='absolute top-[82vh] z-10'>
      <Tabs>
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
