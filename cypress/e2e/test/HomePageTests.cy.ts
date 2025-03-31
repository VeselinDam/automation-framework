import { columnNamesAsserts } from "../../helpers/asserts/HomePageAsserts";
import HomePage from "../../pageobjects/HomePage";
import { ISSUE_TITLE } from "../../helpers/constants/SearchPageConstants";
import { StatusConstants } from "../../helpers/constants/StatusConstants";

describe("This section will cover all test cases for Home page.", () => {
  let homePage: HomePage;

  beforeEach(() => {
    cy.visit("/");
    homePage = new HomePage();
  });

  it("Verify column titles on Jira board are visible.", () => {
    homePage.getColumnsTitles().then((columnsTitles) => {
      columnNamesAsserts.forEach((column: string, index) => {
        expect(columnsTitles[index]).to.equal(column);
      });
    });
  });

  it("Move ticket between columns.", () => {
    const searchPage = homePage.clickOnSearchButton(2);
    searchPage.enterTextInSearchInputField(ISSUE_TITLE);
    const ticketPage = searchPage.clickOnIssueTicket();
    ticketPage.clickOnStatusButton();
    ticketPage.selectTicketStatus(StatusConstants.DONE);
    ticketPage.clickOnCloseButton();
    homePage.getColumnTicketsTitlesText(StatusConstants.DONE).then((ticketsTitles) => {
        expect(ticketsTitles).to.contain(ISSUE_TITLE);
    })
  });
});
