import { render } from "@testing-library/react";
import Home from "./index";

test("Executar Página Home", () => {
  render(<Home />);
  expect(Home);
});
