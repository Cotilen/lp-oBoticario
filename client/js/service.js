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
