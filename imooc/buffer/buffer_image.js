var fs=require('fs');
fs.readFile('logo.png',function(err,origin_buffer) {
	console.log(Buffer.isBuffer(origin_buffer));
	fs.writeFile('logo_beffer.png',origin_buffer,function(err){
		if(err) console.log(err);
	})
	//var base64Image=new Buffer(origin_buffer).toString('base64');
	var base64Image=origin_buffer.toString('base64');
	console.log(base64Image);
	var decordImage=new Buffer(base64Image,'base64');
	console.log('--------------------------------');
	console.log(Buffer.compare(origin_buffer,decordImage));
	fs.writeFile('logo_decord.png',decordImage,function(err){
		if(err) console.log(err);
	})
})