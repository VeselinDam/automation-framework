import HomePage from "../../pageobjects/HomePage";
import { validSearchTerm } from "../helpers/constants/SearchPage";

describe("This section will cover all test cases for Search Page.", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("Issue ticket displayed when a valid search term is entered", () => {
    const homePage = new HomePage();

    const searchPage = homePage.clickOnSearchButton();
    searchPage.enterValidTermInSearchInputField(validSearchTerm);
    searchPage.getIssueTitle().then((title) => {
      expect(title.trim()).to.equal(validSearchTerm);
    });
  });

  it.only("Opens correct issue ticket after a valid search term is entered", () => {
    const homePage = new HomePage();

    const searchPage = homePage.clickOnSearchButton();
    searchPage.enterValidTermInSearchInputField(validSearchTerm);
    searchPage.clickOnIssueTicket();
  });

});
