var fs=require('fs');
var readStream=fs.createReadStream('1.mp4');
var writeStream=fs.createWriteStream('1_copy.mp4');
readStream
	.on('data',function(chunk) {
		if(writeStream.write(chunk)===false){
			console.log('still cached');
			readStream.pause();
		}
	})
	.on('end',function(){
		writeStream.end();
	})
	.on('error',function(e){
				console.log('data read error'+e);
	});
writeStream.on('drain',function(){
	console.log('data drain');
	readStream.resume();
})