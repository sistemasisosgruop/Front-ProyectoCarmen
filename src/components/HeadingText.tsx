interface Props {
  text: string
}

const HeadingText = ({ text }: Props): JSX.Element => {
  return (
    <h1 className='uppercase text-dark text-center text-2xl font-bold mb-4'>
      {text}
    </h1>
  )
}

export default HeadingText
