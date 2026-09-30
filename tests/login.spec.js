import { test, expect } from "@playwright/test";
import testData from "../test-data/test-data.json";
import PageObjectModel from "../pages/PageObjectManager";

test("Login with valid credentials", async ({ page }) => {
  const data = { ...testData["registration-user"] };

  const loginPage = new PageObjectModel(page).getLoginPage();

  await loginPage.goto();
  await loginPage.loginUser(data.email, data.password);

  await expect(page).toHaveURL(/\/books/);

  const expectedInitial = data.fullName.charAt(0).toUpperCase();

  const userIcon = page.getByRole("button", {
    name: expectedInitial,
    exact: true,
  });

  await expect(userIcon).toBeVisible();
});
