import {test,expect,Locator, Page} from "@playwright/test"

test("jquery date picker",async({page})=>
{
    const month="June"
    const year="2026"
    const date="25"

await page.goto("https://testautomationpractice.blogspot.com/")
const dateInput= await page.locator("#datepicker")
await dateInput.click()
//await dateInput.fill("25/06/2026")
//await expect(dateInput).toBeVisible()
const currentmonth=await page.locator(".ui-datepicker-month").innerText()
const currentyear=await page.locator(".ui-datepicker-year").innerText()

while(true)
{

if(month===currentmonth && year===currentyear)
{
break

}

//future
    await page.locator(".ui-datepicker-next").click()

    // past
    //await page.locator(".ui-datepicker-prev").click()

}
// capturing date
const dates =await page.locator(".ui-datepicker-calendar td").all()
for(let dt of dates)
{
    let datetext=await dt.innerText()
  if(datetext===date)
  {
     await dt.click()
     break
  }
}

await page.waitForTimeout(3000)

})

async function datepicker(targetdate:string,targetmonth:string,targetyear:string,page:Page,isBtn:boolean)
{ 

while(true) 
{
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        const currentYear=await page.locator('.ui-datepicker-year').textContent();

if(currentMonth===targetmonth && currentYear===targetyear)
{
break

}

if(isBtn===true)
    {
     await page.locator(".ui-datepicker-next").click()
    }  
    else
    {
    await page.locator(".ui-datepicker-prev").click()

    }

}
// capturing date
const dates =await page.locator(".ui-datepicker-calendar td").all()
for(let dt of dates)
{
    let datetext=await dt.innerText()
  if(datetext===targetdate)
  {
     await dt.click()
     break
  }
}

}

test.only("jquery",async({page})=>
{
    const month="June"
    const year="2027"
    const date="25"
    await page.goto("https://testautomationpractice.blogspot.com/")
const dateInput= await page.locator("#datepicker")
 await dateInput.click()
 datepicker(date,month,year,page,true)



})