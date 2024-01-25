
// OWL carausel configuration
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})




// Parent Collaps button for course module page
function sideMenuCollaps(){
    let firstLi = document.querySelector('.partenaire-course-module-sidemenu-step-two-list');
    firstLi.classList.toggle('hideParentTopic');
}

// Child Collaps button for course module page
function sideMenuCollapsSecond(){
    let topics = document.querySelectorAll('.partenaire-course-module-topic');
    let liLength = topics.length;
    let firstLi = document.querySelector('.partenaire-course-module-sidemenu-step-two-list');
    firstLi.style.display = "block";

    for(let i = 0; i < liLength; i++){
        console.log(topics[i]);
        topics[i].classList.toggle('hideParentTopic');
    }
}



// Tab view for course module page based on side menu
function viewContent(content){
    let x = document.getElementsByClassName("partenaire-sidemenu-content");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(content).style.display = "block"; 
}