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

	return theClass;
});