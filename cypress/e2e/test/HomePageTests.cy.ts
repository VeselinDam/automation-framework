import { columnNamesAsserts } from "../../helpers/asserts/HomePageAsserts";
import HomePage from "../../pageobjects/HomePage";
import { StatusConstants } from "../../helpers/constants/StatusConstants";
import SearchPageConstants from "../../helpers/constants/SearchPageConstants";

describe("Jira Home Page - Board, Columns, and Header", () => {
  let homePage: HomePage;

  beforeEach(() => {
    cy.visit("/");
    homePage = new HomePage();
  });

  it("verify column titles on Jira board are visible.", () => {
    homePage.getColumnsTitles().then((columnsTitles) => {
      columnNamesAsserts.forEach((column: string, index) => {
        expect(columnsTitles[index]).to.equal(column);
      });
    });
  });

  it("move a ticket between columns", () => {
    const searchPage = homePage.clickOnSearchButton(2);
    searchPage.enterTextInSearchInputField(SearchPageConstants.ISSUE_TITLE);
    const ticketPage = searchPage.clickOnIssueTicket();
    ticketPage.clickOnStatusButton();
    ticketPage.selectTicketStatus(StatusConstants.DONE);
    ticketPage.clickOnCloseButton();
    homePage
      .getColumnTicketsTitlesText(StatusConstants.DONE)
      .then((ticketsTitles) => {
        expect(ticketsTitles).to.contain(SearchPageConstants.ISSUE_TITLE);
      });
  });

  it("verify header control bar elements are visible.", () => {
    homePage.checkIfSearchInputFieldInHeaderBarIsVisible();
    homePage.checkIfAvatarAssigneeInHeaderBarIsVisible();
    homePage.checkIfIgnoreResolvedButtonIsVisible();
    homePage.checkIfOnlyMyIssueButtonIsVisible();
  });
});
