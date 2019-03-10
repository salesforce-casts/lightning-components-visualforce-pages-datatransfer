({
	handleSendData : function(component, event, helper) {
        var appEvent  = $A.get("e.c:myDataTransfer");
        appEvent.setParams({
            'message': 'HEY!!! Salesforce Casts'
        });
        appEvent.fire();
	}
})