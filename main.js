let normproj = document.querySelector(".norm1")
let normproj2 = document.querySelector(".norm2")
let rev = document.querySelector(".reverse")
window.addEventListener('scroll' , function(){
  let top = normproj.offsetTop - 800
  let height = normproj.offsetHeight;
  if(scrollY >= top && scrollY < top + height){
    this.document.querySelector(".norm1 .leftwork").classList.add("animd")
    this.document.querySelector(".norm1 .rightwork").classList.add("animt")
  }
})
window.addEventListener('scroll' , function(){
  let top = normproj2.offsetTop - 800
  let height = normproj2.offsetHeight;
  if(scrollY >= top && scrollY < top + height){
    this.document.querySelector(".norm2 .leftwork").classList.add("animd")
    this.document.querySelector(".norm2 .rightwork").classList.add("animt")
  }
})
window.addEventListener('scroll' , function(){
  let top = rev.offsetTop - 800
  let height = rev.offsetHeight;
  if(scrollY >= top && scrollY < top + height){
    this.document.querySelector(".reverse .leftwork").classList.add("animt")
    this.document.querySelector(".reverse .rightwork").classList.add("animd")
  }
})

const cuberev = document.querySelectorAll(".cuberev");
const cube = document.querySelectorAll(".cube");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".btn")
const navlist = document.querySelector(".responsive-navlist")
const navlistlink = document.querySelectorAll(".list-none li")
const frames = document.querySelectorAll(".frame")
const frameapp = document.querySelector(".app")
const framestore = document.querySelector(".store")
const framedesign = document.querySelector(".design")
const frameclose = document.querySelectorAll(".frameclose")
const appweb = document.querySelector(".appimg")
const storeweb = document.querySelector(".storeimg")
const designweb = document.querySelector(".desigimg")
window.addEventListener("scroll", () => {
  if (window.scrollY >= 165) {
    nav.style.background = "#050a0f";
  } else {
    nav.style.background = "#0a141f";
  }
});
menu.addEventListener("click", function () {
  navlist.classList.toggle("listshow")
  menu.classList.toggle("btnactive")
})
navlistlink.forEach((element) => {
  element.addEventListener("click" , function () {
    navlist.classList.remove("listshow")
  })
})
appweb.addEventListener('click', function (){
  console.log('ds')
  frameapp.style.display = "block"
})
storeweb.addEventListener('click', function (){
  console.log('ds')
  framestore.style.display = "block"
})
designweb.addEventListener('click', function (){
  console.log('ds')
  framedesign.style.display = "block"
})

frameclose.forEach((element) => {
  element.addEventListener("click" , function () {
    frames.forEach((element) =>{
      element.style.display = "none"
    })
  })
})
window.addEventListener("mousemove", (e) => {
  xvalue = e.clientX - window.innerWidth / 2;
  yvalue = e.clientY - window.innerHeight / 2;
  // cubemove
  let ycube = yvalue / 18;
  let yycube = yvalue / 330;
  let xcube = xvalue / 14;
  let xxcube = xvalue / 330;
  cube.forEach(transform);
  cuberev.forEach(transformrev);
  function transformrev(element) {
    element.style.transform = `translate3d(${-xxcube}rem, ${-yycube}rem, 0px) scale3d(1, 1, 1)
rotateX(${ycube}deg) rotateY(${-xcube}deg) rotateZ(0deg) skew(0deg, 0deg)`;
  }
  function transform(element) {
    element.style.transform = `translate3d(${xxcube}rem, ${yycube}rem, 0px) scale3d(1, 1, 1)
rotateX(${-ycube}deg) rotateY(${xcube}deg) rotateZ(0deg) skew(0deg, 0deg)`;
  }
  // cubeend
});
const skillsection = document.querySelector(".aboutme-header");
const skill = document.querySelector(".aboutme-skills");
let isMouseHover = false;
skillsection.addEventListener(
  "mouseleave",
  function () {
    isMouseHover = false;
  },
  false
);
skillsection.addEventListener(
  "mouseover",
  function () {
    isMouseHover = true;
  },
  false
);

window.addEventListener("mousemove", function () {
  if (isMouseHover === true) {
    window.addEventListener("mousemove", (e) => {
      xvalue = e.clientX - window.innerWidth / 2;
      yvalue = e.clientY - window.innerHeight / 2;
      let yskill = yvalue / 20;
      let xskill = 4 + xvalue / 50;

      skill.style.transform = `translate3d(${-xskill}%, ${-yskill}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    });
  } else if (isMouseHover === false) {
    window.addEventListener("mousemove", (e) => {
      xvalue = e.clientX - window.innerWidth / 2;
      yvalue = e.clientY - window.innerHeight / 2;
      let yskill = yvalue / 20;
      let xskill = 4 + xvalue / 50;

      skill.style.transform = `translate3d(4%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    });
  }
});
const delay = 100; // starting delay in milliseconds
const increment = 40; // increment for delay between each element
const incremente = 5; // increment for delay between each element
const elements = document.querySelectorAll(".char"); // select all elements with class "my-element"
const elementst = document.querySelectorAll(".chara"); // select all elements with class "my-element"



let aboutme = document.querySelector(".aboutme");

window.addEventListener("scroll", function () {
  let top = aboutme.offsetTop;

  let height = aboutme.offsetHeight;

  if (scrollY >= top && scrollY < top + height) {
    elementst.forEach((element, index) => {
      // iterate through all elements and add animation with increasing delay
      setTimeout(() => {
        element.classList.add("animation"); // add animation class to element
      }, delay + index * increment); // set delay based on index of element
    });
  }
});
//////



//////
const perks = document.querySelector(".perks_wrapper")
const perksitem = document.querySelectorAll(".perks_item")

window.onscroll = function () {
  perksitem.forEach((e) => {
    let topa = e.offsetTop +2000
    let heighta = e.offsetHeight +100
  if(scrollY >= topa && scrollY < topa + heighta){
    e.classList.add('perks-animation')
  }
  })
}



document.getElementById("servies").onmousemove = e => {
  for(const card of document.getElementsByClassName("perks_item")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}
window.onload = function(){
  document.querySelector(".loadingscrean").style.display = "none" 
  elements.forEach((element, index) => {
  // iterate through all elements and add animation with increasing delay
  setTimeout(() => {
    element.classList.add("animation"); // add animation class to element
  }, delay + index * increment); // set delay based on index of element
});
}
