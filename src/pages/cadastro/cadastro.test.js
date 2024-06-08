import { render } from "@testing-library/react";
import Cadastro from "./cadastro";

test("Executar Página Cadastro", () => {
  render(<Cadastro />);
  expect(Cadastro);
});
