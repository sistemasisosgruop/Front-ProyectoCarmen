interface Props {
  children: JSX.Element[] | JSX.Element
  className?: string | undefined
}

const Section = ({ children, className }: Props): JSX.Element => {
  return (
    <section className={`px-8 pt-32 sm:px-16 md:px-24 xl:px-32 ${className}`}>
      {children}
    </section>
  )
}

export default Section

