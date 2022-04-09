import {createGreetingsMessages, getStreetsTitleOfGovernmentBuildings, ManType} from './05';
import exp from 'constants';
import {createMessage} from '../03/03';
import {CityType} from '../02/02_02';

let people : Array<ManType> = []
let city: CityType;

beforeEach(()=>{
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]

})

test('should get array of greetings messages', ()=> {
    const messages = createGreetingsMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hellow Andrey. Welcome to IT-INCUBATOR!")
    expect(messages[1]).toBe("Hellow Alexander. Welcome to IT-INCUBATOR!")
    expect(messages[2]).toBe("Hellow Dmitry. Welcome to IT-INCUBATOR!")
})

city = {
    title: 'New York',
    houses: [
        {
            buildedAt: 2012, repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        },
        {
            buildedAt: 2008, repaired: false,
            address: {number: 100, street: {title: 'Happy street'}}
        },
        {
            buildedAt: 2020, repaired: false,
            address: {number: 101, street: {title: 'Happy street'}}
        }
    ],
    governmentBuildings: [
        {
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                },
            },
        },
        {
            type: 'FIRE-STATION',
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {
                    title: 'South Str'
                },
            },
        },

    ],
    citizenNumber: 1000000
}



test('should get list of streets titles of government buildings', ()=>{
    let streets = getStreetsTitleOfGovernmentBuildings(city.governmentBuildings)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central Str')
    expect(streets[1]).toBe('South Str')
})