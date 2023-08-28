import { getGreeting } from "../support/app.po";

describe("nasa", () => {
    beforeEach(() => cy.visit("/"));

    it("should display app title", () => {
        // Custom command example, see `../support/commands.ts` file
        cy.login("my-email@something.com", "myPassword");

        // Function helper example, see `../support/app.po.ts` file
        getGreeting().contains("NASA");
    });
});
