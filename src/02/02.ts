type LocalCityType = {
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
type StudentType = {
    name:string
    age:number
    isActive: boolean
    address:AddressType
    technologies: Array<TechType>
}



export const student:StudentType = {
    name: 'Ilya',
    age: 27,
    isActive: false,
    address: {
        streetTitle: 'Surganova2',
        city: {
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

