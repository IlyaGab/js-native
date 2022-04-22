type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}


let man: ManType;


beforeEach(() => {
    man = {
        name: 'Ilya',
        age: 28,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosti'
            }
        }
    }
})


test('', () => {

    const {age, lessons} = man
    const {title} = man.address.street

    expect(age).toBe(28)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Nezavisimosti')
})

test('1', () => {
    const l1 = man.lessons[0]
    const l2 = man.lessons[1]

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    const [ls1, ...restLs] = man.lessons

    expect(ls1.title).toBe('1')
    expect(restLs.length).toBe(2)
    expect(restLs[0].title).toBe('2')

})