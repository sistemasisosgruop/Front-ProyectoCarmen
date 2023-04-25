import LayoutPage from '../../components/layouts/LayoutPage'
import Section from '../../components/layouts/Section'
import Heading from '../../components/Heading'
import Masthead from '../../components/Masthead'
import ServiceSearch from '../../components/home/ServiceSearch'
import SliderTourPackage from '../../components/home/SliderTourPackage'
import Card from '../../components/Card'

const Home = (): JSX.Element => {
  return (
    <LayoutPage title='Carmen Agencia de Viajes y Turismo'>
      <Masthead />
      <ServiceSearch />
      <section className='bg-gray-200 w-full pt-48'>
        <SliderTourPackage />
      </section>

      <Section>
        <Heading
          title='Habitaciones populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          <Card
            imagePath='/images/popular-rooms/01.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/02.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/03.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/04.jpg'
            alt='image popular room'
          />
        </section>
        <div className='flex justify-center items-center'>
          <button className='bg-orange text-white font-bold rounded-md px-5 py-2 hover:bg-opacity-90'>
            <span>Ver catálogo</span>
          </button>
        </div>
      </Section>

      <Section>
        <Heading
          title='Destinos populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          <Card
            imagePath='/images/popular-rooms/01.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/02.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/03.jpg'
            alt='image popular room'
          />
          <Card
            imagePath='/images/popular-rooms/04.jpg'
            alt='image popular room'
          />
        </section>
      </Section>

      <Section>
        <Heading
          title='Los más populares'
          description='sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra'
        />
        <section className='grid grid-cols-12 grid-rows-2 gap-4'>
          <div className='col-span-3 space-y-2'>
            <div className='bg-white shadow-gray-50'>
              <img src='/images/popular-rooms/01.jpg' alt='images' />
              <article className='flex flex-col gap-2 p-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-xl font-bold'>
                    Duplex
                  </p>
                  <p className='flex gap-1'>
                    <span className='text-green'>S/.</span>
                    <strong className='text-black font-bold'>90.00</strong>
                    <span>/</span>
                    <i>por dia</i>
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p>
                    <span>
                      Hasta 4 personas
                    </span>
                  </p>
                  <button type='button' className='text-white px-4 py-[2px] bg-orange rounded-md'>
                    Ver mas
                  </button>
                </div>
              </article>
            </div>
            <div className='bg-white col-span-4'>
              <img src='/images/popular-rooms/01.jpg' alt='images' />
              <article className='flex flex-col gap-2 p-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-xl font-bold'>
                    Duplex
                  </p>
                  <p className='flex gap-1'>
                    <span className='text-green'>S/.</span>
                    <strong className='text-black font-bold'>90.00</strong>
                    <span>/</span>
                    <i>por dia</i>
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p>
                    <span>
                      Hasta 4 personas
                    </span>
                  </p>
                  <button type='button' className='text-white px-4 py-[2px] bg-orange rounded-md'>
                    Ver mas
                  </button>
                </div>
              </article>
            </div>
          </div>
          <div className='col-span-4 bg-white'>
            <img src='/images/popular-rooms/01.jpg' alt='images' className='' />
            <article className='flex flex-col gap-2 p-2'>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>
                  Duplex
                </p>
                <p className='flex gap-1'>
                  <span className='text-green'>S/.</span>
                  <strong className='text-black font-bold'>90.00</strong>
                  <span>/</span>
                  <i>por dia</i>
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <p>
                  <span>
                    Hasta 4 personas
                  </span>
                </p>
                <button type='button' className='text-white px-4 py-[2px] bg-orange rounded-md'>
                  Ver mas
                </button>
              </div>
            </article>
          </div>
          <div className='col-span-5 flex flex-col gap-2'>
            <div className='bg-white'>
              <img src='/images/popular-rooms/01.jpg' alt='images' className='h-[50%] w-full object-cover object-bottom' />
              <article className='flex flex-col gap-2 p-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-xl font-bold'>
                    Duplex
                  </p>
                  <p className='flex gap-1'>
                    <span className='text-green'>S/.</span>
                    <strong className='text-black font-bold'>90.00</strong>
                    <span>/</span>
                    <i>por dia</i>
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p>
                    <span>
                      Hasta 4 personas
                    </span>
                  </p>
                  <button type='button' className='text-white px-4 py-[2px] bg-orange rounded-md'>
                    Ver mas
                  </button>
                </div>
              </article>
            </div>
            <div className='bg-white'>
              <img src='/images/popular-rooms/01.jpg' alt='images' className='h-[50%] w-full object-cover object-bottom' />
              <article className='flex flex-col gap-2 p-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-xl font-bold'>
                    Duplex
                  </p>
                  <p className='flex gap-1'>
                    <span className='text-green'>S/.</span>
                    <strong className='text-black font-bold'>90.00</strong>
                    <span>/</span>
                    <i>por dia</i>
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p>
                    <span>
                      Hasta 4 personas
                    </span>
                  </p>
                  <button type='button' className='text-white px-4 py-[2px] bg-orange rounded-md'>
                    Ver mas
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section >
      </Section >
      <Section>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-100 h-24"></div>
          <div className="bg-gray-200 h-32"></div>
          <div className="bg-gray-300 h-48"></div>
          <div className="bg-gray-400 h-56"></div>
          <div className="bg-gray-500 h-24"></div>
          <div className="bg-gray-600 h-32"></div>
          <div className="bg-gray-700 h-48"></div>
          <div className="bg-gray-800 h-56"></div>
        </div>
      </Section>
    </LayoutPage >
  )
}

export default Home

