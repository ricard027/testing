import { CgSpinner } from 'react-icons/cg'

const Loading = () => {
  return (
    <div className='fixed h-screen z-50 flex items-center justify-center top-0 left-0 flex-col gap-4 w-full bg-opacity-50 bg-black text-white'>
      <CgSpinner size={50} className={'animate-spin'} />
      <h1>Loading....</h1>
    </div>
  )
}
export default Loading
