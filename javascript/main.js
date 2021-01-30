let boton = document.getElementById("botonMenu");
let menu = document.getElementById("menu");


boton.addEventListener("click", function(){
    
    boton.classList.toggle("activo");
    menu.classList.toggle("menuActivo");

    if(boton.classList == "activo"){
        
        boton.setAttribute("name", "x");
        menu.style.display = "initial";
    }
    else{
        
        boton.setAttribute("name", "menu");
        menu.style.display = "none";
       
    }
    

})




/* 

const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menuToggle');

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();

  if (window.getComputedStyle(menu).display === 'block') {
    menu.style.display = 'none';
  } else  {
    menu.style.display = 'block';
  }
});

navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose") */