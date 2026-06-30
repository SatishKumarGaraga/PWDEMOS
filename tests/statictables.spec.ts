import {test,expect,Locator} from "@playwright/test"
let maheshBooks:string[]=[]
test("static Web table",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table:Locator=page.locator("table[name='BookTable'] tbody")
    await expect(table).toBeVisible()

   // number of rows
   const rows=await page.locator("table[name='BookTable'] tbody tr")
   await expect(rows).toHaveCount(7)
   console.log(await rows.count())
   expect(await rows.count()).toBe(7)

   // now of columns

   const columns =await page.locator("table[name='BookTable'] tbody tr th")
   await expect(columns).toHaveCount(4)
   expect(await columns.count()).toBe(4)

   // Read all the data from second row
   const secondrowscell=await rows.nth(2).locator("td")
   const secondRowText=await secondrowscell.allInnerTexts()
   console.log("Second row text",(secondRowText))

   console.log("printing second row text")
   for(let text of secondRowText)
   {
      console.log(text)
   }
   
   const allRowsData=await rows.all()

   for(let row  of allRowsData.slice(1))
  {
   console.log((await row.locator("td").allInnerTexts()).join("\t"))
  
   }

   //print book name where author is Mukesh

   console.log("books written by Mukesh")
   let maheshBooks:string[]=[]
    for(let row  of allRowsData.slice(1))
  {
   const rowcell=await row.locator("td").allInnerTexts()
   const authorcell=rowcell[1]
    const bookCell=rowcell[0]
    if(authorcell==="Mukesh")
    {
 
      console.log(`${authorcell}\t ${bookCell}`)
      maheshBooks.push(bookCell)
 
    }
  
   }
   console.log(maheshBooks)
   expect(maheshBooks).toHaveLength(2)
 let totalPrice:number=0
 for(let row  of allRowsData.slice(1))
  {
   const rowcell=await row.locator("td").allInnerTexts()
   const price=rowcell[3]
   totalPrice=totalPrice+parseInt(price)


}
console.log(totalPrice)
await expect(totalPrice).toBe(7100)
})