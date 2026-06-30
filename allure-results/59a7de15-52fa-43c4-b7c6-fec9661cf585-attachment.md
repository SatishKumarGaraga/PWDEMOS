# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: paramtest1.spec.ts >> logintest for mstest_cxt_substesting2@outlook.com,wireless-blind-ethanol
- Location: tests\paramtest1.spec.ts:10:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('secondaryButton')

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | const loginData:string[][]=
  4  | [['mstest_cxt_substesting1@outlook.com','wireless-blind-ethanol','valid'],
  5  | ['mstest_cxt_substesting2@outlook.com','wireless-blind-ethanol','Invalid'],
  6  | ['mstest_cxt_substesting2@outlook.com','basket-activity-brilliant','valid']
  7  | ]
  8  | for(let [email,password,validity] of loginData)
  9  | {
  10 |     test(`logintest for ${email},${password}`,async({page})=>
  11 |        
  12 | {
  13 |   await page.goto('https://support.xbox.com/en-US/');
  14 |   await page.getByTestId('GuestCard').getByRole('link', { name: 'Sign In' }).click();
  15 |   await page.getByRole('textbox', { name: 'Email or phone number' }).click();
  16 |   await page.getByRole('textbox', { name: 'Email or phone number' }).fill(email);
  17 |   await page.getByTestId('primaryButton').click();
  18 |   await page.locator('div').filter({ hasText: /^Use your password$/ }).nth(2).click();
  19 |   await page.getByRole('textbox', { name: 'Password' }).click();
  20 |   await page.getByRole('textbox', { name: 'Password' }).fill(password);
  21 |   await page.getByTestId('primaryButton').click();
> 22 |   await page.getByTestId('secondaryButton').click();
     |                                             ^ Error: locator.click: Target page, context or browser has been closed
  23 |   
  24 |   if(validity.toLowerCase()==='valid')
  25 |   {
  26 |     const moreactions=await page.locator("#MoreActions_Button")
  27 |     await expect(moreactions).toBeVisible({timeout:35000})
  28 |   }
  29 |   else
  30 |   {
  31 |     const errormessage= await page.getByText('incorrect')
  32 |       await expect(errormessage).toBeVisible();
  33 | 
  34 |   }
  35 | 
  36 | })
  37 | }
  38 | 
  39 | 
```