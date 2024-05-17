const imgs = document.querySelectorAll('.img a');
const imgDiv = document.querySelectorAll('.img');


 let imgId =1;
 
imgs.forEach(img => {
  img.addEventListener("click",(e)=>{
    e.preventDefault();
     imgId = img.dataset.id;
     imgDiv.forEach(img => {
      img.classList.remove('active');
     });
      img.parentElement.classList.add('active');
     
     moveimage()

});
  
});
  

 

function moveimage(){
  const imgwidth = document.querySelector('.main-image  img:first-child' ).clientWidth;

  let width  = (imgId-1)*imgwidth;
  document.querySelector('.main-image').style.transform = `translateX(${-width}px)`;


}

 
const minsbutn = document.querySelector(".minus");
const plusbutn = document.querySelector(".plus");                
const qtytxt = document.querySelector("#qty");


minsbutn.addEventListener('click',()=>{

let qty = parseInt(qtytxt.value);
if(qty>0){
  qty--;
  qtytxt.value = qty;
}
});



plusbutn.addEventListener('click',()=>{

  let qty = parseInt(qtytxt.value);
  if(qty>=0 && qty<5){
    qty++;
    qtytxt.value = qty;
  }
});



