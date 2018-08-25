// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE

    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)

    // This is the makeBlue event listener
    dots[i].addEventListener('click', makeBlue)

    // event listener for the invisible function
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE

function makeBlue (evt) {
  // preventDefault may not be necessary.
  evt.preventDefault()
  evt.target.classList.toggle('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE

function hide (evt) {
  // preventDefault may not be necessary.
  evt.preventDefault()
  evt.target.classList.toggle('invisible')
  updateCounts()
}

//

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0,
  }
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  // variable, for loop, if/else if.

  var dots = document.getElementsByClassName('board')[0].children;

   for (var i = 0; i < dots.length; i++) {

      if (dots[i].classList.contains('blue')) {
        totals.blue++;
      } else if (dots[i].classList.contains('green')) {
        totals.green++;
      } else if (dots[i].classList.contains('invisible')){
        totals.invisible++;
      }
    }
// What I would like to do
// I would like to make the invisible number of dots automatically start at 8, and then lower
// with each blue or green dot marked. Trying to do that now. :) 


  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
