import TicketPage from "./TicketPage";

class SearchPage {
    searchInputFiedl = ".mb-10 > j-input > .input-container > .input"
    issueTitle = "issue-result.ng-star-inserted div.text-textDark";

    enterValidTermInSearchInputField(validTerm: string) {
        cy.get(this.searchInputFiedl).should("be.visible").clear().type(validTerm);
    }

    getIssueTitle(): Cypress.Chainable<string> {
        return cy.get(this.issueTitle).should("be.visible").invoke('text');
    }   
    
    clickOnIssueTicket(): TicketPage{
        cy.get(this.issueTitle).should("be.visible").click();
        return new TicketPage();
    }
}

export default SearchPage;