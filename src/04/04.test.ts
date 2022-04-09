
test('should take old men older than 90', ()=> {

    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age =>  age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses cheaper than 160', ()=> {

    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 150},
        {title: 'React', price: 200}
    ]

    const cheapCourses = courses.filter(courses => courses.price < 160);

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[0].price).toBe(110)
    expect(cheapCourses[1].title).toBe('JS')
    expect(cheapCourses[1].price).toBe(150)

})

const tasks = [
    {id:1, title: 'Bread', isDone: true},
    {id:2, title: 'Milk', isDone: false},
    {id:3, title: 'Salt', isDone: false},
    {id:4, title: 'Sugar', isDone: true}
]

test('get only completed tasks', ()=> {
    const completedTasks = tasks.filter(task => !task.isDone);

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(3)
})