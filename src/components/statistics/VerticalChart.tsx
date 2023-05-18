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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'INGRESOS'
    }
  }
}

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

const data = {
  labels,
  datasets: [
    {
      label: 'GANANCIAS',
      data: labels.map(() => Math.floor(Math.random() * 100) + 1),
      backgroundColor: 'rgba(255, 92, 235, 0.5)'
    },
    {
      label: 'Perdidas',
      data: labels.map(() => Math.floor(Math.random() * 100) + 1),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}

const VerticalChart = (): JSX.Element => {
  return (
    <article className='w-full h-full p-8 bg-white rounded-xl overflow-hidden'>
      <Bar options={options} data={data} />
    </article>
  )
}

export default VerticalChart
