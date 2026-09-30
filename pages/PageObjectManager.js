import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import BooksPage from "./books";

class PageObjectModel {
  constructor(page) {
    this.page = page;
  }

  getRegistrationPage() {
    return new RegistrationPage(this.page);
  }

  getLoginPage() {
    return new LoginPage(this.page);
  }

  getBooksPage() {
    return new BooksPage(this.page);
  }
}

export default PageObjectModel;
