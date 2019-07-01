sap.ui.define([
	"sap/m/InputRenderer",
	'sap/ui/core/Renderer'
], function (InputRenderer, Renderer) {
	"use strict";
	var theClass = Renderer.extend(InputRenderer);
	return theClass;
});