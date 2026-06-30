
import{test,expect} from "@playwright/test"

test("tracing",async({page})=>
{
    await page.goto('https://support.xbox.com/en-US/');
  await page.getByTestId('GuestCard').getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email or phone number' }).click();
  await page.getByRole('textbox', { name: 'Email or phone number' }).fill('mstest_cxt_substesting1@outlook.com');
  await page.getByTestId('primaryButton').click();
  await page.locator('div').filter({ hasText: /^Use your password$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('wireless-blind-ethanol');
  await page.getByTestId('primaryButton').click();
  await page.getByTestId('secondaryButton').click();
  await expect(page.getByTestId('PersonalCard').getByRole('img', { name: 'Gamerpic for PaltryBasket395' }))
})