import HomePage from "../../pageobjects/HomePage";
import { ISSUE_TITLE } from "../../helpers/constants/SearchPageConstants";
import SearchPage from "../../pageobjects/SearchPage";

describe("Search Page - Searching and Opening Issues", () => {
  let homePage: HomePage;
  let searchPage: SearchPage;

  beforeEach(() => {
    cy.visit("/");
    homePage = new HomePage();
    searchPage = homePage.clickOnSearchButton(2);

  });
  
  it("should display the issue ticket when a valid search term is entered", () => {
    searchPage.enterTextInSearchInputField(ISSUE_TITLE);
    searchPage.getIssueTitle().then((title) => {
      expect(title.trim()).to.equal(ISSUE_TITLE);
    });
  });

  it("should display an error message for a non-existing search term", () => {
    searchPage.enterTextInSearchInputField("invalidSearchTerm");
    searchPage.getErrorMessageTitle().then((errorMessageTitle) => {
      expect(errorMessageTitle.trim()).to.equal("We couldn't find anything matching your search");
    });
  });

  it("should open the correct issue ticket after searching", () => {
    searchPage.enterTextInSearchInputField(ISSUE_TITLE);
    const ticketPage = searchPage.clickOnIssueTicket();
    ticketPage.getTicketTitle().then(ticketTitle => {
      expect(ticketTitle).to.be.equal(ISSUE_TITLE);
    })

  });

});
