import { FunctionComponent } from 'react'

interface SpeciesProps {
  home: string
  averageL: string
  averageH: string
  classification: string
  HomeIcon: React.ReactNode
  AlIcon: React.ReactNode
  AhIcon: React.ReactNode
  ClassIcon: React.ReactNode
  DesignaionIcon: React.ReactNode
  EyeIcon: React.ReactNode
  HairIcon: React.ReactNode
  SkinIcon: React.ReactNode
  LangIcon: React.ReactNode
  PeopleIcon: React.ReactNode
  designation: string
  eye: string
  hair: string
  skin: string
  language: string
  people: Array<string>
}

const Species: FunctionComponent<SpeciesProps> = ({
  home,
  averageL,
  averageH,
  classification,
  ...props
}) => {
  return (
    <div className='flex  gap-4 items-center flex-wrap '>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.HomeIcon} {home ?? 'n/a'}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.AlIcon} {averageL}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.AhIcon} {averageH}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.ClassIcon} {classification}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.DesignaionIcon} {props.designation}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.EyeIcon} {props.eye}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.HairIcon} {props.hair}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.SkinIcon} {props.skin}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.LangIcon}
        {props.language}
      </div>
      <div className=' text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-gradient-to-b from-black to-[#121212] border border-[#000]'>
        {props.PeopleIcon}
        {props.people}
      </div>
    </div>
  )
}
export default Species
