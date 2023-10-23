console.log("Hello World");

function myFunction() {
    var x = document.querySelector("#myNav");
    console.log(x);
    if (x.className === "navbar-right") {
      x.className += "responsive";
    } else {
      x.className = "navbar-right";
    }
  }