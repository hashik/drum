var ct = document.querySelectorAll(".drum").length;

for(var i = 0; i < ct; i++){
	
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
			var txt = this.innerHTML;
			make_sound(txt);
			
	});
}

addEventListener("keypress", function(e){

	make_sound(e.key);
});

function make_sound(txt){
	switch(txt){
		case "w" :
			var snd = new Audio('sounds/tom-1.mp3');
			snd.play();
		break;
		case "a" :
			var snd = new Audio('sounds/tom-2.mp3');
			snd.play();
		break;
		case "s" :
			var snd = new Audio('sounds/tom-3.mp3');
			snd.play();
		break;
		case "d" :
			var snd = new Audio('sounds/tom-4.mp3');
			snd.play();
		break;
		case "j" :
			var snd = new Audio('sounds/snare.mp3');
			snd.play();
		break;
		case "k" :
			var snd = new Audio('sounds/crash.mp3');
			snd.play();
		break;
		case "l" :
			var snd = new Audio('sounds/kick-bass.mp3');
			snd.play();
		break;
	}

	perfectKey(txt);
}

function perfectKey(keyp){

	var theKey = document.querySelector("."+keyp);
	theKey.classList.add('pressed');
	setTimeout(function() {
			theKey.classList.remove("pressed");
	}, 100);
}