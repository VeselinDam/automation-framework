import { StatusConstants } from "../../helpers/constants/StatusConstants";
import HomePage from "../../pageobjects/HomePage";
import { faker } from "@faker-js/faker";

describe("Creating an issue.", () => {

  it("creates an issue and verifies it's added to the backlog.", () => {
    cy.visit("/");

    const ticketTitle = faker.string.alphanumeric(10);
    const homePage = new HomePage();
    const createIssuePage = homePage.clickOnCreateIssueButton(3);
    createIssuePage.enterTextIntoShortSummeryInputField(ticketTitle);
    createIssuePage.clickOnCreateIssueButton();
    homePage.getColumnTicketsTitlesText(StatusConstants.BACKLOG).then((ticketTitlesInBacklog) => {
      expect(ticketTitlesInBacklog).to.contain(ticketTitle);
    });
  });
});
