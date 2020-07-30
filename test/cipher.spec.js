
// Creamos un objeto global window
global.window = global;

require('../src/js/cipher');


describe('Test del objeto global "cipher": ', () => {
  it('Debería ser un object.', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {
    it('Debería ser una función.', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    describe('Minúsculas', () => {
      it('Debería retornar "hijkl" para "abcde" con offset 33.', () => {
        expect(cipher.encode(33, 'abcde')).toBe('hijkl');
      });
    });

    describe('Mayúsculas', () => {
      it('Debería retornar "HIJKL" para "ABCDE" con offset 33.', () => {
        expect(cipher.encode(33, 'ABCDE')).toBe('HIJKL');
      });
    });

    describe('Carácteres no alfabéticos', () => {
      it('Debería retornar un string vacío para "!@".', () => {
        expect(cipher.encode(33, ' !@')).toBe('');
      });
    });
  });

  describe('cipher.decode', () => {
    it('Debería ser una función.', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    describe('Minúsculas', () => {
      it('Debería retornar "abcde" para "hijkl" con offset 33.', () => {
        expect(cipher.decode(33, 'hijkl')).toBe('abcde');
      });
    });

    describe('Mayúsculas', () => {
      it('Debería retornar "ABCDE" para "HIJKL" con offset 33.', () => {
        expect(cipher.decode(33, 'HIJKL')).toBe('ABCDE');
      });
    });

    describe('Carácteres no alfabéticos', () => {
      it('Debería retornar un string vacío para "!@".', () => {
        expect(cipher.decode(33, ' !@')).toBe('');
      });
    });
  });
});
