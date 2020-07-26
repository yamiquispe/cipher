

/* Namespace: Un espacio de nombres es un contenedor que permite
   asociar toda la funcionalidad de un determinado objeto con un
   nombre único. En JavaScript un espacio de nombres es un objeto que
   permite a métodos, propiedades y objetos asociarse. La idea
   de crear espacios de nombres en JavaScript es simple: Crear
   un único objeto global para las variables, métodos, funciones
   convirtiendolos en propiedades de ese objeto. El uso de los
   namespace permite minimizar el conflicto de nombres con otros
   objetos haciéndolos únicos dentro de nuestra aplicación.
*/


// A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25


window.cipher = {

  encode: (offset, message) => {
    let character = 0;
    let messageEncode = '';

    for (let i = 0; i < message.length; i++) {
      // Mayúsculas
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        character = (message.charCodeAt(i) - 65 + offset) % 26 + 65;

        /* String.fromCharCode(): Método estático que devuelve
          una cadena creada mediante el uso de una secuencia de
          valores Unicode especificada.
        */
        messageEncode += String.fromCharCode(character);
      }

      // Minúsculas
      if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
        character = (message.charCodeAt(i) - 97 + offset) % 26 + 97;

        messageEncode += String.fromCharCode(character);
      }
    }

    return messageEncode;
  },

  decode: (offset, message) => {
    let character = 0;
    let messageDecode = '';

    for (let i = 0; i < message.length; i++) {
      // Mayúsculas
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        character = (message.charCodeAt(i) - 65 + 26 * offset - offset) %
        26 + 65;

        messageDecode += String.fromCharCode(character);
      }

      // Minúsculas
      if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
        character = (message.charCodeAt(i) - 97 + 26 * offset - offset) %
        26 + 97;

        messageDecode += String.fromCharCode(character);
      }
    }

    return messageDecode;
  },

};
