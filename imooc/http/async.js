//同步异步
//单线程/多线程、阻塞/非阻塞
//I/O
var c=0;
function printIt() {
	console.log(c);
}

function plus(callback) {
	setTimeout(function(){
		c+=1;
		callback();
	},1000)
	
}
plus(printIt);