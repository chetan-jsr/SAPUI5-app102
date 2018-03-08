sap.ui.jsview("sapui5.app102.view.zjsv_102_detail_0201", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app102.view.zjsv_102_detail_0201
	 */
	getControllerName: function() {
		return "sapui5.app102.controller.zjsv_102_detail_0201";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app102.view.zjsv_102_detail_0201
	 */
	createContent: function(oController) {
					
					var oES5BPList = new sap.m.List("idES5BPList",	{
						items: {
							path : "ES5>/BusinessPartnerCollection",
							template : new sap.m.ObjectListItem("idES5BPObjectList", {
								title : "{ES5>BusinessPartnerID}",
								type : "Active",
								press: [oController.onSelectCust],
								attributes : [ 
								               { 	"text" : "{ES5>Company}" },
								               {	"text" : "{ES5>EmailAddress}" 		} ]
							})
						}
					});
		
		
			
					return new sap.m.Page({
						title: "Detail Title 1",
						content: [oES5BPList]
					});
	}

});