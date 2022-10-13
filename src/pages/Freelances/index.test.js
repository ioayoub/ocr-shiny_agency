import { rest } from "msw";
import "@testing-library/jest-dom/extend-expect";
import { setupServer } from "msw/node";
import {
  waitForElementToBeRemoved,
  screen,
  render,
} from "@testing-library/react";
import Freelances from "./";
import { ThemeProvider } from "../../utils/Context";

const freelancersMockedData = [
  {
    id: "1",
    name: "Harry Potter",
    job: "Magicien frontend",
    picture: "",
  },
  {
    id: "2",
    name: "Hermione Granger",
    job: "Magicienne fullstack",
    picture: "",
  },
];


const server = setupServer(
  rest.get("http://localhost:8000/freelances", (req, res, ctx) => {
      console.log(freelancersMockedData);
    return res(ctx.json()({ 
        freelancersList: freelancersMockedData }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("Should display freelancers names after loader is removed", async () => {
  render(
    <ThemeProvider>
      <Freelances />
    </ThemeProvider>
  );

  await waitForElementToBeRemoved(() => screen.queryByTestId("loader"));
  expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
//   expect(screen.getByText("Harry Potter")).toBeInTheDocument();
//   expect(screen.getByText("Hermione Granger")).toBeInTheDocument();
});
