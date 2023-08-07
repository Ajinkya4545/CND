


function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem(username, password)
    if (username == "Ajinkya" && password == "pass@123" || username == "htmlcssjs" && password == "password111") {
      
        window.location = "home.html";
        
    }
    else {
        alert("Wrong Username and Password")
return false
    }
   
}

var myIndex = 0;
carousel();

function carousel() {
    var x = document.getElementsByClassName("slides");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); 
}


function scrollfunshop() {
    window.scrollTo(0, findposfunc(document.getElementById("section2")));
}

function scrollfunproduct() {
    window.scrollTo(0, findposfunc(document.getElementById("section2")));
}

function scrollfuncontact() {
    window.scrollTo(0, findposfunc(document.getElementById("footer0")));
}
function findposfunc(id) {
    var currenttop = 0;
    if (id.offsetParent) {
        do {
            currenttop += id.offsetTop;
        } while ((id = id.offsetParent));
        return [currenttop];
    }
}




