//target all elements to save to constants
const page0btn=document.querySelector("#page0btn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page0=document.querySelector("#page0");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");
const page4=document.querySelector("#page4");
const factgenerator=document.querySelector("#FactButton");
const FactsHere=document.querySelector("#FactsHere");
const Resetfact=document.querySelector("#ResetFacts");
const popAudio = new Audio("audio/popSound.mp3");
const buttonclicksound = new Audio("audio/ButtonClick.mp3");
const Resetsound = new Audio("audio/ResetSound.mp3");
const QuizSubmit = new Audio("audio/quizsubmitsound.mp3");
const btnSubmit=document.querySelector("#quizbtnSubmit");
const btnreset=document.querySelector("#quizresetbtn");
const scorebox=document.querySelector("#scorebox");
const dropdownmenu=document.querySelector("#menuicon");
const dropdownappear=document.querySelector('.pagelist');
const gamestart=document.querySelector("#gamestartbutton");
const playercontroller=document.querySelector('#playercontrol');
const gamestatustext=document.querySelector('#gamestatus');
const Rock = document.querySelector("#Rock");
const mobileleft = document.querySelector("#mobilegameleft");
const mobileright = document.querySelector("#mobilegameright");
const mobilereset = document.querySelector("#mobilegamereset");
const mobilejump = document.querySelector("#mobilegamejump");
let RockX = 95;
let posX = 0;
let posY = 0;
let isKeyPressed = false;
let gameRunning = false;
var q1,q2,q3,q4,score=0;
const facts = [ "Snakes can hear despite having no external ears.",
				"Some give live birth while others lay eggs.",
				"Snakes aren't slimy!",
				"They truly come in ALL sizes.",
				"Of almost 4,000 known species of snake, about 600 are considered venomous.",
				"Snakes are strictly carnivorous and eat their prey whole.",
				"Some snake species produce sound as a warning.",
				"They are “solar-powered” and rely fully on external heat or light sources",
				"Snakes don't have eyelids",
				"They smell with their tongues",
				"Snakes have 5 forms of locomotion",
				"They can 'SEE' heat",
				"Their venom can be used to kill or cure",
				"Some species can fly"];
		
		
function hideall()
{ 	
	//function to hide all pages
	//ClassList.remove removes the active class onto the page0 element
	page0.style.display="none";
	page1.style.display="none";
	page2.style.display="none";
	page3.style.display="none";
	page4.style.display="none";
}

//call hideall function to hide all pages
hideall(); 
//ClassList.add adds the active class onto the page0 element
page0.style.display="block";

//Listen for clicks on the buttons, once click is heard, the anonymous (no given name) function will run
page0btn.addEventListener("click", function() 
{
	hideall();
	page0.style.display="block";
	/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
	popAudio.pause();
	popAudio.currentTime = 0;
	popAudio.play(); //play the audio!
});

page1btn.addEventListener("click", function () 
{
	hideall(); //we don't know which page is shown, so hideall
	page1.style.display="block";
	/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
	popAudio.pause();
	popAudio.currentTime = 0;
	popAudio.play(); //play the audio!
});

page2btn.addEventListener("click", function () 
{
	hideall(); //we don't know which page is shown, so hideall
	page2.style.display="block";
	/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
	popAudio.pause();
	popAudio.currentTime = 0;
	popAudio.play(); //play the audio!
});

page3btn.addEventListener("click", function () 
{
	hideall(); //we don't know which page is shown, so hideall
	page3.style.display="block";
	/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
	popAudio.pause();
	popAudio.currentTime = 0;
	popAudio.play(); //play the audio!
});


page4btn.addEventListener("click", function () 
{
	hideall(); //we don't know which page is shown, so hideall
	page4.style.display="block";
	/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
	popAudio.pause();
	popAudio.currentTime = 0;
	popAudio.play(); //play the audio!
});

//this is for the mobile drowndown menu
dropdownmenu.addEventListener("click", menu);

function menu()
{
	//toggles between adding and removing the dropdownclass to .pagelist, making it so that if it clicks once it appears and if it clicks again it disappears
	dropdownappear.classList.toggle("dropdownclass");
	
	//makes it so that if menuicon is already open, plays closing animation, if not play opening animation
	if(dropdownmenu.classList.contains("anim1"))
	{
		dropdownmenu.classList.remove("anim1");
		dropdownmenu.classList.add("anim2");
		
	}	
	else
	{
		dropdownmenu.classList.remove("anim2");
		dropdownmenu.classList.add("anim1");
	}
}



factgenerator.addEventListener("click", GenerateFact);

function GenerateFact()
{
	/* Math.floor rounds a number down to the largest integer less than or equal to the given number.*/
	/* by multipling the Math.random by the length of the facts array, it ensures that any random number generated will be within the number in the array and stores that number in randomIndex and the FactsHere.textContent = facts[randomIndex]; will replace the text in the html element with the ID FactsHere with the text in the facts array at index randomIndex */
	/* buttonclicksound.pause(); pauses the audio currently being played, buttonclicksound.currentTime = 0; resets the audio back to the start and buttonclicksound.play(); plays the audio. So, if someone were to spam click the button over and over, the audio will be able to be played over and over in quick sucession */
	buttonclicksound.pause();
	buttonclicksound.currentTime = 0;
	buttonclicksound.play();
	const randomIndex = Math.floor(Math.random() * facts.length);
	FactsHere.textContent = facts[randomIndex];
	FactsHere.style.color = "black";
	FactsHere.style.backgroundColor= "#146317";
}



Resetfact.addEventListener("click", resetfact);

function resetfact()
{
	Resetsound.pause();
	Resetsound.currentTime = 0;
	Resetsound.play(); //play the audio!
	FactsHere.textContent = "The facts will appear here";
	FactsHere.style.color = "white";
	FactsHere.style.backgroundColor= "transparent";
}



btnreset.addEventListener("click",ResetQuiz);

function ResetQuiz()
{
	Resetsound.pause();
	Resetsound.currentTime = 0;
	Resetsound.play();
	//this code find the input with the name of q(number) that is checked and changes it from true to false, thus making it unchecked. 
	document.querySelector("input[name='q1']:checked").checked = false;
	document.querySelector("input[name='q2']:checked").checked = false;
	document.querySelector("input[name='q3']:checked").checked = false;
	document.querySelector("input[name='q4']:checked").checked = false;
	
	
	scorebox.textContent="Not Submitted";
	score=0;
}



btnSubmit.addEventListener("click",CheckAns);

function CheckAns()
{
	QuizSubmit.pause();
	QuizSubmit.currentTime = 0;
	QuizSubmit.play(); 
	
	//reset score to 0, check ans and give score if correct	
	score=0; 
	//"input[name='q1']:checked". what this code does is that it selects all inputs with the name (in this case q1) and then selects the checked option from those inputs. The .value will get the value of that final selected input and store it (in this case in q1)
	q1=document.querySelector("input[name='q1']:checked").value;
	//if q1's is equal to Option2, score increases by 1
	if(q1=="Option2")score++;

	q2=document.querySelector("input[name='q2']:checked").value;
	if(q2=="Option3")score++;

	q3=document.querySelector("input[name='q3']:checked").value;
	if(q3=="Option2")score++;

	q4=document.querySelector("input[name='q4']:checked").value;
	if(q4=="Option4")score++;
	
	
	//if score is equal to any of these values, the respective text will appear.
	if (score == 4)
	{
		
		scorebox.textContent="Score: " +score +"/4" +" Good Job, All Correct";
		
	}
	else if (score == 3)
	{
		
		scorebox.textContent="Score: " +score +"/4" +" Good Effort, So Close";
	
	}
	else
	{
		scorebox.textContent="Score: " +score +"/4" +" Good Try";

	}
}



gamestart.addEventListener("click", GameStart);

let rockmoving;

function GameStart()
{
	//disables the gamestart button from being able to be clicked, stopping the click event from happening and the function won't run
	gamestart.disabled = true;
	gameRunning = true;
	gamestatustext.innerHTML = "Game Running";
	buttonclicksound.pause();
	buttonclicksound.currentTime = 0;
	buttonclicksound.play();	
	// Set interval so that every 20 ms, this function will run again and the rock will move 2% again and again.
	rockmoving = setInterval(function () 
	{
		RockX -= 2;
		Rock.style.left = RockX + "%";

		if (RockX < 0) 
		{
			RockX = 95;
		}
		
	}, 20);
}
	

//These are for coding the movement of the player
document.addEventListener('keydown', function (buttonpressed)
{
	
		
	// if the game isn't running, inputs won't work.
	if (!gameRunning)
	{
		return;
	}

	
	//if not on the mini-game page, inputs won't work.
	if (page4.style.display !== "block")
	{
		return;
	}
		
	//while pressing down W, if other inputs are pressed, they won't work.
	if (isKeyPressed == true && buttonpressed.code !== "KeyW") 
	{
       return; 
	}
	
	
	if (buttonpressed.code === "KeyA")
	{
		//makes it so that the player cannot go outside the game container from the left. 
		if(posX > 0)
		{
			//everytime A is pressed, posX of player increase by 2 to the left
			posX -= 2; 
			//makes it so that the values are in percentage
			playercontroller.style.left = posX + "%";
		}
	}
		
	if (buttonpressed.code === "KeyD")
	{
		//makes it so that the player cannot go outside the game container from the right. 
		if(posX < 98)
		{
			//everytime D is pressed, posX of player increase by 2 to the right
			posX += 2;
			//makes it so that the values are in percentage
			playercontroller.style.left = posX + "%";
			CheckWin();
		}
	}
		
	if (buttonpressed.code === "KeyR")
	{
		restart();
	}
		
	if (buttonpressed.code === "KeyW")
	{
		//if W is pressed, posY of player increases by 20, making it go up
		isKeyPressed = true;
		posY = 20;
		//makes it so that the values are in percentage
		playercontroller.style.bottom = posY + "%";
		//shifts the background to see the sprite at 100% aka the second sprite / second frame
		playercontroller.style.backgroundPositionX = (1* 100) + "%";
	}
	
});

	
	
document.addEventListener("keyup", function (buttonreleased)
{	
	if (buttonreleased.code === "KeyW")
	{
		isKeyPressed = false;
		posY = 0;               
		playercontroller.style.bottom = posY + "%";

		//shifts the background to see the sprite at 0% aka the first sprite / first frame
		playercontroller.style.backgroundPositionX = (0* 100) + "%";
	}
});
	


//This is for coding the win condition
// if posX is bigger than or equal to 95%, player wins
function CheckWin()
{
	if (posX >= 95)
	{
		gamestatustext.innerHTML = "YOU WIN";
		clearInterval(rockmoving);
	}
}
	
	
//function for resetting the game
function restart()
{
	//sets player back to beginning
	posX = 0;
	posY = 0;
	
	//sets rock back to beginning
	RockX = 90;
	
	//makes it so that the values are in percentage
	playercontroller.style.left = posX + "%";
	playercontroller.style.bottom = posY + "%";
	Rock.style.left = RockX + "%";
		
	gameRunning = false;
	
	
	//removes the rock movement SetInterval.
	clearInterval(rockmoving);
	//allows start game button to be pressed again.
	gamestart.disabled = false;
	gamestatustext.innerHTML = "Not Running";
}




//This is for the mobile buttons
mobileleft.addEventListener("click", moveleftmobile);

function moveleftmobile()
{
	buttonclicksound.pause();
	buttonclicksound.currentTime = 0;
	buttonclicksound.play();
	
	//The following code will only run when gameRunning is equal to true
	if (gameRunning == true)
	{
		if(posX > 0)
		{
			posX -= 5; 
			playercontroller.style.left = posX + "%";
		}
	}
}



mobileright.addEventListener("click", moverightmobile);

function moverightmobile()
{
	buttonclicksound.pause();
	buttonclicksound.currentTime = 0;
	buttonclicksound.play();
	
	//The following code will only run when gameRunning is equal to true
	if (gameRunning == true)
	{
		if(posX < 98)
		{
			posX += 5;
			playercontroller.style.left = posX + "%";
			CheckWin();
		}
	}
}



mobilereset.addEventListener("click", resetmobile);

function resetmobile()
{
	buttonclicksound.pause();
	buttonclicksound.currentTime = 0;
	buttonclicksound.play();
	
	restart();
}



mobilejump.addEventListener("click", jumpmobile);
function jumpmobile()
{
	buttonclicksound.pause();
	buttonclicksound.currentTime = 0;
	buttonclicksound.play();
	
	//The following code will only run when gameRunning is equal to true
	if (gameRunning == true)
	{
		posY = 20;
		playercontroller.style.bottom = posY + "%";	
		playercontroller.style.backgroundPositionX = (1* 100) + "%";
		
		setTimeout(function ()
		{
			posY = 0;
			playercontroller.style.bottom = posY + "%";
			playercontroller.style.backgroundPositionX = (0* 100) + "%";
		}, 200); 
	}
}


//makes collision function run evert 10 ms
setInterval (collison, 10);


function collison()
{
	let distance = RockX - posX;

	//makes it so that rocks that past the player won't have collision while rocks ahead still do
	if (distance < 4 && distance > 0)
	{
		//if the x distance between the rock and player and the y distance between the rock and player are within the set amounts, collision detected and game restart
		if(posY < 0.5)
		{
			restart();
		}
	}
}  








