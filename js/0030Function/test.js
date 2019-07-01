function fx(x) {
	console.debug(arguments);
	return 2*x*x + x + 5;
}

var fx2= function(x) {
	return 2*x*x + x + 5;
}

console.debug(fx(1));
console.debug(fx(3));
console.debug(fx(9));

console.debug(fx2(1));
console.debug(fx2(3));
console.debug(fx2(9));