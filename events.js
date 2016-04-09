// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var sections = document.getElementsByTagName("section");
var outputTarget = document.getElementById("output-target");
var h1Tag = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input");
var colorButton = document.getElementById("add-color");
var guineaPig = document.getElementById("guinea-pig");
var hulk = document.getElementById("make-large");
var captureIt = document.getElementById("add-border");
var rounder = document.getElementById("add-rounding");
var buttons = document.getElementsByTagName("button")


for (var i=0;i<sections.length;i++) {
  sections[i].addEventListener("click", function() {
    outputTarget.innerHTML = "You clicked on the {" + this.textContent + "} section!";
  });
}

// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

h1Tag.addEventListener("mouseover", function(){
  outputTarget.innerHTML = "You moved your mouse over the header"
});

// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1Tag.addEventListener("mouseout", function(){
  outputTarget.innerHTML = "You left me!!"
});

// 4. When you type characters into the input field, the output element should mirror the text in the input field.

inputField.addEventListener("keypress", function(){
  var textInput = inputField.value;
  outputTarget.innerHTML = textInput;
});

// 5. When you click the "Add color" button, the `guinea-pig` element's text color should change to blue.


colorButton.addEventListener("click", function(){
  guineaPig.classList.toggle("blue");
});

// 6. When you click the "Hulkify" button, the `guinea-pig` element's font size should become much larger.

hulk.addEventListener("click", function(){
  guineaPig.classList.toggle("bigger");
});

// 7. When you click the "Capture it" button, the `guinea-pig` element should have a border added to it.

captureIt.addEventListener("click", function(){
  guineaPig.classList.toggle("bordered");
});

// 8. When you click the "Rounded" button, the `guinea-pig` element's border should become rounded.

rounder.addEventListener("click", function(){
  guineaPig.classList.toggle("rounded");
});

// 9. The first section's text should be bold.
sections[0].classList.add("bolded");

// 10. The last section's text should be bold and italicized.
sections[5].classList.add("bolded", "italicized");

// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

for (var i=0;i<buttons.length;i++) {
  buttons[i].classList.add("blockElement")
};
