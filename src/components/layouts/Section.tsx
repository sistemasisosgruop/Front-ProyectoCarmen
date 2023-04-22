interface Props {
  children: JSX.Element
}

const Section = ({ children }: Props): JSX.Element => {
  return (
    <section className='px-32 bg-gray-200'>
      {children}
    </section>
  )
}

export default Section

