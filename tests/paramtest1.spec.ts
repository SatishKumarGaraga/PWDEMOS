import {test,expect} from "@playwright/test"

const loginData:string[][]=
[['mstest_cxt_substesting1@outlook.com','wireless-blind-ethanol','valid'],
['mstest_cxt_substesting2@outlook.com','wireless-blind-ethanol','Invalid'],
['mstest_cxt_substesting2@outlook.com','basket-activity-brilliant','valid']
]

    test.describe('login data form datadriver',()=>{

      for(let [email,password,validity] of loginData)
{
    test(`logintest for ${email},${password}`,async({page})=>
       
{
  await page.goto('https://support.xbox.com/en-US/');
  await page.getByTestId('GuestCard').getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email or phone number' }).click();
  await page.getByRole('textbox', { name: 'Email or phone number' }).fill(email);
  await page.getByTestId('primaryButton').click();
  await page.locator('div').filter({ hasText: /^Use your password$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByTestId('primaryButton').click();
  await page.getByTestId('secondaryButton').click();
  
  if(validity.toLowerCase()==='valid')
  {
    const moreactions=await page.getByRole('button', { name: 'More actions' })

    await expect(moreactions).toBeVisible({timeout:5000})
  }
  else
  {
    const errormessage= await page.getByText('incorrect')
      await expect(errormessage).toBeVisible();

  }

})

}
})
