import { AuthProvider } from '@context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import { ToastContainer } from 'react-toastify'
import Routes from './routes/Routes'

import globalEs from './lang/es/global.json'
import globalEn from './lang/en/global.json'

import 'react-toastify/dist/ReactToastify.css'

i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false
  },
  lng: localStorage.getItem('lang') ?? 'es',
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </I18nextProvider>
  )
}

export default App
