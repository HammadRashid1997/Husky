// Footer class

class FooterClass {
  //visit
  visit() {
    cy.visit("https://www.husky.ag/");
  }

  // Footer section
  getFooterSection() {
    cy.get(".footer-section").scrollIntoView().should("be.visible");
  }

  getFooterSectionCard() {
    cy.get(".biofertilizer-wrapper").scrollIntoView().should("be.visible");
  }

  getFooterSectionCardText() {
    cy.get(".biofertilizer-wrapper .biofertilizer-content-wrapper")
      .scrollIntoView()
      .should("be.visible");

    cy.get(
      ".biofertilizer-wrapper .biofertilizer-content-wrapper .biofertilizer-heading"
    )
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const normalized = text.replace(/\s+/g, " ").trim();
        expect(normalized).to.eq(
          "We redefine plant nutrition through coffee byproducts."
        );
      });

    cy.get(
      ".biofertilizer-wrapper .biofertilizer-content-wrapper .biofertilizer-heading .biofertilizer-heading-span"
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "coffee byproducts.")
      .should("have.css", "color", "rgb(122, 166, 108)");

    cy.get(
      ".biofertilizer-wrapper .biofertilizer-content-wrapper .center-section-paragraph.align-left"
    )
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.text",
        "Our mission is to elevate existing agricultural practices with a focus on nitrogen use efficiency, circular economies and climate impact."
      )
      .should("have.css", "color", "rgba(0, 0, 0, 0.5)");
  }

  getFooterSectionCardLearnMoreButton() {
    cy.get(
      ".biofertilizer-wrapper .biofertilizer-content-wrapper .primary-button.mt-20.w-button"
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "learn more")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.css", "background-color", "rgb(122, 166, 108)")
      .click();

    // Getting the learn more page upon click
    cy.url().should("include", "/learn-more");
  }

  getFooterSectionCardImage() {
    cy.get(".footer-section").scrollIntoView().should("be.visible")
    cy.get("img.wheat-farmer-img[src*='Wheat%20farmers%202.png']")
      .scrollIntoView()
      .should("be.visible")
  }

  getFooterSectionNewsletterSection() {
    cy.get(".newsletter-wrapper").scrollIntoView().should("be.visible");
  }

  getFooterSectionNewsletterSectionTitleText() {
    cy.get(".newsletter-wrapper .newsletter-heading")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Our Newsletter");

    cy.get(".newsletter-wrapper .newsletter-heading .newsletter-span")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Newsletter")
      .should("have.css", "color", "rgb(122, 166, 108)");
  }

  getFooterSectionNewsletterSectionNewsletterForm() {
    cy.get(".newsletter-wrapper .newsletter-form.w-form")
      .scrollIntoView()
      .should("be.visible");
  }

  submitNewsletterForm(email) {
    cy.get("input#email").should("be.visible").type(email);
    cy.get('input[type="submit"]').click();
    cy.get(".w-form-done")
      .should("be.visible")
      .and("contain.text", "Thank you! Your submission has been received!");
  }

  getFooterSectionFooterLogo() {
    cy.get(".footer-logo-wrapper .footer-logo")
      .scrollIntoView()
      .should("be.visible");
    cy.get(".footer-logo-wrapper .footer-content")
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.text",
        "Empowering agriculture and plant nutrition through coffee byproducts."
      )
      .should("have.css", "color", "rgba(255, 255, 255, 0.5)");
  }

  getFooterSectionMenuLinksInTheFooter() {
    const links = [
      { text: "home", href: "/" },
      { text: "Products", href: "/products" },
      { text: "Solutions", href: "/solution" },
      { text: "About Us", href: "/our-mission" },
      { text: "Sustainability", href: "/sustainability" },
    ];

    cy.get(".footer-links-wrapper .footer-menu-links").should(
      "have.length",
      links.length
    );

    links.forEach((link, index) => {
      cy.get(".footer-links-wrapper .footer-menu-links")
        .eq(index)
        .should("be.visible")
        .and("have.text", link.text)
        .and("have.attr", "href", link.href);
    });
  }
}

export default new FooterClass();
