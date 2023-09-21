export const register = () => {
  const container = document.createElement("section");
  container.innerHTML = `
  <form class="login-container"> 
      <h1>Bem vindo a Green Med(a)<h1>
        <label>E-mail:</label>
          <input type="email" class="form" placeholder="seu@e-mail.com">
          <div class="email error-none">E-mail e obrigatorio</div>
        <label>senha:</label>
          <input type="password" class="form" placeholder="Digite sua senha.">
          <div class="password error-none">Senha e obrigatorio</div>
        <label>Nascimento:</label>
          <input type="date" id="date" class="form">
          <div class="date error-none">Data e obrigatorio</div>
          <button type="button" class="solid" disable id="enter" value="cadastrar">Cadastrar</button>
        <label>Faça login com:</label>
          <button type="button" id="enter">Google</button>
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
    const emailNotValid = isValidEmail();
    if(emailNotValid){
      enterButton.disabled = true;
    }else{
      console.log("email valido");
      enterButton.removeAttribute("disabled");
    }
    
  };

  function isValidEmail() {
    const email = container.querySelector(".email-input").value;
    if (email) {
      return false;
    } else {
      return validateEmail(email);
    }
  };

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  };
  return container;
  
};
