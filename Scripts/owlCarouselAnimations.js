
var x = document.getElementsByClassName("laptop");


var expand = function (objek) {
   objek.style.height = "400px";
   objek.style.width = "410px";
   objek.style.marginRight="50px";


  
};
var downsize = function (objek) {
   objek.style.height = "300px";
   objek.style.width = "100%";
	objek.style.marginRight="0px";
  
};


function eventHandler(objek) {
  objek.addEventListener('mouseover', expand.bind(event,objek), false);
  objek.addEventListener('mouseout',downsize.bind(event,objek), false);
}

var i;
for (i = 0; i < x.length; i++) {
  x[i].style.borderRadius = "30px";
  eventHandler(x[i]);
 
  
}

