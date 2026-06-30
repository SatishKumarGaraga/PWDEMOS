import{test,expect} from"@playwright/test"

const searchitems:string[]=['console','refunds','controller warranty','contact support']

//Using for loop
/* for(let items of searchitems)
{
    test(`Search test for ${items}`,async({page})=>
{

  await page.goto('https://support.xbox.com/en-US/');
  await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).click();
  await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).fill(items);
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Support Virtual Agent Summary' })).toBeVisible();

})


}*/

// using for each
/* 
searchitems.forEach((items)=>
{
test(`Search test for ${items}`,async({page})=>
{

  await page.goto('https://support.xbox.com/en-US/');
  await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).click();
  await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).fill(items);
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Support Virtual Agent Summary' })).toBeVisible();

})
}) */

test.describe('group',async()=>
{

searchitems.forEach((items)=>
{
test(`Search test for ${items}`,async({page})=>
{

  await page.goto('https://support.xbox.com/en-US/');
  await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).click();
  await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).fill(items);
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Support Virtual Agent Summary' })).toBeVisible();

})
})

})

