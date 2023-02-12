function carregar(){
let msg = document.querySelector('.msg');
let imagem = document.querySelector('.img');

let data = new Date();
let hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas!`;

    if (hora >= 6 && hora < 12 ){
        imagem.src = '/imagens/fotomanha.jpg';
    }else if (hora >= 12 && hora <= 18){
        imagem.src = '/imagens/fototarde.jpg';
    }else {
        imagem.src = '/imagens/fotonoite.jpg';
    }
}