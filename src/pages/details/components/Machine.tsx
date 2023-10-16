import { FunctionComponent } from 'react'

type MachineProps = {
  cargoOpacity: number
  consumables: string
  costInCredits: number
  MGLT: string
  CargoOpacityIcon: React.ReactNode
  ConsumablesIcon: React.ReactNode
  CostInCreditsIcon: React.ReactNode
  crew: string
  CrewIcon: React.ReactNode
  rating: string
  RatingIcon: React.ReactNode
  ManufactIcon: React.ReactNode
  manufacturer: string
  MaxSpeedIcon: React.ReactNode
  maxSpeed: string
  ModelIcon: React.ReactNode
  model: string
  PassagersIcon: React.ReactNode
  passengers: number
  PilotsIcon: React.ReactNode
  pilots: Array<string>
  class: string
}

const Machine: FunctionComponent<MachineProps> = ({
  cargoOpacity,
  consumables,
  costInCredits,
  ...props
}) => {
  return (
    <div className='flex  gap-4 items-center flex-wrap '>
      {props.MGLT && (
        <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
          {props.MGLT}
        </div>
      )}
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.CargoOpacityIcon} {cargoOpacity}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.ConsumablesIcon} {consumables}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.CostInCreditsIcon} {costInCredits}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.CrewIcon} {props.crew}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.RatingIcon} {props.rating}
      </div>

      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.ManufactIcon}
        {props.manufacturer}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.MaxSpeedIcon} {props.maxSpeed}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.ModelIcon} {props.model}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.PassagersIcon} {props.passengers}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.PilotsIcon}
        {props.pilots.length}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.class}
      </div>
    </div>
  )
}
export default Machine
