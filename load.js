//$(".info-block")[0].innerHTML = '<object type="text/html" data="info.html" ></object>'
	  
//$(".info-block")[0].load("about.html")
	  
//console.log("test")
	  
//info = document.getElementsByClassName("info-block")[0];
//navbar = document.getElementsByClassName("navbar-navnav")[0];

sitename = document.getElementsByClassName("sitename")[0];
menublock = document.getElementsByClassName("menu-block-inner")[0];
description = document.getElementsByName("description")[0];
keywords = document.getElementsByName("keywords")[0];

/*load_info = new XMLHttpRequest();
	  
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

load_navbar.send();*/

load_menublock = new XMLHttpRequest();
	  
load_menublock.onreadystatechange = function () {
	  
	                                  menublock.innerHTML = this.responseText;
	  
	                                }
							   
load_menublock.open("GET", "menu-block.html", true);
	  
load_menublock.send();

sitename.innerHTML = "<a href='index.html'>Социальные и гуманитарные науки. <br> Отечественная и зарубежная литература. <br> Серия 7. Литературоведение </a>"

description.content = "Социальные и гуманитарные науки. Отечественная и зарубежная литература. Серия 7. Литературоведение. Научный журнал, изаваемый ИНИОН РАН"

keywords.content = "наука, журнал, научный журнал, социальные, гуманитарные, отечественная, зарубежная, иностранная, русская, литература, литературоведение, гуманитарная наука, инион"

document.title = description.content
