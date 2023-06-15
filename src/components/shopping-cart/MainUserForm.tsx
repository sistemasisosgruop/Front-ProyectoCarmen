import InformationForm from './InformationForm'

function MainUserForm() {
  return (
    <div>
      <h2 className="flex justify-start items-center gap-2 font-bold mb-4">
        <span className="w-8 h-8 rounded-full bg-orange text-white text-xl flex justify-center items-center">1</span>
        <span className="text-xl text-dark">Datos del usuario principal</span>
      </h2>
      <form className="flex flex-col gap-4">
        <InformationForm />
      </form>
    </div>
  )
}

export default MainUserForm
