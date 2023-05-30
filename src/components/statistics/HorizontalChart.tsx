import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  indexAxis: 'y' as const,
  // elements: {
  //   bar: {
  //     innerHeight: 8,
  //     innerWidth: 8
  //   },
  // },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const
    },
    title: {
      display: true,
      text: 'NÚMERO DE RESERVAS POR MES'
    }
  }
}

const labels = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

const data = {
  labels,
  datasets: [
    {
      label: 'Vuelos',
      data: labels.map(() => Math.floor(Math.random() * 100) + 1),
      backgroundColor: '#0072A9'
    },
    {
      label: 'Camas',
      data: labels.map(() => Math.floor(Math.random() * 100) + 1),
      backgroundColor: '#140062'
    },
    {
      label: 'paquetes turísticos',
      data: labels.map(() => Math.floor(Math.random() * 100) + 1),
      backgroundColor: '#D47D16'
    }
  ]
}

const HorizontalChart = (): JSX.Element => {
  return (
    <article className="w-full h-full p-8 bg-white rounded-xl overflow-hidden">
      <Bar options={options} data={data} />
    </article>
  )
}

export default HorizontalChart
