export const pegarGaleria = async () =>{
    try {
        const url = 'http://localhost:8080/gallery/';
        const respose = await fetch(url); 
        const gallery = await respose.json()
    
        return gallery    
    } catch (error) {
        console.log(error);
    }
    
}

export const criarImagem = async (endereco,imagem,) => {
    const data = {
        endereco: endereco,
        imagem: imagem,
    }

    fetch('http://localhost:8080/gallery/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response =>response.status == 200 ? response.json() : null)
    .then(data => {
        if(data){
            console.log('Success:', data);
            Toastify({
                text: "Imagem cadastrada com sucesso!",
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

export const editarImagem = async (id, endereco, imagem) => {
    try {
        const data = {
            endereco: endereco,
            imagem: imagem,
        }

        console.log(data);
    
        fetch(`http://localhost:8080/gallery/${id}`, {
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
                    text: "Imagem editada com sucesso!",
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

export const deletarImagem = async (id) => {
    fetch(`http://localhost:8080/gallery/${id}`, {
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
                text: "Imagem excluída com sucesso!",
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