import {splitIntoWords, sum} from './01';
import {mult} from './01';

let a:number;
let b:number;
let c:number;
beforeEach(()=> {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', ()=> {

    const result = sum(a,b);
    const result2 = sum(b,c)

    expect(result).toBe(3)
    expect(result2).toBe(5)
})


test('sum should be correct', ()=> {

    const result = mult(a,b);
    const result2 = mult(b,c)

    expect(result).toBe(2)
    expect(result2).toBe(6)
})

test('splitting into words should be correct', ()=>{

    const sent1 = "Hello my friend!"
    const sent2 = "JS - the  best programming language."

    const result = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result.length).toBe(3)
    expect(result2.length).toBe(6)
})