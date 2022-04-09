type LocalCityType = {
    title:string
    countryTitle:string
}
type AddressType = {
    streetTitle:string
    city:LocalCityType
}
type TechType = {
    id:number
    title:string
}
export type StudentType = {
    id:number
    name:string
    age:number
    isActive: boolean
    address:AddressType
    technologies: Array<TechType>
}


export const student:StudentType = {
    id:1,
    name: 'Ilya',
    age: 27,
    isActive: false,
    address: {
        streetTitle: 'Surganova2',
        city: {
            title: 'Moscow',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}

