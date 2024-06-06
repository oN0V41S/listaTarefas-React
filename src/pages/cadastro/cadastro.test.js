import { render } from '@testing-library/react';
import Cadastro from './cadastro';

test('Executar página Cadastro', () => {
  render(<Cadastro />);
  expect(Cadastro);
});
