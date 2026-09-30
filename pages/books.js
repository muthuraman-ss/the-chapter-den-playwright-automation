import { expect } from "@playwright/test";

class BooksPage {
  constructor(page) {
    this.page = page;
  }
  async gotobooks() {
    await this.page.getByRole("link", { name: "Order Your Book" }).click();
  }

  async addBookToCart(bookName) {
    const book = this.page.locator("li").filter({ hasText: bookName });

    await book.getByRole("link", { name: "Add To Cart" }).click();

    await this.page.getByRole("button", { name: " Add to Cart" }).click();
  }

  async proceedToBuy() {
    const proceedToBuy = this.page.getByRole("link", {
      name: /Proceed to Buy/,
    });

    await expect(proceedToBuy).toHaveAttribute("href", "/order");

    await proceedToBuy.click();
  }
  async placeOrder() {
    await this.page.getByRole("button", { name: "Place Your Order" }).click();
    await expect(this.page).toHaveURL(/\/orderConfirmationBill$/);
  }
}

export default BooksPage;
