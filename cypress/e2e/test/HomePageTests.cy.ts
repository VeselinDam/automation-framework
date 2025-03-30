import { columnNamesAsserts } from "../../helpers/asserts/HomePageAsserts";
import HomePage from "../../pageobjects/HomePage";

describe("This section will cover all test cases for Home page.", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify column titles on Jira board are visible.", () => {
    const homePage = new HomePage();
    homePage.getColumnsTitle().then((columnsTitles) => {
      columnNamesAsserts.forEach((column: string, index) => {
        expect(columnsTitles[index]).to.equal(column);
      });
    });
  });
});
