//A capitalize function that takes a string and returns it
//with the first character capitalized.


function capitalize(string){
    return string[0].toUpperCase()+string.substr(1,string.length);
}

export default capitalize