import HomePage from "../../pageobjects/HomePage";
import { faker } from "@faker-js/faker";

describe("This section will cover all test cases for Creating issue page.", () => {

  let ticketTitle: string;
  let homePage: HomePage;

  beforeEach(() => {
    cy.visit("/");

    ticketTitle = faker.string.alphanumeric(10);
    homePage = new HomePage();
    const createIssuePage = homePage.clickOnCreateIssueButton();
    createIssuePage.enterTextIntoShortSummeryInputField(ticketTitle);
    createIssuePage.clickOnCreateIssueButton();
  });

  it("Creates an issue and verifies it's visible in the backlog column.", () => {
    homePage.getBacklogTicketTitle().then((ticketTitlesInBacklog) => {
      expect(ticketTitlesInBacklog.trim()).to.contain(ticketTitle);
    });
  });
});
