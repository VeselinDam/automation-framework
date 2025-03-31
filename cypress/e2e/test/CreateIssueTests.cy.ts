import { StatusConstants } from "../../helpers/constants/StatusConstants";
import HomePage from "../../pageobjects/HomePage";
import { faker } from "@faker-js/faker";

describe("This section will cover all test cases for Creating issue page.", () => {

  it("Creates an issue and verifies it's visible in the backlog column.", () => {
    cy.visit("/");

    const ticketTitle = faker.string.alphanumeric(10);
    const homePage = new HomePage();
    const createIssuePage = homePage.clickOnCreateIssueButton(3);
    createIssuePage.enterTextIntoShortSummeryInputField(ticketTitle);
    createIssuePage.clickOnCreateIssueButton();
    homePage.getColumnTicketsTitlesText(StatusConstants.BACKLOG).then((ticketTitlesInBacklog) => {
      expect(ticketTitlesInBacklog.trim()).to.contain(ticketTitle);
    });
  });
});
