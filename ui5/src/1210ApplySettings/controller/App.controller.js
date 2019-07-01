sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/Button",
	"sap/m/Label",
], function (Controller, Button, Label) {
   "use strict";

    var theClass =  Controller.extend("project.controller.App", {});
	  
	theClass.prototype.onTest = function (evt) {
		var oInput2 = this.getView().byId("input2");
		alert(oInput2.getProp1());
		
	}
    return theClass;
});