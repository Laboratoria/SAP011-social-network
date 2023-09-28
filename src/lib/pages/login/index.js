export const login = () => {
  const container = document.createElement("section");
  container.innerHTML = `
    <!--<form action="feed.html>" --!>
    <form class="login-container"> 
      <h3 class="titulo">LOGIN</h3>
        <label class="config-titulo">E-mail:</label>
          <input name="email" class="email-input" placeholder="seu@email.com">
          <div class="email error-none">E-mail e obrigatorio e invalido</div>
    
          <br>

        <label class="config-titulo">Senha:</label>
          <input type="password" class="key" placeholder="Digite sua senha.">
          <div class="password error-none">Senha esta invalida e é obrigatoria </div>
          
          <button type="button" class="email error" disabled id="enter">Entrar</button>

          
          <br>
          
          <label>Faça login com:</label>
          <button id="Google" >Google</button>
          <p>Não tem uma conta?<a href="/#register">Cadastre-se</a></p>
    `;

  // /*VALIDAÇÃO EM JAVA SCRIPT PARA PAG-LOGIN */
  const email = container.querySelector(".email-input");
  const password = container.querySelector(".key");

  const validateEmail = container.querySelector(".email-input");
  validateEmail.addEventListener("input", function (e) {
    e.preventDefault();
    toggleButtonsDisable(email, password);
    toggleEmailErrors(email);

  });

  const validatePassword = container.querySelector(".key");
  validatePassword.addEventListener("input", function (e) {
    e.preventDefault();
    toggleButtonsDisable(email, password);
    togglePasswordErrors(password);
  });


  const enterButton = container.querySelector("#enter");
  

  function toggleEmailErrors(email) {
    enterButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (email.value==="" || isValidEmail(email))  {
        email.classList.remove("error-none");
        email.classList.add("error-block");
      } else {
        email.classList.add("error-block");
        email.classList.remove("error-none");
      }
    });
  }

  
  function togglePasswordErrors() {
    enterButton.addEventListener("click", function (e) {
      e.preventDefault();
      const password = container.querySelector(".key");
      if (password.value.length < 8) {
        password.classList.remove("error-none");
        password.classList.add("error-block");
      } else {
        password.classList.add("error-block");
        password.classList.remove("error-none");
      }
    });
  }


  function toggleButtonsDisable(email, password) {
    const emailNotValid = isValidEmail(email);
    const passwordNotValid = isValidPassword(password);
    if (emailNotValid && passwordNotValid) {
      enterButton.disabled = true;
    } else {
        enterButton.removeAttribute("disabled");
    }
  }

  function isValidEmail(email) {
   const parameter = /^\S+@\S+\.\S+$/;
   return parameter.test(email); //retorna falso  
  }
  
  function isValidPassword(password) {
     return password.length >= 8; //false sempre
  }
  return container;
};
