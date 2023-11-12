const alphabet = "abcdefghijklmnopqrstuvwxyz";
export default function caesarCipher(string,shiftFactor){
    var cipheredString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i]==' ') {
            cipheredString +=" ";
        }else{
            cipheredString += cipherTheLetter(string[i],shiftFactor);
        }
    }

    return cipheredString;
}
function cipherTheLetter(letter,shiftFactor) {
    return alphabet[((letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)) + shiftFactor) % 26];
}