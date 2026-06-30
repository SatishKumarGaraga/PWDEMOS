import{test,expect} from "@playwright/test";

test("Verify page URL",async ({page})=>
{
    await page.goto("https://support.xbox.com/en-US/")
    let url=await page.url()
    console.log(url)
    await expect(page).toHaveURL("https://support.xbox.com/en-US/")

})