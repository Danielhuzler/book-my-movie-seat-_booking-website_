'use strict';

const moviesEl = document.getElementById('movies');

const screenContainerEl = document.querySelector('.screen-container');

const countEl = document.getElementById('count');

const totalEl = document.getElementById('total');

// Global variable

let TicketPrice = Number(moviesEl.value);
let TotalCost = 0;
let totalSeat = 0;

// function

function UpdateCountAndPrice(){
    countEl.textContent = totalSeat;
    totalEl.textContent = TotalCost;

}

// Add event listeners

moviesEl.addEventListener('change', (e) => {
    TicketPrice = Number(moviesEl.value);
})

screenContainerEl.addEventListener('click',(e)=> {
    if (e.target.classList.contains('seat')) {
        if (!e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');

            totalSeat = document.querySelectorAll('.row .seat.selected').length;

            TotalCost = TicketPrice * totalSeat;

            UpdateCountAndPrice()
        }
    }

})