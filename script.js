const form = document.querySelector('.foms-fale-conosco')
const mascara = document.querySelector('.mascara-formulario')
const fechamento = document.querySelector('.form-fale-conosco')

function botaoClicado() {
    form.style.left = "50%"; // Centraliza o formulário horizontalmente
    form.style.top = "50%"; // Centraliza o formulário verticalmente
    form.style.transform = "translate(-50%, -50%)"; // Garante centralização absoluta
    form.style.transition = "transform 1s, visibility 1s"; // Animação de visibilidade e transformação
    form.style.visibility = "visible"; // Torna o formulário visível
    mascara.style.visibility = "visible"; // Exibe a máscara
}

function fecharFormulario() {
    form.style.transform = "translate(-50%, -150%)"; // Move o formulário para fora da tela para cima
    form.style.transition = "transform 1.3s, visibility 1.3s"; // Animação de visibilidade e transformação
    form.style.visibility = "hidden"; // Torna o formulário invisível
    mascara.style.visibility = "hidden"; // Oculta a máscara
}