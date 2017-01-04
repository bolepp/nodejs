//作用域

var globalVariable='This is global variable';

function globalFunction() {
	var localVariable='This is local variable';
	console.log('Visit global/local variable');
	console.log(globalVariable);
	console.log(localVariable);
	globalVariable='This is global changed variable';
	console.log(globalVariable);

	function localFunciton(){
		var innerLocalVariable="This is inner local variable";
		console.log('Visit global/local/innerLocal variable');
	console.log(globalVariable);
	console.log(localVariable);
	console.log(innerLocalVariable);
	}
	localFunciton();
}
globalFunction();