// Test file for solutions.js

import SolutionsPage from "../pages/solutions"

describe("e2e tests for Solutions Page", () => {
    beforeEach(() => {
        SolutionsPage.visit()
        cy.disableAnimations()
    })

    context("Hero section", () => {
        it("The hero section is visible", () => {
            SolutionsPage.getSolutionsPageHeroSection()
        })

        it("The hero section background image is visible", () => {
            SolutionsPage.getSolutionsPageHeroSectionBackgroundImage()
        })

        it("The text on hero section is visible", () => {
            SolutionsPage.getSolutionsPageHeroSectionText()
        })
    })

    context("Cards Section below Hero Section", () => {
        it("The cards section is visible", () => {
            SolutionsPage.getSolutionsPageCardsSection()
        })

        it("The cards section text is visible", () => {
            SolutionsPage.getSolutionsPageCardsSectionCardsText()
        })

        it("The cards are nitrogen section is visible", () => {
            SolutionsPage.getSolutionsPageNitrogenSection()
        })

        it("The heading text in nitrogen section is visible", () => {
            SolutionsPage.getSolutionsPageNitrogenSectionText()
        })

        it("The cards section in nitrogen section is visible", () => {
            SolutionsPage.getSolutionsPageNitrogenSectionCardsSection()
        })
    })

    context("Advisor section", () => {
        it("The advisor section is visible", () => {
            SolutionsPage.getSolutionsPageAdvisorSection()
        })

        it("The advisor section image is visible", () => {
            SolutionsPage.getSolutionsPageAdvisorSectionImage()
        })

        it("The advisor section text is visible", () => {
            SolutionsPage.getSolutionsPageAdvisorSectionTextSection()
        })
    })
})