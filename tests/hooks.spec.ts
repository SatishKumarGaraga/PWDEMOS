import{test,expect} from "@playwright/test"
test.beforeAll('before all',()=>
{
    console.log("before all")
})
test.beforeEach('before each',()=>
{
    console.log('before each')
})

test('test1',async()=>
{
    console.log("test1")
})

test('test2',async()=>
{
    console.log("test2")
})

test('test3',async()=>
{
    console.log("test3")
})

test.afterEach('after each',()=>
{
    console.log("after each")
})

test.afterAll('after all',()=>
{
console.log("after all")
})