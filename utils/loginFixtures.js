import { test as base } from "@playwright/test";
import PageObjectModel from "../pages/PageObjectManager";

export const customFixtures = base.extend({
  loginPage: async ({ page }, use) => {
    const pageObjectModel = new PageObjectModel(page);
    return pageObjectModel.getLoginPage();
  },
  registrationPage: async ({ page }, use) => {
    const pageObjectModel = new PageObjectModel(page);
    return pageObjectModel.getRegistrationPage();
  },

  loggedInAs: async ({ page }, use) => {
    const loggedInAs = async (user) => {
      const loginPage = new PageObjectModel(page).getLoginPage();
      await loginPage.goto();
      await loginPage.loginUser(user.email, user.password);
      await page.waitForLoadState("domcontentloaded");
    };

    await use(loggedInAs);
  },
  navigateToHome: async ({ page }, use) => {
    await page.goto("https://the-chapter-den-online-store.netlify.app/home");
    await page.waitForLoadState("domcontentloaded");
  },
  navigateToLogin: async ({ page }, use) => {
    await page.goto("https://the-chapter-den-online-store.netlify.app/login");
    await page.waitForLoadState("domcontentloaded");
  },
});
