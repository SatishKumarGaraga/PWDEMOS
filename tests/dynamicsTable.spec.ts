import {test,expect,Locator} from "@playwright/test"

test("dynamic table",async({page})=>
{
await page.goto("https://practice.expandtesting.com/dynamic-table")
let table=await page.locator("table.table tbody")
await expect(table).toBeVisible()
//let rows=await page.locator("tbody[id='rows'] tr")
const rows =await table.locator("tr").all()
console.log("Number of rows:", rows.length)
await expect(rows).toHaveLength(4)

let cpuLoad=""
for(const row of rows)
{
    const processName = await row.locator("td").nth(0).innerText()
    
    if (processName==="Chrome")
    {
       cpuLoad = await row.locator("td:has-text('%')").innerText();
       // let cpuLoad=await row.locator("td",{hasText:'%'}).innerText()
        console.log("Cpu Load of chrome",cpuLoad)
        break

    }
    let yellowText=await page.locator("#chrome-cpu").innerText()
    console.log("chrome cpu load from yellowtext",yellowText)

    if(yellowText.includes(cpuLoad))
    {
        console.log("cpu load of chrome is equal")
    }
    else{
        console.log("cpu load of chrome is not equal")


    }

    expect(yellowText).toContain(cpuLoad)
}


})