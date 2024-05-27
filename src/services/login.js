async function login(email, senha) {
    const dados = {
        email: email,
        senha: senha
    };

    const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dados) 
    };
    
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, options);
        const login = await response.json();
        const statusLogin = login.result[0].statusLogin;
        let idUsuario = login.result[0].id;
        let token = login.result[0].token;

        if (statusLogin === true) {
            localStorage.setItem('idUsuario', idUsuario);
            localStorage.setItem('token', token);
        }
        
        // Retorna fora do bloco try-catch
        return {
            idUsuario: idUsuario,
            token: token,
            statusLogin: statusLogin
        };

    } catch (error) {
        console.error('erro login \n', error);
        // Se ocorrer um erro, retorne null ou um objeto vazio, dependendo da sua necessidade
        return null;
    }
}

export default login;