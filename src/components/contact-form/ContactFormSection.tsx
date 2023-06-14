import Section from '@layouts/Section'
import ContactForm from './ContactForm'

const ContactFormSection = () => {
  return (
    <Section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <ContactForm />

      <img
        src="https://thumbs.dreamstime.com/b/grupo-de-personas-54360518.jpg"
        alt="image form"
        className="w-full h-full min-h-[380px] object-cover obeject-center rounded-xl overflow-hidden border border-white border-opacity-80"
      />
    </Section>
  )
}

export default ContactFormSection
