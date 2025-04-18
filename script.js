

// Seleciona os elementos do formulário e da máscara
const form = document.querySelector('.foms-fale-conosco');
const mascara = document.querySelector('.mascara-formulario');

// Função para exibir o formulário
function botaoClicado() {
    form.style.visibility = 'visible'; // Torna visível
    form.style.opacity = '1'; // Faz o formulário aparecer
    form.style.transform = 'translate(-50%, -50%) scale(1)'; // Centraliza e expande o formulário
    mascara.style.visibility = 'visible'; // Torna a máscara visível
    mascara.style.opacity = '1'; // Faz a máscara aparecer
}

// Função para esconder o formulário
function fecharFormulario() {
    form.style.opacity = '0'; // Faz o formulário desaparecer
    form.style.transform = 'translate(-50%, -50%) scale(0)'; // Reduz o formulário
    form.style.visibility = 'hidden'; // Esconde o formulário após a animação
    mascara.style.opacity = '0'; // Faz a máscara desaparecer
    setTimeout(() => {
        mascara.style.visibility = 'hidden'; // Esconde a máscara após a animação
    }, 500); // Tempo correspondente ao `transition` do CSS
}