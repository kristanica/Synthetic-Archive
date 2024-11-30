//Vairables
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
const reveal =document.querySelector('.prjBtn');
const lainStyBtn =document.querySelector('.lainStoryBtn');
let lightmode = localStorage.getItem('lightmode')
const themebutton = document.getElementById('theme')



//Functions
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.items');
    document.querySelector('.slider').appendChild(items[0]);
 
});

reveal.addEventListener('mouseover', function(){
    
    reveal.textContent = "Continue"
   

});
reveal.addEventListener('mouseout', function(){
    reveal.textContent = "REVEAL HER PROJECTS"
  });

lainStyBtn.addEventListener('mouseover', function(){
    
    lainStyBtn.textContent = "Continue"


});
lainStyBtn.addEventListener('mouseout', function(){
    lainStyBtn.textContent = "View Her Story"
  });


  document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0; // Track the last scroll position
  
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      // Determine scroll direction
      const scrollingDown = currentScroll > lastScrollTop;
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Reset for top of page
  
      if (scrollingDown) {
        document.querySelectorAll('.reveal').forEach((element) => {
          if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('appear'); // Add the reveal effect
          }
        });
      }
    });
  });


  const light = () =>{
      document.body.classList.add('lightmode')
      localStorage.setItem('lightmode', 'active')
  }
  const dark = () =>{
      document.body.classList.remove('lightmode')
      localStorage.setItem('lightmode', null)
  }
  if (lightmode === "active") light()
  themebutton.addEventListener("click", () =>{
      lightmode = localStorage.getItem('lightmode')
      if(lightmode !== "active"){
          light();
      }else{
          dark();
      }
    });