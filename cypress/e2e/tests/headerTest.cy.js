// Test file for Header.js

import HeaderClass from "../pages/header"

describe("e2e tests for the Header section", () => {

    beforeEach(() => {
        HeaderClass.visit()
    });

    context("Header section", () => {
        it("Top navigation bar is visible", () => {
            HeaderClass.getTopNavigationBar()
        })

        it("Company logo is visible", () => {
            HeaderClass.getCompanyWebsiteLogoInTheTopNavigationBar()
        })

        it("Home Page Menu Link is visible and clickable", () => {
            HeaderClass.getHomePageMenuLinkInTopNavigationBar()
        })

        it("Products Page Menu Link is visible and clickable", () => {
            HeaderClass.getProductsPageLinkInTopNavigationBar()
        })

        it("Solutions Page Menu Link is visible and clickable", () => {
            HeaderClass.getSolutionsPageLinkInTopNavigationBar()
        })

        it("About Us Page Menu Link is visible and clickable", () => {
            HeaderClass.getAboutUsPageLinkInTopNavigationBar()
        })

        it("Sustainability Page Menu Link is visible and clickable", () => {
            HeaderClass.getSustainabilityPageLinkInTopNavigationBar()
        })

        it("Contact Us Page Menu Link is visible and clickable", () => {
            HeaderClass.getContactUsPageLinkInTopNavigationBar()
        })
    })
})
