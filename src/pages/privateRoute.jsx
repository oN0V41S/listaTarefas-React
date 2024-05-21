import React, {useState} from 'react'
// import {useEffect} from 'react'

import { Navigate } from 'react-router-dom';
// import axios from 'axios'

export default function PrivateRoute({children}){
	const [user,setUser] = useState(true);

    // Validando Token do Usuário
	// useEffect(()=>{
	// 	const validateToken = async() => {
	// 		const url = process.env.REACT_APP_API;
	// 		const token = localStorage.getItem("token");
	// 		const header = {
	// 			headers: {
	// 				'bearer': `${token}`
	// 			}
	// 		}
	// 		const response = await axios.post(`${url}/validarToken`,{},header)
	// 		const status = response.data.status		
	// 		if(status){setUser(status)}
	// 		else{setUser(status)}
	// 	}

	// 	validateToken()	
	// },[])

	// Validar se o token do usuário é válido
	return user ? children : <Navigate to="/"/>
}