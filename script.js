// ==========================
// IAMVI CARS SCRIPT
// ==========================

// Live Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });
}

// Booking Form
const bookingForm = document.querySelector("form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("🎉 Thank you! Your test drive has been booked successfully.");

        bookingForm.reset();

    });

}

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Card Animation
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// Statistics Animation
const stats=document.querySelectorAll(".stats h2");

stats.forEach(stat=>{

let target=parseInt(stat.innerText);

let count=0;

let speed=target/100;

function update(){

count+=speed;

if(count<target){

stat.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

stat.innerText=target+"+";

}

}

update();

});

// Welcome Message
window.onload=function(){

console.log("Welcome to IAMVI CARS Luxury Dealership");

};
