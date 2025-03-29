class TicketPage {

  ticketTitle = "div .ant-modal-body issue-title textarea";
  ticketID = "div .ant-modal-body .type-dropdown";
  ticketDescription = ".ql-editor";
  ticketStatus = "issue-status > .ant-dropdown-trigger > .btn";
  ticketReporter = "issue-reporter > .ant-dropdown-trigger > .btn";
  ticketAssignees = "issue-assignees > j-button.ng-star-inserted > .btn";
  ticketPriority = "issue-priority > .ant-dropdown-trigger > .btn";
  ticketComments = "issue-comments .pl-10";
  ticketDeleteButton = "[icon='trash'] > .btn";

  getTicketTitle(): Cypress.Chainable<string> {
    return cy.get(this.ticketTitle).should("be.visible").invoke("val");
  }

  checkTicketIdVisibility(){
    cy.get(this.ticketID).should("be.visible", "Ticket ID is not visible on the page!");
  }

  checkTicketTitleVisibility(){
    cy.get(this.ticketTitle).should("be.visible", "Ticket Title is not visible on the page!");
  }

  checkTicketDescriptionVisibility(){
    cy.get(this.ticketDescription).should("be.visible", "Ticket Description is not visible on the page!");
  }

  checkTicketDeleteButtonVisibility(){
    cy.get(this.ticketDeleteButton).should("be.visible", "Ticket Delete button is not visible on the page!");
  }

  checkTicketStatusVisibility(){
    cy.get(this.ticketStatus).should("be.visible", "Ticket Status is not visible on the page!");
  }

  checkTicketReporterVisibility(){
    cy.get(this.ticketReporter).should("be.visible", "Ticket Reporter is not visible on the page!");
  }

  checkTicketAssigneesVisibility(){
    cy.get(this.ticketAssignees).should("be.visible", "Ticket Reporter is not visible on the page!");
  }

  checkTicketPriorityVisibility(){
    cy.get(this.ticketPriority).should("be.visible", "Ticket Priority is not visible on the page!");
  }

  checkTicketCommentsVisibility(){
    cy.get(this.ticketComments).should("be.visible", "Ticket Comments is not visible on the page!");
  }
}

export default TicketPage;
