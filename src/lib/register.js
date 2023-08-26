export default () => {
  const register = `
                <h1>Crie sua conta</h1>
                <p><a href="">Já é registrado? Faça Login.</a></p>
        
                <div id="form-container">
                <img src="./img/photo-profile.png" alt="foto de perfil ilustrativa" />
                <form action="">
                <label for="name">Nome</label>
                <input class="input" type="text" id="nomeId" required name="name" />
        
                <label for="email">E-mail</label>
                <input class="input"
                type="text"
                id="emailId"
                placeholder="seunome@email.com"
                required
                name="email"
                />
        
                <label for="password">Senha</label>
                <input class="input" type="password" id="passwordId" required name="password" />
        
                <label for="date">Data de nascimento</label>
                <input class="input" type="date" id="birthId" />
        
                <input id="submit" type="submit" class="send" value="Enviar" />
                </form>
        
                </div>
        
                <div class="decoration" id="green-ball"></div>
                <div class="decoration" id="purple-ball">
                <img src="./img/purple-ball.png" alt="" />
                </div>

        `;
};
