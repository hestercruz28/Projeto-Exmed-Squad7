import validarNome from "../ValidarCampos/validarNome.js";
import validarSobrenome from "../ValidarCampos/validarSobrenome.js";
import validarEmail from "../ValidarCampos/validarEmail.js";
import validarSenha from "../ValidarCampos/validarSenha.js";

function validarFormulario(n, m, em, sn) {
    validarNome(n)
    validarSobrenome(m)
    validarEmail(em)
    validarSenha(sn)
  
}

export default validarFormulario