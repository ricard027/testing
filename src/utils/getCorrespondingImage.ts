export const getCorrespondingImage = (category: string): string | undefined => {
  interface Images {
    [key: string]: string
  }

  const images: Images = {
    people:
      'https://i.pinimg.com/564x/ca/38/10/ca38100f5d5b1106dcdd46730a18b619.jpg',
    planets:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    films:
      'https://i.pinimg.com/564x/41/19/cd/4119cdcaf8a9c46693541cb32b343381.jpg',
    species:
      'https://i.pinimg.com/564x/95/d4/64/95d46484475c97532fd4f8281277011e.jpg',
    vehicles:
      ' https://i.pinimg.com/564x/02/b0/68/02b0686da70428fd08666b891e853054.jpg',
    starships:
      'https://i.pinimg.com/564x/cd/bf/ae/cdbfae9bfe217a78700274d869b839ca.jpg'
  }

  return images[category]
}
