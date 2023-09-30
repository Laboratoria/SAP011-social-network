// página com botões de email, senha, google e cadastrar

export default () => {
  const container = document.createElement('div'); // adiciona o template

  const template = `
    <form> // Alycia que fez essa parte
    <input type= "email" placeholder="E-mail" name="email"/>
    <input type="password" placeholder="Senha" name="senha"/>
    </form>

    
      `;

  container.innerHTML = template; // coloco o conteúdo do template dentro do innerhtml
  return container; // vai mostrar na tela o conteudo do template home, o container é a div criada
};
