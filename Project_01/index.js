const flipBtn = document.getElementById("flip");
const guessText = document.getElementById("Guess-text");
const coin = document.querySelector("img");

function flipCoin() {
  let guess = Math.floor(Math.random() * 10);
  console.log(guess);
  if (guess < 6) {
    guessText.innerHTML = "Heads";
  } else {
    guessText.innerHTML = "Tails";
  }
}

flipBtn.addEventListener("click", flipCoin);
coin.addEventListener("click", flipCoin);


// animate coin for better ux
