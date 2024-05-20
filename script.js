const imgOne = document.querySelector(".img1");
const imgTwo = document.querySelector(".img2");
const goBtn = document.querySelector(".btn");
const winnerIs = document.querySelector(".text .winner");

goBtn.addEventListener('click', () => { 
    var randomNumber1 = Math.floor((Math.random() * 6)+1);
    var randomNumber2 = Math.floor((Math.random() * 6)+1);
   
    imgOne.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    imgTwo.setAttribute("src", "images/dice" + randomNumber2 + ".png"); 
    if (randomNumber1 > randomNumber2) { 
        winnerIs.innerHTML = "Player 1 wins!";
    } else if (randomNumber1 == randomNumber2) { 
        winnerIs.innerHTML = "It's a tie! Let's try again!";
    } else { 
        winnerIs.innerHTML = "Player 2 wins!";
    }

    setTimeout(function(){
        window.location.reload();
     }, 30000);
})






