var a = 1;
var b = 2;

if(a>=b) {
	console.debug("a>=b");
}else {
	console.debug("a<b");
}

for(var i=0;i<=10;i++) {
	console.debug(i);
	if(i>=5) {
		break;
	}
}
console.debug('------------------');
a = 1;
b = 2;
while(a+b<10) {
	console.debug(a+b);
	a=a*2;
	b=b*2;
}