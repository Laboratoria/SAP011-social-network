export default () => {
    const container = document.createElement('div');
    const template = `
        <h1>HOME</>
     `;
    container.innerHTML = template;
    return container;

}