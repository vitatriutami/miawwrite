var navList = document.getElementById("nav-list");
var navItems = navList.getElementsByClassName("nav-item ");

for (var i = 0; i < items.length; i++) {
  navItems[i].addEventListener("click", function () {
    var current = document.querySelectorAll(".active");

    current.forEach((element) => {
      element.classList.remove("active");
    });

    this.classList.add("active");
  });
}

