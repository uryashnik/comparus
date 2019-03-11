const table = document.getElementById('field');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
var selected; // Выбранная пользователем ячейка.
var sellItem; // Случано выбранная ячейка.

var playerScore = 0, pcScore = 0;
function onTdClick(e) {
    const target = e.target;
    selected = target;
    while (table != target) {
        if (target.tagName == 'TD') {
            highlight(target);
            console.log(target);
            result = target;
            return;
        }
        target = target.parenNode;
    }
};
table.addEventListener('click', onTdClick);
function highlight(node) {
    node.style.background = 'red';
};
function randomCell() {
    const r = Math.floor(Math.random() * 10);
    const c = Math.floor(Math.random() * 10);
    const tr = document.getElementsByTagName('tr');
    const td = tr[r].getElementsByTagName('td');
    td[c].style.background = 'black';
    sellItem = td[c];
    console.log(sellItem);
    if(selected){
        selected.style.background = '#2E9AFE';
    }
    selected = undefined;
};



function myFunc() {
    if (sellItem) {
        sellItem.style.background = "#2E9AFE";
    }
    randomCell();
    setTimeout(() => {
        if (selected === sellItem) {
            playerScore++;
            player.innerText = playerScore;
            console.log(playerScore);
        } else {
            pcScore++;
            computer.innerText = pcScore;
        };
        myFunc();
    }, 2000)
};

myFunc();

