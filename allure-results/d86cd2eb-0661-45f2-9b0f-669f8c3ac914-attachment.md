# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: paramtest1.spec.ts >> logintest for mstest_cxt_substesting1@outlook.com,wireless-blind-ethanol
- Location: tests\paramtest1.spec.ts:10:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#MoreActions_Button')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#MoreActions_Button')

```

```yaml
- link "Skip to main content":
  - /url: "#BodyContent"
- banner:
  - link "Microsoft":
    - /url: https://www.microsoft.com
    - img "Microsoft"
  - link "Xbox":
    - /url: http://www.xbox.com/
    - img "Xbox"
  - navigation:
    - link "Support home":
      - /url: /
    - link "Xbox status":
      - /url: /xbox-live-status
    - button "Help topics "
    - link "Accessible gaming":
      - /url: /help/accessible-gaming
    - link "System updates":
      - /url: /help/hardware-network/settings-updates/whats-new-on-xbox
  - navigation:
    - button "All Microsoft "
  - button "How can we help?": 
  - button "Account Manager for":
    - img "Gamerpic for"
- main:
  - heading "Hi, how can we help?" [level=1]
  - search:
    - searchbox "Hi, how can we help?"
  - region "User Management":
    - heading "Hey there!" [level=3]
    - text: Things often go a lot faster when we know you.
    - link "Sign In"
  - region "Notifications":
    - heading "Notifications" [level=2]
    - status: loading; Notifications
  - region "Pick a section":
    - heading "Pick a section" [level=2]
    - link "Account & profile"
    - link "Subscriptions & billing"
    - link "Hardware & networking"
    - link "Family & online safety"
    - link "Games & apps"
    - link "Friends & social activity"
  - region "Did this resolve your issue?":
    - group:
      - heading "Have something to say?" [level=2]
      - button "Give feedback"
  - button "Chat with our support virtual agent."
- contentinfo:
  - navigation "Footer Resource links":
    - heading "Customer support" [level=2]
    - list:
      - listitem:
        - link "Contact us 0 of 4":
          - /url: /contact-us
          - text: Contact us
      - listitem:
        - link "Xbox status 1 of 4":
          - /url: /xbox-live-status
          - text: Xbox status
      - listitem:
        - link "Your Microsoft account 2 of 4":
          - /url: https://account.microsoft.com/
          - text: Your Microsoft account
      - listitem:
        - link "Microsoft accessibility conformance report 3 of 4":
          - /url: https://www.microsoft.com/en-us/accessibility/conformance-reports
          - text: Microsoft accessibility conformance report
    - heading "Resources" [level=2]
    - list:
      - listitem:
        - link "Xbox News 0 of 5":
          - /url: https://news.xbox.com?xr=footnav
          - text: Xbox News
      - listitem:
        - link "Feedback 1 of 5":
          - /url: https://aka.ms/xboxideas?xr=footnav
          - text: Feedback
      - listitem:
        - link "Community Standards 2 of 5":
          - /url: https://www.xbox.com/en-US/legal/community-standards?xr=footnav
          - text: Community Standards
      - listitem:
        - link "Photosensitive seizure warning 3 of 5":
          - /url: /help/family-online-safety/online-safety/photosensitive-seizure-warning
          - text: Photosensitive seizure warning
      - listitem:
        - link "Product safety 4 of 5":
          - /url: https://support.microsoft.com/surface/cbc47825-19b9-4786-8088-eb9963d780d3
          - text: Product safety
    - heading "For developers" [level=2]
    - list:
      - listitem:
        - link "Games 0 of 5":
          - /url: https://developer.microsoft.com/games/publish?xr=footnav
          - text: Games
      - listitem:
        - link "ID@Xbox 1 of 5":
          - /url: https://developer.microsoft.com/games/publish?xr=footnav
          - text: ID@Xbox
      - listitem:
        - link "Windows 2 of 5":
          - /url: https://dev.windows.com/games?xr=footnav
          - text: Windows
      - listitem:
        - link "Creators Program 3 of 5":
          - /url: https://developer.microsoft.com/games/publish?xr=footnav
          - text: Creators Program
      - listitem:
        - link "Designed for Xbox 4 of 5":
          - /url: https://www.xbox.com/en-US/designed-for-xbox?xr=footnav
          - text: Designed for Xbox
  - text: 
  - link "United States - English. Language Selector, currently set to United States - English":
    - /url: /ChangeLocale?returnPath=/
    - text: United States - English
  - link "California Consumer Privacy Act (CCPA) Opt-Out Icon Your Privacy Choices":
    - /url: https://aka.ms/yourcaliforniaprivacychoices
    - img "California Consumer Privacy Act (CCPA) Opt-Out Icon"
    - text: Your Privacy Choices
  - link "Consumer Health Privacy":
    - /url: https://go.microsoft.com/fwlink/?linkid=2259814
  - navigation:
    - list:
      - listitem:
        - link "Sitemap 1 of 6":
          - /url: https://www.microsoft.com/en-us/sitemap1.aspx
          - text: Sitemap
      - listitem:
        - link "Privacy 2 of 6":
          - /url: https://go.microsoft.com/fwlink/?LinkId=521839
          - text: Privacy
      - listitem:
        - link "Terms of use 3 of 6":
          - /url: https://go.microsoft.com/fwlink/?LinkID=206977
          - text: Terms of use
      - listitem:
        - link "Trademarks 4 of 6":
          - /url: https://www.microsoft.com/trademarks
          - text: Trademarks
      - listitem:
        - link "Safety & eco 5 of 6":
          - /url: "https://www.microsoft.com/en-us/devices/safety-and-eco "
          - text: Safety & eco
      - listitem:
        - link "About our ads 6 of 6":
          - /url: https://choice.microsoft.com
          - text: About our ads
      - listitem: © Microsoft 2026
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | const loginData:string[][]=
  4  | [['mstest_cxt_substesting1@outlook.com','wireless-blind-ethanol','valid'],
  5  | ['mstest_cxt_substesting2@outlook.com','wireless-blind-ethanol','Invalid'],
  6  | ['mstest_cxt_substesting2@outlook.com','asket-activity-brilliant','valid']
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
  22 |   await page.getByTestId('secondaryButton').click();
  23 |   
  24 |   if(validity.toLowerCase()==='valid')
  25 |   {
  26 |     const moreactions=await page.locator("#MoreActions_Button")
> 27 |     expect(moreactions).toBeVisible({timeout:5000})
     |                         ^ Error: expect(locator).toBeVisible() failed
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