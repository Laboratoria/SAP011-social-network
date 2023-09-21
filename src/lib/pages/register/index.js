export const register = () => {
  const container = document.createElement("section");
  container.innerHTML = `
  <form class="login-container"> 
      <h1>Bem vindo a Green Med(a)<h1>
        <label>E-mail:</label>
          <input type="email" class="form" placeholder="seu@e-mail.com">
          <div class="email error-none">E-mail e obrigatorio</div>
        <label>senha:</label>
          <input type="password" placeholder="Digite sua senha.">
          <div class="password error-none">Senha e obrigatorio</div>
        <label>Nascimento:</label>
          <input type="date" id="date"
          <div class="date error-none">Data e obrigatorio</div>
          <button type="button" id="enter" disable  value="cadastrar">Cadastrar</button>
        <label>Faça login com:</label>
          <button type="button" class="google">Google</button>

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
        menu.classList.remove("error-nobe");
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
