//@ui5-bundle project1/Component-preload.js
sap.ui.require.preload({
	"project1/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","project1/model/models"],function(e,t,i){"use strict";return e.extend("project1.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"project1/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("project1.controller.App",{onInit:function(){}})});
},
	"project1/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox"],function(e,s){"use strict";return e.extend("project1.controller.View1",{onPress(e){this.addMessage()},addMessage(){s.confirm("test confirm")},onInit:function(){}})});
},
	"project1/i18n/i18n.properties":'# This is the resource bundle for project1\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"project1/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"project1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.15.4","toolsId":"4b10b3ee-ebdb-4472-ab97-3d5907f79ce1"}},"sap.ui":{"fullWidth":true,"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.130.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project1.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"project1.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"project1.view.App","type":"XML","async":true,"id":"App"}}}',
	"project1/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"project1/view/App.view.xml":'<mvc:View controllerName="project1.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"project1/view/View1.view.xml":'<mvc:View\n    controllerName="project1.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns="sap.m"\n><Page\n        id="page"\n        title="{i18n>title}"\n    ><content><Button id="idTestButton" press="onPress" text="press on the button to test"/></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
