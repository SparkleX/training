var a = [2,4,6,8];
console.debug(a);
a.push(10);
console.debug(a);

for(var i in a) {
	var data = a[i];
	console.debug(`${i} ==> ${data}`);	
}


for(let i of a) {
	console.debug(i);	
}