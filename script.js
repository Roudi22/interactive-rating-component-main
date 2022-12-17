var card = document.querySelector(".card");
var playing = false;
const content = document.querySelector(".content");
const submitBtn = document.querySelector(".submit-btn");
const ratingList = document.querySelectorAll("li");
const selectionText = document.querySelector(".selection-text");

let chosenRating;

ratingList.forEach((element) => {
    element.addEventListener('click', (e) => {
        chosenRating =  e.target.innerText
      for (let i = 0; i < ratingList.length; i++) {
        ratingList[i].classList.remove('selected')
      }
      e.currentTarget.classList.add('selected')
    })
})




submitBtn.addEventListener('click',function() {
    selectionText.innerText = `You selected ${chosenRating} out of 5`
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: content,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    
  });
});
