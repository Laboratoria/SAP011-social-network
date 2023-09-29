// importamos la funcion que vamos a testear
import home from './pages/home/home.js';

describe('home', () => {
  it('deveria ser uma função', () => {
    expect(typeof home).toBe('function');
  });
});
