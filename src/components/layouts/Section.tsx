interface Props {
  children: JSX.Element[] | JSX.Element
  className?: string | undefined
}

const Section = ({ children, className }: Props): JSX.Element => {
  return (
    <section className={`px-32 pt-32 ${className}`}>
      {children}
    </section>
  )
}

export default Section

