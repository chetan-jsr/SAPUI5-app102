sap.ui.jsview("sapui5.app102.view.zjsv_102_detail_0101", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app102.view.zjsv_102_detail_0101
	 */
	getControllerName: function() {
		return "sapui5.app102.controller.zjsv_102_detail_0101";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app102.view.zjsv_102_detail_0101
	 */
	createContent: function(oController) {
		
		var oList = new sap.m.List("idListCust",{
			items : {
				path : "Northwind>/Customers",
				template : new sap.m.ObjectListItem("idObjectList", {
					title : "{Northwind>CustomerID}",
					type : "Active",
					press: [oController.onSelectCust],
					attributes : [ 
					               { 	"text" : "{Northwind>ContactName}" },
					               {	"text" : "{Northwind>CompanyName}" 		} ]
				})
			}
		});
		
		
		
		return new sap.m.Page({
			title: "Detail Title 1",
			content: [oList]
		});
	}

});