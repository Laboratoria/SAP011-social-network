export default () => {
  const container = document.createElement('div');

  const template = `
    <h1> Teste caraio</h1>
    `;
  container.innerHTML = template;
  return container;
};
