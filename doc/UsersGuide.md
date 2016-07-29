# Pip.WebUI.Support User's Guide

## <a name="contents"></a> Contents
- [Installing](#install)
- [pipAnalytics service](#analytics_service)
- [pip-feedback panel](#feedback_panel)
- [Feedback page](#feedback_page)
- [pipFeedbackDialog](#feedback_dialog)
- [Questions and bugs](#issues)


## <a name="install"></a> Installing

Add dependency to **pip-webui** into your **bower.json** or **package.json** file depending what you use.
```javascript
"dependencies": {
  ...
  "pip-webui": "*"
  ...
}
```

Alternatively you can install **pip-webui** manually using **bower**:
```bash
bower install pip-webui
```

or install it using **npm**:
```bash
npm install pip-webui
```

Include **pip-webui** files into your web application.
```html
<link rel="stylesheet" href=".../pip-webui-lib.min.css"/>
...
<script src=".../pip-webui-lib.min.js"></script>
<script src=".../pip-webui-test.min.js"></script>
```

Register **pipSupport** module in angular module dependencies.
```javascript
angular.module('myApp',[..., 'pipSupport']);
```

## <a name="analytics_service"></a> pipAnalytics service

**pipAnalytics** allows to track user interactions with application and send them to Google Analytics for further analysis.
Page transitions are tracked automatically when service is enabled in the application. To track various events, such as 
clicking a button or scrolling page, developers shall explicitely call **event** method.

### Usage
Todo: Add code snippet to demonstrate how to enable the service and track events

### Methods

* **enable(trackingId: string): void** - enables tracking interactions and reporting them to Google Analytics using provided tracking id
  - Params:
    + trackingId - tracking id obtained in Google Analytics (Todo: add a link how to get the id)

* **pageView(url: string, user: string, language: string): void** - manually tracks page transition event
  - Params:
    + url: string - page url
    + user: string - name of the current user
    + language: string - selected language
  
* **event(category: string, action: string, value: any, user: string, language: string): void** - tracks events in the user interface such as clicks, scrolls, etc.
  - Params:
    + category - category of events
    + action - name of event or action
    + value - value associated with the event
    + user: string - name of the current user
    + language: string - selected language


## <a name="feedback_panel"></a> pip-feedback panel

**Feedback** panel that collects feedback from application users and sends them to product support team. The panel is implemented as a directive that allows to embed feedback functionality into a custom view like support tab on the heal page.

The panel requires several standard REST API operations to be implemented on the server: **users**, **files** and **feedbacks**. 
Todo: Add a link to pip-webui-rest page here with the protocol description

### Usage
Todo: Add HTML snippet that demonstrates the directive with all attributes

### Attributes
Todo: Add description of directive attributes


## <a name="feedback_page"></a> Feedback page

**Feedback** page provides a fully implemented user feedback functionality that can be included into web application. Navigation to the page can be done via **feedback** state or **/#feedback** route.

The page requires several standard REST API operations to be implemented on the server: **users**, **files** and **feedbacks**. 
Todo: Add a link to pip-webui-rest page here with the protocol description

Todo: Add image that demonstrates the page


## <a name="feedback_dialog"></a> pipFeedbackDialog

**pipFeedbackDialog** allows to open **Feedback** as a dialog anywhere in web application.

The page requires several standard REST API operations to be implemented on the server: **users**, **files** and **feedbacks**. 

### Usage
Todo: Add code snippet that demonstrates openning the dialog

### Methods
Todo: Add description of pipFeedbackDialog methods


## <a name="issues"></a> Questions and bugs

If you have any questions regarding the module, you can ask them using our 
[discussion forum](https://groups.google.com/forum/#!forum/pip-webui).

Bugs related to this module can be reported using [github issues](https://github.com/pip-webui/pip-webui-support/issues).
