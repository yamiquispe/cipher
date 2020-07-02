/* eslint-disable prefer-regex-literals */

// Objeto: Es una instancia de una Clase.

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

/* Implementamos el objeto "cipher", quien ya está exportado al
	objeto global window. Este objeto encapsulará métodos, funciones,
	variables y otros objetos que vayamos a crear.
*/

window.cipher = {

  /* Creamos dos métodos o funciones: "encode" y "decode". Ambas
		son propiedades del objeto cipher.
	*/

  // Cifrado:

  // offset: Número de desplazamiento.
  // string: Mensaje.
  	encode: (offset, string) => {
  		// Comprobamos que recibe el parámetro como un String.
  		console.log(typeof (offset))

  		let letra = 0
    let cifrado = ''

    // Redefinimos el valor de la variable.
    offset = parseInt(offset)

    for (let i = 0; i < string.length; i++) {
      // Imprime letra de la cadena:
      console.log(string[i])

      /* charCodeAt(): Método que devuelve un número indicando el
				valor Unicode del carácter en el índice proporcionado.
				Ejemplo:
				var str = "HELLO WORLD";
				var n = str.charCodeAt(0);
				El resultado de n será: 72
			*/
      string.charCodeAt(i)

      // Muestra la posición de la letra en Código ASCII:
      console.log(string.charCodeAt(i))

      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        /* A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
			   	0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
				*/

        /* La fórmula me permite obtener el valor de la letra
					desplazada en código ASCII.
				*/
        letra = (string.charCodeAt(i) - 65 + offset) % 26 + 65
        console.log(letra)

        /* String.fromCharCode(): Método estático que devuelve
					una cadena creada mediante el uso de una secuencia de
					valores Unicode especificada.
				*/
        cifrado += String.fromCharCode(letra)
      }

      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        letra = (string.charCodeAt(i) - 97 + offset) % 26 + 97
        console.log(letra)

        cifrado += String.fromCharCode(letra)
      }
    }

    console.log(cifrado)

    return cifrado
  	},

  	// Descifrado:

  	decode: (offset, string) => {
  		console.log(typeof (offset))

    let letra = 0
    let descifrado = ''
    offset = parseInt(offset)

    for (let i = 0; i < string.length; i++) {
      console.log(string[i])

      string.charCodeAt(i)

      console.log(string.charCodeAt(i))

      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        letra = (string.charCodeAt(i) - 65 + 26 * offset - offset) % 26 + 65
        console.log(letra)

        descifrado += String.fromCharCode(letra)
      }

      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        letra = (string.charCodeAt(i) - 97 + 26 * offset - offset) % 26 + 97
        console.log(letra)

        descifrado += String.fromCharCode(letra)
      }
    }

    console.log(descifrado)

    return descifrado
  	}

}
