
window.addEventListener('DOMContentLoaded', (e)=>{
  setUpAOS();
});

window.onresize = ()=>{
  setUpAOS();
};

const reactLogo = document.getElementById("react");
const reduxLogo = document.getElementById("redux");
const firebaseLogo = document.getElementById("firebase");
const gqlLogo = document.getElementById("gql");
const cssLogo = document.getElementById("css");
const htmlLogo = document.getElementById("html5");
const bootstrapLogo = document.getElementById("bootstrap");
const es6Logo = document.getElementById("es6");
const mongoDBLogo = document.getElementById("mongoDB");
const sqlLogo = document.getElementById("sql");
const nodeJsLogo = document.getElementById("nodeJs");
const expressLogo = document.getElementById("express");
const pythonLogo = document.getElementById("python");
const jsLogo = document.getElementById("js");
const cppLogo = document.getElementById("cpp");
const javaLogo = document.getElementById("java");

const upArrow = document.querySelector(".up-arrow-container");
const restContent = document.getElementById("restContent");

const removeClass = (className)=>{
  const technologyStack = document.querySelectorAll(".technology-grid-wrapper .aos");
  technologyStack.forEach(stack=>{
    stack.classList.remove(className);
  });
};

const setUpAOS = ()=>{
  let width = document.documentElement.clientWidth;
  if( width > 933){
    removeClass('right');
    removeClass('left');
    removeClass('center-java');

    reactLogo.classList.add('left');
    reduxLogo.classList.add('left');
    cssLogo.classList.add('left');
    htmlLogo.classList.add('left');
    mongoDBLogo.classList.add('left');
    sqlLogo.classList.add('left');
    pythonLogo.classList.add('left');
    jsLogo.classList.add('left');

    firebaseLogo.classList.add('right');
    gqlLogo.classList.add('right');
    bootstrapLogo.classList.add('right');
    es6Logo.classList.add('right');
    nodeJsLogo.classList.add('right');
    expressLogo.classList.add('right');
    cppLogo.classList.add('right');
    javaLogo.classList.add('right', 'right-java');
  }
  else if( ( width >= 543) && ( width <= 933 ) ){
    removeClass('right');
    removeClass('left');
    removeClass('right-java');
    javaLogo.classList.add('center-java');

    reactLogo.classList.add('left');
    gqlLogo.classList.add('left');
    bootstrapLogo.classList.add('left');
    sqlLogo.classList.add('left');
    pythonLogo.classList.add('left');

    htmlLogo.classList.add('right');
    mongoDBLogo.classList.add('right');
    firebaseLogo.classList.add('right');
    expressLogo.classList.add('right');
    cppLogo.classList.add('right');
    
  }
  else {
    removeClass('left');
    removeClass('right');
    removeClass('center-java');
    removeClass('right-java');
  }
};

  const technologyStack = document.querySelectorAll(".technology-grid-wrapper .aos");
  const techGridObserverOptions = {
    threshold: 0.6,
    rootMargin: "0px 250px 0px 250px"
  };
  const techGridObserver = new IntersectionObserver((entries, techGridObserver)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('appear');
        techGridObserver.unobserve(entry.target);
      }
      else{
        return ;
      }
    });
  },  techGridObserverOptions );

  technologyStack.forEach(tech=>{
    techGridObserver.observe(tech);
  });

  const instance = new TypeIt('#display-picture-text', {
    strings: ['Hi there, I am Yash. :)'],
    //-- Other options...
    speed: 100,
    waitUntilVisible: true,
    startDelay: 400,
    cursor: false
  }).go();


  upArrow.addEventListener('click', (event)=>{
    const scrollToTopOptions = {
      top: 0,
      behavior: "smooth"
    };
    window.scroll(scrollToTopOptions);
    upArrow.classList.remove('appear');
  });

  const upArrowIntersectionObserver = new IntersectionObserver((entries, upArrowIntersectionObserver)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
          upArrow.classList.add('appear');
      }
      else{
          upArrow.classList.remove('appear');
      }
    });
  }, {
    rootMargin: "0px 0px -300px 0px",
  });

  upArrowIntersectionObserver.observe(restContent);