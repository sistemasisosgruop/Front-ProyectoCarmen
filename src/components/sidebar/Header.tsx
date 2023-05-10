import { AiOutlineMenu } from 'react-icons/ai'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

interface Props {
  openSidebar: () => void
}

const Header = ({ openSidebar }: Props): JSX.Element => {
  return (
    <header className='w-full bg-turquoise px-6 py-4 flex justify-between items-center xl:justify-end'>
      <button
        type='button'
        onClick={openSidebar}
        className='border border-white rounded-lg flex justify-center items-center p-1 text-white hover:bg-white hover:text-turquoise hover:transition-all hover:duration-300 xl:hidden'
      >
        <AiOutlineMenu size={18} />
      </button>
      <button
        type='button'
        className='flex justify-center items-center gap-2 text-white'
      >
        <p>
          Camila Raquel Dias Rosas
        </p>
        <BiChevronDown size={18} />
      </button>
    </header>
  )
}

export default Header