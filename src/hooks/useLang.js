import { useTranslation } from 'react-i18next'

export const useLang = () => {
  const [t, i18n] = useTranslation('global')

  const toggleLang = lang => {
    i18n.changeLanguage(lang).catch(error => {
      console.log(error)
    })
  }

  return { t, toggleLang }
}
