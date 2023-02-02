
let body = document.querySelector("body");
let header = document.getElementById("header");
let sidebar = document.getElementById("sideBar");
let main = document.getElementById("main");
let openMenu = document.getElementById("openMenu");
let logo = document.querySelector(".logo");
let fullLogo = document.querySelector(".full-logo");
let navTitle = document.getElementsByClassName("nav-title");
let navBadge = document.getElementsByClassName("nav-badge");
let label = document.getElementsByClassName("label");
let arrow = document.getElementsByClassName("arrow");

function toggleMenu() {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebar.style.width = "85px";
    header.style.left = "85px";
    main.style.marginLeft = "85px"
    openMenu.style.transform = "rotate(180deg)";
    fullLogo.style.display = "none";
    logo.style.display = "block";
    for (var i = 0; i < navTitle.length; i++) {
      navTitle[i].style.display = "none";
    }
    for (var j = 0; j < navBadge.length; j++) {
      navBadge[j].style.display = "none";
    }
    for (var k = 0; k < label.length; k++) {
      label[k].style.display = "none";
    }
    for (var l = 0; l < arrow.length; l++) {
      arrow[l].style.display = "none";
    }


  } else {
    sidebar.style.width = "240px";
    header.style.left = "240px";
    main.style.marginLeft = "240px";
    openMenu.style.transform = "rotate(0deg)";
    fullLogo.style.display = "block";
    logo.style.display = "none";
    for (var i = 0; i < navTitle.length; i++) {
      navTitle[i].style.display = "block";
    }
    for (var j = 0; j < navBadge.length; j++) {
      navBadge[j].style.display = "block";
    }
    for (var k = 0; k < label.length; k++) {
      label[k].style.display = "block";
    }
    for (var l = 0; l < arrow.length; l++) {
      arrow[l].style.display = "block";
    }
  }
}

// var mobileView = window.matchMedia("(max-width: 412px)");
// mobile_Menu(mobileView);
// mobileView.addEventListener(mobile_Menu);

// function mobile_Menu(mobileView) {
// if (mobileView.matches) {
//   sidebar.style.display="block";
// }



// }



// List toggle //

let list = document.querySelectorAll(".listItems");

for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = 'listItems';
    }
    list[i].className = 'listItems active';
  }
}

//sub-list toggle // 
let openSubList = document.getElementsByClassName(".openSubList")
let subList = document.getElementsByClassName(".sub-nav")
function toggleSubList() {
  openSubList.classList.toggle("open");
  if (openSubList.classList.contains("open")) {
    subList.style.display = "block";
  }
  else {
    subList.style.display = "none";
  }
}


// Full screen function
function goFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

//Light_dark theme function

var mode = "light";
let darkbtn = document.getElementById("bgdark");
let lightbtn = document.getElementById("bglight");

function changeThemeFunc() {
  body.classList.toggle("darkMode");
  if (mode == "light") {
    darkbtn.style.display = "none";
    lightbtn.style.display = "block";
    mode = "dark";
  }
  else {
    lightbtn.style.display = "none";
    darkbtn.style.display = "block";
    mode = "light";
  }
}