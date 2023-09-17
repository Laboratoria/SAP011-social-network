// Este es el punto de entrada de tu aplicacion
import { login } from './lib/pages/login/index.js';
import { register } from './lib/pages/register/index.js';

const main = document.querySelector('.root');

function start() {
  window.addEventListener('hashchange', () => {
    switch (window.location.hash) {
      case '':
        main.innerHTML = ''; // Limpa o conteudo existente em 'main'
        main.appendChild(login());
        break;
      case '#login':
        main.innerHTML = ''; // Limpa o conteudo existente em 'main'
        main.appendChild(login());
        break;
      case '#register':
        main.innerHTML = ''; // Limpa o conteudo existente em 'main'
        main.appendChild(register());
        break;
      default:
        main.appendChild(login());
    }
  });
}

window.addEventListener('load', () => {
  main.appendChild(login());
  start();
});

// const validateField = document.querySelector("key",".email");
// const email = document.querySelector(".email").value;
// function validateFields(){
//     toggleButtonsDisable();
//     toggleEmailErrors();
// };

// function isEmailValid(){
//     if(email){
//         return false;
//     }
//     return validateEmail(email);
// };

// function toggleEmailErrors(){
//    const email = document.querySelector(".email").value;
//     if(!email){
//     document.querySelector('email-error').style.display = 'block';  
//     }else{
//     document.querySelector('email-error').style.display = 'none';
//}
// if(validateEmail(email)) {
//    document.querySelector('email-error').style.display = 'block';  
//     }else{
//     document.querySelector('email-error').style.display = 'none';  
// }
// };

//function toggleButtonsDisable(){
//const emailValid = isValidEmail();
//document.querySelector('.email','.register').disable = !emailValid;

//const passwordValid = isPaswordValid();
//document.querySelector('.email','.recover').disable = !emailValid;
//};

// function isPasswordValid(){
//     const password = documet.querySelector(".key").value;
//     if(!password){
//         return false
//     }
//     return true;

// };

// function validateEmail(email){
//     return /\S+@\S+\.\S+/.test(email);
// };
