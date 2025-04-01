import HomePage from "../../pageobjects/HomePage";
import SearchPage from "../../pageobjects/SearchPage";
import SearchPageErrorMessageAsserts from "../../helpers/asserts/SearchPageErrorMessagesAsserts";
import SearchPageConstants from "../../helpers/constants/SearchPageConstants";

describe("Search Page - Searching and Opening Issues", () => {
  let homePage: HomePage;
  let searchPage: SearchPage;

  beforeEach(() => {
    cy.visit("/");
    homePage = new HomePage();
    searchPage = homePage.clickOnSearchButton(2);

  });
  
  it("should display the issue ticket when a valid search term is entered", () => {
    searchPage.enterTextInSearchInputField(SearchPageConstants.ISSUE_TITLE);
    searchPage.getIssueTitle().then((title) => {
      expect(title.trim()).to.equal(SearchPageConstants.ISSUE_TITLE);
    });
  });

  it("should display an error message for a non-existing search term", () => {
    searchPage.enterTextInSearchInputField(SearchPageConstants.NON_EXISTING_ISSUE_TITLE);
    searchPage.getErrorMessageTitle().then((errorMessageTitle) => {
      expect(errorMessageTitle.trim()).to.equal(SearchPageErrorMessageAsserts.errorMessageTitle);
    });
    searchPage.getErrorMessageSubtitle().then((errorMessageSubtitle) => {
      expect(errorMessageSubtitle.trim()).to.equal(SearchPageErrorMessageAsserts.errorMessageSubtitle);
    });
  });

  it("should open the correct issue ticket after searching", () => {
    searchPage.enterTextInSearchInputField(SearchPageConstants.ISSUE_TITLE);
    const ticketPage = searchPage.clickOnIssueTicket();
    ticketPage.getTicketTitle().then(ticketTitle => {
      expect(ticketTitle).to.be.equal(SearchPageConstants.ISSUE_TITLE);
    })

  });

});
