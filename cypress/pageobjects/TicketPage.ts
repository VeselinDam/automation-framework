import IssueDeleteDialog from "./components/IssueDeleteDialog";

class TicketPage {

  ticketTitle = "div .ant-modal-body issue-title textarea";
  ticketID = "div .ant-modal-body .type-dropdown";
  ticketDescription = ".ql-editor";
  ticketStatusButton = "issue-status > .ant-dropdown-trigger > .btn";
  ticketReporter = "issue-reporter > .ant-dropdown-trigger > .btn";
  ticketAssignees = "issue-assignees > j-button.ng-star-inserted > .btn";
  ticketPriority = "issue-priority > .ant-dropdown-trigger > .btn";
  ticketComments = "issue-comments .pl-10";
  ticketDeleteButton = "[icon='trash'] > .btn";
  statusOptions = ".ant-dropdown > .mt-3 li div span";
  closeButton = "[icon='times'] > .btn";
  trashButton = "[icon='trash'] > .btn";

  getTicketTitle(): Cypress.Chainable<string> {
    return cy.get(this.ticketTitle).should("be.visible").invoke("val");
  }

  checkTicketIdVisibility(){
    cy.get(this.ticketID).should("be.visible");
  }

  checkTicketTitleVisibility(){
    cy.get(this.ticketTitle).should("be.visible");
  }

  checkTicketDescriptionVisibility(){
    cy.get(this.ticketDescription).should("be.visible");
  }

  checkTicketDeleteButtonVisibility(){
    cy.get(this.ticketDeleteButton).should("be.visible");
  }

  checkTicketStatusVisibility(){
    cy.get(this.ticketStatusButton).should("be.visible");
  }

  checkTicketReporterVisibility(){
    cy.get(this.ticketReporter).should("be.visible");
  }

  checkTicketAssigneesVisibility(){
    cy.get(this.ticketAssignees).should("be.visible");
  }

  checkTicketPriorityVisibility(){
    cy.get(this.ticketPriority).should("be.visible");
  }

  checkTicketCommentsVisibility(){
    cy.get(this.ticketComments).should("be.visible");
  }

  clickOnStatusButton() {
    cy.get(this.ticketStatusButton).should("be.visible").click();
  }

  selectTicketStatus(status: string) {
    cy.get(this.statusOptions).should("be.visible").contains(status).click();
  }

  clickOnCloseButton() {
    cy.get(this.closeButton).should("be.visible").click();
  }

  clickOnTrashButton(): IssueDeleteDialog {
    cy.get(this.trashButton).should("be.visible").click();
    return new IssueDeleteDialog();
  }
}

export default TicketPage;
