import { render } from '@testing-library/react';
import Login from './login';

test('Executar Página Login', () => {
  render(<Login />);
  expect(Login);
});
