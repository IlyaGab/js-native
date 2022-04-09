import {student} from '../02/02';

import {StudentType} from '../02/02';
import {CityType, GovernmentBuildingsType, HouseType} from '../02/02_02';

export const sum = (a:number, b:number) => {
    return a + b
}

export function sum2(a:number, b:number) {
    return a + b
}

export const addSkill = (student:StudentType, skill:string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student:StudentType) =>{
    student.isActive = true;
}

export const doesStudentLiveIn =(student:StudentType, cityName:string) => {
    return student.address.city.title === cityName
}

export const addMoneyToBudget = (building:GovernmentBuildingsType, budget:number) => {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true

}

export const toFireStaff = (building:GovernmentBuildingsType, staff:number) => {
    building.staffCount -= staff
}

export const toHireStaff = (building:GovernmentBuildingsType, staff:number) => {
    building.staffCount += staff
}

export const createMessage = (city:CityType) => 'Hello ' + city.title  + ' citizens. I want you be happy. All ' + city.citizenNumber + ' men'
