import ReactPaginate from 'react-paginate'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Paginate = ({ counter, setCounter }) => {
  return (
    <ReactPaginate
      className="flex items-center"
      breakLabel="..."
      breakLinkClassName="w-8 h-8 flex justify-center items-center"
      nextLabel={<IoIosArrowForward size={20} />}
      nextLinkClassName="w-8 h-8 flex justify-center items-center rounded-r-[6px] border border-gray-500"
      previousLabel={<IoIosArrowBack size={20} />}
      previousLinkClassName="w-8 h-8 flex justify-center items-center rounded-l-[6px] border border-gray-500"
      pageCount={counter}
      pageLinkClassName="w-8 h-8 flex justify-center items-center border border-gray-400"
      activeLinkClassName="bg-gray-400"
      onPageChange={itemSelected => setCounter(itemSelected.selected + 1)}
    />
  )
}

export default Paginate
