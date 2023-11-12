export default function reverseString(string){
    var reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;w
}