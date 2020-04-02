const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* ************ */
/* Editing HTML */
/* ************ */

const heading1 = document.querySelector("h1");
const heading2 = document.createElement("h2");
heading1.innerHTML = 'Ruiqi Lai and Nicholas Stewart';
heading2.innerHTML = 'Image Gallery';

/* ********************** */
/* Looping through images */
/* ********************** */

const image_file_indices = [1, 2, 3, 4, 5];

image_file_indices.forEach((element) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + element + '.jpg');
    thumbBar.appendChild(newImage);

    // Adding onclick handler
    newImage.onclick = function handleClick(){
        displayedImage.src = newImage.src;
    }


})



/* *********************************** */
/* Wiring up the Darken/Lighten button */
/* *********************************** */

btn.onclick = function() { /*reference from MDN and Professor Discord Streaming*/
    /*the main logic of the code is setup a botton called dark
    once click on the button, the color changes and the name of the button changes to lighten*/
    const button_class = btn.getAttribute("class"); 
    if (button_class === "dark") {
      btn.setAttribute("class", "light"); 
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgba(0, 0 , 0, 0.5)";
    } else { 
      btn.setAttribute("class", "dark")
      btn.textContent = "Darken"; 
      overlay.style.backgroundColor = "rgba(0, 0 , 0, 0)";  
    }
}