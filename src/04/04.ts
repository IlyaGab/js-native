import {CityType, HouseType} from '../02/02_02';
type  CoursesType = {
    title: string
    price: number
}

export const demolishHousesOnStreet =(city: CityType, street: string) => {
   city.houses = city.houses.filter((house)=> house.address.street.title !== street)
}




