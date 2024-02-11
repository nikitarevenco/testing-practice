function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => char.codePointAt(0))
    .map((charCode) => {
      const newCharCode = charCode + (shift % 26);
      if (charCode >= 65 && charCode <= 90) {
        if (newCharCode > 90) {
          return newCharCode - 26;
        }
        return newCharCode;
      } else if (charCode >= 97 && charCode <= 122) {
        if (newCharCode > 122) {
          return newCharCode - 26;
        }
        return newCharCode;
      }
      return charCode;
    })
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
}

export default caesarCipher;
