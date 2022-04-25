function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}


test('array test', () => {

    let users = [
        {
            name: 'Ilya',
            age: 28
        },
        {
            name: 'Ilya',
            age: 28
        },
    ]

    let admins = users

    admins.push({name:'Bandiugan', age: 10})
    // increaseAge(user)

    expect(users[2]).toEqual({name:'Bandiugan', age: 10})

    // const superman = user
    //
    // superman.age = 1000
    //
    // expect(user.age).toBe(1000)
})


test('value type test', () => {

    let userCount = 100

    let adminsCount = userCount

    adminsCount = adminsCount + 1;


    expect(userCount).toBe(100)
    expect(adminsCount).toBe(101)


})

