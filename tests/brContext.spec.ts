import{test,expect, chromium} from"@playwright/test"

test("Browser context demo",async()=>
{
const browser= await chromium.launch()
const context= await browser.newContext()
const page1=await context.newPage()
const page2=await context.newPage()
await page1.goto("https://testautomationpractice.blogspot.com/")
await page2.goto("https://support.xbox.com/en-US/")
console.log(context.pages().length)
await expect(page1).toHaveTitle("Automation Testing Practice")
await expect(page2).toHaveTitle("Xbox Support")


 console.log(await page1.title())
 console.log(await page2.title())



})

