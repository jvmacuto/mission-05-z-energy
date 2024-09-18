//John's frontend tests
//Headers test
describe("Z Energy Headers Test", () => {
  it("should display the correct title", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("contain", "Looking to get fuelled up?");
  });

  it("should have a navigation bar with the correct links", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".navbar").should("exist");
  });

  it("should have a search bar", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".search-button").click();
    cy.get(".search-bar-container").should("have.class", "show");
  });
});

//Carousel test
describe("Z Energy Carousel Test", () => {
  it("should display the correct carousel images", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".carousel-container").should("exist");
    cy.get(".carousel-container").find("img").should("have.length", 3);
  });
});

//PlanATrip test
describe("Z Energy PlanATrip.jsx Test", () => {
  //text part of the component
  it("should display the correct heading", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".plan-a-trip-heading1").should(
      "contain",
      "Looking to get fuelled up?"
    );
  });

  it("should display the correct paragraph", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".text-container")
      .find("p")
      .should(
        "contain",
        "Plan your trips using our Journey Planner and see the nearest stations along the way!"
      );
  });

  it("should display the correct buttons", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".button-container").find("button").should("have.length", 2);
  });

  //map part of the component
  it("should display the correct map", () => {
    cy.visit("http://localhost:5173/");
    //map with the api should be displayed
    cy.get(".map-container").should("exist");
  });

  it("should fetch and display the gas stations", () => {
    //gas stations should be displayed
    cy.intercept("GET", "http://localhost:3000/api/get-stations", {
      statusCode: 200,
      body: [
        {
          place_id: "1",
          geometry: {
            location: {
              lat: -36.8485,
              lng: 174.7633,
            },
          },
          name: "Z Energy",
        },
      ],
    }).as("getStations");

    //visit the page
    cy.visit("http://localhost:5173/");

    //wait for the request to finish
    cy.wait("@getStations");

    //check if the gas station is displayed
    cy.get(".map-container").find("img").should("have.length", 1);
  });
});

//Browse our services test
describe("Z Energy BrowseOurServices.jsx Test", () => {
  it("should display the correct heading", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".browse-services-header").should("contain", "Browse our Services");
  });

  it("should display the correct description", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".browse-services-description").should(
      "contain",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita tempora magni facilis assumenda voluptates!"
    );
  });

  it("should have service cards", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".service-card").should("have.length", 4);
  });

  it("should display the images of the service cards", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".service-card").find("img").should("have.length", 4);
  });

  it("should have a button to view products and services", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".product-and-services").should("exist");
  });
});

//Power Your Home test
describe("Z Energy PowerYourHome.jsx Test", () => {
  it("should display the correct heading", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".power-your-name-h2").should("contain", "Power Your Home");
  });

  it("should display the correct paragraph", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".power-your-name-p").should(
      "contain",
      "Specialised home power plans to help keep your home and vehicle running, tailored for both EV and non-EV drivers."
    );
  });

  it("should have a button to learn more", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".power-your-name-btn").should("exist");
  });

  it("should have icons using fontawesome", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".fa-icon").should("have.length", 2);
  });
});

//Exclusive Rewards test
describe("Z Energy ExclusiveRewards.jsx Test", () => {
  it("should display the correct heading", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".exclusive-rewards-container")
      .find("h2")
      .should("contain", "Go check our app and earn exclusive rewards!");
  });

  it("should display the correct paragraph", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".exclusive-rewards-container")
      .find("p")
      .should(
        "contain",
        "Receive exclusive rewards when you invite your friends to download and use the Z app!"
      );
  });

  it("should have a button to find out more", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".exclusive-rewards-container").find("button").should("exist");
  });

  it("should display the image", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".exclusive-rewards-container").find("img").should("exist");
  });
});

//footer test
describe("Z Energy Footer Test", () => {
  it("should display the correct footer", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".footer").should("exist");
  });
});
