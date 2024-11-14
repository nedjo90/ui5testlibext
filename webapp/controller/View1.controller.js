sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "totp-generator"
],
    function (Controller, MessageBox, topGen) {
        "use strict";

        return Controller.extend("project1.controller.View1", {

            onPress(oEvent) { this.addMessage() },
            addMessage() {
                const { otp, expires} = topGen.TOTP.generate("JBSWY3DPEHPK3PXP")
                MessageBox.confirm(`${otp}`);
            },

            onInit: function () {
            }
        });
    });
