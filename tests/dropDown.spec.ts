import {test,expect,Locator} from "@playwright/test"

test("dropdown options",async({page})=>
{
    await page.goto("https://www.bstackdemo.com/")  
      
    await page.locator(".sort>select").selectOption("Lowest to highest")
   await page.waitForTimeout(3000)
    expect(await page.locator(".sort>select").isEnabled())
    expect(await page.locator(".sort>select").isVisible())
    
    const listOfProducts: string[] = await page.locator(".shelf-item__title").allTextContents()
    console.log(listOfProducts)
    const listOfPrices: string[] = await page.locator(".shelf-item__price>div:nth-child(1)").allTextContents()
    console.log(listOfPrices)

    expect(listOfProducts.length).toBe(listOfPrices.length); // Assert that prices and names count are equal

  console.log('Printing Product Names along with their Prices.......');
  for (let i = 0; i < listOfProducts.length; i++) {
    console.log(`${listOfProducts[i]} : ${listOfPrices[i]}`);
  }

  console.log(`Lowest Priced Product: ${listOfProducts[0]} : ${listOfPrices[0]}`);
  console.log(`Highest Priced Product: ${listOfProducts[listOfProducts.length - 1]} : ${listOfPrices[listOfPrices.length - 1]}`);
});

 

    
