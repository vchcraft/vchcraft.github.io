//$(".info-block")[0].innerHTML = '<object type="text/html" data="info.html" ></object>'
	  
//$(".info-block")[0].load("about.html")
	  
//console.log("test")
	  
info = document.getElementsByClassName("info-block")[0];
navbar = document.getElementsByClassName("navbar-navnav")[0];
sitename = document.getElementsByClassName("sitename")[0];
	  
load_info = new XMLHttpRequest();
	  
load_info.onreadystatechange = function () {
	  
	                             info.innerHTML = this.responseText;
	  
	                           }
							   
load_info.open("GET", "info.html", true);
	  
load_info.send();

load_navbar = new XMLHttpRequest();

load_navbar.onreadystatechange = function () {
	                             
								   navbar.innerHTML = this.responseText;
								   
                                 }

load_navbar.open("GET", "navbar.html", true);

load_navbar.send();

sitename.innerHTML = "<a href="index.html">Социальные и гуманитарные науки. <br> Отечественная и зарубежная литература. <br> Серия 7. Литературоведение </a>"

