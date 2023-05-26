import { useTabs } from "@hooks/useTabs";
import Tabs from "../../components/Tabs";
import TabItem from "../../components/TabItem";
import THead from "../THead";

const SelectFlight = (): JSX.Element => {
  const { activeTab, switchTab } = useTabs(0);

  return (
    <Tabs activeTab={activeTab} switchTab={switchTab}>
      <TabItem label="Precios por aerolinea">
        <table>
          <THead
            headers={["Aerolínea", "Directo", "1 escala", "2 escalas o más"]}
          />
          <tbody>
            <tr>
              <td>LATAM</td>
              <td>US$ 129.00</td>
              <td>-</td>
              <td>US$ 189.00</td>
            </tr>
            <tr>
              <td>SKY</td>
              <td>US$ 119.00</td>
              <td>US$ 109.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td>VIVA</td>
              <td>-</td>
              <td>US$ 99.00</td>
              <td>US$ 89.00</td>
            </tr>
          </tbody>
        </table>
      </TabItem>
      <TabItem label="Fechas flexibles (+/- 3 dias)">
        <p>Fechas flexibles</p>
      </TabItem>
    </Tabs>
  );
};

export default SelectFlight;
