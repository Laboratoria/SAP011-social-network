import iniciarPagina from '../src/main.js';
import cadastro from '../src/lib/Cadastro/cadastro.js';
import linhaDoTempo from '../src/lib/Linha do Tempo/linhaDoTempo.js';
import telaInicial from '../src/lib/Tela Inicial/telaInicial.js';

describe('iniciarPagina', () => {
  it('deve chamar telaInicial quando a hash for vazia', () => {
    window.location.hash = '';
    iniciarPagina();
    expect(telaInicial).toHaveBeenCalled();
  });

  it('deve chamar cadastro quando a hash for "#cadastro"', () => {
    window.location.hash = '#cadastro';
    iniciarPagina();
    expect(cadastro).toHaveBeenCalled();
  });

  it('deve chamar linhaDoTempo quando a hash for "#linhaDoTempo"', () => {
    window.location.hash = '#linhaDoTempo';
    iniciarPagina();
    expect(linhaDoTempo).toHaveBeenCalled();
  });

  it('deve chamar telaInicial como padrão quando a hash for desconhecida', () => {
    window.location.hash = '#outraCoisa';
    iniciarPagina();
    expect(telaInicial).toHaveBeenCalled();
  });
});
