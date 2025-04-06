import { StatusConstants } from "helpers/constants/StatusConstants";
import HomePage from "pageobjects/HomePage";

describe("Test cases for essential elements on the Ticket page.", ()=>{
    it("Should display all essential elements on the ticket page.", ()=>{
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