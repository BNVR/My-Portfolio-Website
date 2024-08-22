// const activePage = window.location.pathname;
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.navList');
navMenu = document.querySelector('.burger')
// const navLinks = document.querySelectorAll('nav > a');
// burger = document.getElementsByClassName('.burger');

burger.addEventListener('click', ()=>{
  navList.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
  navMenu.classList.toggle('navMenu');

})

// forEach(link =>{
//   if(link.href.includes(`${activePage}`)){
//     link.classList.add('active');
//   }
// })
// Circle.addEventListener('')

function myFunction() {
    alert("Submitted");
    document.getElementById("myname").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";
    document.getElementById("inputs1").value="";
  }
