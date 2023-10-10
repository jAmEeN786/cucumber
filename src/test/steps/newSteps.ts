import {Given,When,Then} from '@cucumber/cucumber';
import{chromium,Page,Browser,expect} from "@playwright/test";

var {setDefaultTimeout} = require('@cucumber/cucumber'); 
setDefaultTimeout(60 * 1000);
let browser:Browser;
let page:Page;



Given('Single select dropdown in the specified URL', async function () {
    browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    page=await context.newPage();
    await page.goto('http://192.168.1.49:8086/');

    //await page.locator("//mat-icon[text()='view_comfy']").click();
    await page.getByTestId("mat-focus-indicator mat-menu-trigger mat-button mat-button-base").first().click();
    
    //await page.locator("//span[text()='Fingress Explorer']").click();
    await page.getByTestId("app-name").first().click();

    //await page.locator("(//span[@class='fa fa-chevron-down fg-menu-chevron-icon'])[2]").click();
    await page.getByTestId("fa fa-chevron-down fg-menu-chevron-icon").nth(1).click();
    
    //await page.locator("//span[text()='Form Elements']").click();
    await page.getByTestId("mat-ripple mat-menu-ripple").first().click();

    //await page.locator("//div[text()='Selection']").click();
    await page.getByTestId("mat-tab-label-content").nth(3).click();

    await expect(page.getByTestId("mat-select-placeholder mat-select-min-line ng-tns-c77-23 ng-star-inserted")).toContainText("Select ");
    console.log("'Select' comment is visibled in placeholder");
  });
  
When('I select the single option from dropdown',async function () {
    await page.getByText('Select', { exact: true }).click(); 
    await page.getByRole('option', { name: 'Banana' }).click();
  });

Then('the chosen option should be selected',async function () {
    await expect(page.getByText('Banana').first()).toContainText("Banana ");
    console.log("Single(Banana) value only will be selected from dropdown");
  });
Given('single select dropdown with chosen option',async function () {
    await expect(page.getByText('Banana').first()).toContainText("Banana ");
    console.log("selected(Banana) value is visibled in dropdown");
  
  });
When('I select the some other option from dropdown',async function () {
    await page.getByText('Banana Select').click(); 
    await page.getByRole('option', { name: 'Orange' }).click();
  });
Then('the chosen option should be selected after the deselection of selected option in 1st scenario',async function () {
    await expect(page.getByText('Orange Select')).toContainText("Orange ");
    console.log("after selecting orange value ,Banana was deselected and orange is selected");
    await browser.close();
  });
