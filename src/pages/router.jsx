// Importando Funções E Componentes
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importando Páginas
import Login from "./login/login.jsx";
import Cadastro from "./cadastro/cadastro.jsx";
import Tarefas from "./tarefas/tarefas.jsx";
import ValidarEmail from "./validarEmail/valEmail.jsx";
import EsqueciSenha from "./esqueciSenha/senha.jsx";
import DigitarEmail from "./digitarEmail/digitarEmail.jsx";
import Home from "./home/index.jsx";

import PrivateRoute from "./privateRoute.jsx";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route
					path="/tarefas"
					element={
						<PrivateRoute>
							<Tarefas />
						</PrivateRoute>
					}
				/>
				<Route path="/validarEmail" element={<ValidarEmail />} />
				<Route path="/esqueciSenha" element={<EsqueciSenha />} />
				<Route path="/digitarEmail" element={<DigitarEmail />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
