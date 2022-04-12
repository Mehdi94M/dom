var btnsPlus = Array.from(document.querySelectorAll(".fa-plus"));
var btnsMinus = document.querySelectorAll(".fa-minus");

var deletes = Array.from(document.querySelectorAll(".fa-trash"));
var total = document.querySelector("#total");
var hearts = Array.from(document.querySelectorAll(".fa-heart-o"));


// function somme

function somme(){
  var unitPrices = Array.from(document.querySelectorAll(".unit-price"));
  var quantities = Array.from(document.querySelectorAll(".mt-1"));
  
  let sum=0
  for (let i in quantities) {
    sum = sum + unitPrices[i].innerText * quantities[i].innerText;
  }
  total.innerText = sum;
}


// increment decrement


for (let  i= 0 ; i < btnsPlus.length; i++) {
 
    btnsPlus[i].addEventListener("click", function () {
      btnsPlus[i].previousElementSibling.innerText++;
      somme();
    });
    btnsMinus[i].addEventListener("click", function () {
        if (btnsMinus[i].nextElementSibling.innerText > 0) {
          btnsMinus[i].nextElementSibling.innerText--;
          somme();
        }
      });
    }


    // remove card  
for (let i in deletes){
   deletes[i].addEventListener('click',function(){
   deletes[i].parentNode.parentNode.remove()
   somme();
   })
 
};


// change color heart
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color !== "red") {
      heart.style.color = "red";
    } else {
      heart.style.color = "black";
    }
  });
}


