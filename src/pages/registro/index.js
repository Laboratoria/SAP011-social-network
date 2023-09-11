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
          <div class="form-field">
          <li><input type="text" id="name" placeholder="Nome" />
          
          <div class="error" id="name-required-error">Nome é obrigatório</div>
          <div class="error" id="name-min-length-error">Nome deve ter pelo menos 3 caracteres</div>
          </li>
          
          <li><input type="email" id="email" placeholder="Email" />
          
          <div class="error" id="email-required-error">Email é obrigatório</div>
          <div class="error" id="email-invalid-error">Email inválido</div>
          <div class="error" id="email-exists-error">Email já cadastrado</div>
          </li>
          
          <li>
          <div class="senha-input">
             <input type="password" id="password" placeholder="Senha" />
             <img src="./img/hide.png" alt="ocultar" width="25" height="25" class="toggle-password" data-target="password">
             </div>
             
             <div class="error" id="password-required-error">Senha é obrigatória</div>
             <div class="error" id="password-min-length-error">Senha deve ter pelo menos 6 caracteres</div>
             </li>

             <li>
             <div class="confirme-input">
             <input type="password" id="confirmPassword" placeholder="Confirme sua senha" />
             <img src="./img/hide.png" alt="ocultar" width="25" height="25" class="toggle-password" data-target="confirmPassword">
             </div>
             
             <div class="error" id="password--doesnt-match-error">Senha e Confirmar senha devem ser iguais</div>
             </li>

          <li><button type="button" class="solid" id="register-button"> Cadastrar</button></li>
          <li id="texto-registro">Já tem uma conta? <a href="./#login">Faça seu login.</a></li>
       </form>
     </div>
    </main>
   
    </body>
    <script type="module" src="main.js"></script>
    <script src="./src/pages/registro/registro.js"></script>
    
       `;
  container.innerHTML = template;
  return container;
};
