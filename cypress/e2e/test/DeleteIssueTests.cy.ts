import { StatusConstants } from "../../helpers/constants/StatusConstants";
import HomePage from "../../pageobjects/HomePage";
import { faker, ne } from "@faker-js/faker";
import TicketPage from "../../pageobjects/TicketPage";

describe("Deleting an issue.", () => {
  let homePage: HomePage;
  let ticketTitle = faker.string.alphanumeric(10);

  before(() => {
    cy.visit("/");
    homePage = new HomePage();
    const createIssuePage = homePage.clickOnCreateIssueButton(3);
    createIssuePage.enterTextIntoShortSummeryInputField(ticketTitle);
    createIssuePage.clickOnCreateIssueButton();
  });

  it("delete an issue and verify it's removed from the board.", () => {
    homePage
      .getColumnTicketsTitlesText(StatusConstants.BACKLOG)
      .each(($element) => {
        if ($element.text().trim() === ticketTitle) {
          cy.wrap($element).click();
        }
      });
    const ticketPage = new TicketPage();
    const issueDeleteDialog = ticketPage.clickOnTrashButton();
    issueDeleteDialog.clickOnDeleteButton();
    const searchPage = homePage.clickOnSearchButton(2);
    searchPage.enterTextInSearchInputField(ticketTitle);
    searchPage.getErrorMessageTitle().then((errorMessageTitle) => {
      expect(errorMessageTitle.trim()).to.equal(
        "We couldn't find anything matching your search"
      );
    });
  });
});
