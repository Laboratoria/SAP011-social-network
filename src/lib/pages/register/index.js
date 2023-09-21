export const register = () => {
  const container = document.createElement("section");
  container.innerHTML = `
  <form class="registro-container"> 
      <h3 class="titulo">BEM VINDO(A) A MEDGREEN<h3>
      <label class="config-titulo">Digite seu nome completo:</label>
        <br>
          <input type="email" class="email-input" placeholder="Nome completo">
        <label class="config-titulo">E-mail:</label>
        <br>
          <input type="email" class="email-input" placeholder="seu@e-mail.com">
          <div class="email error-none">E-mail e obrigatorio</div>
        <label>Senha:</label>
          <input type="password" class="key" placeholder="Digite sua senha.">
          <div class="password error-none">Senha e obrigatorio</div>
        <label>Nascimento:</label>
          <input type="date" id="date" class="form">
          <div class="date error-none">Data e obrigatorio</div>
          <button type="button" class="solid" disable id="enter" value="cadastrar">Cadastrar</button>
        <label>Faça login com:</label>
          <button type="button" id="enter">Google</button>

          <a href="/#login">Pagina inicial</a>
    </form>
    `;

  const validateField = container.querySelector(".form");
  validateField.addEventListener('input', function (e) {
    e.preventDefault();
    toggleButtonsDisable();
    toggleFormsErrors();
  }
  );

  const errorForm = container.querySelector('.form');
  const enterButton = container.querySelector('#enter');
  function toggleFormsErrors() {
    enterButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (errorForm.classList.contains("error-none")) {
        menu.classList.remove("error-none");
        menu.classList.remove("error-block");
      } else {
        menu.classList.remove("error-block");
        menu.classList.remove("error-none");
      }
    }
    )
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
    const password = container.querySelector(".password").value;
    if (password) {
      return false;
    } else {
      return validatePassword(password);
    }
  };

  function validatePassword(password) {
    return /^\S{8}$/.test(password);
  };

  return container;
  
};
