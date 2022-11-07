// let quadradoamarelo = document.getElementsByClassName('quadradoflix')[0]
// let segundaparte = document.getElementsByClassName('segunda-parte')[0]
// let quemsomos = document.getElementsByClassName('quemsomos')[0]

// var clientWidth = quadradoamarelo.clientWidth
// console.log(clientWidth)
// if(clientWidth < 500){
//     quadradoamarelo.style.display = "none";
// }
// function reportWindowSize() {
//    let resolucao =  quadradoamarelo.innerWidth = window.innerWidth;

//     if(resolucao <= 1200){
//         quadradoamarelo.style.display = "none";
//         segundaparte.style.gridTemplateColumns = "100%";
//         quemsomos.style.fontSize = "20px";
//         quemsomos.style.textAlign = "center";
//     } else {
//         quadradoamarelo.style.display = "";
//         segundaparte.style.gridTemplateColumns = "60% 40%";
//         quemsomos.style.fontSize = "18px";
//         quemsomos.style.textAlign = "left";
//    }
// }

// window.onresize = reportWindowSize;

// TUDO ALI EM CIMA É QUANDO DA RESIZE O QUADRADO AMARELO SOME

let navbar = document.getElementsByClassName("navbar")[0];
let welcome = document.getElementsByClassName("welcome")[0];
let pessoal = document.getElementsByClassName("pessoal")[0];
let quadradoamarelo = document.getElementsByClassName("quadradoflix")[0];

let segundaParte = document.getElementsByClassName("segunda-parte")[0];
let quemsomos = document.getElementsByClassName("quemsomos")[0];

let terceiraParte = document.getElementsByClassName("terceira-parte")[0];

let quartaParte = document.getElementsByClassName("quarta-parte")[0];
let quadradodiferenca = document.querySelectorAll(".quadradodiferenca");

let quintaParte = document.getElementsByClassName("quinta-parte")[0]

let sextaParte = document.getElementsByClassName("sexta-parte")[0]

let setimaParte = document.getElementsByClassName("setima-parte")[0]

let oitavaParte = document.getElementsByClassName("oitava-parte")[0]

let nonaParte = document.getElementsByClassName("nona-parte")[0]
let imgcelular = document.getElementsByClassName("imgcelular")[0]

let decimaParte = document.getElementsByClassName("decima-parte")[0]

let bodymin = document.getElementsByClassName("bodymin")[0];
var clientWidth = navbar.clientWidth;


let resolucao = (navbar.innerWidth = window.innerWidth);
function reportWindowSize() {
  

  if (resolucao < 1600) {
    quadradodiferenca.forEach(
      (quadradodiferenca) => (quadradodiferenca.style.width = "220px")
    );

    welcome.style.marginLeft = "90px";
    pessoal.style.marginLeft = "-50px";
    segundaParte.style.paddingLeft = "90px";
    segundaParte.style.paddingRight = "90px";
    bodymin.style.minWidth = "1090px";
    navbar.style.minWidth = "1090px";
    terceiraParte.style.paddingLeft = "90px";
    terceiraParte.style.paddingRight = "90px";
    quartaParte.style.paddingLeft = "90px";
    quartaParte.style.paddingRight = "90px";
    quintaParte.style.paddingLeft = "90px";
    quintaParte.style.paddingRight = "90px";
    sextaParte.style.paddingLeft = "90px";
    sextaParte.style.paddingRight = "90px";
    setimaParte.style.paddingLeft = "90px";
    setimaParte.style.paddingRight = "90px";
    oitavaParte.style.paddingLeft = "90px";
    oitavaParte.style.paddingRight = "90px";
    nonaParte.style.paddingLeft = "90px";
    nonaParte.style.paddingRight = "90px";
    imgcelular.style.width = "650px";
    imgcelular.style.height = "450px";
    imgcelular.style.top = "30px";
    imgcelular.style.right = "-50px";
    decimaParte.style.paddingLeft = "90px";
    decimaParte.style.paddingRight = "90px";
    
  }
  
  if (resolucao < 1300) {
    quadradoamarelo.style.display = "none";
    segundaParte.style.paddingLeft = "0";
    segundaParte.style.paddingRight = "0";
    segundaParte.style.justifyContent = "center";
    quemsomos.style.textAlign = "center";
    quemsomos.style.margin = "0";
  } else {
    quadradoamarelo.style.display = "";
    quemsomos.style.textAlign = "left";
    segundaParte.style.justifyContent = "";
    quemsomos.style.marginRight = "189px";
  }
}

window.onload = reportWindowSize;



// BOTAO QUE SCROLLA terceira-parte

let btnext = document.getElementsByClassName("btnext")[0];
let btnprev = document.getElementsByClassName("btnprev")[0];

btnext.onclick = () => {
  document.getElementsByClassName("divpai")[0].scrollLeft += 420;
};
btnprev.onclick = () => {
  document.getElementsByClassName("divpai")[0].scrollLeft += -420;
};

// BOTAO QUE SCROLLA

// BOTAO QUE SCROLLA quarta-parte

let btnext2 = document.getElementsByClassName("btnext2")[0];
let btnprev2 = document.getElementsByClassName("btnprev2")[0];
let divpaiwidth = document.getElementsByClassName("divpaiwidth")[0];
if(resolucao < 1600){
   btnext2.onclick = () => {
      document.getElementsByClassName("divpaiwidth")[0].scrollLeft += 250;
    };
   btnprev2.onclick = () => {
      document.getElementsByClassName("divpaiwidth")[0].scrollLeft += -250;
   };
}else{
   btnext2.onclick = () => {
      document.getElementsByClassName("divpaiwidth")[0].scrollLeft += 260;
    };
   btnprev2.onclick = () => {
      document.getElementsByClassName("divpaiwidth")[0].scrollLeft += -260;
   };
}

// BOTAO QUE SCROLLA


// BOTAO QUE SCROLLA quinta-parte

let btnext3 = document.getElementsByClassName("btnext3")[0];
let btnprev3 = document.getElementsByClassName("btnprev3")[0];
let quintoPai = document.getElementsByClassName("quinto-pai")[0];
if(resolucao < 1600){
   btnext3.onclick = () => {
      document.getElementsByClassName("quinto-pai")[0].scrollLeft += 450;
    };
   btnprev3.onclick = () => {
      document.getElementsByClassName("quinto-pai")[0].scrollLeft += -450;
   };
}else{
   btnext3.onclick = () => {
      document.getElementsByClassName("quinto-pai")[0].scrollLeft += 440;
    };
   btnprev3.onclick = () => {
      document.getElementsByClassName("quinto-pai")[0].scrollLeft += -440;
   };
}

// BOTAO QUE SCROLLA

// BOTAO QUE SCROLLA sexta-parte

let btnext4 = document.getElementsByClassName("btnext4")[0];
let btnprev4 = document.getElementsByClassName("btnprev4")[0];
let sextoPai = document.getElementsByClassName("sexto-pai")[0];
if(resolucao < 1600){
   btnext4.onclick = () => {
      document.getElementsByClassName("sexto-pai")[0].scrollLeft += 320;
    };
   btnprev4.onclick = () => {
      document.getElementsByClassName("sexto-pai")[0].scrollLeft += -320;
   };
}else{
   btnext4.onclick = () => {
      document.getElementsByClassName("sexto-pai")[0].scrollLeft += 310;
    };
   btnprev4.onclick = () => {
      document.getElementsByClassName("sexto-pai")[0].scrollLeft += -310;
   };
}

// BOTAO QUE SCROLLA