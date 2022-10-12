import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../../utils/Context";
import Home from "./";

describe("Home component", () => {
  it("should render title", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        test:
          "Récupérez vos besoins,on s'occupe du reste,avec les meilleurstalents",
      })
    ).toBeTruthy();
    // screen.debug();
  });
});
