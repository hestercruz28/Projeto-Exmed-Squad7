import validarFormulario from "./componentes/validarFormulario/validarFormulario.js"


const form = document.getElementById("form")
const nome = document.getElementById("primeiroNome")
const sobrenome = document.getElementById("sobrenome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")





form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarFormulario(nome, sobrenome, email, senha)
})




