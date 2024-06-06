import { render } from '@testing-library/react';
import Login from './valEmail.js';

test('Executar Página Login', () => {
  render(<Login />);
  expect(Login);
});
