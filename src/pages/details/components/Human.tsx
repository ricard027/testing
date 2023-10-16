import { FunctionComponent, ReactNode } from 'react'
import { PiGenderFemaleThin, PiGenderMaleThin } from 'react-icons/pi'

interface SpeciesComponentProps {
  gender: string
  eye: string
  skin: string
  hair: string
  height: string
  mass: string
  home: string
  birthYear: string
  vehicles: string[] | undefined
  starships: string[] | undefined
  HomeIcon: ReactNode
  MassIcon: ReactNode
  EyeIcon: ReactNode
  HeightIcon: ReactNode
  BirthIcon: ReactNode
  VehiclesIcon: ReactNode
  StarShipIcon: ReactNode
  HairIcon: ReactNode
  SkinIcon: ReactNode
}

const Human: FunctionComponent<SpeciesComponentProps> = ({
  gender,
  eye,
  skin,
  hair,
  height,
  mass,
  home,
  birthYear,
  vehicles,
  starships,
  ...props
}) => {
  return (
    <div className='flex  gap-4 items-center flex-wrap '>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.HomeIcon} {home}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {gender === 'male' ? (
          <PiGenderFemaleThin size={20} />
        ) : (
          <PiGenderMaleThin size={20} />
        )}
        {gender}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.BirthIcon} {birthYear}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.EyeIcon} {eye}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.HairIcon} {hair}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.SkinIcon} {skin}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.HeightIcon}
        {height}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.MassIcon} {mass}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        VEHICLES: {props.VehiclesIcon} {vehicles?.length || ''}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        STARSHIPS:{props.StarShipIcon} {starships?.length || ''}
      </div>
    </div>
  )
}
export default Human
