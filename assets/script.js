var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}

/*
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./assets/bowtie-cat.png") {
    myImage.setAttribute("src", "./assets/Kakapo.jpg");
  } else {
    myImage.setAttribute("src", "./assets/bowtie-cat.png");
  }
};

var birdClue = "Click on the bowtie cat at the top for a surprise.";
console.log(birdClue);