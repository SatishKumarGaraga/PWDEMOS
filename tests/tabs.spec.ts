import{test,expect,chromium} from"@playwright/test"
test("handle tabs",async()=>
{
    const browser= await chromium.launch()
    const context= await browser.newContext()
    const parentpage= await context.newPage()
    await parentpage.goto("https://testautomationpractice.blogspot.com/")
    const [childpage]= await Promise.all([context.waitForEvent('page'),await parentpage.locator("button:has-text('New Tab')").click()])
    //context.waitForEvent('page')
    //await parentpage.locator("button:has-text('New Tab')").click()
   const pages= context.pages()
   console.log(await pages.length)
    console.log(await pages[0].title())
    console.log(await pages[1].title())

    console.log(await parentpage.title())
    console.log(await childpage.title())


   



})