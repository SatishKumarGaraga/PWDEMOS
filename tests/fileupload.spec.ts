import{test,expect} from "@playwright/test"

test("Single file upload",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles("Uploads/Day28-dialogs+and+frames.pdf")
    await page.locator("button:has-text('Upload Single File')").click()
    const msg=await page.locator("#singleFileStatus").textContent()
    expect(msg).toContain("Day28")
    console.log("file upload successfully")

    await page.waitForTimeout(2000)


})

test.only("Multiple file upload",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#multipleFilesInput").setInputFiles(['Uploads/Day28-dialogs+and+frames.pdf','Uploads/Day30-Labs.pdf','Uploads/Day30-MouseActions+&+Scrolling.pdf'])
    await page.locator("button:has-text('Upload Multiple Files')").click()
    const msg=await page.locator("#multipleFilesStatus").textContent()
    expect(msg).toContain("Day28")
    expect(msg).toContain("Day30")
    expect(msg).toContain("MouseActions")

    await page.waitForTimeout(2000)


})