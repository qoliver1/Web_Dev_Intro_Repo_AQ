const mySlider = document.querySelector("#myInput");
const h1elem = document.querySelector("#myElem");
const elemParent = document.querySelector("#parentElem");
const allPClassElems = document.querySelectorAll(".new-p-class");
h1elem.innerHTML = mySlider.value;
//hideValues(mySlider.value);

mySlider.addEventListener("change", () => {
    h1elem.innerHTML = mySlider.value;
    myWhileLoop(mySlider.value);
    //hideValues(mySlider.value);
});

function myWhileLoop(sliderVal) {
    elemParent.innerHTML = "";
    for (let i = 0; i < sliderVal; i++) {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = "New paragraph was made";
        // newParagraph.classList.add("new-p-class");
        elemParent.appendChild(newParagraph);
        console.log("While loop called");
    }
}

// function hideValues(sliderVal) {
//     let i = 0;
//     while (i < allPClassElems.length) {
//         if (i < sliderVal) {
//             allPClassElems[i].style.display = "block";
//         } else {
//             allPClassElems[i].style.display = "none";
//         }
//         i++;
//     }
// }
