export const login = () => {
  const container = document.createElement('section');
  container.innerHTML = `
    <!--<form action="feed.html>" --!>
    <form class="login-container"> 
      <h3 class="titulo">LOGIN</h3>
        <label>E-mail:</label>
          <input name="email" class="email-input" placeholder="seu@email.com">
          <div class="email error-none">E-mail e obrigatorio</div>
          <div class="email error-none">E-mail ivalido</div>
          <br>

        <label>Senha:</label>
          <input name="password" class="key" placeholder="Digite sua senha.">
          <div class="password error-none">Senha e obrigatoria</div>
          <div class="password error-none">Senha invalida</div>
          <button type="button" class="email error" disabled id="enter">Entrar</button>
          <button type="button" class="solid" disabled="true"id="register" value="cadastrar">Cadastre-se</button>
          
          <br>
          
          <label>Faça login com:</label>
          <button id="Google" >Google</button>
    </form>
    `;
  const validateField = container.querySelector(".email-input");
  validateField.addEventListener('input', function (e) {
    e.preventDefault();
    toggleButtonsDisable();
    toggleEmailErrors();
  }
  );

  const errorEmail = container.querySelector('.email-input');
  const enterButton = container.querySelector('#enter');
  function toggleEmailErrors() {
    enterButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (errorEmail.classList.contains("error-none")) {
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

