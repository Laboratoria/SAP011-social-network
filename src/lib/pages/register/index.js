export const register = () => {
  const container = document.createElement("section");
    container.innerHTML = `
    <form class="registro-container"> 
      <h3 class="titulo">BEM VINDO(A) A MEDGREEN<h3>
      <label class="config-titulo">Digite seu nome completo:</label>
      <input type="name" class="name" placeholder="Nome completo">
      <div class="error-none" id="name">Data e obrigatorio</div>
          
      <label class="config-titulo">Nascimento:</label>
      <input type="date" id="date" class="form">
      <div id ="date" class="error-none">Data e obrigatorio</div>
      <label class="config-titulo">E-mail:</label>
          
      <input type="email" class="email-input" placeholder="seu@e-mail.com">
      <div class="error-none" id ="email-error">E-mail e obrigatorio</div>

      <label class="config-titulo">Senha:</label>
      <input type="password" class="key" placeholder="Digite sua senha.">
      <div class="error-none" id="password-error">Senha e obrigatorio</div>
      
      <div class="send-container">
        <button type="button" class="confirm" disabled id="enter" value="cadastrar">Cadastrar</button>
      </div>

      <div class="social-container">           
        <button type="button" id="gmail">
          <img src="../../../Imagens/icon-google01.png"></img>             
          <h1>Login com Google</h1>
        </button>
        <a href="/#login">Pagina inicial</a>
      </div>

      </form>
      `;

    const email = container.querySelector(".email-input");
    const password = container.querySelector(".key");
    const date = container.querySelector("#date")
    const emailMessage = container.querySelector("error-none");
    const passwordMessage = container.querySelector("error-none");
    const dateMessage = container.querySelector(".error-none")
    const enterButton = container.querySelector("#enter");
  
    const validateDate = container.querySelector(".form");
    validateDate.addEventListener("input", function (e) {
      e.preventDefault();
      toggleDateErrors(date);
  
    });

    const validateEmail = container.querySelector(".email-input");
    validateEmail.addEventListener("input", function (e) {
      e.preventDefault();
      toggleEmailErrors(email);
  
    });

    const validatePassword = container.querySelector(".key");
    validatePassword.addEventListener("input", function (e) {
      e.preventDefault();
      togglePasswordErrors(password);
      toggleButtonsDisable(email, password, date);
      
    });
    
    function toggleEmailErrors(email) {
      enterButton.addEventListener("input", function (e) {
        e.preventDefault();
        if (email.value=== "" || isValidEmail(email))  {
          emailMessage.classList.contains("error-none");
          emailMessage.classList.remove("error-none");
          emailMessage.classList.add("error-block");
        } else {
          emailMessage.classList.add("error-block");
          emailMessage.classList.remove("error-none");
        }
        console.log(emailMessage);
      });
    };
  
    
    function togglePasswordErrors(password) {
      enterButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (password.value.length < 8) {
          passwordMessage.classList.remove("error-none");
          passwordMessage.classList.add("error-block");
        } else {
          passwordMessage.classList.add("error-block");
          passwordMessage.classList.remove("error-none");
        }
      });
    };
  
    function toggleDateErrors(date){
      enterButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (age <= 18) {
          dateMessage.classList.remove("error-none");
          dateMessage.classList.add("error-block");
        } else {
          dateMessage.classList.add("error-block");
          dateMessage.classList.remove("error-none");
        }
        console.log(date.value);
      })
    };

    function toggleButtonsDisable(email, password, date) {
      const emailValid = isValidEmail(email.value);
      const passwordValid = isValidPassword(password.value);
      const dateValid = isValidDate(date.value);
      if (emailValid && passwordValid && dateValid) {
        enterButton.removeAttribute("disabled");
      } else {
        enterButton.disabled = true;
      }
    }

    function isValidEmail(email) {
      const parameter = /^\S+@\S+\.\S+$/;
      console.log(parameter.test(email));
      return parameter.test(email); 
    }
     
    function isValidPassword(password) {
      const validPass = parseInt(password);
      console.log(validPass.length >= 8, password);
      return validPass.length >= 8;  
    }

    function isValidDate(date) {
      const ageMin = 18; 
      const currentDate = new Date(); 
      const currentYear = currentDate.getFullYear();
      const age = currentYear - new Date(date).getFullYear();
      console.log(age, currentYear, date, new Date(date).getFullYear());
        if(age >= ageMin){
           
          return true
        }else{
          toggleDateErrors(date)
        }
    }

  return container    
    
};

  
   
  

