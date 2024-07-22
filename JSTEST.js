
function randomize(list) {
    for (let i = 0; i < list.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
}

let cards = [
    14,
    121,
    39,
    422,
    575,
    12,
    5,
    808,
    91,
    144,
    2,
    17
]
console.log(cards)
randomize(cards)
console.log(cards)
