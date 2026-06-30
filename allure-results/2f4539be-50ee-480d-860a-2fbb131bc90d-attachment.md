# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: paramtest.spec.ts >> Search test for controller warranty
- Location: tests\paramtest.spec.ts:26:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://support.xbox.com/en-US/
Call log:
  - navigating to "https://support.xbox.com/en-US/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import{test,expect} from"@playwright/test"
  2  | 
  3  | const searchitems:string[]=['console','refunds','controller warranty','contact support']
  4  | 
  5  | //Using for loop
  6  | /* for(let items of searchitems)
  7  | {
  8  |     test(`Search test for ${items}`,async({page})=>
  9  | {
  10 | 
  11 |   await page.goto('https://support.xbox.com/en-US/');
  12 |   await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).click();
  13 |   await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).fill(items);
  14 |   await page.getByRole('button', { name: 'Search' }).click();
  15 |   await expect(page.getByRole('heading', { name: 'Support Virtual Agent Summary' })).toBeVisible();
  16 | 
  17 | })
  18 | 
  19 | 
  20 | }*/
  21 | 
  22 | // using for each
  23 | 
  24 | searchitems.forEach((items)=>
  25 | {
  26 | test(`Search test for ${items}`,async({page})=>
  27 | {
  28 | 
> 29 |   await page.goto('https://support.xbox.com/en-US/');
     |              ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://support.xbox.com/en-US/
  30 |   await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).click();
  31 |   await page.getByRole('searchbox', { name: 'Hi, how can we help?' }).fill(items);
  32 |   await page.getByRole('button', { name: 'Search' }).click();
  33 |   await expect(page.getByRole('heading', { name: 'Support Virtual Agent Summary' })).toBeVisible();
  34 | 
  35 | })
  36 | })
  37 | 
  38 | 
```