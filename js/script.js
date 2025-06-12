function isAtTop() {
    const navbar = document.getElementById("navbar");
    const navs = document.querySelector("#navbar ul li a.active");
    if (window.scrollY > 10 || window.pageYOffset > 10) {   
        navbar.classList.replace("bg-none", "bg-primary");
        navs.classList.remove("non-stick");
    }
}

function scrollAnimation(){
    const navbar = document.getElementById("navbar");
    const navs = document.querySelector("#navbar ul li a.active");

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navbar.classList.replace("bg-none", "bg-primary");
        navs.classList.remove("non-stick");
    }else{
         navbar.classList.replace("bg-primary", "bg-none");
         navs.classList.add("non-stick");
    }
}

function letterAnimation(){
    const el = document.querySelector(".bnr-info h1");
    const textArrs = document.querySelector(".bnr-info h1").textContent.split('');

    let num = 0;
    let data = []; 
    const Interval = setInterval(() => { 
        data.push(textArrs[num]);
        num++
        if (data.length <= textArrs.length) {
            el.textContent = data.join('');
        }else{
            clearInterval(Interval);
        }
    }, 500)
}

function navActive(){
    const navbar = document.querySelectorAll(".navbar");
    const navs = document.querySelectorAll(".navbar ul li a");
    

    navbar.forEach( navB => {
        navs.forEach( nav => {
            nav.onclick = () => {
                const activeEl = document.querySelector(".navbar ul li a.active");
                activeEl.classList.remove("active")
                console.log(activeEl);
                nav.classList.add("active");
            }
        })
    });

    

}

function checkInView() {
  const rows = document.querySelectorAll('.btm2_cont');

  rows.forEach(row => {
    const rowTop = row.offsetTop;
    const rowBottom = rowTop + row.offsetHeight;
    const windowBottom = window.scrollY + window.innerHeight;

    if (rowTop <= windowBottom && rowBottom > window.scrollY) {
      row.classList.add('animate'); 
    } else {
       row.classList.remove('animate'); // Remove 'animate' class if not in view
    }
  });
}


window.addEventListener('scroll', checkInView);
window.addEventListener('load', checkInView); // Check on initial load

document.addEventListener("DOMContentLoaded", () => {
    const window_width = screen.width;

     // INITIATION
    new WOW().init();
    AOS.init();
    navActive();
    isAtTop();
    
    // scroll animation
    window.onscroll = () => { scrollAnimation() };
    
    // Text animation
    letterAnimation();


    if (window_width <= 800) {
        document.querySelectorAll("data-aos").remove;
    }

});