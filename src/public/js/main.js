

function addSpan(id,t){
    id.classList.toggle('duvidas-span-hiden')
    id.classList.toggle('duvidas-span')
    t.classList.toggle('duvidas-after-a')
    t.classList.toggle('duvidas-after-b')
}

function carregarMais(){
    setTimeout(
        ()=> alert('Carregados com sucesso! 😄'),
    );

}


// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slide");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
