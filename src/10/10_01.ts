export type UserType = {
    name:string
    hair:number
    address: {city:string, house:number}
}

export type LaptopType = {
    title:string
}
export type UserWithLaptopType = UserType &{
    laptop: LaptopType
}

export type UserWithBooks = {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{id:number, title: string}>
}

export function makeHairStyle(u:UserType, power:number) {
    return {...u, hair: u.hair /power}

}

export function moveUser (u:UserWithLaptopType, city:string) {
    return {...u , address: {...u.address, city: city}}


}

export function upgradeUserLaptop(u:UserWithLaptopType, laptop:string) {
    return  {...u , laptop: {...u.laptop, title: laptop}}

}

export function addNewBooksToUser (u:UserWithLaptopType & UserWithBooks, books:Array<string>){
    return {...u, books: [...u.books, ...books]}
}

export function updateBook(u:UserWithLaptopType & UserWithBooks, bookJS:string, bookTS:string){
    return {...u, books: [...u.books].map(el=>el === bookJS ? bookTS : el)}
}

export function removeBook (u:UserWithLaptopType & UserWithBooks, bookJS:string){
    return {...u, books: [...u.books].filter(el=>el !== bookJS)}
}

export function addCompanyTitle(u:UserWithLaptopType & WithCompaniesType,id:number, title:string ){
    return {...u, companies: [...u.companies, {id, title}]}
}

export function updateCompanyTitle (u:UserWithLaptopType & WithCompaniesType, id:number, title:string){
    return {...u, companies: u.companies.map(c=>c.id === id ? {...c, title: title} : c)}
}