import testData from "../test-data/test-data.json";
import PageObjectModel from "../pages/PageObjectManager";
import { test, expect } from "@playwright/test";

test("E2E-002: Add available book to cart", async ({ page }) => {
  const data = { ...testData["registration-user"] };

  const pageObjectManager = new PageObjectModel(page);

  const loginPage = pageObjectManager.getLoginPage();

  await loginPage.goto();

  await loginPage.loginUser(data.email, data.password);

  const booksPage = pageObjectManager.getBooksPage();

  // await booksPage.gotobooks();

  await booksPage.addBookToCart(testData.books.bookName);
});
