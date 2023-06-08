// menu

// Add active class
var header = document.getElementById("mymenu");
var btns = header.getElementsByClassName("btnmenu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += " active";
  });
}
// Sub-menu 
$(document).ready(function(){

  $(".sub-menu").hide();
  
  $('.menu > li > a').click(function () {
    var $ul = $(this).siblings('ul');
    if ($ul.length > 0) {
        $ul.slideToggle(0);
        $(".sub-menu").not($ul).slideUp(0);
        return false;
    }
  });
});

// scroll-contener
const contenerscroll = document.getElementsByClassName("contener");
function scrollToTop() {
  contenerscroll.scrollIntoView(true);
};

function scrollToBottom() {
  contenerscroll.scrollIntoView(false);
};


