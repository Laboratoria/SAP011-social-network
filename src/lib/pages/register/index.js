export const register = () => {
  const container = document.createElement("section");
    container.innerHTML = `
    <form class="registro-container"> 
        <h3 class="titulo">BEM VINDO(A) A MEDGREEN<h3>
        <label class="config-titulo">Digite seu nome completo:</label>
          <input type="name" class="name" placeholder="Nome completo">
          <div class="error-none" id="name">Data e obrigatorio</div>
          <br>
        <label class="config-titulo">Nascimento:</label>
            <input type="date" id="date" class="form">
            <div id ="date" class="error-none">Data e obrigatorio</div>
        <label class="config-titulo">E-mail:</label>
          <br>
            <input type="email" class="email-input" placeholder="seu@e-mail.com">
            <div class="error-none" id ="email-error">E-mail e obrigatorio</div>

        <label class="config-titulo">Senha:</label>
            <input type="password" class="key" placeholder="Digite sua senha.">
            <div class="error-none" id="password-error">Senha e obrigatorio</div>

            <button type="button" class="confirm" disabled id="enter" value="cadastrar">Cadastrar</button>

        <label class="config-titulo">Faça login com:</label>
        
            <button type="button" id="gmail">Google</button>

            <a href="/#login">Pagina inicial</a>
      </form>
      `;

    const email = container.querySelector(".email-input");
    const password = container.querySelector(".key");
    const date = container.querySelector("#date")
    const emailMessage = container.querySelector("error-none");
    const passwordMessage = container.querySelector("error-none");
    const dateMessage = container.querySelector(".error-none")
    const enterButton = container.querySelector("#enter");
  
    const validateEmail = container.querySelector(".email-input");
    validateEmail.addEventListener("input", function (e) {
      e.preventDefault();
      toggleButtonsDisable(email, password, date);
      toggleEmailErrors(email);
  
    });
  
    const validatePassword = container.querySelector(".key");
    validatePassword.addEventListener("input", function (e) {
      e.preventDefault();
      toggleButtonsDisable(email, password, date);
      togglePasswordErrors(password);
    });

    const validateDate = container.querySelector(".form");
    validateDate.addEventListener("input", function (e) {
      e.preventDefault();
      toggleButtonsDisable(email, password, date);
      toggleDateErrors(date);
  
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

    function toggleButtonsDisable(email, password) {
      const emailValid = isValidEmail(email.value);
      const passwordValid = isValidPassword(password.value);
      const dateValid = isValidDate(date.value);
      if (emailValid && passwordValid && dateValid) {
        enterButton.removeAttribute("disabled");
      } else {
        enterButton.disabled = true;
      }
    }

    function isValidEmail() {
      const parameter = /^\S+@\S+\.\S+$/;
      console.log(parameter.test(email));
      return parameter.test(email); 
    }
     
    function isValidPassword() {
      console.log(password.length >= 8, password);
      return password.length >= 8;  
    }

    function isValidDate(date) {
      const ageMin = 18; 
      const currentDate = new Date(); 
      const currentYear = currentDate.getFullYear();
      const age = currentYear - parseInt(date.value);
        return age, ageMin
    }

  return container    
    
};

  
   
  

