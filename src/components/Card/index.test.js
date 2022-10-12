import React from "react";
import Card from "./";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../utils/Context";
import { MemoryRouter } from "react-router-dom";

describe("Card", () => {
  test("Should render title and image", async () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card
            id="4"
            name="Harry Potter"
            job="Magicien frontend"
            picture="/myPicture.png"
          />
        </ThemeProvider>
      </MemoryRouter>
    );
    // screen.debug();
    const cardPicture = screen.getByRole("img");
    const cardTitle = screen.getByText(/Harry/i);
    const cardLink = screen.getByRole("link");
    expect(cardPicture.src).toBe("http://localhost/myPicture.png");
    expect(cardTitle.textContent).toBe(" Harry Potter ");

    fireEvent.dragOver(cardLink);
    expect(cardLink.href).toBe("http://localhost/freelance?id=4");
  })

  test("Should add ⭐️ around title", async () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card
            id="4"
            name="Harry Potter"
            job="Magicien frontend"
            picture="/myPicture.png"
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    screen.debug()
    const cardTitle = screen.getByText(/Harry/i);
    const cardFavorite = screen.getByRole("button");
    fireEvent.click(cardFavorite);
    expect(cardTitle.textContent).toBe("⭐️ Harry Potter ⭐️");
  });
});
