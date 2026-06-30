import {test,expect,Locator} from"@playwright/test"

test("simple dialog",async({page})=>
{
 await page.goto("https://testautomationpractice.blogspot.com/")
 page.on('dialog',(dialog)=> {
    
    console.log(dialog.type())
    expect(dialog.type()).toContain("alert")
    console.log(dialog.message())
    dialog.accept()
})
 await page.locator("#alertBtn").click()
 })

 test("confirmation dialog",async({page})=>
{
 await page.goto("https://testautomationpractice.blogspot.com/")
 page.on('dialog',(dialog)=> {
    
    console.log(dialog.type())
    expect(dialog.type()).toContain("confirm")
    const text=console.log(dialog.message())
    expect(dialog.message()).toContain("Press a button!")
   dialog.accept()// close the dialog by accepting
    //dialog.dismiss() //close the dialog by dismissing
})
 await page.locator("#confirmBtn").click()
 const text1=await page.locator("#demo").innerText()
console.log(text1) 
expect( page.locator("#demo")).toHaveText("You pressed OK!")
})

 test.only("Prompt dialog",async({page})=>
{
 await page.goto("https://testautomationpractice.blogspot.com/")
 page.on('dialog',(dialog)=> {
    
    console.log(dialog.type())
    expect(dialog.type()).toContain("prompt")
    const text=console.log(dialog.message())
    expect(dialog.message()).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain("Harry Potter")

   dialog.accept("satish")// close the dialog by accepting
    //dialog.dismiss() //close the dialog by dismissing
})

 await page.locator("#promptBtn").click()
 const text1=await page.locator("#demo").innerText()
console.log(text1) 
await expect(page.locator("#demo")).toHaveText("Hello satish! How are you today?")
})