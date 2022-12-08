// get all elements needed for the best effect

const numbers = document.querySelectorAll('.number-style')
const rating = document.querySelector('#rating')
const final = document.querySelector('#final')
const button = document.querySelector('.button')
const noRatingText = document.querySelector('#no-rating')
const selectedNumber = document.querySelector('.selected-number')

//get number for numbers array to be able to reference and manipulate later
let arrNumber = 0

// selection of number
numbers.forEach(function(event) {
    event.addEventListener('click', function(e) {
        e.preventDefault()
        // remove previous clicked
        if(numbers[arrNumber].classList.contains('clicked') === true) {
            numbers[arrNumber].classList.remove('clicked')
        }
        // this change arrnumber to suitable number for array (as they have the number in the text i decided to us this and then just take away to match what i need for the array)
        arrNumber = e.target.innerText - 1
        // add back the class of clicked to make it highlighted
        e.target.classList.add('clicked') 
        noRatingText.classList.add('hidden')

    })
})

// button event
button.addEventListener('click', function() {
    // making sure that we can submit without giving a rating and also a prompt
    if(numbers[arrNumber].classList.contains('clicked') !== true) {
        noRatingText.classList.remove('hidden')
    } 
    else {
        // changes the number on final page to be what the rating was.
        selectedNumber.textContent = arrNumber + 1

        // switches two views
        rating.classList.add('hidden')
        final.classList.remove('hidden')
    }
})

// orriginal code

// let arrNumber = 0

// // selection of number
// numbers.forEach(function(e) {
//     e.addEventListener('click', function(e) {
//         // remove previous clicked
//         if(numbers[arrNumber].classList.contains('clicked') === true) {
//             numbers[arrNumber].classList.remove('clicked')
//         }
//         // this change arrnumber to suitable number for array (as they have the number in the text i decided to us this and then just take away to match what i need for the array)
//         arrNumber = e.target.innerText - 1
//         // add back the class of clicked to make it highlighted
//         e.target.classList.add('clicked') 
//         noRatingText.classList.add('hidden')

//     })
// })

// // button event
// button.addEventListener('click', function() {
//     // making sure that we can submit without giving a rating and also a prompt
//     if(numbers[arrNumber].classList.contains('clicked') !== true) {
//         noRatingText.classList.remove('hidden')
//     } 
//     else {
//         // changes the number on final page to be what the rating was.
//         selectedNumber.textContent = arrNumber + 1

//         // switches two views
//         rating.classList.add('hidden')
//         final.classList.remove('hidden')
//     }
// })


