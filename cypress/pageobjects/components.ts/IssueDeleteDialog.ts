class IssueDeleteDialog {
    deleteButton = "[classname='btn-primary mr-2'] > .btn";
  
    clickOnDeleteButton() {
      cy.get(this.deleteButton).should("be.visible").click();
    }
  
  }
  
  export default IssueDeleteDialog;
  