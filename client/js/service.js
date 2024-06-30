export const pegarProdutos = async () =>{
    try {
        const url = 'https://lp-oboticario.onrender.com/product/';
        const respose = await fetch(url); 
        const product = await respose.json()
    
        return product    
    } catch (error) {
        console.log(error);
    }
    
}

export const pegarGaleria = async () =>{
    try {
        const url = 'https://lp-oboticario.onrender.com/gallery/';
        const respose = await fetch(url); 
        const gallery = await respose.json()
    
        return gallery    
    } catch (error) {
        console.log(error);
    }
    
}
