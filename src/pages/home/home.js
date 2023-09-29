// import logo from "../../img/logotipo.png";

export default () => {
  const container = document.createElement('div'); //a div adiciona todo o template

  const template = `
        <body>
          <header>
            <figure class="restaurant-logo">
              // <img src=${logo} alt="Logotipo">
            </figure>
          </header>
          
        
      <h2>titulo</h2>
      <p>paragrafo</p></>
      </body>  
      `;

  container.innerHTML = template;
  return container;
};
