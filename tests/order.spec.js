import testData from "../test-data/test-data.json";
import PageObjectModel from "../pages/PageObjectManager";
import { test, expect } from "@playwright/test";

test("E2E-004: Place order successfully", async ({ page }) => {
  const data = { ...testData["registration-user"] };

  const pageObjectManager = new PageObjectModel(page);

  const loginPage = pageObjectManager.getLoginPage();

  await loginPage.goto();
  await loginPage.loginUser(data.email, data.password);

  const booksPage = pageObjectManager.getBooksPage();

  await booksPage.addBookToCart(testData.books.bookName);

  await booksPage.proceedToBuy();

  await booksPage.placeOrder();
});
// authTest("E2E-004: Place order successfully", async ({ page }) => {
//   const pageObjectManager = new PageObjectModel(page);

//   const booksPage = pageObjectManager.getBooksPage();

//   await booksPage.openBooksPage();

//   await booksPage.addBookToCart(testData.books.bookName);

//   await booksPage.openCart();

//   await booksPage.proceedToBuy();

//   await booksPage.fillOrderDetails(testData.books);

//   await booksPage.purchaseOrder();

//   await booksPage.verifyOrderSuccess();
// });
