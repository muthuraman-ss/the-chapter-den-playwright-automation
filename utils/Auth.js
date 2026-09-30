import { test as base } from "@playwright/test";
export const authTest = base.extend({
  authState: async ({ page }, use) => {
    await use(page);
  },
});

authTest.use({
  storageState: "./utils/auth.json",
});
