sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"control/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("control.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			var that = this;
			
			$.ajax({
				url : "./json/products.json",
				type : "get",
				success : function(oResult) {
					var oProductsModel = new JSONModel(oResult);
					that.getView().setModel(oProductsModel, "Products");					
				}
			});
		}
	});
});