import { BrowserRouter } from 'react-router-dom'
import Routing from './routes/Routing'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  )
}

export default App

