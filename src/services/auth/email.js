async function validarEmail (email, codigoVerificacao) {

    const dados = {
        email: email,
        codigoVerificacao: codigoVerificacao,
    };

    const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dados) 
    };
    
    try {
        
        const response = await fetch(`${process.env.REACT_APP_API_URL}/verificarEmail`, options);
        const resposta = await response.json();

        let validacao;
        
        if(resposta.result[0].status === "usuario verificado"){
            validacao = true;
        }else{
            validacao = false;
        }

        return {
            validacao: validacao,
        };

    } catch (error) {
        console.error('erro cadastro \n', error);
        return null;
    }

}


export default validarEmail