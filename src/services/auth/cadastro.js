async function cadastro (nome, email, senha ) {

    const dados = {
        nome: nome,
        email: email,
        senha: senha,
    };

    const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dados) 
    };
    
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/novoUsuario`, options);
        const cadastro = await response.json();

        let validacao;
        
        if(cadastro.result[0].status === "criado com sucesso"){
            validacao = true;
            localStorage.setItem('email', email);

        }else if(cadastro.result[0].error === "Email ja cadastrado"){
            validacao = false;
        }  

        let email2 = toString(email);

        return {
            validacao: validacao,
            email: email2,
        };

    } catch (error) {
        console.error('erro cadastro \n', error);
        // Se ocorrer um erro, retorne null ou um objeto vazio, dependendo da sua necessidade
        return null;
    }

}


export default cadastro