import CreateIssuePage from "./CreateIssuePage";
import SearchPage from "./SearchPage";
import TicketPage from "./TicketPage";

class HomePage {
  columnsTitles = "div .status-list .pb-4";

  private columnTicketsTitles(columnName: string): string {
    return `#${columnName} issue-card .text-textDarkest`;
  }

  private issueInColumn(columnName: string, issueIndex: number): string {
    return `#${columnName} :nth-child(${issueIndex}) > .issue-wrap > .issue`;
  }

  private navbarLeftContentItem(item: number): string {
    return `.navbarLeft-content > :nth-child(${item})`;
  }

  clickOnSearchButton(searchButton: number): SearchPage {
    cy.get(this.navbarLeftContentItem(searchButton)).should("be.visible").click();
    return new SearchPage();
  }

  clickOnTicketCardInColumn(columnName: string, index: number): TicketPage {
    cy.get(this.issueInColumn(columnName, index)).should("be.visible").click();
    return new TicketPage();
  }

  clickOnCreateIssueButton(createIssueButton: number): CreateIssuePage {
    cy.get(this.navbarLeftContentItem(createIssueButton)).should("be.visible").click();
    return new CreateIssuePage();
  }

  getColumnTicketsTitlesText(columnName: string): Cypress.Chainable<string> {
    return cy.get(this.columnTicketsTitles(columnName)).should("be.visible").invoke("text");
  }

  getColumnsTitles(): Cypress.Chainable<string[]> {
    const columnsTitles: string[] = [];

    return cy.get(this.columnsTitles)
      .should("be.visible")
      .each(($element) => {
        const title = $element
          .text()
          .replace(/\s\d+$/, "")
          .trim();
        columnsTitles.push(title);
      })
      .then(() => {
        return cy.wrap(columnsTitles);
      });
  }
}

export default HomePage;
