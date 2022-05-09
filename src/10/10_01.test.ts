import {
    addCompanyTitle,
    addNewBooksToUser,
    makeHairStyle,
    moveUser, removeBook, updateBook, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooks,
    UserWithLaptopType, WithCompaniesType
} from './10_01';


test('reference type test', () => {
    let user: UserType = {
        name: 'Ilya',
        hair: 28,
        address: {
            city: 'Minsk',
            house:12
        }
    }
    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(14)
    expect(user.hair).toBe(28)
})


test('change address test', () => {
    let user2: UserWithLaptopType = {
        name: 'Ilya',
        hair: 28,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let movedUser = moveUser(user2, 'Kiev')

    expect(user2).not.toBe(movedUser)
    expect(user2.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user2.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to macbook', () => {
    let user3: UserWithLaptopType = {
        name: 'Ilya',
        hair: 28,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let upgradedUser = upgradeUserLaptop(user3, 'macBook')

    expect(user3).not.toBe(upgradedUser)
    expect(user3.laptop).not.toBe(upgradedUser.laptop)
    expect(upgradedUser.laptop.title).toBe('macBook')
    expect(user3.address).toBe(upgradedUser.address)
    expect(user3.laptop.title).toBe('ZenBook')
})

test('add new books to User', () => {
    let user4: UserWithLaptopType & UserWithBooks= {
        name: 'Ilya',
        hair: 28,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js','react']
    }

    let userWithNewBooks = addNewBooksToUser(user4, ['ts', 'restAPI'])

    expect(user4).not.toBe(userWithNewBooks)
    expect(user4.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[4]).toBe('ts')
    expect(userWithNewBooks.books[5]).toBe('restAPI')
   expect(userWithNewBooks.laptop.title).toBe('ZenBook')
})

test('update js to ts', () => {
    let user5: UserWithLaptopType & UserWithBooks= {
        name: 'Ilya',
        hair: 28,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js','react']
    }

    let userWithNewBooks = updateBook(user5, 'js', 'ts')
    console.log(userWithNewBooks)
    expect(user5).not.toBe(userWithNewBooks)
    expect(user5.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[2]).toBe('ts')
    expect(userWithNewBooks.laptop.title).toBe('ZenBook')
})

test('remove js book', () => {
    let user6: UserWithLaptopType & UserWithBooks= {
        name: 'Ilya',
        hair: 28,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js','react']
    }

    let userWithNewBooks = removeBook(user6, 'js')
    expect(user6).not.toBe(userWithNewBooks)
    expect(user6.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[2]).toBe('react')
    expect(userWithNewBooks.laptop.title).toBe('ZenBook')
})

test('add company title', () => {
    let user7: UserWithLaptopType & WithCompaniesType = {
        name: 'Ilya',
        hair: 28,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id:1, title: 'Epam'},
            {id:2, title: 'IT-Incubator'},
        ],
    }

    const copyCompanyTitle = addCompanyTitle(user7, 3, 'ITechArt')

    expect(user7).not.toBe(copyCompanyTitle)
    expect(user7.companies).not.toBe(copyCompanyTitle.companies)
    expect(copyCompanyTitle.companies[2].title).toBe ('ITechArt')
    expect(copyCompanyTitle.companies[2].id).toBe (3)
    expect(copyCompanyTitle.laptop.title).toBe('ZenBook')
})

test('update company title', () => {
    let user8: UserWithLaptopType & WithCompaniesType = {
        name: 'Ilya',
        hair: 28,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id:1, title: 'Епам'},
            {id:2, title: 'IT-Incubator'},
        ],
    }

    const copyCompanyTitle = updateCompanyTitle(user8, 1, 'EPAM')

    expect(user8).not.toBe(copyCompanyTitle)
    expect(user8.companies).not.toBe(copyCompanyTitle.companies)
    expect(user8.companies[0].title).toBe('Епам')
    expect(copyCompanyTitle.companies[0].title).toBe ('EPAM')
    expect(copyCompanyTitle.laptop.title).toBe('ZenBook')
})