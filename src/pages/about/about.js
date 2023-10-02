export default () => {
  const container = document.createElement('div');

  const template = `
      <section id="about">
      <h2>Sobre nós</h2>

      <p>Pessoas que buscam conhecer novos restaurantes e 
      desfrutar da culinária brasileira e ao mesmo tempo desejam apoiar 
      micro empreendedoras do ramo.

      RestauranteDelas é uma rede social que faz a ponte entre você 
      pessoa apreciadora da boa comida e mulheres que empreendem.
      
    
      Compartilhe suas experiências através de postagens, 
      indique restaurantes, suas proprietárias e 
      histórias de luta e crescimento, 
      vamos incentivar e exaltar a potência de estabelecimentos locais.</p>
      </section>
      `;

  // window.querySelector("#teste").addEventListener("click") () => {
  //     window.location.hash = "#feed";
  // };
  container.innerHTML = template;
  return container;
};
