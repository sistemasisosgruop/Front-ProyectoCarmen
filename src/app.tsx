import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import Routing from './routes/routing'

import globalEs from './lang/es/global.json'
import globalEn from './lang/en/global.json'

i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false
  },
  lng: 'es',
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})
  .then((response) => { console.log(response) })
  .catch((error) => { console.log(error) })

const App = (): JSX.Element => {
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App