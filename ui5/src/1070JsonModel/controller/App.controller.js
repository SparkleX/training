sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
   "use strict";

	var theClass =  Controller.extend("project.controller.App", {});
	theClass.prototype.onInit = function () {
		
		//var oModel = new JSONModel("./mock/data.json");
		
		var data = {id:1,code:"c", name:"n"}
		var oModel = new JSONModel(data);

		this.getView().setModel(oModel);
    }
	
	theClass.prototype.onShowHello = function (evt) {
    }
	return theClass;
});