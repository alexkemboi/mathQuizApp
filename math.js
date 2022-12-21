var randomFirstno=0;
var randomSecondno = 0;
function verify() {
    const value = document.getElementById('gameOneAnswer').value;
    const getRandom = Math.floor((Math.random() * 3 + 1));
    const p = document.createElement('p');
    if (value == getRandom) {
        p.innerHTML = 'Correct proceed to next game';
        document.getElementById("gameOne").append(p);

        //second part of game
        randomFirstno = Math.floor((Math.random() * 10 + 1));
        randomSecondno = Math.floor((Math.random() * 10 + 1));
        const h = document.createElement('h');
        h.innerHTML=`${randomFirstno}+${randomSecondno}=?`;
        document.getElementById("quiz").append(h);
    } else {
        p.innerHTML = `Wrong number i.e.${getRandom}. Please try again!`;
        document.getElementById("gameOne").append(p);
    }  
}

function compute() {
    const answer = document.getElementById('gameTwoAnswer').value;
    const value=randomFirstno+randomSecondno;
    const p = document.createElement('p');
    if (value == answer) {
        p.innerHTML = 'You entered correct answer';
    } else {
        p.innerHTML = `You have entered wrong answer. Please try again!`;
    }
    document.getElementById("gameTwo").append(p);
}