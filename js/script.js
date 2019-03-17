// Counter function
  jQuery(document).ready(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
  });
// when users scroll 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500 ) {
    document.getElementById('myBtn').style.display = "block";
  } else {
    document.getElementById('myBtn').style.display = "none";
  }
}

//When usser clicks on the button,scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
