
// const url = "https://pokeapi.co/api/v2/pokemon/ditt";

// const http = new XMLHttpRequest();

// http.onreadystatechange = callbackXMLHTTP

// http.open("GET", url, true);

// http.send();

// function callbackXMLHTTP(){
//     //console.log(this.readyState, this.status)
//     if (this.readyState === 4 && this.status === 200) {
//        const ditto = JSON.parse(http.responseText) 
//        console.log(ditto);
//     } else if (this.readyState === 4 && this.status !== 200) {
//         console.log("siamo nella cacca il server ha risposto: ", this.status)
//     }
// }


// /// andiamo nel futuro

// fetch(url)
// .then(callbackFetch)
// .then(callbackJson)
// .catch(callbackError)


// function callbackFetch(resp){
//     return resp.json();
// }

// function callbackJson(json){
//     console.log(json);
// }

// function callbackError(error){
//     console.log("siamo nella cacca il server ha risposto: ", error.message)
// }

///facciamo i fighetti

// async function loadPokemon(){
//     const url = "https://pokeapi.co/api/v2/pokemon/ditto";

//     // fetch(url)
//     // .then(resp => resp.json())
//     // .then(json => console.log(json));

//     const response = await fetch(url);

//     const json = await response.json();

//     //console.log(json);

//     return json;
// }

// function loadPokemon2(){
//     const url = "https://pokeapi.co/api/v2/pokemon/ditto";

//     return fetch(url)
//     .then(resp => resp.json())
//     .then(json => json);
// }


// loadPokemon().then(ditto => console.log(ditto, "async await"));
// loadPokemon2().then(ditto => console.log(ditto, "than"));


///PROMESSE!!

// function testaOCroce(){
//     const randomNumber = Math.random();

//     if (randomNumber > 0.5) {
//         return "testa";
//     } else {
//         return "croce";
//     }

// }

// const risultato = testaOCroce()

// console.log(risultato);


// function testaOCroceWithPromise() {

//     const newPromise = new Promise((resolve, _) => {

//         const randomNumber = Math.random();

//         if (randomNumber > 0.5) {
//             resolve("testa");
//         } else {
//             resolve("croce");
//         }

//     });

//     return newPromise;
// }


// function siMangiaLaPizzaStasera(risultatoMoneta){

//     if(risultatoMoneta === "testa"){
//         console.log("viva, stasera pizza!!!!");
//     } else {
//         console.log("noooo, stasera minestina");
//     }

// }

// // testaOCroceWithPromise().then(siMangiaLaPizzaStasera)


// function testaOCroceWithCallback(callback){
//     const randomNumber = Math.random();

//     if (randomNumber > 0.5) {
//         callback("testa");
//     } else {
//         callback("croce");
//     }

// }

// testaOCroceWithCallback(siMangiaLaPizzaStasera);


/// SUPERFETCH

// function superFetch(url) {

//     const newPromise = new Promise((bellaStoria, bruttaStoria) => {

//         const http = new XMLHttpRequest();

//         http.onreadystatechange = () => {
            
//             if (http.readyState === 4 && http.status === 200) {
//                 const ditto = JSON.parse(http.responseText);
//                 bellaStoria(ditto);
//             } else if (http.readyState === 4 && http.status !== 200) {
//                 bruttaStoria(http.status);
//             }
//         }

//         http.open("GET", url, true);

//         http.send();

//     });

//     return newPromise;
// }

// const url = "https://pokeapi.co/api/v2/pokemon/ditt";

// superFetch(url).then(json => console.log(json))
// .catch(error => console.log(error));

