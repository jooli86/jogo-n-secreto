let listaDeNumerosSorteados = []
let numeroLimite = 10;
let tentativa = 1
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.spe
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial()

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto' );
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10' );
    }
s


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você descobriu o Número Secreto em ${tentativa} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativa++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

