// Home Page

class HomePage {
  // visit the page
  visit() {
    cy.visit("https://www.husky.ag/");
  }

  // Getters
  getHomePageHeroSection() {
    cy.get(".hero-section").should("be.visible");
  }

  // Hero section
  getHomePageHeroSectionText() {
    cy.get(".hero-heading")
      .should("be.visible")
      .should(
        "have.text",
        "The Future of Plant Nutrition is Fertilizer as a Service"
      );
    cy.get(".light-green-span")
      .should("be.visible")
      .should("have.text", "Fertilizer as a Service")
      .should("have.css", "color", "rgb(172, 215, 158)");

    cy.get("p.hero-text")
      .should("be.visible")
      .should(
        "have.text",
        "We produce an innovative biofertilizer using coffee byproducts to promote fertilizer use efficiency, optimize nutrient release & increase crop yield."
      )
      .should("have.css", "color", "rgb(255, 255, 255)");
  }

  getHomePageHeroSectionLearnMoreButton() {
    cy.get(".primary-button.mt-20.w-button")
      .should("be.visible")
      .contains("learn more")
      .should("have.css", "background-color", "rgb(122, 166, 108)")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .click();
    cy.url().should("include", "/learn-more");
  }

  // Cards section
  getHomePageCardsSectionBelowHeroSection() {
    cy.get(".cards-section-2").should("be.visible");
  }

  getHomePageCardsSectionBelowHeroSectionText() {
    cy.fixture("HomePage/cardsBelowHeroSection").then((cardData) => {
      cy.get(".crop-card-outer-wrapper").should("have.length", cardData.length);

      cy.get(".crop-card-outer-wrapper").each(($card, index) => {
        cy.wrap($card)
          .find("h3.crop-cards-heading")
          .should("have.text", cardData[index].heading)
          .should("have.css", "color", "rgb(18, 36, 35)");

        cy.wrap($card)
          .find("p.cards-text")
          .should("have.text", cardData[index].paragraph)
          .should("have.css", "color", "rgba(0, 0, 0, 0.5)");
      });
    });
  }

  // Bottle Section
  getHomePageBottleSection() {
    cy.get(".superfood-bottle-section").should("be.visible");
  }

  getHomePageBottleSectionImage() {
    cy.get(".superfood-image-outer").should("be.visible");
  }

  getHomePageBottleSectionTitleAndBodyText() {
    cy.fixture("HomePage/bottleSectionTextSection").then((items) => {
      items.forEach((item, index) => {
        cy.get(".superfood-list-content-wrapper").eq(index).scrollIntoView();

        // Verify image is visible
        cy.get(`img.${item.imageClass}`).scrollIntoView().should("be.visible");

        // Verify title and description (scope to parent wrapper)
        cy.get(".superfood-list-content-wrapper")
          .eq(index)
          .within(() => {
            cy.get(".superfood-list-title").should("have.text", item.title);
            cy.get(".supperfood-list-descripton").should(
              "have.text",
              item.description
            );
          });
      });
    });
  }

  // Coffee Section
  getHomePageCoffeeSection() {
    cy.get(".coffee-section").should("be.visible");
  }

  getHomePageCoffeeSectionTitleAndBodyText() {
    cy.get(".coffee-section .section-center-heading")
      .should("be.visible")
      .should("have.text", "Our Main Ingredients are Coffee Byproducts");

    cy.get(".coffee-section .coffee-heading-feeen-span")
      .should("be.visible")
      .should("have.text", "Coffee Byproducts")
      .should("have.css", "color", "rgb(122, 166, 108)");

    cy.get(".coffee-section .center-section-paragraph")
      .should("be.visible")
      .should(
        "have.text",
        "We discovered unique microorganisms in the coffee fruit that enhance bioactive compounds and have a powerful effect on plant metabolism & growth regulation."
      )
      .should("have.css", "color", "rgba(0, 0, 0, 0.5)");
  }

  getHomePageCoffeeSectionImage() {
    cy.get("img.coffee-image")
      .should("have.attr", "src")
      .and("include", "coffee%20full%20image.png");
  }

  getHomePageCoffeeSectionCardsSection() {
    cy.get(".w-layout-grid.coffee-card-grid").should("be.visible");
  }

  getHomePageCoffeeSectionCardsSectionIconTitleAndBodyText() {
    cy.fixture("HomePage/coffeeSectionCards").then((items) => {
      items.forEach((card, index) => {
        cy.get(".coffee-card-outer-wrapper")
          .eq(index)
          .within(() => {
            // Check icon image is visible
            cy.get("img.micro-img").scrollIntoView().should("be.visible");

            // Optional: Assert image src
            cy.get("img.micro-img")
              .should("have.attr", "src")
              .and("include", card.imageSrc);

            // Check heading
            cy.get(".coffee-card-heading").should("have.text", card.title);

            // Check description text
            cy.get(".coffee-card-text").should("have.text", card.description);
          });
      });
    });
  }

  // Advisor Section
  getAdvisorSection() {
    cy.get(".advisor-section").should("be.visible");
  }

  getAdvisorSectionImage() {
    cy.get("img.advisor-img")
      .scrollIntoView()
      .should("be.visible")
      .and("have.attr", "src")
      .and("include", "Husky%20AG%20(2).png")
  }

  getAdvisorSectionTextSection() {
    cy.get("p.advisor-message")
      .scrollIntoView()
      .should("be.visible")
      .should(
        "contain.text",
        "Farmers will be freed to more fully explore the holistic vision of ‘Plant Nutrition’"
      )
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get(".advisor-name")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Dr. Patrick Brown")
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get(".advisor-designation")
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.text",
        "Husky Advisor, Professor of Plant Nutrition, UC Davis Department of Plant Sciences"
      )
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get("a.advisor-link-block.w-inline-block")
      .should("be.visible")
      .should("have.attr", "href");
  }

  // Nitrogen Section
  getNitrogenSection() {
    cy.get(".nitrogen-section").should("be.visible");
  }

  getNitrogenSectionTitleTextHeading() {
    cy.get(".nitrogen-section .section-center-heading-wrapper")
      .should("be.visible")
      .should("have.text", "Why does Nitrogen Use Efficiency matter?");

    cy.get(
      ".nitrogen-section .section-center-heading-wrapper .coffee-heading-feeen-span"
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Efficiency matter?")
      .should("have.css", "color", "rgb(122, 166, 108)");
  }

  getNitrogenSectionCardsSection() {
    cy.fixture("HomePage/nitrogenSectionCardsText").then((cards) => {
      cy.get('.nitrogen-grid-wrapper-1')
      .scrollIntoView()
      .should('have.css', 'opacity', '1')

      cy.get(".nitrogen-card-wrapper").should("have.length", cards.length)
      cards.forEach((card, index) => {
        cy.get(".nitrogen-card-wrapper")
          .eq(index)
          .scrollIntoView()
          .within(() => {
            cy.get("img.nitrogen-card-img")
              .should("be.visible")
              .and("have.attr", "src")
              .and("include", card.imageSrc)
            cy.get(".nitrogen-card-text")
              .should("be.visible")
              .and("have.text", card.text)
          })
      })
    })
  }
}

export default new HomePage();
