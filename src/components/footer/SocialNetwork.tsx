import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'

const SocialNetwork = (): JSX.Element => {
  return (
    <ul className="flex justify-center items-center gap-2 mt-4 md:mt-0">
      <li>
        <a href="" target="_blank" className="text-white">
          <AiOutlineWhatsApp size={22} />
        </a>
      </li>
      <li>
        <a href="" target="_blank" className="text-white">
          <FaFacebookF size={22} />
        </a>
      </li>
      <li>
        <a href="" target="_blank" className="text-white">
          <AiOutlineInstagram size={22} />
        </a>
      </li>
      <li>
        <a href="" target="_blank" className="text-white">
          <FaTiktok size={22} />
        </a>
      </li>
    </ul>
  )
}

export default SocialNetwork
