import { Link } from 'react-router-dom'

const PurchaseTerms = (): JSX.Element => {
  return (
    <article className="grid grid-cols-1 gap-4 place-content-center text-center lg:grid-cols-2">
      <Link
        to="/condiciones-de-compra"
        className="underline text-blue text-base font-bold hover:decoration-wavy md:text-lg lg:text-xl"
      >
        Ver políticas y condiciones de compra
      </Link>
      <form>
        <div className="flex flex-col justify-start items-start gap-2 lg:flex-row lg:gap-8">
          <label
            htmlFor="accept"
            className="flex justify-start items-center gap-1"
          >
            <input type="radio" name="accept" id="accept" className="" />
            <span>Leí y acepto las políticas y condiciones</span>
          </label>
          <label
            htmlFor="noAccept"
            className="flex justify-start items-center gap-1"
          >
            <input type="radio" name="noAccept" className="" />
            <span>No acepto</span>
          </label>
        </div>
      </form>
    </article>
  )
}

export default PurchaseTerms
