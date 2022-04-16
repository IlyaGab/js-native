
import {GovernmentBuildingsType, HouseType} from '../02/02_02';

export type ManType = {
    name: string
    age: number
}

export const people: Array<ManType> = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

const ilyaTransformator = (man: ManType) => ({
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        secondName: man.name.split(' ')[1]
})

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrey', secondName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', secondName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', secondName: 'Sidorov'
    },
]


const devs3 = people.map(ilyaTransformator)
const devs4 = people.map((man: ManType) => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    secondName: man.name.split(' ')[1]
}))

const messages = people.map(man => `Hellow ${man.name.split(' ')}. Welcome to IT-INCUBATOR!`)

export const createGreetingsMessages = (people: Array<ManType>) => {
    return people.map(man => `Hellow ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR!`)
}

export const getStreetsTitleOfGovernmentBuildings = (buildings:Array<GovernmentBuildingsType> ) => {
    return buildings.map(b => b.address.street.title)
}

export const createMessagee = (houses:Array<HouseType>) => {
    let callbackfn = (h:HouseType) => `Hello guys from ${h.address.street.title}`;
    return houses.map(callbackfn)
}
