import { render } from '@testing-library/react';
import Tarefas from './tarefas';

test('Executar página Tarefas', () => {
  render(<Tarefas />);
  expect(Tarefas);
});
