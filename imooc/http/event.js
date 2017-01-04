//事件，事件驱动，基于事件驱动的加调，事件循环

function clickIt(e) {
	window.alert('Butoon is clicked');
}

var button =document.getElementById('button');

button.addEventListener('click',clickIt);

