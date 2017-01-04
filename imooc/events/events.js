var EventEmitter=require('events').EventEmitter;
life =new EventEmitter();
life.setMaxListeners(11);
function water() {
	console.log("倒水");
}
life.on("bole",water)
life.on("bole",function (who) {
	console.log('to'+who+'do1');
})
life.on("bole",function (who) {
	console.log('to'+who+'do2');
})

//事件监听数量
console.log(life.listeners('bole').length)
life.emit('bole','mi');
life.removeListener('bole',water);
//life.removeALLListeners('bole');