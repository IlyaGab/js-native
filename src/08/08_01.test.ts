
type UsersType = {
     [key:string] : {id:number, name:string}
}

let users:UsersType;

beforeEach(()=>{
       users = {
          '101': {id: 101, name: 'Ilya'},
          '1123213': {id: 1123213, name: 'Alena'},
          '13332': {id: 13332, name: 'Dimych'},
     }


})

test('should be corresponding user from obj', ()=>{
     delete users['101']

     expect(users['101']).toBeUndefined()

})