sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/Button",
	"sap/m/Label",
], function (Controller, Button, Label) {
   "use strict";

     var theClass =  Controller.extend("project.controller.App", {});
	  
	 theClass.prototype.onInit = function () {
		this.addButton();			  
    }
	
	theClass.prototype.onTest = function (evt) {
		this.addButton();
	}

	theClass.prototype.addButton = function () {
		var oView = this.getView();
	 	var container = oView.byId("container");
	 	
	 	//<Button text="Say Hello" press=".onShowHello"/> 
		var oButton = new Button({
			text:"Say Hello",
			press: this.onShowHello
		});	
		container.addItem(oButton);
	}

    theClass.prototype.onShowHello = function (evt) {
           alert("Hello World");
    }

      return theClass;
});