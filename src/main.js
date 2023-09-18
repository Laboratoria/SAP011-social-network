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
        main.appendChild(login());//error 
    }
  });
}

window.addEventListener('load', () => {
  main.appendChild(login());
  start();
});





// function isPasswordValid(){
//   const password = documet.querySelector(".key").value;
//   if(!password){
//       return false
//   }
//   return true;
// };

// const passwordValid = isPaswordValid();
// document.querySelector('.email','.recover').disable = !emailValid;
// };



