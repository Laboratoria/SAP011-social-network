// na main só precisa das SPA e das telas
import register from './pages/register/register.js';
import home from './pages/home/home.js'; // segunda ação criada
import about from './pages/about/about.js';
import feed from './pages/feed/feed.js';

const main = document.querySelector('#root'); // terceira ação feita, pega a main lá no index.html

const init = () => { // função que inicializa a página, analiza as mudanças de hash
  window.addEventListener('hashchange', () => { // 5ª ação cada vez que a hash é alterada o evento "escuta"
    main.innerHTML = ' '; // vai apagar todas as informações antes de trazer a hash nova
    switch (window.location.hash) {
      case '': // se for vazio ele vai mostrar a home
        main.appendChild(home());
        break;
      case '#about':
        main.appendChild(about());
        break;
      case '#register':
        main.appendChild(register());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        main.appendChild(home());
    }
  });
};
window.addEventListener('load', () => { // primeira ação construída
  main.appendChild(home()); // quarta ação, appendChild cria um "filho" - home
  init();
});
