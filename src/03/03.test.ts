import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveIn, makeStudentActive, repairHouse} from './03';

let student: StudentType;

beforeEach(()=> {
    student = {
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
})

test('new skill should be added to student', ()=> {
    expect(student.technologies.length).toBe(3)
    const res = addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
})

test('student should be active', ()=> {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)

})

test('does student live in city?', ()=> {

    let result = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')

    expect(result).toBe(true)
    expect(result2).toBe(false)

})

