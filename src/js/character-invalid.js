
export const characterInvalid = (message) => {
  let characterInvalidFound = false;

  for (let i = 0; i < message.length; i++) {
    if ((message.charCodeAt(i) < 65 && message.charCodeAt(i) !== 32) ||
        (message.charCodeAt(i) > 90 && message.charCodeAt(i) < 97) ||
        message.charCodeAt(i) > 122) {
      characterInvalidFound = true;
    }
  }

  return characterInvalidFound;
};
