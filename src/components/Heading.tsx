interface Props {
  title: string
  description?: string
  textAlign?: string
}

const Heading = ({
  title,
  textAlign = 'text-center',
  description
}: Props): JSX.Element => {
  return (
    <div className='mb-8'>
      <h2 className={`text-4xl ${textAlign ?? ''} font-bold`}>
        {title}
      </h2>
      {description !== undefined && (
        <p className='text-2xl text-gray-800 text-center'>
          {description}
        </p>
      )}
    </div>
  )
}

export default Heading
