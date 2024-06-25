const firebaseConfig = {
    apiKey: "AIzaSyArSB1UpDEGO6HAKiHXSBR4loD083SVwwQ",
    authDomain: "boticario-47712.firebaseapp.com",
    projectId: "boticario-47712",
    storageBucket: "boticario-47712.appspot.com",
    messagingSenderId: "315511762072",
    appId: "1:315511762072:web:28fb2f03ad29ed88b2f4ed"
};

const app = firebase.initializeApp(firebaseConfig);


export const registerImage = async (imagem) => {
    
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child('imagens/' + imagem.name + gerarNumerosAleatorios());
    let uploadTask = await imageRef.put(imagem);
    
    let link = await uploadTask.ref.getDownloadURL();

    console.log('Imagem enviada com sucesso:', link);
    
    return link;
}

function gerarNumerosAleatorios() {
    for (let i = 0; i < 1; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        return numeroAleatorio;
    }
}



