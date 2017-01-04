//imooc评论
var http = require('http');
var querystring = require('querystring');
var postData= querystring.stringify({

	'content':'老师讲得不错哦，支持一下~',
	'mid':8837
})

var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/video/8837',
	method:'POST',
	headers:{

		'Accept':'application/json, text/javascript, */*; q=0.01',
'Accept-Encoding':'gzip, deflate',
'Accept-Language':'zh-CN,zh;q=0.8',
'Connection':'keep-alive',
'Content-Length':postData.length,
'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
'Cookie':'imooc_uuid=2d74baa8-3637-429a-b0df-f4d85536aadf; imooc_isnew_ct=1476506704; loginstate=1; apsid=YyNjhhZTVjYmM1OWY2NzA4MTFmMThhNDNkYzNiNmMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjI2MDkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABib2xlcHBAcXEuY29tAAAAAAAAAAAAAAAAAAAAAAAAAGRlMDgyZjljMGYyY2Y2ZWRiZjY4YzJjODJlMjY4YTA5QH5GWEB%2BRlg%3DYj; last_login_username=bolepp%40qq.com; PHPSESSID=ag27jgdjssqnfsro4d9eavu2e7; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1483075585,1483150736,1483164608,1483423663; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1483511108; imooc_isnew=2; cvde=586b3faeb3ad8-329',
'Host':'www.imooc.com',
'Origin':'http://www.imooc.com',
'Referer':'http://www.imooc.com/video/8837',
'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
'X-Requested-With':'XMLHttpRequest'
	}
}

var req= http.request(options,function (res) {
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers));

	res.on('data',function (chunk) {

		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
		
	})
	res.on('end',function(){
		console.log('评论完毕！');
	})

	
})
req.on('error',function(e){
		console.log(e.messsage);
	})

	req.write(postData);
	req.end();