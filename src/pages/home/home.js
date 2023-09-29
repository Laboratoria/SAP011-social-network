import logo from './src/img/logotipo.png';

export default () => {
  const container = document.createElement('div'); //a div adiciona todo o template

  const template = `
          <figure class="restaurant-logo">
          <img src=${logo} alt="Logotipo">
          </figure>
        
      <h2>titulo</h2>
      <p>paragrafo</p></>
      
      `;

  container.innerHTML = template;
  return container;
};
