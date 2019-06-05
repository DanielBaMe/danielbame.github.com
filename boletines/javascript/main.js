let cerrado = document.querySelectorAll(".close");

cerrado.forEach(function(cl){
  cl.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");
    //quitar animaciones
    content.classList.remove("zoomInUp");
    content.classList.remove("animated");

    //poner animaciones
    content.classList.add("bounceOutRight");
    content.classList.add("animated");

    setTimeout(function(){
      location.href = "/boletines";
    },600);

  });
});

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log("click");
  })
})
