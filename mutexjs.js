var slideIndex = 0;
var slides = document.getElementsByClassName("imgHolder");
showSlides();

//show photos in the block and repeat it at every time increase the index and
//make display of the next image block and others none
function showSlides(){
    
    for(var i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    
    slides[slideIndex-1].style.display = "block";
    
    
    setTimeout(showSlides,2000); //Repeat it ever 2 seconds
}


// if the user want to change the photo by clicking on dots
// will move to the specific image
function currentClick(n){
    slideIndex = n;
    for(var i = 0 ;i<slides.length ; i++){
        slides[i].style.display = "none";
    }
    slides[n-1].style.display = "block" ;
}

//I will get my  position in the page and if it larger than 20 ,
// I will release colored background
function changeBackground(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("navbar").style.background= "#a13dff";
    }
    else if(document.body.scrollTop === 0 || document.documentElement.scrollTop === 0){
        document.getElementById("navbar").style.background = "transparent";
    }
}

//in portview if I click the menu icon I will check if it closed an I click I will do the first condition
// and change the class name
function navMenu(){
    var Name = document.getElementById("openBTN").className;
    if(Name ==="closed"){
        document.getElementById("overlay").style.height ="100%";    
        document.getElementById("openBTN").className = "opened";
        document.getElementById("openBTN").innerHTML = "&times";
        document.getElementById("sideNav").style.transform="rotate(180deg)";
                  
    }
    else if(Name === "opened"){
        document.getElementById("overlay").style.height ="0%";    
        document.getElementById("openBTN").className = "closed";
        document.getElementById("openBTN").innerHTML = "&#9776";
        document.getElementById("sideNav").style.transform="rotate(-180deg)";
    }
}




$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight() ;
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
