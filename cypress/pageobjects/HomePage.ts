import SearchPage from "./SearchPage";
import TicketPage from "./TicketPage";

class HomePage {
    searchIconButton = ".navbarLeft-content > :nth-child(2)";
    firstTicketCardInFirstColumn = "#Backlog > :nth-child(1) > .issue-wrap > .issue";

    clickOnSearchButton(): SearchPage {
        cy.get(this.searchIconButton).should("be.visible").click();
        return new SearchPage();
    }

    clickOnFirstTicketCardInFirstColumn(): TicketPage{
        cy.get(this.firstTicketCardInFirstColumn).should("be.visible").click();
        return new TicketPage();
    }
}

export default HomePage;