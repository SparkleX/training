sap.ui.define([
	"sap/m/Input",
],
function(BaseClass) {
	"use strict";
	var theClass = BaseClass.extend("project.widget.Input", { 
	metadata: {
		properties: {
			prop1: { type: "string", group: "Misc", defaultValue: null },
			prop2: { type: "string", group: "Misc", defaultValue: null },
		}
	}});
	
	theClass.prototype.init = function () {
		BaseClass.prototype.init.call(this);
		alert(this.getProp1());
		alert(this.getProperty("prop1"));
		
	};
    theClass.prototype.applySettings = function(mSettings, oScope) {
    	var rt = BaseClass.prototype.applySettings.call(this, mSettings, oScope);
		alert(this.getProp1());
		alert(this.getProperty("prop1"));
    	return rt;
     }		

	return theClass;
});