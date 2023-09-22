export const register = () => {
  const container = document.createElement("section");
  container.innerHTML = `
  <form class="registro-container"> 
      <h3 class="titulo">BEM VINDO(A) A MEDGREEN<h3>
      <label class="config-titulo">Digite seu nome completo:</label>
        <input type="name" class="name" placeholder="Nome completo">
        <br>
      <label class="config-titulo">Nascimento:</label>
          <input type="date" id="date" class="form">
          <div class="date error-none">Data e obrigatorio</div>
      <label class="config-titulo">E-mail:</label>
        <br>
          <input type="email" class="email-input" placeholder="seu@e-mail.com">
          <div class="email error-none">E-mail e obrigatorio</div>
      <label class="config-titulo">Senha:</label>
          <input type="password" class="key" placeholder="Digite sua senha.">
          <div class="password error-none">Senha e obrigatorio</div>
          <button type="button" class="confirm" disabled id="enter" value="cadastrar">Cadastrar</button>
      <label class="config-titulo">Faça login com:</label>
          <button type="button" id="gmail">Google</button>

          <a href="/#login">Pagina inicial</a>
    </form>
    `;

  const validateField = container.querySelector(".key");
  validateField.addEventListener('input', function (e) {
    e.preventDefault();
    toggleButtonsDisable();
    toggleFormsErrors();
  }
  );

  const errorForm = container.querySelector('.key'); //validar campo santeriores para disparar 
  const enterButton = container.querySelector('.confirm');
  function toggleFormsErrors() { //validar campos antes de mandar para firebase
    enterButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (errorForm.classList.contains("error-none")) {
        menu.classList.remove("error-none");
        menu.classList.add("error-block");
      } else {
        menu.classList.remove("error-block");
        menu.classList.add("error-none");
      }
    })
  };

  function toggleButtonsDisable() {
    const passwordNotValid = isValidPassword();
    if(passwordNotValid){
      enterButton.disabled = true;
    }else{
  
      enterButton.removeAttribute("disabled");
    }
    
  };

  function isValidPassword() {
    const password = container.querySelector(".key").value;
    if (password) {
      return false;
    } else {
      return validatePassword(password);
    }
  };

  function validatePassword(password) {
    return /^\S{8}$/.test(password); //length
  };

  return container;
  
};
