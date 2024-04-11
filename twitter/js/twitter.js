var nomeUtente = document.querySelector("#nomeUtente");
var password = document.querySelector("#password");
var feedUtente = document.querySelector("#feedUtente");
var feedPassword = document.querySelector("#feedPassword");
var utenteOk=document.querySelector("#utenteOk")

var btnInvia = document.querySelector("#btnInvia");
btnInvia.addEventListener("click", accesso);
const FORMATO_PW = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const formatoUtente = /[a-zA-Z][a-zA-Z0-9-_]{4,15}/;




function accesso() {
  feedUtente.innerHTML = "";
  feedPassword.innerHTML = "";
  console.log(nomeUtente.value);
  console.log(password.value);
  let nomelength = nomeUtente.value.length;
  let isGoodP = FORMATO_PW.test(password.value);
  let isGoodU = formatoUtente.test(nomelength.value);

  if (nomelength >= 4 && nomelength <= 15 && isGoodP && isGoodU) {
    localStorage.setItem("Nome Utente",nomeUtente.value)
    localStorage.setItem("Password",password.value)
    event.preventDefault();
    window.location.href = "twitt.html";
    utenteOk.innerHTML=`<p>${nomeUtente.value}</p>`;
    console.log("corretto");
  }else if((nomelength<4 || nomelength>15) && isGoodP ) {
    event.preventDefault();
    feedUtente.innerHTML = `min.4 - max:15`;
  }else if(!isGoodP && nomelength >= 4 && nomelength <= 15){
    event.preventDefault();
    feedPassword.innerHTML = `<strong class= text-color><li>Password errata per favore riprova</li>
  <li>La password deve contenere almeno 8 caratteri</li>
  <li>Deve contenere almeno una lettera Maiuscola</li>
  <li>Deve contenere almeno un carattere speciale (£ $ % & ! @ ? €)</li></strong>`;
  
  }else if(nomelength<=3 || nomelength>15 && !isGoodP && !isGoodU) {
    event.preventDefault();
    feedUtente.innerHTML = `min.4 - max:15`;
    feedPassword.innerHTML = `<strong class= text-color><li>Password errata per favore riprova</li>
   <li>La password deve contenere almeno 8 caratteri</li>
   <li>Deve contenere almeno una lettera Maiuscola</li>
   <li>Deve contenere almeno un carattere speciale (£ $ % & ! @ ? €)</li></strong>`;   
  }
}

  
  