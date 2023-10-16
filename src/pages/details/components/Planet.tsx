import { FunctionComponent, ReactNode } from 'react'

interface PlanetProps {
  climate: string
  gravity: string
  orbital: string
  population: number
  diameter: number
  rotation: number
  surfaceWater: number
  terrain: string
  DiameterIcon: ReactNode
  GravityIcon: ReactNode
  OrbitalIcon: ReactNode
  PopulationIcon: ReactNode
  RotationIcon: ReactNode
  SurfaceIcon: ReactNode
  TerrainIcon: ReactNode
  ClimateIcon: ReactNode
}

const Planet: FunctionComponent<PlanetProps> = ({
  climate,
  gravity,
  orbital,
  population,
  ...props
}) => {
  return (
    <div className='flex  gap-4 items-center flex-wrap '>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.ClimateIcon}
        {climate}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.DiameterIcon}
        {props.diameter}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.GravityIcon} {gravity}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.OrbitalIcon} {orbital}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.PopulationIcon} {population}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.RotationIcon} {props.rotation}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.SurfaceIcon}
        {props.surfaceWater}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.TerrainIcon}
        {props.terrain}
      </div>
    </div>
  )
}

export default Planet
