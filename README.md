# Select To Popup

It's jQuery plugin to make a popup from your select input. If you want to take to client chance to select value by the better way then default select, you will download this plugin. It's easy in using and customization. 

## How to use
Firstly, you need to add .js and .css files into your html.
```html
	<head>
		<!-- Styles -->
		<link rel="stylesheet" href="path/to/plugin/jquery.stp.css">
	</head>
	<!-- Script -->
	<body>
		<!-- Trigger must have attribute ['data-open'] which contains selector of popup -->
		<button data-open="#select"></button>
		<!-- Our select input -->
		<select id="select">...</select>
		<script src="path/to/plguin/jquery.stp.js"></script>
	</body>
```
Secondly, use plugin method to run it.
```js
	// Classname of buttons that will open our popup
	$('.trigger').selectToPopup({ /*config*/ })
```

## How to config plugin

Plugin has some options that you can change with JS:

* disable: false|true (default: true) - Disable or enable select input;
* triggerAttributeName: string (default: 'data-open') - Attribute for trigger;
* parent: string|object (default: 'body') - Element which will be parent of our popup;
* header: string (default: 'Choose one value') - Header for popup block

### Credits

* Author: Alexander Yorke <yorkbc2@gmail.com>
* Version: 1.0
* Dependencies: jQuery