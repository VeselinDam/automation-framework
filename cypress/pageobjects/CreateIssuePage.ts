class CreateIssuePage {

    shortSummeryInputField = ":nth-child(3) > .form-input";
    createIssueButton = "[classname='btn-primary mr-2'] > .btn";

    enterTextIntoShortSummeryInputField(shortSummeryText :string) {
        cy.get(this.shortSummeryInputField).should("be.visible").clear().type(shortSummeryText);
    }

    clickOnCreateIssueButton() {
        cy.get(this.createIssueButton).should("be.visible").click();
    }
}

export default CreateIssuePage;