import Button from "./Button";

describe("Button Component", () => {
  it("mounts the button correctly", () => {
    cy.mount(<Button label="Click me" />);
    cy.get("button").contains("Click me");
  });
});
