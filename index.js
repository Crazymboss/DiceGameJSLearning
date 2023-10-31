function diceGame(){
	function randomFirst(){
		let randomNumber1 = Math.floor((Math.random() * 6)+1);
		let diceImg = "dice"+randomNumber1+".png";
		document.querySelector(".img1").src = "images/"+ diceImg;
		return randomNumber1;
	}
	function randomSecond(){
		let randomNumber2 = Math.floor((Math.random() * 6)+1);
		let diceImg = "dice"+randomNumber2+".png";
		document.querySelector(".img2").src = "images/"+ diceImg;   
		return randomNumber2;
	}
	const firstValue = randomFirst();
	const secondValue = randomSecond();

	if(firstValue > secondValue){
		document.querySelector("h1").innerHTML = "Player 1 WON!!";
	} else if (firstValue < secondValue){
		document.querySelector("h1").innerHTML = "Player 2 WON!!";
	}else {
		document.querySelector("h1").innerHTML = "It's a draw!!";
	}
}
diceGame();
