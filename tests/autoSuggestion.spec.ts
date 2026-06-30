import {test,expect,Locator} from "@playwright/test"
test("Autosuggestion options",async({page})=>
{
    await page.goto("https://support.xbox.com/en-US/")
    await page.locator("#SearchTerms").fill("Refunds")
    await page.waitForTimeout(5000)
    //const options: string[] =  ( await page.locator("//div[@data-bi-an=SearchAutoSuggestions']/'div[2]/div/button").allTextContents())
    const optionscount:Locator= page.locator("//div[@data-bi-an='SearchAutoSuggestions']/div[2]/div/button")
    //console.log(await optionscount.nth(2).textContent())
    const count=await optionscount.count()    
    console.log("Number of suggested options",count)

    for(let i=0;i<count;i++)
    {
        console.log(await optionscount.nth(i).innerText())
        
    }
//this didnt work 
     for(let i=0;i<count;i++)
    {
        const text=await optionscount.nth(i).innerText()
        if (text==='refunds')
        {
optionscount.nth(i).click()

        }
    }



    //console.log(options)
    
 
    
    

})