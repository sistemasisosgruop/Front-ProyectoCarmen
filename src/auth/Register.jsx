import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import SignUp from './SignUp'

const Register = () => {
  return (
    <LayoutPage title="Registrate">
      <Section className="bg-white py-16 grid grid-cols-1 gap-8">
        <SignUp />

        <div className="row-start-1">
          <picture className="inline-block w-full mb-8">
            <img
              src="/images/illustrations/login.svg"
              alt="login file"
              className="w-full"
            />
          </picture>
          <article className="space-y-2">
            <h1 className="text-blue text-center text-2xl font-bold flex flex-col justify-center items-center">
              Iniciar sesión / Registrarse
            </h1>
            <p className="text-center text-xl">
              Explora un mundo de posibilidades. Inicia sesión si ya tienes una
              cuenta o regístrate para descubrir todo lo que puedes hacer con
              nosotros.
            </p>
          </article>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Register
