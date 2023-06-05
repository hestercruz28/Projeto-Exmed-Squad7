function validarFormatoSenha(senha) {
  // A senha deve ter pelo menos 8 caracteres, incluindo pelo menos um dígito, uma letra maiúscula e uma minúscula
  const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regexSenha.test(senha);
}

export default validarFormatoSenha
