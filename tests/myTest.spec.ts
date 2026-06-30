import {test,expect} from "@playwright/test";

test("verify page title",async ({page})=>
{
await page.goto("https://support.xbox.com/en-US/")
let title=await page.title()
console.log(title)
await expect(page).toHaveTitle("Xbox Support")
})

