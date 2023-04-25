interface Props {
  children: JSX.Element[] | JSX.Element
}

const Section = ({ children }: Props): JSX.Element => {
  return (
    <section className='px-32 bg-gray-200 pt-32'>
      {children}
    </section>
  )
}

export default Section

