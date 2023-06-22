import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options: ChartOptions = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
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

function HorizontalChart() {
  return (
    <article className="w-full h-full p-8 bg-white rounded-xl overflow-hidden">
      <Bar options={options} data={data} />
    </article>
  )
}

export default HorizontalChart
