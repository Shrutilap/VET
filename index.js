$(".nav-items").hover(function(){
    $(".nav-items").addClass("item-pink")
}, function(){
    $(".nav-items").removeClass("item-pink")
})

$(".homeButton").hover(function(){
    $(".homeButton").addClass("homeButtonHover")
}, function(){
    $(".homeButton").removeClass("homeButtonHover")
})

$(".howButton").hover(function(){
    $(".howButton").addClass("howButtonHover")
}, function(){
    $(".howButton").removeClass("howButtonHover")
})

$(".forthComingEventButton").hover(function(){
    $(".forthComingEventButton").addClass("forthComingEventButtonHover")
}, function(){
    $(".forthComingEventButton").removeClass("forthComingEventButtonHover")
})

$(".joinButton").hover(function(){
    $(".joinButton").addClass("joinButtonHover")
}, function(){
    $(".joinButton").removeClass("joinButtonHover")
})


// ________________________________________________________
$(".aboutGoalCol1").hover(function(){
    $(".aboutGoalCol1").addClass("aboutGoalColhover")
}, function(){
    $(".aboutGoalCol1").removeClass("aboutGoalColhover")
})


$(".aboutGoalCol2").hover(function(){
    $(".aboutGoalCol2").addClass("aboutGoalColhover")
}, function(){
    $(".aboutGoalCol2").removeClass("aboutGoalColhover") 
})

$(".aboutGoalCol3").hover(function(){
    $(".aboutGoalCol3").addClass("aboutGoalColhover")
}, function(){
    $(".aboutGoalCol3").removeClass("aboutGoalColhover") 
})

$(".aboutGoalCol4").hover(function(){
    $(".aboutGoalCol4").addClass("aboutGoalColhover")
}, function(){
    $(".aboutGoalCol4").removeClass("aboutGoalColhover") 
})

$(".aboutGoalCol5").hover(function(){
    $(".aboutGoalCol5").addClass("aboutGoalColhover")
}, function(){
    $(".aboutGoalCol5").removeClass("aboutGoalColhover") 
})

$(".aboutGoalCol6").hover(function(){
    $(".aboutGoalCol6").addClass("aboutGoalColhover")
}, function(){
    $(".aboutGoalCol6").removeClass("aboutGoalColhover") 
})

//----------------------------------------------
$(".eligibilityCard1").hover(function(){
    $(".eligibilityCard1").addClass("eligibilityCardHover")
}, function(){
    $(".eligibilityCard1").removeClass("eligibilityCardHover") 
})
$(".eligibilityCard2").hover(function(){
    $(".eligibilityCard2").addClass("eligibilityCardHover")
}, function(){
    $(".eligibilityCard2").removeClass("eligibilityCardHover") 
})
//------------------------------------------------------------
$(".keyAdmissionCard1").hover(function(){
    $(".keyAdmissionCard1").addClass("keyAdmissionCardHover")
}, function(){
    $(".keyAdmissionCard1").removeClass("keyAdmissionCardHover") 
})
$(".keyAdmissionCard2").hover(function(){
    $(".keyAdmissionCard2").addClass("keyAdmissionCardHover")
}, function(){
    $(".keyAdmissionCard2").removeClass("keyAdmissionCardHover") 
})
$(".keyAdmissionCard3").hover(function(){
    $(".keyAdmissionCard3").addClass("keyAdmissionCardHover")
}, function(){
    $(".keyAdmissionCard3").removeClass("keyAdmissionCardHover") 
})

const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
});

const goPrev = () =>{
    counter--;
    imageSlider();

}

const goNext = () =>{
    counter++;
    imageSlider();
}
const imageSlider = () =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`;
        }
    )
}

const calltoaction = document.querySelector(".homeButton.homeColContentInner");
calltoaction.addEventListener("click", ()=>{
    window.location.href = 'https://youtu.be/7ZpIX_cqE2A?si=UcvCdMbgh2fz-dFj';
});

const linkedin = document.querySelector(".linkedin");
linkedin.addEventListener("click", ()=>{
    window.location.href = "https://www.linkedin.com/company/validusedutech";
})

const youtube = document.querySelector(".youtube");
youtube.addEventListener("click", ()=>{
    window.location.href = "https://www.youtube.com/@validus.edutech";
})
   
const instagram = document.querySelector(".instagram");
instagram.addEventListener("click", ()=>{
    window.location.href = "https://www.instagram.com/validus_edutech?igsh=Mmtnd21mY2pnemp5";
})

const twitter = document.querySelector(".twitter");
twitter.addEventListener("click",()=>{
    window.location.href = "https://x.com/ValidusEduTech";
})


