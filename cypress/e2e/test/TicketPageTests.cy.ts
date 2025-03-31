import { StatusConstants } from "../../helpers/constants/StatusConstants";
import HomePage from "../../pageobjects/HomePage";

describe("This section will cover all test cases for Ticket page.", ()=>{
    it("Verifies essential elements are visible when the ticket card opens.", ()=>{
        cy.visit("/");
        const homePage = new HomePage();
        const ticketPage = homePage.clickOnTicketCardInColumn(StatusConstants.DONE, 2);
        ticketPage.checkTicketIdVisibility();
        ticketPage.checkTicketTitleVisibility();
        ticketPage.checkTicketDescriptionVisibility();
        ticketPage.checkTicketDeleteButtonVisibility();
        ticketPage.checkTicketStatusVisibility();
        ticketPage.checkTicketReporterVisibility();
        ticketPage.checkTicketAssigneesVisibility();
        ticketPage.checkTicketPriorityVisibility();
        ticketPage.checkTicketCommentsVisibility();
    });
});