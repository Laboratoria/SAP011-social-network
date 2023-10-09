import { verifyRegister } from "../../../firebase/firebaseAuth";

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
     <button type="button" class="email-error" disabled id="enter">Entrar</button>
    </div>          
    
    <div class="social-container">
      <button id="Google">
        <img src="../../../Imagens/icon-google01.png"></img>             
        <h1>Login com Google</h1>
      </button>
      <p>Esqueceu a senha?<a href="paranaoesquecer.com">Redefinir senha</a></p>
      <p>Não tem uma conta?<a href="/#register">Cadastre-se</a></p>
    </div>
    `;

 /*VALIDAÇÃO EM JAVA SCRIPT PARA PAG-LOGIN */
 const email = container.querySelector(".email-input");
 const password = container.querySelector(".key");
 const date = container.querySelector("#date")
 const emailMessage = container.querySelector(".error-none");
 const passwordMessage = container.querySelector(".error-none");
 const enterButton = container.querySelector("#enter");


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
     if (email.value === "" || isValidEmail(email))  {
       emailMessage.classList.contains("error-none");
       emailMessage.classList.remove("error-none");
       emailMessage.classList.add("error-block");
     } else {
       emailMessage.classList.add("error-block");
       emailMessage.classList.remove("error-none");
     }
   });
 };

 
 function togglePasswordErrors(password) {
   enterButton.addEventListener("click", function (e) {
     e.preventDefault();
     if (password.value === ""  || isValidPassword(password) === false) {
       passwordMessage.classList.remove("error-none");
       passwordMessage.classList.add("error-block");
     } else {
       console.log(passwordMessage);
       passwordMessage.classList.add("error-none");
       passwordMessage.classList.remove("error-block");
     }
   });
 };


 function toggleButtonsDisable(email, password) {
   const emailValid = isValidEmail(email.value);
   const passwordValid = isValidPassword(password.value);
   console.log(emailValid, passwordValid);
   if (emailValid && passwordValid) {
     enterButton.removeAttribute("disabled");
   } else {
     enterButton.disabled = true;
   }
 }

 function isValidEmail(email) {
   const parameter = /^\S+@\S+\.\S+$/;
   return parameter.test(email); 
 }
  
 function isValidPassword(password) {
   if(password.length >= 8){
     return true
   }  
 }

  enterButton.addEventListener("click", function(email, password){
    verifyRegister(email, password);
  });

  return container;
};
