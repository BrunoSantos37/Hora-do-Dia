function carregar(){
let msg = document.querySelector('.msg');
let imagem = document.querySelector('.img');
const body = document.querySelector('body');

let data = new Date();
let hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas!`;

    if (hora >= 6 && hora < 12 ){
        imagem.src = '/imagens/fotomanha.jpg';
        body.style.background = rgb(255,248,0);
        body.style.background = "linear-gradient(326deg, rgba(255,248,0,1) 11%, rgba(0,194,255,1) 100%)";
    }else if (hora >= 12 && hora <= 18){
        imagem.src = '/imagens/fototarde.jpg';
    }else {
        imagem.src = '/imagens/fotonoite.jpg';
    }
}