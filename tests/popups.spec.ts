import{test,expect} from "@playwright/test"

test("popups",async({browser})=>
{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://testautomationpractice.blogspot.com/")

   const popups=await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]) 
   //page.waitForEvent('popup')
    //await page.locator("#PopUp").click()
    const Popupwindows=await context.pages()
    console.log(await Popupwindows.length)

    console.log(Popupwindows[0].url())
    console.log(Popupwindows[1].url())
    //console.log(Popupwindows[2].url())

    for(let pw of Popupwindows)
    {
        const title=await pw.title()
       console.log(title)
       if(title.includes("Playwright"))
       {
        await pw.locator(".getStarted_Sjon").click()
       await pw.close()
       }
        
    }


})