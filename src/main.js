// Este es el punto de entrada de tu aplicacion
import { login } from './lib/pages/login/index.js';
import { register } from './lib/pages/register/index.js';

const main = document.querySelector('.root');

function start(){
    window.addEventListener("hashchange", () => {
        switch (window.location.hash) {
            case "":
                main.innerHTML = ''; // Limpa o conteúdo existente em "main"
                main.appendChild(login());
                break;
            case "#login":
                main.innerHTML = ''; // Limpa o conteúdo existente em "main"
                main.appendChild(login());
                break;
            case "#register":
                main.innerHTML = ''; // Limpa o conteúdo existente em "main"
                main.appendChild(register());
                break;
        }
    });
};

window.addEventListener('load', () => {
    main.appendChild(login());
    start()
  });

// function isEmailValid(){
//     if(email){
//         return false;
//     }
//     return validateEmail
// };

// function validateEmail(email){
//     return /\S+@\S+\.\S+/.test(email);
// };

// function isPasswordValid(){
//     const password = documet.querySelector(".key").value;
//     if(!password){
//         return false
//     }
//     return true;

// };

// const validateField = document.querySelector("key",".email");
// const email = document.querySelector(".email").value;

// function toggleEmailErrors(){
//     if(!email){

//     }
// };

// function toggleButtonsDisable(){
//     validateField.addEventListener('click', () => {
    
//         const emailValid = isEmailValid();
//         document.querySelector("#recover").disabled = !emailValid;
    
//         const passwordValid = isPasswordValid();
//         document.querySelector("#register").disabled = !emailValid || !passwordValid;
//     });
// };

// function validateFields(){
//     toggleButtonsDisable();
//     toggleEmailErrors();
// };





