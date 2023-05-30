import InformationHorizontalForm from './InformationHorizontalForm'

const SecondaryUserForm = (): JSX.Element => {
  return (
    <div>
      <h2 className="flex justify-start items-center gap-2 font-bold mb-4">
        <span className="w-8 h-8 rounded-full bg-orange text-white text-xl flex justify-center items-center">
          2
        </span>
        <span className="text-xl text-dark">Datos del segundo usuario</span>
      </h2>
      <form className="flex flex-col gap-4">
        <InformationHorizontalForm />
      </form>
    </div>
  )
}

export default SecondaryUserForm
