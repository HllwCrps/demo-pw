import {expect, Locator, test} from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto(process.env.BASE_URL);
})

test('sign in disabled button' , async ({ page }) => {
    const signInButton: Locator = page.getByRole('button',{name: 'Sign In'});
    const userName: Locator = page.locator('#username');
    const password: Locator = page.locator('#password');
    await userName.fill('testtest');
    await password.fill('test');
    await expect(signInButton).toBeDisabled();
});

