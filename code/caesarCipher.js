export default function caesarCipher(string, key) {
  shift(key);
  return encode(string);
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newalpha = "";

function shift(key) {
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + key) % alphabet.length;
    newalpha += alphabet[offset];
  }
}
function encode(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!/^[a-zA-Z]+$/.test(string[i])) {
      result += string[i];
      continue;
    }
    let index = alphabet.indexOf(string[i].toLowerCase());
    if (string[i] === string[i].toUpperCase()) {
      result += newalpha[index].toUpperCase();
    } else {
      result += newalpha[index];
    }
  }
  return result;
}
