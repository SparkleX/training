sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/resource/ResourceModel",
], function (Controller, ResourceModel) {
   "use strict";

	var theClass =  Controller.extend("project.controller.App", {});
	theClass.prototype.onInit = function () {
		
		var i18nModel = new ResourceModel({bundleName: "project.i18n.i18n"});
		this.getView().setModel(i18nModel, "i18n");
    }
	
	theClass.prototype.onShowHello = function (evt) {
		var oBundle = this.getView().getModel("i18n").getResourceBundle();
		var sMsg = oBundle.getText("str2", ["param"]);
		alert(sMsg);
    }
	return theClass;
});