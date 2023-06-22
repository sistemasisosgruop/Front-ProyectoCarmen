import { AuthProvider } from '@context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import dayjs from 'dayjs'
import { ToastContainer } from 'react-toastify'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Routes from './routes/Routes'
import { CLIENT_ID } from '@utils/consts'

import globalEs from './lang/es/global.json'
import globalEn from './lang/en/global.json'

import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'dayjs/locale/es'

i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false
  },
  lng: window.localStorage.getItem('lang') ?? 'es',
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})

dayjs.locale('es')

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <AuthProvider>
          <ToastContainer />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </AuthProvider>
      </GoogleOAuthProvider>
    </I18nextProvider>
  )
}

export default App
