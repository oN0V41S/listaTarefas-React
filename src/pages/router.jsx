// Importando Funções E Componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Importando Páginas
import Login from './login/login.jsx'
import Cadastro from './cadastro/cadastro.jsx'
import Tarefas from './tarefas/tarefas.jsx'

import PrivateRoute from './privateRoute.jsx'

export default function Router(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>} />
				<Route path="/cadastro" element={<Cadastro/>} />
				<Route path="/tarefas" element={<PrivateRoute><Tarefas/></PrivateRoute>} />
			</Routes>
		</BrowserRouter>
	)
}