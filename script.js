let imageOne = document.getElementById("image-one");
let imageTwo = document.getElementById("image-two");
let imageThree = document.getElementById("image-three");

let captionOne = document.getElementById("caption-one");
let captionTwo = document.getElementById("caption-two");
let captionThree = document.getElementById("caption-three");

let storyTitle = document.getElementById("story-title");

let storyOneButton = document.getElementById("story-one");

function showStoryOne() {

    storyTitle.innerHTML = "Story 1: The Storm Arrives";

    imageOne.src = "images/storm.png";
    imageTwo.src = "images/walking-umbrella.png";
    imageThree.src = "images/umbrellas.png";

    captionOne.innerHTML = "Dark clouds gather over the water.";
    captionTwo.innerHTML = "A person walks through the rain with an umbrella.";
    captionThree.innerHTML = "People protect themselves as the rain continues.";
}

storyOneButton.addEventListener("click", showStoryOne);
