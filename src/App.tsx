import { useEffect, useState } from 'react'
import { api } from './services/api'
import { Link } from 'react-router-dom'

import { getCorrespondingImage } from './utils/getCorrespondingImage'
import Loading from './loading'

function App() {
  const [category, setCategory] = useState({})
  const isEmpty = Object.keys(category).length === 0

  const getData = async () => {
    try {
      const { data: categories } = await api.get('/')

      setCategory(categories)
    } catch (error) {
      console.log(error, 'error')
    }
  }

  useEffect(() => {
    if (!isEmpty) {
      return
    }
    getData()
  }, [category, isEmpty])

  return (
    <main className='container m-auto min-h-screen bg-[#000]'>
      {!Object.keys(category).length && <Loading />}
      <div className='md:w-1/3 sm:w-full  m-auto h-[400px] relative '>
        <img
          src='
            https://i.pinimg.com/564x/fc/e7/0f/fce70f99809f656e2ef741107ce7d84f.jpg
            '
          alt='star wars logo'
          className='w-full h-full bg-center bg-cover'
        />
      </div>
      <section className='grid md:grid-cols-3 sm:grid-cols-1 gap-4  p-4'>
        {category &&
          Object.keys(category).map((category, i) => {
            return (
              <div
                key={i}
                className=' relative btn-active-from-hover flex flex-col items-center  sm:h-[50vh] h-[50vh] md:h-[60vh]  justify-end rounded-xl'
              >
                <div className={` w-full h-full  rounded-xl `}>
                  <img
                    src={getCorrespondingImage(category)}
                    className='h-full object-cover w-full  rounded-xl '
                    alt={`image of ${category}`}
                  />
                </div>
                <div className='btn bg-black h-full w-full absolute top-0 hidden  items-center  justify-center rounded-xl backdrop-blur-lg filter bg-opacity-10 transition-all '>
                  <Link
                    to={`/${category}`}
                    className='bg-gradient-to-b  from-black rounded-lg to-[#121212] text-white py-4 px-8    flex items-center gap-4'
                  >
                    {category.toUpperCase()} INFO
                  </Link>
                </div>
              </div>
            )
          })}
      </section>
    </main>
  )
}

export default App
