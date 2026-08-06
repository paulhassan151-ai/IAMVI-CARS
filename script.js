// ================================
// IAMVI CARS Luxury Dealership
// ================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Vehicle Search
const search=document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const title=card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// Booking Form
const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you for choosing IAMVI CARS.\nOur sales team will contact you shortly.");

form.reset();

});

}

// Counter Animation
const counters=document.querySelectorAll(".stats h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

let count=parseInt(counter.getAttribute("data-count"))||0;

const increment=Math.ceil(target/80);

if(count<target){

count+=increment;

counter.setAttribute("data-count",count);

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

// Welcome Message
window.addEventListener("load",()=>{

console.log("IAMVI CARS Luxury Website Loaded");

});
