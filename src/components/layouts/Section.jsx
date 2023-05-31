
const Section = ({ children, className = '' }) => {
  return (
    <div className={`px-8 sm:px-16 md:px-24 xl:px-32 ${className}`}>
      {children}
    </div>
  )
}

export default Section
