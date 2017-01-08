//流模式
var fs=require('fs');
var source=fs.readFileSync('../buffer/logo.png');
fs.writeFile('steam_logo.png',source);