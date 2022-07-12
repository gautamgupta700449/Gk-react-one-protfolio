$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
    

  });
  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      { 
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

// alert(location.href);
// if(confirm("Want to visit Coding Guru")){
//   location.href=""
// }
(function(){
  setInterval(() => {
    var d = new Date().toLocaleString();
document.getElementById("time").innerHTML = d;
  }, 1000)
})();

// ===============================Typing Animation=======================================
var typed = new Typed (".typing",{
  strings:["","Web Developer", "Web Designer", "Graphic Designer", "YouTuber"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})
var name1 = new Typed (".name1",{
  strings:["","","Gautam Kumar Gupta"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})
