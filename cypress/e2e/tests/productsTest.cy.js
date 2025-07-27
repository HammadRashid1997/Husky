import ProductsPage from "../pages/products"

describe("e2e tests for Products Page", () => {
    beforeEach(() => {
        ProductsPage.visit()
        cy.disableAnimations();
    })

    context("Hero section", () => {
        it("Hero section is displayed", () => {
            ProductsPage.getProductsPageHeroSection()
        })

        it("Hero section image is displayed", () => {
            ProductsPage.getProductsPageHeroSectionImage()
        })

        it("Hero section text is visible and displayed", () => {
            ProductsPage.getProductsPageHeroSectionText()
        })

        it("Learn more button in hero section is visible", () => {
            ProductsPage.getProductsPageHeroSectionTextSectionButton()
        })
    })

    context("Cards Section", () => {
        it("Cards section is visible", () => {
            ProductsPage.getProductsPageCardsSection()
        })

        it("Cards section text is visible", () => {
            ProductsPage.getProductsPageCardsSectionTitleAndBodyText()
        })
    })

    context("Harnessing Section", () => {
        it("Harnessing section is visible", () => {
            ProductsPage.getProductsPageHarnessingSection()
        })

        it("Harnessing section image is visible", () => {
            ProductsPage.getProductsPageHarnessingSectionImage()
        })

        it("Harnessing section text is visible", () => {
            ProductsPage.getProductsPageHarnessingSectionText()
        })

        it("Learn more button in harnessing section is visible", () => {
            ProductsPage.getProductsPageHarnessingSectionTextSectionButton()
        })
    })

    context("Coffee Section", () => {
        it("Coffee section is visible", () => {
            ProductsPage.getProductsPageCoffeeSection()
        })

        it("Coffee section text is visible", () => {
            ProductsPage.getProductsPageCoffeeSectionText()
        })

        it("Image in the coffee section is visible", () => {
            ProductsPage.getProductsPageCoffeeSectionImage()
        })

        it("Cards in the coffee section is visible", () => {
            ProductsPage.getProductsPageCoffeeSectionCardsSection()
        })

        it("Cards title text and icon is visible", () => {
            ProductsPage.getProductsPageCoffeeSectionCardsSectionText()
        })
    })

    context("Advisor Section", () => {
        it("Advisor section is visible", () => {
            ProductsPage.getProductsPageAdvisorSection()
        })

        it("Advisor Section image is visible", () => {
            ProductsPage.getProductsPageAdvisorSectionImage()
        })

        it("Advisor section text is visible", () => {
            ProductsPage.getProductsPageAdvisorSectionTextSection()
        })
    })

    context("Results section", () => {
        it("Results section is visible", () => {
            ProductsPage.getProductsPageResultsSection()
        })

        it("Results section heading text is visible", () => {
            ProductsPage.getProductsPageResultsSectionHeadingText()
        })

        it("Results section body content is visible", () => {
            ProductsPage.getProductsPageResultsSectionBodyContent()
        })
    })
})
