import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

interface LangData {
  t: TFunction
  toggleLang: (lang: string) => void
}

export const useLang = (): LangData => {
  const [t, i18n] = useTranslation('global')

  const toggleLang = (lang: string): void => {
    i18n.changeLanguage(lang).catch(error => {
      console.log(error)
    })
  }

  return { t, toggleLang }
}
