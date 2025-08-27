let modBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMod = "light"; 
modBtn.addEventListener("click",()=>{
    if(currMod==="light"){
        currMod = "dark";
        body.classList.add("dark");
        body.classList.remove("light")


    }else{
        currMod = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMod);
});
// Get all thumbnails
let thumbnails = document.querySelectorAll(".img-thumbnail");
let fullscreen = document.getElementById("fullscreen");
let fullscreenImg = document.getElementById("fullscreen-img");
let closeBtn = document.getElementById("closeBtn");

// Open fullscreen when image is clicked
thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    fullscreen.style.display = "flex";
    fullscreenImg.src = img.src;  // set clicked image
  });
});

// Close fullscreen
closeBtn.addEventListener("click", () => {
  fullscreen.style.display = "none";
});

// Also close when clicking outside the image
fullscreen.addEventListener("click", (e) => {
  if (e.target === fullscreen) {
    fullscreen.style.display = "none";
  }
});
