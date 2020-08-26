let inputUsuario;
let frases;
let palavras;

$('#envioTexto').click(() => {
    inputUsuario = $('#texto-usuario').val().replace('\n', ' ');

    frases = inputUsuario.split('.');
    palavras = inputUsuario.split(' ');

    let numeroFrases = frases.length - 1;
    let media = palavras.length / numeroFrases;

    let resultado = Math.round((media * 1.5) * 0.4);

    if (resultado >= 1 && resultado <= 7) {
        alert('Resultado: História em Quadrinhos.');
    }
    else if (resultado > 7 && resultado <= 10) {
        alert('Resultado: Excepcional.');
    }
    else if (resultado > 10 && resultado <= 15) {
        alert('Resultado: Ótimo.');
    }
    else if (resultado > 15 && resultado <= 19) {
        alert('Resultado: Pequena dificuldade.');
    }
    else if (resultado > 19 && resultado <= 30) {
        alert('Resultado: Muito difícil.');
    }
    else if (resultado > 30 && resultado <= 40) {
        alert('Resultado: Linguagem técnica.');
    }
    else
        alert('Resultado: Nebulosidade.');


});







