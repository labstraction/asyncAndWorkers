
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const http = new XMLHttpRequest();

http.onreadystatechange = callback

xhttp.open("GET", url, true);

xhttp.send();

function callback(){
    if (this.readyState == 4 && this.status == 200) {
       console.log(http.responseText);
    }
}