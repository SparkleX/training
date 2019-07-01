sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Input",
	"sap/m/Label",
],
function(BaseClass, Input, Label, CoreUtil) {
	"use strict";
	var theClass = BaseClass.extend("project.widget.LabelInput", { 
		metadata: {
			properties: {
				label: { type: "string", group: "Misc", defaultValue: "" },
				value: { type: "string", group: "Misc", defaultValue: "" },
			},
			aggregations: {
				"_label" : {type : "sap.m.Label", multiple : false},
				"_input" : {type : "sap.m.Input", multiple : false},
		    },			
		}
	});
    theClass.prototype.applySettings = function(mSettings, oScope) {
    	var rt = BaseClass.prototype.applySettings.call(this, mSettings, oScope);
		var oLabel = new Label({
			width:"100%", 
			text:this.getLabel()
			});
		this.setAggregation("_label", oLabel); 
    	
		var oInput = new Input({
			type:"Text",
			width:"100%",
			value: this.getValue(),
				});
		this.setAggregation("_input", oInput);
    	return rt;
     }	  
	return theClass;
});