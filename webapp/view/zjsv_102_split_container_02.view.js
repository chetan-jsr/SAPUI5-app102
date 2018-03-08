sap.ui.jsview("sapui5.app102.view.zjsv_102_split_container_02", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app102.view.zjsv_102_split_container_02
	 */
	getControllerName: function() {
		return "sapui5.app102.controller.zjsv_102_split_container_02";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app102.view.zjsv_102_split_container_02
	 */
	createContent: function(oController) {
				this.setDisplayBlock(true);
				return sap.m.SplitApp("splitAppContES5");
	}

});