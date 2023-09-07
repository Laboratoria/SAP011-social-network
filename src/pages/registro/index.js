
export default () => {
  const container = document.createElement("div");
  container.classList.add("container-registro");
  const template = `
     
    <header id="logo-registro">
     <title>Cadastro</title> 
     <img src="./img/Logo.png" alt="Viva Saúde" width="200" height="200">
     <h1 id="text-slogan"><p>Compartilhe o melhor da alimentação saudável</p>
     <p>na sua nova rede social</p></h1>
    </header>
    <body id="body-registro">
    <main class="main-registro">
      <div class="container-forms">
        <form>
          <div class="form-fiel">
          <li><input type="email" id="nome" placeholder="    Nome"</input></p>
          <li><input type="email" id="email" placeholder="    Email"</input></li>

          <div class="senha-input">
             <li><input type="email" id="senha" placeholder="    Senha"</input></li>
             <img src="./img/hide.png" alt="ocultar" width="25" height="25">
          </div>

           <div class="confirme-input">
             <li><input type="comfirme" id="confirme sua senha" placeholder="    Confirme sua senha"</input></li>
             <img src="./img/hide.png" alt="ocultar" width="25" height="25">
           </div>

          <li><button type="button" class="solid" disabled="true" id="register-button"> Cadastro</button></li>
          <li id="texto-registro">Já tem uma conta? <a href="./#login">Faça seu login.</a></li>
       </form>
     </div>
    </main>
   
    </body>
    <script type="module" src="main.js"></script>
    
       `;
  container.innerHTML = template;
  return container;
};