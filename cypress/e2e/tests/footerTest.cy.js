// Test file for Footer section

import FooterClass from "../pages/footer"

describe("e2e tests for Footer section", () => {
    beforeEach(() => {
        FooterClass.visit()
    })

    it("Footer is visible", () => {
        FooterClass.getFooterSection()
    })

    it("Card section in footer is visible", () => {
        FooterClass.getFooterSectionCard()
    })

    it("Text in the card section in footer is visible", () => {
        FooterClass.getFooterSectionCardText()
        FooterClass.getFooterSectionCardLearnMoreButton()
    })

    it("Image in the card is visible", () => {
        FooterClass.getFooterSectionCardImage()
    })


    it("Newsletter section in the footer is visible", () => {
        FooterClass.getFooterSectionNewsletterSection()
        FooterClass.getFooterSectionNewsletterSectionTitleText()
    })

    it("Newsletter form is visible and is working", () => {
        FooterClass.getFooterSectionNewsletterSectionNewsletterForm()
        FooterClass.submitNewsletterForm("hammad123@gmail.com")
    })

    it("Logo and the Menu links in the footer section are visible", () => {
        FooterClass.getFooterSectionFooterLogo()
        FooterClass.getFooterSectionMenuLinksInTheFooter()
    })
})
