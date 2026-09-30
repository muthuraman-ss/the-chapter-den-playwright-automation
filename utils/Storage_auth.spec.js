import { expect, test } from "@playwright/test";
import testData from "../test-data/test-data.json";
import PageObjectModel from "../pages/PageObjectManager";

test("Storing Auth into locatStorage", async ({ page }) => {
  const data = { ...testData["registration-user"] };

  const loginPage = new PageObjectModel(page).getLoginPage();

  await loginPage.goto();
  await loginPage.loginUser(data.email, data.password);
  await page.waitForLoadState("networkidle");

  await page.context().storageState({ path: "utils/auth.json" });
});
