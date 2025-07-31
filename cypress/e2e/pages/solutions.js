// Solutions Page

class SolutionsPage {
  // visit the page
  visit() {
    cy.visit("https://www.husky.ag/solution");
  }

  // Hero page
  getSolutionsPageHeroSection() {
    cy.get(".solution-hero-section").scrollIntoView().should("be.visible");
  }

  getSolutionsPageHeroSectionBackgroundImage() {
    cy.get(".solution-hero-section")
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.css",
        "background-image",
        'url("https://assets-global.website-files.com/656d79638af0db2e4118bf54/658d3996ebf04cbc8cd3d63f_Frame%2043822.png")'
      );
  }

  getSolutionsPageHeroSectionText() {
    cy.get(
      ".solution-hero-section .solution-hero-c-wrapper .solution-hero-heading"
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.text", "Solution");

    cy.get(
      ".solution-hero-section .solution-hero-c-wrapper .solution-hero-text"
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should(
        "have.text",
        "Aiming to reduce environmental contamination and repurpose coffee byproducts, we developed a biofertilizer from coffee pulp and mucilage that enhances productivity by promoting crop growt h and metabolism."
      );
  }

  // Cards section below hero section
  getSolutionsPageCardsSection() {
    cy.get(".cards-section-2").scrollIntoView().should("be.visible");
  }

  getSolutionsPageCardsSectionCardsText() {
    cy.fixture("SolutionsPage/cardsSectionBelowHeroSection").then((cards) => {
      cy.get(".crop-card-outer-wrapper").should("have.length", cards.length);

      cards.forEach((card, index) => {
        cy.get(".crop-card-outer-wrapper")
          .eq(index)
          .scrollIntoView()
          .within(() => {
            cy.get(".crop-cards-heading")
              .should("be.visible")
              .and("have.text", card.heading)
              .should("have.css", "color", "rgb(18, 36, 35)");

            cy.get(".cards-text")
              .should("be.visible")
              .and("have.text", card.text)
              .should("have.css", "color", "rgba(0, 0, 0, 0.5)");
          });
      });
    });
  }

  // Nitrogen Section Solution Page
  getSolutionsPageNitrogenSection() {
    cy.get(".nitrogen-section.nitrogen-solution-page")
      .scrollIntoView()
      .should("be.visible");
  }

  getSolutionsPageNitrogenSectionText() {
    cy.get(
      ".nitrogen-section.nitrogen-solution-page .section-center-heading-wrapper .section-center-heading"
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Why does Nitrogen Use Efficiency matter?");

    cy.get(
      ".nitrogen-section.nitrogen-solution-page .section-center-heading-wrapper .section-center-heading .coffee-heading-feeen-span"
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Efficiency matter?")
      .should("have.css", "color", "rgb(122, 166, 108)");

    cy.get(
      ".nitrogen-section.nitrogen-solution-page .section-center-heading-wrapper .center-section-paragraph"
    )
      .scrollIntoView()
      .should("be.visible")
      .should(
        "have.text",
        "Over 50% of the nitrogen applied in fertilizer is lost in the biosphere. Improving nitrogen use efficiency is vital for sustainable agriculture, maximizing yield while minimizing environmental impact"
      )
      .should("have.css", "color", "rgba(0, 0, 0, 0.5)");
  }

  getSolutionsPageNitrogenSectionCardsSection() {
    cy.fixture("SolutionsPage/nitrogenSectionCards").then((cards) => {
      cy.get(".nitrogen-card-wrapper").should("have.length", cards.length);

      cards.forEach((card, index) => {
        cy.get(".nitrogen-card-wrapper")
          .eq(index)
          .scrollIntoView()
          .within(() => {
            cy.get(".nitrogen-card-text")
              .should("be.visible")
              .should("have.css", "color", "rgba(0, 0, 0, 0.5)")
              .and("have.text", card.text);

            // cy.get(".nitrogen-card-white img").should("have.attr", "src", card.icon)

            // cy.get(".nitrogen-card-white-img img").invoke("show").should("have.attr", "src", card.hoverIcon)
          });
      });
    });
  }

  // Advisor section
  getSolutionsPageAdvisorSection() {
    cy.get(".advisor-section")
      .should("be.visible")
      .should("have.css", "background-color", "rgb(122, 166, 108)");
  }

  getSolutionsPageAdvisorSectionImage() {
    cy.get("img.advisor-img").should("exist");
  }

  getSolutionsPageAdvisorSectionTextSection() {
    cy.get("p.advisor-message")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const cleanedText = text
          .replace(/[\n\r"“”‘’'.,]/g, "") // remove quotes, punctuation
          .replace(/\s+/g, " ") // normalize all whitespace
          .trim()
          .toLowerCase(); // optional: for case-insensitive match

        expect(cleanedText).to.include(
          "its about balance when we work together to understand the science and the constraints we can design a system that maximizes nitrogen efficiency and minimizes impact on the environment"
        );
      });

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
}

export default new SolutionsPage();
