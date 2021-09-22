// show hide search
$(".clickable-search").click(function(){
	$(".full-search").show();
	$(".clickable-search").hide();

});

// nav color change
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header-nav").style.background = "#fff";
        document.getElementById("header-nav").style.borderBottom = "none";
        $(".header-area .nav-items li a").addClass("color-black");
        $(".header-area .social-icon a").addClass("color-black");
				$(".header-area .mobile-sidebar-icon").addClass("color-black");
        $(".header-area .clickable-search").addClass("color-black");
        $(".header-area .nav-items li a").removeClass("color-white");
        $(".header-area .social-icon a").removeClass("color-white");
				$(".header-area .mobile-sidebar-icon").removeClass("color-white");
        $(".header-area .clickable-search").removeClass("color-white");
      }
      else {
        document.getElementById("header-nav").style.background = "transparent";
        document.getElementById("header-nav").style.borderBottom = "1px solid #7b7b7b";
        $(".header-area .nav-items li a").addClass("color-white");
        $(".header-area .social-icon a").addClass("color-white");
				$(".header-area .mobile-sidebar-icon").addClass("color-white");
        $(".header-area .clickable-search").addClass("color-white");
        $(".header-area .nav-items li a").removeClass("color-black");
        $(".header-area .social-icon a").removeClass("color-black");
				$(".header-area .mobile-sidebar-icon").removeClass("color-black");
        $(".header-area .clickable-search").removeClass("color-black");
      }
    }

// mobile nav show/hide
function showMobileNav() {
	document.getElementById("full-mobile-nav").style.marginLeft = "0";
	document.getElementById("overlay-mobile-nav").style.display = "block";
}
function hideMobileNav() {
	document.getElementById("full-mobile-nav").style.marginLeft = "-500px";
	document.getElementById("overlay-mobile-nav").style.display = "none";
}