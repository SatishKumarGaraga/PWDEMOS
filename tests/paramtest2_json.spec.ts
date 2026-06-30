import { test, expect } from "@playwright/test"
import * as fs from 'fs'

const jsonpath = "testdata/json.json"
let loginData:any = JSON.parse(fs.readFileSync(jsonpath,"utf-8"))
test.describe("login data from datadriver",() =>{
    
for (const [email,password,validity] of loginData)
   {
    test(`logintest for ${email},${password}`, async ({ page }) => {
      await page.goto("https://support.xbox.com/en-US/")
      await page.getByTestId("GuestCard").getByRole("link", { name: "Sign In" }).click()
      await page.getByRole("textbox", { name: "Email or phone number" }).click()
      await page.getByRole("textbox", { name: "Email or phone number" }).fill(email)
      await page.getByTestId("primaryButton").click()
      await page.locator("div").filter({ hasText: /^Use your password$/ }).nth(2).click()
      await page.getByRole("textbox", { name: "Password" }).click()
      await page.getByRole("textbox", { name: "Password" }).fill(password)
      await page.getByTestId("primaryButton").click()
      await page.getByTestId("secondaryButton").click()

      if (validity.toLowerCase() === "valid") {
        const moreactions = await page.getByRole("button", { name: "More actions" })
        await expect(moreactions).toBeVisible({ timeout: 5000 })
      } else {
        const errormessage = await page.getByText("incorrect")
        await expect(errormessage).toBeVisible()
      }
    })
  }
  })

