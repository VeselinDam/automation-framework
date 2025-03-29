import SearchPage from "./SearchPage";

class HomePage {
    searchIconButton = ".navbarLeft-content > :nth-child(2)";

    clickOnSearchButton(): SearchPage {
        cy.get(this.searchIconButton).should("be.visible").click();
        return new SearchPage();
    }
}

export default HomePage;