interface Props {
  title: string
  description: string
}

const Heading = ({ title, description }: Props): JSX.Element => {
  return (
    <div className='mb-8'>
      <h2 className='text-4xl text-center font-bold'>
        {title}
      </h2>
      <p className='text-2xl text-gray-800 text-center'>
        {description}
      </p>
    </div>
  )
}

export default Heading

