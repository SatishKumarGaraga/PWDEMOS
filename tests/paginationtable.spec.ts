import{test,expect,Locator} from "@playwright/test"

test("Read data from the table pages", async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
 /*    for(let row of rows)
    {
        await console.log(await row.innerText())

    } */

    let hasmorepages=true

    while(hasmorepages)
        
    {
    const rows=await page.locator("#example tbody tr").all()
    
    for(let row of rows)
    {
         console.log(await row.innerText())

    }

    
    const nextbtn=await page.locator("button[aria-label='Next']")
    const isDisabled= await nextbtn.getAttribute("class")
    if (isDisabled?.includes("disabled"))
    {
        hasmorepages=false
    }
    else
    {
      await nextbtn.click()
    }
}

})

test.only("Filter the rows and check the rows count",async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    const dropDown= page.locator("#dt-length-0")
    await dropDown.selectOption({label:'25'})
    const rows=await page.locator("#example tbody tr").all()
 expect(rows).toHaveLength(25)

})

test.only("Search for specific data",async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    const search= page.locator("#dt-search-0")
    await search.fill("Shad Decker")
   
    const rows=await page.locator("#example tbody tr").all()
    
    if(rows.length>1)
    {
        let matchfound=false
        for(let row of rows)
        {
            let text=await row.innerText()
            if(text.includes("Shad Decker"))
            {
                console.log("record match exists found")
                matchfound=true
                break
            }
        }
        expect(matchfound).toBeTruthy
    }
        else
        {
console.log("no of rows found with search text ")
        }
    
    })


