// Header class to see all the content of Header

class HeaderClass {

    // visit the page
    visit() {
        cy.visit("https://www.husky.ag/")
    }

    // Getters
    getTopNavigationBar() {
        cy.get(".header-section").should("be.visible")
    }

    getCompanyWebsiteLogoInTheTopNavigationBar() {
        cy.get(".nav-logo.w-nav-brand").should("be.visible")
    }

    getMainMenuNavigationLinksInTopNavigationBar() {
        cy.get(".main-nav-menu.w-nav-menu").should("be.visible")
    }

    getHomePageMenuLinkInTopNavigationBar() {
        cy.get(".nav-link.w-nav-link").contains("Home")
        .should("be.visible")
        .should("have.css", "color", "rgb(122, 166, 108)").click()
        cy.url().should("include", "/")
    }

    getProductsPageLinkInTopNavigationBar() {
        cy.get(".nav-link.w-nav-link").contains("Products")
        .should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)").click()
        cy.url().should("include", "/products")
    }

    getSolutionsPageLinkInTopNavigationBar() {
        cy.get(".nav-link.w-nav-link").contains("Solutions")
        .should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)").click()
        cy.url().should("include", "/solution")
    }

    getAboutUsPageLinkInTopNavigationBar() {
        cy.get(".nav-link.w-nav-link").contains("About us")
        .should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)").click()
        cy.url().should("include", "/our-mission")
    }

    getSustainabilityPageLinkInTopNavigationBar() {
        cy.get(".nav-link.w-nav-link").contains("Sustainability")
        .should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)").click()
        cy.url().should("include", "/sustainability")
    }

    getContactUsPageLinkInTopNavigationBar() {
        cy.get(".nav-link.nav-contact-us.w-nav-link").should("have.text", "Contact Us")
        .should("have.css", "background-color",  "rgb(122, 166, 108)")
        .should("have.css", "color", "rgb(255, 255, 255)")
    }
}

export default new HeaderClass();
