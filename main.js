function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else { 
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
        
}

// document.querySelectorAll('.tecla');

// document.querySelector('.tecla_aplausos').onclick = tocaSomAplausos;

const listadeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;
//while(contador < listadeTeclas.length){
    //const efeito = listadeTeclas[contador].classList[1];
    
    //listadeTeclas[contador].onclick = function (){}
//}

// enquanto
//while (contador < listadeTeclas.length) {

    //const tecla = listadeTeclas[contador];
    //const instrumento = tecla.classList[1];

   
    //const idAudio = `#som_${instrumento}`; //template string

    //console.log(idAudio);

    //tecla.onclick = function() {
        //tocaSom(idAudio);
    //}

   // contador = contador + 1;

    //console.log(contador);
//}

// para
for (let contador = 0; contador < listadeTeclas.length; contador++) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string

    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    //console.log(contador);

    tecla.onkeydown = function (evento) {

        //console.log(evento.code == 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add ('ativa');
    }
    
}
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
