var ClassA=function (v) {
	this.data = v;	
}
ClassA.prototype.func1 = function(p1) {
	console.debug("ClassA::func1:" + this.data);
	console.debug(arguments);
}

//-----------------------------------------
var ClassB = function(v) {
	ClassA.call(this, v);
}
ClassB.prototype = new ClassA();


ClassB.prototype.func1 = function(p1){
	ClassA.prototype.func1.call(this, p1);
	console.debug("ClassB.func1");
	console.debug(arguments);
}

//-----------------------------------------
console.debug('----------------');
var a = new ClassA(2);
a.func1(1);
console.debug('----------------');
var b = new ClassB(2);
b.func1(1);
console.debug('----------------');

console.debug(b instanceof ClassA);
