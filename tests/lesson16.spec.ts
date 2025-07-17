import {expect, Locator, test} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    const path = require('path');
    const filePath = `file://${path.resolve('src/order.html' )}`;
    await page.goto(filePath);
})
test('button disabled initially' , async ({ page }) => {
    const orderButton: Locator = await page.getByTestId('submit-order');
    await expect(orderButton).toBeDisabled();
});
test('button enabled after filling correct data', async ({ page }) => {
    const orderButton: Locator = await page.getByTestId('submit-order');
    const userName: Locator = await page.getByTestId('username');
    const userEmail: Locator = await page.getByTestId('email');
    await  userName.fill('Test')
    await userEmail.fill('test@test.com')
    await expect(orderButton).toBeEnabled();
});
test('popup is visible', async ({ page }) => {
    const orderButton: Locator = await page.getByTestId('submit-order');
    const userName: Locator = await page.getByTestId('username');
    const userEmail: Locator = await page.getByTestId('email');
    const popupMessage: Locator = page.locator('#popup-message');
    await  userName.fill('Test')
    await userEmail.fill('test@test.com')
    await orderButton.click();

    await expect(popupMessage).toBeVisible();
    await expect(popupMessage).toHaveText('OK');
});
    test('button disabled if email is incorrect' , async ({ page }) => {
        const orderButton: Locator = await page.getByTestId('submit-order');
        const userName: Locator = await page.getByTestId('username');
        const userEmail: Locator = await page.getByTestId('email');
        await  userName.fill('Test')
        await userEmail.fill('Test2')

        await expect(orderButton).toBeDisabled();


    });