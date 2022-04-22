

export const usersObj = {
    '0':'Ilya',
    '1':'Alena',
    '2':'Dimych'
}

type UsersType = {
[key:string] : {id:number, name:string}
}

export const users:UsersType = {
    '101': {id: 101, name: 'Ilya'},
    '1123213': {id: 1123213, name: 'Alena'},
    '13332': {id: 13332, name: 'Dimych'},
}

let user = {id:12312, name:'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'


export const usersArray = [
    {id:101, name:'Ilya'},
    {id:1123213, name:'Alena'},
    {id:13332, name:'Dimych'}
]

