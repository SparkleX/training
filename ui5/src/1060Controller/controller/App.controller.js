sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";

      var theClass =  Controller.extend("project.controller.App", {});
      
      theClass.prototype.onShowHello = function (evt) {
            alert("Hello World");
      }

      return theClass;
});