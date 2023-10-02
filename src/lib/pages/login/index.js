export const login = () => {
  const container = document.createElement("section");
  container.innerHTML = `

    <!--<form action="feed.html>" --!>
    <form class="login-container"> 
    <h3 class="titulo">LOGIN</h3>
    <label class="config-titulo">E-mail:</label>
    <input name="email" class="email-input" placeholder="seu@email.com">
    <div class = "error-none" id="email-error">E-mail e obrigatorio ou invalido</div>
    
    <label class="config-titulo">Senha:</label>
    <input type="password" class="key" placeholder="Digite sua senha.">
    <div class="error-none" id="password-error">Senha esta invalida e é obrigatoria </div>
          
    <div class="send-container"> 
     <button type="button" class="email-error" id="enter">Entrar</button>
    </div>          
    
    <div class="social-container">
      <button id="Google">
        <img src="../../../Imagens/icon-google01.png"> </img>             
        <h1>Login com Google</h1>
      </button>
      <p>Não tem uma conta?<a href="/#register">Cadastre-se</a></p>
    </div>
    `;

 /*VALIDAÇÃO EM JAVA SCRIPT PARA PAG-LOGIN */
  const email = container.querySelector(".email-input");
  const password = container.querySelector(".key");
  const emailMessage = container.querySelector("#email-error");
  const passwordMessage = container.querySelector("#password-error");

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
    console.log("teste"); 
    enterButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (email.value=== ""  || isValidEmail(email))  {
        console.log("teste2");
        emailMessage.classList.contains("error-none");
        emailMessage.classList.remove("error-none");
        emailMessage.classList.add("error-block");
      } else {
        emailMessage.classList.add("error-block");
        emailMessage.classList.remove("error-none");
      }
      console.log(emailMessage);
    });
  }

  function togglePasswordErrors() {
    enterButton.addEventListener("click", function (e) {
      e.preventDefault();
      const password = container.querySelector(".key");
      if (password.value.length < 8) {
        passwordMessage.classList.remove("error-none");
        passwordMessage.classList.add("error-block");
      } else {
        passwordMessage.classList.add("error-block");
        passwordMessage.classList.remove("error-none");
      }
    });
  }

  function toggleButtonsDisable(email, password) {
    const emailValid = isValidEmail(email.value);
    const passwordValid = isValidPassword(password.value);
    if (emailValid && passwordValid) {
      enterButton.removeAttribute("disabled");
    } else {
      enterButton.disabled = true;
    }
  }

  function isValidEmail(email) {
   const parameter = /^\S+@\S+\.\S+$/;
   console.log("teste3",!parameter.test(email));
   return parameter.test(email);  
   
  }
  
  function isValidPassword(password) {
    console.log(password.length >= 8, password);
     return password.length <= 8; //false sempre
     
  }

  return container;
};
