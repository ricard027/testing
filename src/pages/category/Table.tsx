import axios from 'axios'

import { api } from '../../services/api'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import Loading from '../../loading'

const Table = () => {
  const { category } = useParams()
  const [categori, setCategories] = useState([])

  const isURL = new RegExp('^(https://).*$', 'i')
  const navigate = useNavigate('/')

  const isEmpty = !!categori.length

  const getData = async () => {
    try {
      const {
        data: { results }
      } = await api.get(`${category}`)
      setCategories(results)
    } catch (error) {
      console.log(error, 'error')
    }
  }

  const getDetails = async (isDetails, value) => {
    const urlId = value.match(/\d+/)[0]
    isDetails && navigate(`/${category}/${urlId}`)
  }

  useEffect(() => {
    if (isEmpty) {
      return
    }
    getData()
  }, [categori, isEmpty])

  const keys = categori && categori.map((c) => Object.keys(c))[0]

  const result =
    keys &&
    keys.filter(
      (item) => item !== 'created' && item !== 'edited' && item !== 'homeworld'
    )

  return (
    <div className=' p-6 relative h-screen bg-cover bg-center bg-no-repeat'>
      <div className=' py-10  flex items-center '>
        <div
          className='flex gap-4 items-center px-6 py-3 bg-gradient-to-b from-yellow-500 to-yellow-600 text-yellow-950 rounded-lg  font-medium cursor-pointer opacity-80 hover:opacity-100'
          onClick={() => navigate('/')}
        >
          <BsArrowLeft />
          <p>BACK</p>
        </div>
      </div>
      <div className='p-6 flex items-center gap-4 border border-[#333] bg-black backdrop-blur-lg bg-opacity-20 filter text-white mb-8 rounded-xl'>
        <h2 className='text-3xl font-extrabold'> {category?.toUpperCase()} </h2>
      </div>
      <div className='w-full overflow-x-auto rounded-lg scrollbar-w-2 z-30 '>
        <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-gradient-to-b from-gray-100 to-gray-200 divide-y divide-gray-300 overflow-hidden'>
          <thead className='bg-gray-50'>
            <tr>
              {!result && <Loading />}
              {result?.map((key) => {
                const isUrlName =
                  key === 'url'
                    ? key.replace('url', 'DETAILS')
                    : key.replace(/_/g, ' ').toUpperCase()
                return (
                  <th className='py-3 px-6 text-left ' key={key}>
                    {isUrlName}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {categori &&
              categori.map((object) => {
                return (
                  <tr className=''>
                    {Object.keys(object)
                      .filter(
                        (item) =>
                          item !== 'created' &&
                          item !== 'edited' &&
                          item !== 'homeworld'
                      )
                      .map((c) => {
                        const checkValuesTable =
                          isURL.test(object[c]) && !Array.isArray(object[c])

                        return (
                          <td
                            className='py-3   bg-gradient-to-b from-gray-100 to-gray-200 px-6 text-left max-w-xs hover:bg-gray-100'
                            key={c}
                          >
                            <p
                              className={`${
                                checkValuesTable
                                  ? 'cursor-pointer   bg-gradient-to-b from-yellow-400 to-yellow-500 text-yellow-950 rounded-lg p-2 text-xs '
                                  : 'truncate'
                              } `}
                              onClick={() =>
                                getDetails(checkValuesTable, object[c])
                              }
                            >
                              {Array.isArray(object[c]) && object[c].length}
                              {!Array.isArray(object[c]) &&
                                !checkValuesTable &&
                                c !== 'homeworld' &&
                                object[c]}
                              {checkValuesTable && 'more details'}
                            </p>
                          </td>
                        )
                      })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
