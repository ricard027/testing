import { BsGlobeAmericas } from 'react-icons/bs'
import { PiUsersLight, PiFilmSlateThin } from 'react-icons/pi'
import { IoCarSportOutline } from 'react-icons/io5'
import { GiAnimalHide } from 'react-icons/gi'
import { SiStarship } from 'react-icons/si'

type Category =
  | 'people'
  | 'planets'
  | 'films'
  | 'species'
  | 'vehicles'
  | 'starships'

type IconType =
  | typeof PiUsersLight
  | typeof BsGlobeAmericas
  | typeof PiFilmSlateThin
  | typeof GiAnimalHide
  | typeof IoCarSportOutline
  | typeof SiStarship

export const getCorrespondingIcon = (category: Category): IconType | null => {
  const icons: Record<Category, IconType> = {
    people: PiUsersLight,
    planets: BsGlobeAmericas,
    films: PiFilmSlateThin,
    species: GiAnimalHide,
    vehicles: IoCarSportOutline,
    starships: SiStarship
  }

  return icons[category] || null
}
