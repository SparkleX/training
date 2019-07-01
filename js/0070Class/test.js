var ClassA=function (v) {
	this.func1 = function() {
		console.debug("ClassA::func1:" + this.data);
	}
	this.data = v;	
}

var a = new ClassA(2);
a.func1();
