import Tabs from '../Tabs'
import TabItem from '../TabItem'
import SearchLodging from './SearchLodging'
import { GrHomeRounded } from 'react-icons/gr'
import { BsAirplane } from 'react-icons/bs'
import { BiBriefcaseAlt } from 'react-icons/bi'

const ServiceSearch = (): JSX.Element => {
  return (
    <div className='absolute bottom-8 bg-white z-20'>
      <Tabs>
        <TabItem icon={<GrHomeRounded />} label='Hospedaje'>
          <SearchLodging />
        </TabItem>
        <TabItem icon={<BsAirplane />} label='Vuelos'>
          <h1>Vuelos</h1>
        </TabItem>
        <TabItem icon={<BiBriefcaseAlt />} label='Paquete Turístico'>
          <h1>Paquete Turísticos</h1>
        </TabItem>
      </Tabs>
    </div>
  )
}

export default ServiceSearch

