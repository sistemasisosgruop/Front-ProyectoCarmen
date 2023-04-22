import { Routes, Route } from 'react-router-dom'
import Home from '../pages/web/Home'

const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Routing

