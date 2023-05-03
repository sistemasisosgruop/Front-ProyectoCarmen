import TabItem from '../tab-item'
import Tabs from '../tabs'

const TourDetails = (): JSX.Element => {
  return (
    <div>
      <Tabs>
        <TabItem label='Incluye'>
          <h2>
            Incluye
          </h2>
        </TabItem>
        <TabItem label='Itinerario'>
          <h2>
            Intinerario
          </h2>
        </TabItem>
        <TabItem label='Salida y regreso'>
          <h2>
            Salida y regreso
          </h2>
        </TabItem>
        <TabItem label='Accesibilidad'>
          <h2>
            Accesibilidad
          </h2>
        </TabItem>
      </Tabs>
    </div>
  )
}

export default TourDetails
