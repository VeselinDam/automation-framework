import CreateIssuePage from "./CreateIssuePage";
import SearchPage from "./SearchPage";
import TicketPage from "./TicketPage";

class HomePage {
    searchIconButton = ".navbarLeft-content > :nth-child(2)";
    firstTicketCardInFirstColumn = "#Backlog > :nth-child(1) > .issue-wrap > .issue";
    createIssueButton = ".navbarLeft-content > :nth-child(3)";
    backlogTicketTitles = "#Backlog issue-card .text-textDarkest";

    clickOnSearchButton(): SearchPage {
        cy.get(this.searchIconButton).should("be.visible").click();
        return new SearchPage();
    }

    clickOnFirstTicketCardInFirstColumn(): TicketPage{
        cy.get(this.firstTicketCardInFirstColumn).should("be.visible").click();
        return new TicketPage();
    }

    clickOnCreateIssueButton(): CreateIssuePage{
        cy.get(this.createIssueButton).should("be.visible").click();
        return new CreateIssuePage();
    }

    getBacklogTicketTitle(): Cypress.Chainable<string> {
        return cy.get(this.backlogTicketTitles).should("be.visible").invoke("text");
    }
}

export default HomePage;