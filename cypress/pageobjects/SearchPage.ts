import TicketPage from "./TicketPage";

class SearchPage {
    searchInputField = ".mb-10 > j-input > .input-container > .input"
    issueTitle = "issue-result.ng-star-inserted div.text-textDark";
    errorMessageTitle = ".pt-8";
    errorMessageSubtitle =  ".pt-2"

    enterTextInSearchInputField(searchTerm: string) {
        cy.get(this.searchInputField).should("be.visible").clear().type(searchTerm);
    }

    getIssueTitle(): Cypress.Chainable<string> {
        return cy.get(this.issueTitle).should("be.visible").invoke('text');
    }   
    
    clickOnIssueTicket(): TicketPage{
        cy.get(this.issueTitle).should("be.visible").click();
        return new TicketPage();
    }

    getErrorMessageTitle(): Cypress.Chainable<string> {
        return cy.get(this.errorMessageTitle).should("be.visible").invoke('text');
    } 

    getErrorMessageSubtitle(): Cypress.Chainable<string> {
        return cy.get(this.errorMessageSubtitle).should("be.visible").invoke('text');
    } 

}

export default SearchPage;