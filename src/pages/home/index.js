export default () => {
    const container = document.createElement('div');
    const template = `
     <h1> HOME</h1>
     <p> Receitas Saudáveis.</p>
     `;
    container.innerHTML = template;
    return container;
    
}