//上下文
var pet={
	words:'...',
	speak:function () {
		console.log(this.words);
		console.log(this===pet);
	}
}

pet.speak();

function sp(words) {
	this.words=words;
	console.log(this.words);
	console.log(this===global)
	// body...
}

sp('this is global');

function dog(words) {

	this.words=words;
	this.speak=function(){
		console.log(this.words);
		console.log(this);
	}
	
}
var wdog=new dog("wang wang ...");

wdog.speak();