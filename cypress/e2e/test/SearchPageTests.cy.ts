import HomePage from "../../pageobjects/HomePage";
import { validSearchTerm } from "../../helpers/constants/SearchPage";

describe("This section will cover all test cases for Search Page.", () => {
  let homePage: HomePage;

  beforeEach(() => {
    cy.visit("/");
    homePage = new HomePage();
  });
  
  it("Issue ticket displayed when a valid search term is entered", () => {
    const searchPage = homePage.clickOnSearchButton();
    searchPage.enterTextInSearchInputField(validSearchTerm);
    searchPage.getIssueTitle().then((title) => {
      expect(title.trim()).to.equal(validSearchTerm);
    });
  });

  it("Error message displayed when a non-existing search term is entered", () => {
    const searchPage = homePage.clickOnSearchButton();
    searchPage.enterTextInSearchInputField("invalidSearchTerm");
    searchPage.getErrorMessageTitle().then((errorMessageTitle) => {
      expect(errorMessageTitle.trim()).to.equal("We couldn't find anything matching your search");
    });
  });

  it("Opens correct issue ticket after a valid search term is entered", () => {
    const searchPage = homePage.clickOnSearchButton();
    searchPage.enterTextInSearchInputField(validSearchTerm);
    const ticketPage = searchPage.clickOnIssueTicket();
    ticketPage.getTicketTitle().then(ticketTitle => {
      expect(ticketTitle).to.be.equal(validSearchTerm);
    })

  });

});
