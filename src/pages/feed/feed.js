export default () => {
  const container = document.createElement('div');

  const template = `
<header> 
<p>
<button type="submit">Sobre</button> <button type="submit">Sair</button> 
</header>

<label>Nome</label>
<p>
<textarea id="new-post-txt" placeholder="Digite seu post aqui..." minlength="20"
maxlength="200" rows=5 cols=20>
</textarea>
<p>
<button id="post-btn" type="submit">Postar</button><img width="16" height="16" src="https://img.icons8.com/ios/50/hearts--v1.png" alt="hearts--v1"/>


      `;

  container.innerHTML = template;
  container.querySelector('#post-btn').addEventListener('click', () => {
    const newPost = container.querySelector('#new-post-txt').value;
    console.log(newPost);
  })
  return container;
};
