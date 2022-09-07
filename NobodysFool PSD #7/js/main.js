//part (3no) bx slider 

$(document).ready(function(){
   $('.slider_area').bxSlider();
//sticky_menu
	$(".sticky_menu").waypoint(function(direction){
		if(direction == "down"){
		$("#main_menu").addClass("sticky");
		}else {
		$("#main_menu").removeClass("sticky");
		};	
	}); 
});

//MOBILE-MENU OPEN CLOSE 
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}