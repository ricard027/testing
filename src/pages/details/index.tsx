import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useLocation, useNavigate } from 'react-router'
import { AiOutlineAntDesign, AiOutlineSkin } from 'react-icons/ai'
import { IoIosPlanet, IoIosResize } from 'react-icons/io'
import {
  FaWeightHanging,
  FaUsers,
  FaIndustry,
  FaUserAstronaut,
  FaIdBadge,
  FaLanguage,
  FaUserTie,
  FaSpaceShuttle,
  FaUserFriends
} from 'react-icons/fa'
import { CgTerrain } from 'react-icons/cg'
import { WiRaindrop } from 'react-icons/wi'
import {
  GiHairStrands,
  GiCircle,
  GiAnticlockwiseRotation,
  GiWeight,
  GiStopwatch,
  GiWindsock,
  GiLightSabers,
  GiBodyHeight,
  GiLifeBar,
  GiDinosaurRex,
  GiEyelashes,
  GiHumanEar,
  GiEarthAmerica,
  GiCarKey
} from 'react-icons/gi'
import { BsArrowLeft } from 'react-icons/bs'
import { TiWeatherCloudy } from 'react-icons/ti'
import { BiCalendar, BiDollar, BiRuler } from 'react-icons/bi'
import { RiTeamFill, RiUserFill } from 'react-icons/ri'

import { PiGlobeThin as Globe, PiCakeLight } from 'react-icons/pi'

import axios from 'axios'

import { getCorrespondingImage } from '../../utils/getCorrespondingImage'
import Loading from '../../loading'
import SpeciesComponent from './components/Human'
import Planet from './components/Planet'
import Machine from './components/Machine'
import Species from './components/Species'
import Film from './components/Film'

const DetailsPage = () => {
  const navigate = useNavigate()
  const [details, setDetails] = useState({})
  const location = useLocation()
  const path = location.pathname

  const getDetails = async () => {
    try {
      const { data } = await api.get(path)
      setDetails(data)
      if ('homeworld' in data) {
        const {
          data: { name }
        } = await axios.get(data.homeworld)
        setDetails({ ...data, homeworld: name })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleNavigate = () => {
    return navigate(`/${path.split('/')[1]}`)
  }
  useEffect(() => {
    if ('name' in details) {
      return
    }
    getDetails()
  }, [details])

  console.log(details, 'dados da requisiçao')
  return (
    <div className='container m-auto min-h-screen p-20 text-white'>
      {Object.keys(details) < 1 && <Loading />}
      <div className=' py-10  flex items-center '>
        <div
          className='flex gap-4 items-center px-6 py-3 bg-gradient-to-b from-yellow-500 to-yellow-600 text-yellow-950 rounded-lg  font-medium cursor-pointer opacity-80 hover:opacity-100'
          onClick={handleNavigate}
        >
          <BsArrowLeft />
          <p>BACK</p>
        </div>
      </div>
      {!!Object.keys(details) && (
        <div className='flex gap-10 items-center sm:h-auto md:flex-row sm:flex-col md:h-[70vh]'>
          <div className='h-full flex-1 '>
            <img
              src={getCorrespondingImage(details.name || details.title)}
              alt={`${details.name || details.title || ''} image`}
              className='bg-cover w-full h-full'
            />
          </div>
          <div className='flex flex-col gap-6 flex-1 '>
            <h3 className='md:text-7xl sm:text-5xl font-semibold'>
              {details.name || details.title}
            </h3>
            {'eye_color' in details && (
              <SpeciesComponent
                home={details.homeworld}
                HomeIcon={<Globe size={20} />}
                gender={details.gender}
                birthYear={details.birth_year}
                BirthIcon={<PiCakeLight size={20} />}
                eye={details.eye_color}
                EyeIcon={<GiEyelashes size={20} />}
                hair={details.hair_color}
                HairIcon={<GiHairStrands size={20} />}
                height={details.height}
                HeightIcon={<IoIosResize size={20} />}
                mass={details.mass}
                MassIcon={<FaWeightHanging size={20} />}
                skin={details.skin_color}
                SkinIcon={<AiOutlineSkin size={20} />}
                starships={details?.starships.length}
                StarShipIcon={<FaSpaceShuttle size={20} />}
                vehicles={details?.vehicles?.length}
                VehiclesIcon={<GiCarKey size={20} />}
              />
            )}
            {'population' in details && (
              <Planet
                climate={details.climate}
                ClimateIcon={<TiWeatherCloudy size={20} />}
                diameter={details.diameter}
                DiameterIcon={<GiCircle size={20} />}
                gravity={details.gravity}
                GravityIcon={<FaWeightHanging size={20} />}
                orbital={details.orbital_period}
                OrbitalIcon={<IoIosPlanet size={20} />}
                population={details.population}
                PopulationIcon={<FaUsers size={20} />}
                rotation={details.rotation_period}
                RotationIcon={<GiAnticlockwiseRotation size={20} />}
                surfaceWater={details.surface_water}
                SurfaceIcon={<WiRaindrop size={20} />}
                terrain={details.terrain}
                TerrainIcon={<CgTerrain size={20} />}
              />
            )}

            {'cargo_capacity' in details && (
              <Machine
                MGLT={details.MGLT}
                cargoOpacity={details.cargo_capacity}
                CargoOpacityIcon={<GiWeight size={20} />}
                consumables={details.consumables}
                ConsumablesIcon={<GiStopwatch size={20} />}
                costInCredits={details.cost_in_credits}
                CostInCreditsIcon={<BiDollar size={20} />}
                crew={details.crew}
                CrewIcon={<RiTeamFill size={20} />}
                rating={details.hyperdrive_rating}
                RatingIcon={<GiLightSabers size={20} />}
                manufacturer={details.manufacturer}
                ManufactIcon={<FaIndustry size={20} />}
                maxSpeed={details.max_atmosphering_speed}
                MaxSpeedIcon={<GiWindsock size={20} />}
                model={details.model}
                ModelIcon={<AiOutlineAntDesign size={20} />}
                passengers={details.passengers}
                PassagersIcon={<RiUserFill size={20} />}
                pilots={details.pilots.length}
                PilotsIcon={<FaUserAstronaut size={20} />}
                class={details.starship_class || details.vehicle_class}
              />
            )}

            {'average_height' in details && (
              <Species
                home={details.homeworld}
                HomeIcon={<Globe size={20} />}
                averageH={details.average_height}
                AhIcon={<GiBodyHeight size={20} />}
                averageL={details.average_lifespan}
                AlIcon={<GiLifeBar size={20} />}
                classification={details.classification}
                ClassIcon={<GiDinosaurRex size={20} />}
                designation={details.designation}
                DesignaionIcon={<FaIdBadge size={20} />}
                eye={details.eye_colors}
                EyeIcon={<GiEyelashes size={20} />}
                hair={details.hair_colors}
                HairIcon={<GiHumanEar size={20} />}
                skin={details.skin_colors}
                SkinIcon={<GiHumanEar size={20} />}
                language={details.language}
                LangIcon={<FaLanguage size={20} />}
                people={details.people.length}
                PeopleIcon={<RiUserFill size={20} />}
              />
            )}
            {'director' in details && (
              <Film
                director={details.director}
                DirectorIcon={<FaUserTie size={20} />}
                producer={details.producer}
                ProducerIcon={<FaUserFriends size={20} />}
                releaseDate={details.release_date}
                ReleaseIcon={<BiCalendar />}
                opening={details.opening_crawl}
                starships={details.starships.length}
                StarsIcon={<FaSpaceShuttle size={20} />}
                species={details.species.length}
                SpecieIcon={<GiDinosaurRex size={20} />}
                planets={details.planets.length}
                PlanetsIcon={<GiEarthAmerica size={20} />}
                vehicles={details.vehicles.length}
                VehicleIcon={<GiCarKey size={20} />}
                characters={details.characters.length}
                CharIcon={<RiTeamFill size={20} />}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default DetailsPage
