import ContactFormSection from '@components/contact-form/ContactFormSection'
import Heading from '@components/Heading'
import LayoutPage from '@components/layouts/LayoutPage'
import Section from '@components/layouts/Section'
import Masthead from '@components/Masthead'

const Contact = () => {
  return (
    <LayoutPage title="Contactanos">
      <Masthead />

      <Section className="my-32 lg:bg-blue">
        <div className="bg-white rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
          <img
            src="https://www.grandespymes.com.ar/wp-content/uploads/2018/10/El-secreto-para-lograr-equipos-de-alto-rendimiento.jpg"
            alt="image"
            className="w-full h-full min-h-[280px] object-cover object-center md:col-span-1"
          />
          <article className="py-4 px-4 sm:px-8 md:col-span-2">
            <h2 className="text-2xl uppercase text-blue font-bold mb-2">
              Nuestro equipo
            </h2>
            <p className="text-xl text-justify">
              non pulvinar neque laoreet suspendisse interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non nisi est sit amet
              facilisis magna etiam tempor orci eu lobortis elementum nibh
              tellus molestie nunc non blandit massa enim nec dui nunc mattis
              enim ut tellus elementum sagittis vitae et leo duis ut diam quam
              nulla porttitor massa id neque aliquam vestibulum morbi blandit
            </p>
            <div className="flex justify-center items-center mt-8">
              <ul className="text-dark text-xl space-y-2">
                <li>
                  <span className="border-l-2 border-l-blue mr-2"></span>
                  non pulvinar neque laoreet suspendisse
                </li>
                <li>
                  <span className="border-l-2 border-l-blue mr-2"></span>
                  non pulvinar neque laoreet suspendisse
                </li>
                <li>
                  <span className="border-l-2 border-l-blue mr-2"></span>
                  non pulvinar neque laoreet suspendisse
                </li>
              </ul>
            </div>
          </article>
        </div>
      </Section>

      <Section className="mb-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="bg-white rounded-xl overflow-hidden shadow border border-white">
            <img
              src="https://thumbs.dreamstime.com/b/grupo-de-personas-54360518.jpg"
              alt="image"
              className="h-64 w-full object-cover object-top"
            />
            <div className="px-4 py-4 sm:px-8">
              <h2 className="uppercase text-2xl text-blue font-bold mb-2">
                Nuestra vision
              </h2>
              <p className="text-xl text-justify">
                non pulvinar neque laoreet suspendisse interdum consectetur
                libero id faucibus nisl tincidunt eget nullam non nisi est sit
                amet facilisis magna etiam tempor orci eu lobortis elementum
                nibh tellus molestie nunc non blandit massa enim nec dui nunc
                mattis enim ut tellus elementum sagittis vitae et leo duis ut
                diam quam nulla porttitor massa id neque aliquam vestibulum
                morbi blandit
              </p>
            </div>
          </article>
          <article className="bg-white rounded-xl overflow-hidden shadow border border-white">
            <img
              src="https://thumbs.dreamstime.com/b/grupo-de-personas-54360518.jpg"
              alt="image 02"
              className="h-64 w-full object-cover object-top"
            />
            <div className="px-4 py-4 sm:px-8">
              <h2 className="uppercase text-2xl text-blue font-bold mb-2">
                Nuestra vision
              </h2>
              <p className="text-xl text-justify">
                non pulvinar neque laoreet suspendisse interdum consectetur
                libero id faucibus nisl tincidunt eget nullam non nisi est sit
                amet facilisis magna etiam tempor orci eu lobortis elementum
                nibh tellus molestie nunc non blandit massa enim nec dui nunc
                mattis enim ut tellus elementum sagittis vitae et leo duis ut
                diam quam nulla porttitor massa id neque aliquam vestibulum
                morbi blandit
              </p>
            </div>
          </article>
        </div>
      </Section>

      <ContactFormSection />

      <Section className="my-32">
        <div className="mb-8">
          <Heading
            title="Donde nos encontramos"
            titleStyles="uppercase text-blue"
          />
          <p className="text-xl text-dark text-center">
            Av. El Sol, primera cuadra, Galerias ISAAC (oficina 3) 084 Cusco,
            Peru
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2296579551103!2d-71.97821532568824!3d-13.521492986846765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd60aaee7a475%3A0x8c755f455f9b9804!2sAv.%20El%20Sol%2C%20Cusco%2008002!5e0!3m2!1ses-419!2spe!4v1683245221486!5m2!1ses-419!2spe"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="inline-block w-full h-[420px]"
          ></iframe>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default Contact
