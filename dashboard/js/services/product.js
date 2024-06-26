export const criarProduto = async (nome, descricao, imagemPrimaria, imagemSecundaria) => {
    const data = {
        nome: nome,
        descricao: descricao,
        imagemPrincipal: imagemPrimaria,
        imagemSecundaria:imagemSecundaria
    }

    fetch('http://localhost:8080/product/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response =>response.status == 201 ? response.json() : null)
    .then(data => {
        console.log(data);
        if(data){
            console.log('Success:', data);
            Toastify({
                text: "Produto cadastrado com sucesso!",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #0AFB3A, #026014)",
                }
              }).showToast();
        }

        return true
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export const pegarProdutos = async () =>{
    try {
        const url = 'http://localhost:8080/product/';
        const respose = await fetch(url); 
        const product = await respose.json()
    
        return product    
    } catch (error) {
        console.log(error);
    }
    
}

export const editarProduto = async (id, nome, descricao, imagemPrincipal, imagemSecundaria) => {
    try {
        const data = {
            nome: nome,
            descricao: descricao,
            imagemPrincipal: imagemPrincipal,
            imagemSecundaria:imagemSecundaria
        }

        console.log(data);
    
        fetch(`http://localhost:8080/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response =>response.status == 200 ? response.json() : null)
        .then(data => {
            console.log(data);
            if(data){
                console.log('Success:', data);
                Toastify({
                    text: "Produto editado com sucesso!",
                    className: "info",
                    style: {
                      background: "linear-gradient(to right, #0AFB3A, #026014)",
                    }
                  }).showToast();
            }
    
            return true
        })
        
    } catch (error) {
        console.log(error);
    }
}

export const deletarProduto = async (id) => {
    fetch(`http://localhost:8080/product/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response =>response.status == 200 ? response.json() : null)
    .then(data => {
        console.log(data);
        if(data){
            console.log('Success:', data);
            Toastify({
                text: "Produto excluído com sucesso!",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #0AFB3A, #026014)",
                }
              }).showToast();
        }

        return true
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

