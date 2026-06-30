import{test,expect} from "@playwright/test";


test("download text file",async({page})=>
{
 await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
 await page.locator("#inputText").fill("welcome")
 await page.locator("#generateTxt").click()
 const [download]=await Promise.all([page.waitForEvent('download'), page.locator("#txtDownloadLink").click()])
 
 const downloadPath='downloadfiles/testfile.txt'
 await download.saveAs(downloadPath)
 await page.waitForTimeout(5000)
 


})