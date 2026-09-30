import { expect } from "@playwright/test";
class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.fullName = page.locator("#fullName");
    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.confirmPassword = page.locator("#confirmPassword");
    this.phoneNumber = page.locator("#phoneNumber");
    this.doorNoStreet = page.locator("#doorNoStreet");
    this.landmark = page.locator("#landMark");
    this.city = page.locator("#city");
    this.pinCode = page.locator("#pinCode");
    this.state = page.locator("#state");
    this.signUp = page.getByRole("button", { name: "Sign Up" });
    this.userIcon = page.locator("svg.navhover").first();
    this.signuplink = page.getByRole("link", { name: "Sign Up" });

    this.passwordToggle = page.locator("button").nth(2);
    this.confirmPasswordToggle = page.locator("button").nth(3);
  }

  async registerUser(user) {
    await this.fullName.fill(user.fullName);
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.confirmPassword);
    await this.phoneNumber.fill(user.phone);
    await this.doorNoStreet.fill(user.doorNoStreet);
    await this.landmark.fill(user.landmark);
    await this.city.fill(user.city);
    await this.pinCode.fill(user.pincode);
    await this.state.fill(user.state);
    await this.signUp.click();
  }

  async clickUserIcon() {
    await this.userIcon.waitFor({ state: "visible" });
    await this.userIcon.click();
  }

  async clickSignUpLink() {
    await this.signuplink.click();
  }

  async verifyLoggedInUser(user) {
    await expect(
      this.page.getByText(new RegExp(`^${user.fullName}$`, "i")),
    ).toBeVisible();
    await expect(
      this.page.getByText(user.email, { exact: true }),
    ).toBeVisible();
  }
  async clickLoggedInUser(user) {
    const initial = user.fullName.trim().charAt(0).toUpperCase();
    await this.page.getByRole("button", { name: initial }).click();
  }

  async navigateToRegistrationPage() {
    await this.clickUserIcon();
    await this.clickSignUpLink();
  }

  async togglePasswordVisibility() {
    await this.passwordToggle.click();
  }

  async verifyPasswordMasked() {
    await expect(this.password).toHaveAttribute("type", "password");
  }

  async verifyPasswordVisible() {
    await expect(this.password).toHaveAttribute("type", "text");
  }

  async toggleConfirmPasswordVisibility() {
    await this.confirmPasswordToggle.click();
  }

  async verifyConfirmPasswordMasked() {
    await expect(this.confirmPassword).toHaveAttribute("type", "password");
  }

  async verifyConfirmPasswordVisible() {
    await expect(this.confirmPassword).toHaveAttribute("type", "text");
  }
}
export default RegistrationPage;
