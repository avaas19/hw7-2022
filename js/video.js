
var video = document.querySelector('#player1');
video.defaultPlaybackRate = 1;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load()
	video.autoplay = false
	video.loop = false

});

//plays the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play New Video");
	document.querySelector('#volume').innerHTML = video.volume *100 + '%'
	video.play()
});

//Pauses the video
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
});

//decreases the playback rate of the video
document.querySelector("#slower").addEventListener("click", function() {
	console.log(video.playbackRate += -0.1)
});

//Increases the plaback rate of the video
document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate += 0.1)
});

// Skips the video ahead 10 seconds
document.querySelector("#skip").addEventListener("click", function() {
	maxTime = 67.403333
	Time = video.currentTime += 10
	if (Time > maxTime) {
		Time = video.currentTime = 0
	}
	console.log(Time)
});

// adds oldSchool class to video
document.querySelector("#vintage").addEventListener("click", function() {
  	video.classList.add("oldSchool")
});

// removes oldSchool class from video
document.querySelector("#orig").addEventListener("click", function() {
  	video.classList.remove("oldSchool")
});

//Controls the Mute Button
document.querySelector("#mute").addEventListener("click", function() {
	if (this.textContent == 'Mute'){
		this.textContent = 'Unmute';
		video.muted = true
	}
	else {
		this.textContent = 'Mute'
		video.muted = false
	}
});

// Volume Controls
document.querySelector("#slider").addEventListener("input", function() {
	var newVol = this.value/100
	video.volume = newVol
	console.log(document.querySelector('#volume').innerHTML = video.volume *100 + '%')
	
});

