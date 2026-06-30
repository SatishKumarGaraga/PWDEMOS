import{expect,test,Locator} from "@playwright/test";

test("Verify Text input",async({page})=>  
{
await page.goto("https://support.xbox.com/en-US")
await page.locator("button[id*='feedback']").click()
const Textbox = await page.getByPlaceholder("Type your response here")
expect(Textbox).toBeVisible()
await Textbox.fill("This is a test feedback")   
expect(Textbox).toBeEnabled()
console.log(await Textbox.inputValue())
await page.waitForTimeout(5000)
console.log(await Textbox.textContent())

}
)

test("CSAT survey",async({page})=>{
await page.goto("https://support.xbox.com/en-US/help/subscriptions-billing/browse")
await page.getByRole("button",{name:"Yes"}).click()
await page.getByRole("button",{name:"Give feedback"}).click()
//await page.getByPlaceholder("Type your response here").fill("This is a test feedback for radio button") 
const checkbox: Locator = page.getByLabel("Relevant information")
const checkboxes: Locator = page.locator("//i[@data-icon-name='CheckMark']")
await checkboxes.nth(0).check()
await expect(checkboxes.nth(0)).toBeChecked()
await checkboxes.nth(1).check()
await expect(checkboxes.nth(1)).toBeChecked()
await checkboxes.nth(2).check()
await expect(checkbox).toBeChecked()
await page.waitForTimeout(3000)
await page.locator("//button[@data-automationid='SurveyScreenNextBtn']").click()
const radiobuttons:Locator=page.locator(".ms-ChoiceFieldLabel")
await radiobuttons.nth(0).check()
for(let i=0;i<await radiobuttons.count();i++)
await radiobuttons.nth(0).check()
//await expect(radiobuttons.nth(0)).toBeChecked()
await page.waitForTimeout(3000)
await page.locator("//button[@data-automationid='SurveyScreenNextBtn']").click()
await page.waitForTimeout(3000)
await page.getByRole("button",{name:"Submit feedback"}).click()
await page.waitForTimeout(3000)


})


test("drop down",async({page})=>
{
await page.goto("https://support.xbox.com/en-AL/contact-us")
await page.getByRole("button",{name:"Contact us"}).click()
page.waitForTimeout(3000)
await page.locator("#categoryPicker-option").click()
page.waitForTimeout(3000)
const dropdwn1:Locator=page.locator("ul[role='listbox']>li")
expect(dropdwn1).toHaveCount(7)
const dropdwn:Locator=page.locator("ul[role='listbox']")
//const options:string[]=(await dropdwn.allTextContents()).map(option=>option.trim())// if there are extra spaces in the options we can use trim to remove them
const options:string[]=(await dropdwn.allTextContents())
console.log(options)
//expect(options).toContain("Subscriptions & billingAccount")
await dropdwn1.nth(0).click()
await page.waitForTimeout(3000)

for(let i=0;i<=options.length;i++ )
{
console.log(options[i]) 
}
for(const option of options)
{
    console.log(option)
}

})


test("dropdown sorting",async({page})=>
{
    await page.goto("https://support.xbox.com/en-AL/contact-us")
    await page.getByRole("button",{name:"Contact us"}).click()
    await page.locator("#categoryPicker-option").click()
   
    const dropdwn1:Locator=page.locator("ul[role='listbox']>li")
    expect(dropdwn1).toHaveCount(7)
   const dropdownOptions:string[]=await dropdwn1.allTextContents()
   //const orginalOptions:string[]= dropdownOptions
    //const sortedOptions:string[]=dropdownOptions.sort()
    const orginalOptions:string[]= [...dropdownOptions]
    const sortedOptions:string[]= [...dropdownOptions.sort()]

    console.log(orginalOptions)
    console.log(sortedOptions)
    expect(orginalOptions).not.toEqual(sortedOptions)
     

})

test.only("dropdown duplicates",async({page})=>
{
    await page.goto("https://support.xbox.com/en-AL/contact-us")
    await page.getByRole("button",{name:"Contact us"}).click()
    await page.locator("#categoryPicker-option").click()
    const dropdwn1:Locator=page.locator("ul[role='listbox']>li")
    const dropdownOptions:string[]=await dropdwn1.allTextContents()
    const myset=new Set<string>()
    let duplicates:string[]=[]

    for(const option of dropdownOptions)
    {
        if(myset.has(option))
        {
            duplicates.push(option)
        }
        else
        {
            myset.add(option)
        }
    }

    console.log(duplicates)
    if(duplicates.length>0)
    {
        console.log("Duplicates found:")
        duplicates.forEach(duplicate => console.log(duplicate))
    }
    else
    {
        console.log("No duplicates found")
    }   

})