import{test,expect} from "@playwright/test"

test("mouse hover",async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/")
const pointme=await page.locator(".dropbtn")
await pointme.hover()
const laptops=await page.locator(".dropdown-content a:nth-child(2)")
await laptops.hover()
await page.waitForTimeout(5000)

})

