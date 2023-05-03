import LayoutPage from '../../components/layouts/layout-page'

const PageNotFound = (): JSX.Element => {
  return (
    <LayoutPage title='Pagina no encontrada - Carmen Agencia de Viajes y Turismo'>
      <section className='h-full pt-32'>
        <h1 className='text-4xl font-bold text-orange'>
          Pagina no encontrada
        </h1>
      </section>
    </LayoutPage>
  )
}

export default PageNotFound
