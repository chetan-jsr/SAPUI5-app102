sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sapui5.app102.controller.zjsv_102_master_02", {
		
		onSelectES5Entity: function(oEvent)	{
			
			var oES5EntityContext = oEvent.getSource().getBindingContext("ES5List");
			if ( oES5EntityContext !== null || oES5EntityContext !== undefined )
			{
				var sES5SelectedEntity = oES5EntityContext.getProperty("EntityName");
				
				var oES5Router = sap.ui.core.UIComponent.getRouterFor(this);
				if ( oES5Router !== null || oES5Router !== undefined )
				{
					switch (sES5SelectedEntity)
					{
						case "BusinessPartnerCollection":
							oES5Router.navTo("SAPES5BP");
							break;
							
					}
				}
			}
			
			
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sapui5.app102.view.zjsv_102_master_02
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sapui5.app102.view.zjsv_102_master_02
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sapui5.app102.view.zjsv_102_master_02
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sapui5.app102.view.zjsv_102_master_02
		 */
		//	onExit: function() {
		//
		//	}

	});

});