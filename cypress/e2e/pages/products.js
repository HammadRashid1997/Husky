// Products Page

class ProductsPage {
  // Visit the page
  visit() {
    cy.visit("https://www.husky.ag/products");
  }

  // Hero section
  getProductsPageHeroSection() {
    cy.get(".product-hero-section").should("be.visible");
  }

  getProductsPageHeroSectionImage() {
    cy.get(".product-hero-ic").should("be.visible");
  }

  getProductsPageHeroSectionText() {
    cy.get(".product-hero-cc .product-hero-heading")
      .should("be.visible")
      .should(
        "have.text",
        "Increase fertilizer efficiency without sacrificing crop yield & quality."
      )
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get(".product-hero-cc .product-hero-text")
      .should("be.visible")
      .should(
        "have.text",
        "Introducing a biofertilizer from repurposed coffee byproducts that harnesses the benefits of metabolites, microorganisms & amino acids in the coffee fruit."
      )
      .should("have.css", "color", "rgb(255, 255, 255)");
  }

  getProductsPageHeroSectionTextSectionButton() {
    cy.get(".product-hero-cc .order-now-btn.w-button")
      .should("be.visible")
      .should("have.text", "Learn More")
      .should("have.css", "color", "rgb(18, 36, 35)")
      .should("have.css", "background-color", "rgb(255, 255, 255)")
      .click();
  }

  // Cards Section
  getProductsPageCardsSection() {
    cy.get(".cards-section-2").scrollIntoView().should("be.visible");
  }

  getProductsPageCardsSectionTitleAndBodyText() {
    cy.fixture("ProductsPage/cropSectionCardsSection").then((cards) => {
      cy.get(".crop-card-outer-wrapper").should("have.length", cards.length);

      cards.forEach((card, index) => {
        cy.get(".crop-card-outer-wrapper")
          .eq(index)
          .scrollIntoView()
          .within(() => {
            cy.get(".crop-cards-heading")
              .should("be.visible")
              .and("have.text", card.heading);
            cy.get(".cards-text")
              .should("be.visible")
              .and("have.text", card.description);
          });
      });
    });
  }

  // Harnessing Section
  getProductsPageHarnessingSection() {
    cy.get(".harnessing-section").scrollIntoView().should("be.visible");
  }

  getProductsPageHarnessingSectionImage() {
    cy.get(".harnessing-section .harnessing-i-wrapper")
      .scrollIntoView()
      .should("be.visible");
  }

  getProductsPageHarnessingSectionText() {
    cy.get(".harnessing-section .harnessing-c-wrapper .harnessing-heading")
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.text",
        "Harnessing plant nutrients in one of the world’s most important crops"
      )
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.wait(2000); // added wait for the animation to complete

    cy.get(".harnessing-section .harnessing-c-wrapper .harnessing-text")
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.text",
        "Husky delivers consistent nutrition throughout the most critical growth stages, regardless of weather and soil. Farmers can reduce their reliance on synthetic nitrogen and deliver better nutrition."
      )
      .should("have.css", "color", "rgb(255, 255, 255)");
  }

  getProductsPageHarnessingSectionTextSectionButton() {
    cy.get(".harnessing-section .harnessing-c-wrapper .order-now-btn.w-button", { timeout: 10000 })
    .scrollIntoView()
    .should("have.text", "Learn More")
    .should("have.css", "color", "rgb(18, 36, 35)")
    .should("have.css", "background-color", "rgb(255, 255, 255)")
    .click({ force: true });
  }

  // Coffee Section
  getProductsPageCoffeeSection() {
    cy.get(".coffee-section.pt-0.pb-80").scrollIntoView().should("be.visible");
  }

  getProductsPageCoffeeSectionText() {
    cy.get(
      ".coffee-section.pt-0.pb-80 .section-center-heading-wrapper .section-center-heading"
    )
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.text",
        "We discovered a natural way to get more out of our plants"
      );

    cy.get(
      ".coffee-section.pt-0.pb-80 .section-center-heading-wrapper .section-center-heading .coffee-heading-feeen-span"
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "natural way ")
      .should("have.css", "color", "rgb(122, 166, 108)");

    cy.get(
      ".coffee-section.pt-0.pb-80 .section-center-heading-wrapper .center-section-paragraph"
    )
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.text",
        "Our formulations are simple, easy-to-use and yield unprecedented results for the world’s most important crops while reducing chemical fertilizer runoff and waste."
      )
      .should("have.css", "color", "rgba(0, 0, 0, 0.5)");
  }

  getProductsPageCoffeeSectionImage() {
    cy.get(".coffee-section.pt-0.pb-80 .coffee-image")
      .scrollIntoView()
      .should("be.visible");
  }

  getProductsPageCoffeeSectionCardsSection() {
    cy.get(".coffee-section.pt-0.pb-80 .w-layout-grid.coffee-card-grid")
      .scrollIntoView()
      .should("be.visible");
  }

  getProductsPageCoffeeSectionCardsSectionText() {
    cy.fixture("ProductsPage/coffeeSectionCardsSection").then((cards) => {
      cy.get(".coffee-card-outer-wrapper").should("have.length", cards.length);
      cards.forEach((card, index) => {
        cy.get(".coffee-card-outer-wrapper")
          .eq(index)
          .scrollIntoView()
          .within(() => {
            cy.get(".micro-img")
              .should("have.attr", "src")
              .and("include", card.icon);

            cy.get(".coffee-card-heading")
              .should("be.visible")
              .should("have.css", "color", "rgb(51, 51, 51)")
              .and("have.text", card.heading);

            cy.get(".coffee-card-text")
              .should("be.visible")
              .should("have.css", "color", "rgba(0, 0, 0, 0.5)")
              .and("have.text", card.text);
          });
      });
    });
  }

  // Advisor section
  getProductsPageAdvisorSection() {
    cy.get(".advisor-section").should("be.visible");
  }

  getProductsPageAdvisorSectionImage() {
    cy.get("img.advisor-img")
      .scrollIntoView()
      .should("be.visible")
  }

  getProductsPageAdvisorSectionTextSection() {
    cy.get("p.advisor-message")
      .scrollIntoView()
      .should("be.visible")
      .should(
        "contain.text",
        "We capture discarded coffee byproducts to produce a revolutionary biofertilizer that has shown remarkable results on many crops, improving plant nutrition, yield and nitrogen use efficiency. Our mission is to build circular economies in which we harness coffee byproducts to provide more income to farmers and better food for consumers"
      )
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get(".advisor-name")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Crawford Hawkins")
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get(".advisor-designation")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Co-Founder, Husky Ag Inc.")
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get("a.advisor-link-block.w-inline-block")
      .should("be.visible")
      .should("have.attr", "href");
  }

  // Results section
  getProductsPageResultsSection() {
    cy.get(".results-section").scrollIntoView().should("be.visible")
    .should("have.css", "background-color", "rgb(255, 251, 251)")
  }

  getProductsPageResultsSectionHeadingText() {
    cy.get(".results-section .section-center-heading-wrapper")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Our Results ")
    
    cy.get(".results-section .section-center-heading-wrapper .coffee-heading-feeen-span")
    .scrollIntoView()
    .should("be.visible")
    .should("have.css", "color", "rgb(122, 166, 108)")
    .should("have.text", "Results ")
  }

  getProductsPageResultsSectionBodyContent() {
    cy.fixture("ProductsPage/resultsSection.json").then((results) => {
      cy.get(".results-section .w-layout-grid.results-section-grid")
        .scrollIntoView()
        .should("be.visible");

      // Iterate through each card and validate the content
      results.forEach((result, index) => {
        cy.get(".results-section .results-card-o-wrapper")
          .eq(index)
          .within(() => {
            cy.get(".results-heading")
              .should("contain", result.heading)
              .should("have.css", "color", "rgb(51, 51, 51)");
            cy.get(".coffee-card-text")
              .should("contain", result.text)
              .should("have.css", "color", "rgba(0, 0, 0, 0.5)");
            cy.get(".primary-button")
              .should("be.visible")
              .should("have.css", "background-color", "rgb(122, 166, 108)")
              .should("have.css", "color", "rgb(255, 255, 255)")
              .and("have.text", result.buttonText)
              .should("have.attr", "href")
              .then((href) => {
                cy.request(href).its('status').should('eq', 200);
              })
          })
      })
    })
  }
}

export default new ProductsPage();
