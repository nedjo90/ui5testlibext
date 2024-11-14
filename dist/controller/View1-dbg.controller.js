sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        
        onPress(oEvent){this.addMessage()},
        addMessage(){
            MessageBox.confirm("test confirm");
        },
        
        onInit: function () {
        }
    });
});
