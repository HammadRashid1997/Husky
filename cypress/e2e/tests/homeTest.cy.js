// Test file for Home.js

import HomePage from "../pages/home"

describe("e2e tests for Home Page", () => {
    beforeEach(() => {
        HomePage.visit()
        cy.disableAnimations();
    })

    context("Hero Section", () => {
        it("Home Page is visible", () => {
            HomePage.getHomePageHeroSection()
        })

        it("Home Page text is visible", () => {
            HomePage.getHomePageHeroSectionText()
        })

        it("Home Page Learn More button is visible and clickable", () => {
            HomePage.getHomePageHeroSectionLearnMoreButton()
        })
    })

    context("Cards Section", () => {
        it("Cards below the hero section are visible", () => {
            HomePage.getHomePageCardsSectionBelowHeroSection()
        })

        it("Cards below the hero section have text visible", () => {
            HomePage.getHomePageCardsSectionBelowHeroSectionText()
        })
    })

    context("Bottle Section", () => {
        it("Bottle section is visible", () => {
            HomePage.getHomePageBottleSection()
        })

        it("Bottle section image is visible", () => {
            HomePage.getHomePageBottleSectionImage()
        })

        it("Bottle section text section has text visible", () => {
            HomePage.getHomePageBottleSectionTitleAndBodyText()
        })
    })

    context("Coffee Section", () => {
        it("Coffee section is visible", () => {
            HomePage.getHomePageCoffeeSection()
        })

        it("Coffee section text is visible", () => {
            HomePage.getHomePageCoffeeSectionTitleAndBodyText()
        })

        it("Coffee section image is visible", () => {
            HomePage.getHomePageCoffeeSectionImage()
        })

        it("Coffee section cards section is visible", () => {
            HomePage.getHomePageCoffeeSectionCardsSection()
        })

        it("Coffee section cards icon, title and bod text is visible", () => {
            HomePage.getHomePageCoffeeSectionCardsSectionIconTitleAndBodyText()
        })
    })

    context("Advisor Section", () => {
        it("Advisor section is visible", () => {
            HomePage.getAdvisorSection()
        })

        it("Advisor section image is visible", () => {
            HomePage.getAdvisorSectionImage()
        })

        it("Advisor section text is visible", () => {
            HomePage.getAdvisorSectionTextSection()
        })
    })

    context("Nitrogen Section", () => {
        it("Nitrogen section is visible", () => {
            HomePage.getNitrogenSection()
        })

        it("Nitrogen section title text is visible", () => {
            HomePage.getNitrogenSectionTitleTextHeading()
        })

        it("Nitrogen section cards are visible", () => {
            HomePage.getNitrogenSectionCardsSection()
        })
    })
})
