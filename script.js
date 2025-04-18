const form = document.querySelector('.foms-fale-conosco')
const mascara = document.querySelector('.mascara-formulario')
const fechamento = document.querySelector('.form-fale-conosco')

function botaoClicado(){
    form.style.left = "auto"
    form.style.transform = "translateX(0%)"
    form.style.transition = "1s"
    mascara.style.visibility = "visible"
}

function fecharFormulario(){
    form.style.left = "45%"
    form.style.transform = "translateX(500%)"
    form.style.transition = "1.3s"
    mascara.style.visibility = "hidden"
}