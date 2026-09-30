class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.login = page.getByRole("button", { name: "log in" });
    this.passwordToggle = page.locator("button").nth(2);
  }

  async goto() {
    await this.page.goto(
      "https://the-chapter-den-online-store.netlify.app/login",
    );
  }

  async loginUser(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.login.click();
  }

  async togglePasswordVisibility() {
    await this.passwordToggle.click();
  }
}

export default LoginPage;
