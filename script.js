// var heading = document.querySelector("#nav-bottom h2");

// var moreItems = document.querySelector("#nav-bottom .more");
// var nav = document.querySelector("#nav-bottom")
// // when hever on heading then more items becomes block and when hover ends then moreItems displays none

// heading.addEventListener("mouseover", function() {
//   moreItems.style.display = "block";
// });

// window.addEventListener("click", function() {
//   moreItems.style.display = "none";
// });


















document.querySelectorAll("#nav-bottom h2").forEach(function(heading) {
  heading.addEventListener("mouseover", function() {
    var moreItems = heading.nextElementSibling;
    if (moreItems && moreItems.classList.contains("more")) {
      moreItems.style.display = "block";
    }
  });

  heading.addEventListener("mouseout", function(event) {
    var moreItems = heading.nextElementSibling;
    if (moreItems && moreItems.classList.contains("more")) {
      if (!moreItems.contains(event.relatedTarget)) {
        moreItems.style.display = "none";
      }
    }
  });
});

document.querySelectorAll("#nav-bottom .more").forEach(function(moreItems) {
  moreItems.addEventListener("mouseover", function() {
    moreItems.style.display = "block";
  });

  moreItems.addEventListener("mouseout", function(event) {
    if (!event.relatedTarget || !moreItems.previousElementSibling.contains(event.relatedTarget)) {
      moreItems.style.display = "none";
    }
  });
});

document.addEventListener("click", function(event) {
  document.querySelectorAll("#nav-bottom .more").forEach(function(moreItems) {
    if (!moreItems.contains(event.target) && !moreItems.previousElementSibling.contains(event.target)) {
      moreItems.style.display = "none";
    }
  });
});




































// document.querySelectorAll("#nav-bottom h2").forEach(function(heading) {
//   heading.addEventListener("mouseover", function() {
//     var moreItems = heading.nextElementSibling;
//     if (moreItems && moreItems.classList.contains("more")) {
//       moreItems.style.display = "block";
//     }
//   });

//   heading.addEventListener("mouseout", function() {
//     var moreItems = heading.nextElementSibling;
//     if (moreItems && moreItems.classList.contains("more")) {
//       moreItems.style.display = "none";
//     }
//   });
// });

// document.addEventListener("click", function() {
//   document.querySelectorAll("#nav-bottom .more").forEach(function(moreItems) {
//     moreItems.style.display = "none";
//   });
// });
