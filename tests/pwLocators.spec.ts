import {test,expect,Locator} from "@playwright/test";

test.skip("inbuilt locators",async({page})=>
{
    await page.goto("https://support.xbox.com/en-US/contact-us")
    const logo:Locator = await page.getByAltText("SVA card")
    await expect(logo).toBeVisible()
    //await page.getByText("Start a chat").click()
    await expect(page.getByText("Start a chat")).toBeVisible( )
    await page.getByRole("link",{name:"Disability answer desk"}).click()

})

test.skip("custom locators",async({page})=>
{
    await page.goto("https://support.xbox.com/en-US/game/hellblade/forms/hellblade-games-support")
    await page.getByRole("button",{name:"Contact us"}).click()
    await page.getByLabel("Preferred email").fill("test@test.com")
    await page.getByPlaceholder("Example: How do I fix gameplay issues?").fill("refunds")   
    await page.getByTitle("Hellblade | ").click()   
   

})

test("Verify using Testid",async({page})=>
{
    await page.goto("https://support.xbox.com/en-US/")
    // using contains in css
    //await page.locator("//input[contains(@id, 'SearchTerms')]").fill("xbox")  
//await page.locator("[id*='SearchTerms']").fill("xbox")

//using starts with in css/xpath
//await page.locator("//input[starts-with(@id, 'SearchTerms')]").fill("xbox")
//await page.locator("[id^='SearchTerms']").fill("xbox")  

//using ends with in css/xpath
//await page.locator("//input[ends-with(@id, 'SearchTerms')]").fill("xbox")
//await page.locator("[id$='SearchTerms']").fill("xbox")

let text:Locator=await page.locator("//div[@class='textContent()']/uhf-footer-nav-group[1]//ul/li[3]/a")
console.log(await text.textContent())


})