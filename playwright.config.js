// @ts-check
import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  // retries: 2,
  reporter: [["list"], ["allure-playwright"]],
  workers: 1,

  use: {
    // storageState: "./utils/auth.json",
    trace: "on-first-retry",
    browserName: "chromium",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: true,
  },
});
