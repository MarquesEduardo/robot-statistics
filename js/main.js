const control = document.querySelectorAll("[data-control]")
const statistic = document.querySelectorAll("[data-statistic]")
const pieces = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "armor": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores":{
        "strength": -10,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}


control.forEach((element) => {
    element.addEventListener('click', (evento) => {
        dataManipulation(evento.target.dataset.control, evento.target.parentNode)
        updateStatistics(evento.target.dataset.piece)
    })
})

function dataManipulation(operation, control) {
    const piece = control.querySelector("[data-counter]")
    if(operation === "-") {
        piece.value = parseInt(piece.value) - 1
    }
    else {
        piece.value = parseInt(piece.value) + 1
    }
}

function updateStatistics(piece) {
    statistic.forEach((element) => {
        element.textContent = parseInt(element.textContent) + pieces[piece][element.dataset.statistic]
    })
}