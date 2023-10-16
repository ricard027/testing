import { FunctionComponent } from 'react'

interface FilmProps {
  director: string
  releaseDate: string
  producer: string
  DirectorIcon: React.ReactNode
  ProducerIcon: React.ReactNode
  ReleaseIcon: React.ReactNode
  StarsIcon: React.ReactNode
  SpecieIcon: React.ReactNode
  PlanetsIcon: React.ReactNode
  VehicleIcon: React.ReactNode
  CharIcon: React.ReactNode
  opening: string
  starships: string
  species: string
  planets: string
  vehicles: string
  characters: string
}

const Film: FunctionComponent<FilmProps> = ({
  director,
  releaseDate,
  producer,
  opening,
  ...props
}) => {
  return (
    <div className='flex  gap-4 items-center flex-wrap'>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.DirectorIcon}
        {director}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.ProducerIcon}
        {producer}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.ReleaseIcon} {releaseDate}
      </div>
      <div className=' text-white p-4 text-lg rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {opening}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.StarsIcon} {props.starships}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.SpecieIcon} {props.species}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.PlanetsIcon} {props.planets}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.VehicleIcon}
        {props.vehicles}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.CharIcon} {props.characters}
      </div>
    </div>
  )
}

export default Film
