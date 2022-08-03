
const search=require('../js/logic')

test('search test',()=>{
    const actual=search([{name:'mai'}],"mai")
    const expected=[{name:'mai'}]
    expect(actual).toEqual(expected)
})