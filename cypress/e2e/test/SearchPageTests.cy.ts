import HomePage from "../../pageobjects/HomePage";
import { ISSUE_TITLE } from "../../helpers/constants/SearchPageConstants";
import SearchPage from "../../pageobjects/SearchPage";

describe("This section will cover all test cases for Search Page.", () => {
  let homePage: HomePage;
  let searchPage: SearchPage;

  beforeEach(() => {
    cy.visit("/");
    homePage = new HomePage();
    searchPage = homePage.clickOnSearchButton(2);

  });
  
  it("Issue ticket displayed when a valid search term is entered", () => {
    searchPage.enterTextInSearchInputField(ISSUE_TITLE);
    searchPage.getIssueTitle().then((title) => {
      expect(title.trim()).to.equal(ISSUE_TITLE);
    });
  });

  it("Error message displayed when a non-existing search term is entered", () => {
    searchPage.enterTextInSearchInputField("invalidSearchTerm");
    searchPage.getErrorMessageTitle().then((errorMessageTitle) => {
      expect(errorMessageTitle.trim()).to.equal("We couldn't find anything matching your search");
    });
  });

  it("Opens correct issue ticket after a valid search term is entered", () => {
    searchPage.enterTextInSearchInputField(ISSUE_TITLE);
    const ticketPage = searchPage.clickOnIssueTicket();
    ticketPage.getTicketTitle().then(ticketTitle => {
      expect(ticketTitle).to.be.equal(ISSUE_TITLE);
    })

  });

});
