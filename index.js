let nav = document.getElementById("nav");
let nav_list = document.getElementById("nav_list");
let menu = document.getElementById("menu");

let item = document.querySelectorAll(".testimonal_item");

// hide nav bar on click outside in phones
document.onclick = function (e) {
  if (
    !(
      e.target == `${nav}` ||
      e.target == `${nav_list}` ||
      e.target == `${menu}`
    )
  ) {
    menu.classList.remove("open");
    nav.classList.remove("open");
  }
};

// Menu toggle function in phones
function toggle() {
  menu.classList.toggle("open");
  nav.classList.toggle("open");
}

// theme toggle function
function themeToggle() {
  document.querySelector("html").classList.toggle("dark");
}

// testimonal animation
let i = 0;
setInterval(() => {
  if (i == item.length) {
    i = 0;
  }
  item[i].classList.add("active");
  if (i <= item.length) {
    i += 1;
  }
}, 4000);
let j = 0;
setTimeout(() => {
  setInterval(() => {
    if (j == item.length) {
      j = 0;
    }
    item[j].classList.remove("active");
    item[j].classList.add("active_down");
    if (j <= item.length) {
      j += 1;
    }
  }, 4000);
}, 4000);
let k = 0;
setTimeout(() => {
  setInterval(() => {
    if (k == item.length) {
      k = 0;
    }
    item[k].classList.remove("active_down");
    if (k <= item.length) {
      k += 1;
    }
  }, 4000);
}, 12000);
