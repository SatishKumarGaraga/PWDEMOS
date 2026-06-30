import {test,expect} from "@playwright/test"

test("",async({browser})=>
{
let context =await browser.newContext()
let page= await context.newPage()
await page.goto("http://admin:admin@http://the-internet.herokuapp.com/basic_auth")
await page.waitForLoadState()

//Approach 1 passing the creds in url await page.goto("http://usename:pw@http://the-internet.herokuapp.com/basic_auth")
//await page.goto("http://admin:admin@http://the-internet.herokuapp.com/basic_auth")

//Aproach2 passing in the browser context
//let context =await browser.newContext({httpcredentials:{username:'admin','password':admin})
})