import { useEffect, useState } from 'react'
import { api } from './services/api'
import { Link } from 'react-router-dom'

import { getCorrespondingImage } from './utils/getCorrespondingImage'
import { getCorrespondingIcon } from './utils/getCorrespondingIcon'

import { RxArrowTopRight as ArrowIcon } from 'react-icons/rx'

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
    <main className='container m-auto  bg-gradient-to-br from-gray-50 to-gray-100 '>
      <h1 className='text-5xl py-10 m-auto text-center w-1/2'>
        Choose one of the categories below to view more information
      </h1>
      <section className=' grid md:grid-cols-3 sm:grid-cols-1 gap-4  p-4'>
        {category &&
          Object.keys(category).map((category, i) => {
            const Icon = getCorrespondingIcon(category)
            return (
              <div
                key={i}
                className='bg-white relative btn-active-from-hover flex flex-col items-center  sm:h-[50vh] h-[50vh] md:h-[60vh]  justify-end border rounded-xl'
              >
                <div className='bg-purple-500  w-full h-full  rounded-xl '>
                  <img
                    src={getCorrespondingImage(category)}
                    className='h-full object-cover w-full  rounded-xl'
                    alt={`image of ${category}`}
                  />
                </div>
                <div className='btn bg-black h-full w-full absolute top-0 hidden  items-center  justify-center rounded-xl backdrop-blur-lg filter bg-opacity-10 transition-all '>
                  <Link
                    to={`/${category}`}
                    className='bg-gradient-to-b  from-black rounded-lg to-[#121212] text-white py-2 px-4    flex items-center gap-4'
                  >
                    GET MORE <ArrowIcon size={15} />
                  </Link>
                </div>

                <div className='description absolute bottom-4 left-4 flex gap-4 backdrop-blur-sm filter bg-opacity-20 items-center bg-black text-white  py-2 px-6  rounded-xl'>
                  <div>{Icon && <Icon size={25} />}</div>
                  <p className=' text-xl text-white font-bold '>{category}</p>
                </div>
              </div>
            )
          })}
      </section>
    </main>
  )
}

export default App
