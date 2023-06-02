import { AuthProvider } from '@context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import Routes from './routes/Routes'

import globalEs from './lang/es/global.json'
import globalEn from './lang/en/global.json'

i18next
  .use(initReactI18next)
  .init({
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
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </I18nextProvider>
  )
}

export default App
