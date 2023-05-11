import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import informarFormatoInvalido from "../notificacao/informarFormatoInvalido.js"
import removerFeedback from "../notificacao/removerFeedback.js"
import validarFormatoNome from "../validarFormatos/validarFormatoNome.js"

function validarSobrenome(elSobrenome) {
    let sobrenomenomeValor = elSobrenome.value
    let invFeedSobrenomenomeValor = document.getElementById("invSobrenome")

    if (sobrenomenomeValor === "" || sobrenomenomeValorValor == null) {
        informarCampoObrigatorio(invFeedSobrenomenomeValor)
    } else if (validarFormatoNome(sobrenomenomeValorValor) == false) {
        informarFormatoInvalido(invFeedSobrenomenomeValor)
    } else {
        removerFeedback(invFeedSobrenomenomeValor)
    }
}

export default validarSobrenome
