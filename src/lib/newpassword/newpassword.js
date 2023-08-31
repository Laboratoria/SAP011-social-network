export default () => {
  const content = document.getElementById("app");
  const screen = `
        <section id="main-resetpassword">
        <h1>Redefinir de Senha</h1>
        <p>Confirme seu e-mail e senha</p>
        
        <div id="form-container">
        <form action="">
        <label for="email">E-mail</label>
        <p><input class="input" type="text" id="email" placeholder="seunome@email.com" required name="email" /></p>
        
        <label for="newpassword">Nova Senha</label>
        <p><input class="input" type="password" id="newpassword" placeholder="********" required name="newpassword"/></p>
        
        <label for="confirmpassword">Confirme sua senha</label>
        <p><input class="input" type="password" id="confirmpassword" placeholder="********" required name="confirmpassword"/></p>
        
        <div class="espaço-confirm-redefinir">
        <button type="submit" class="btn-confirm-senha" id="btn-confirm-senha">Enviar</button>
        </div>
        
        </form>
        
        </div>
        
        </section>`;

  content.innerHTML = screen;
};
