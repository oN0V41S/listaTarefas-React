import { render } from "@testing-library/react";
import ValidarEmail from "./valEmail";

test("Executar Página Validar Email", () => {
  render(<ValidarEmail />);
  expect(ValidarEmail);
});
