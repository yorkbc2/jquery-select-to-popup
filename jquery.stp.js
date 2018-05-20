(function ($) {
        function selectToPopup (config) {
        		config = config || {};

                var triggers = $(this);
                var triggerAttributeName = config.triggerAttributeName || 'data-open';
                var blockHeader = typeof config.header === 'string'? config.header
                : 'Choose One Value';
                var parentElement = typeof config.parent !== 'undefined'? $(config.parent)
                	: $('body');
                var disable = typeof config.disable === 'bolean'? config.disable: true;

                if (triggers) {
                		var selectSelector, select;
                        triggers.each(function () {
                        	var trigger = $(this);
	                        selectSelector = trigger.attr(triggerAttributeName);
	                        trigger.removeAttr(triggerAttributeName);
	                        select = $(selectSelector);
	                        if (disable === true) select.attr('disabled', true);
                        	trigger.click(function (mouseEvent) {

                        		var popup = createPopup(select, parentElement);
                        		parentElement.append(popup);

                        	});
                        });

                }

                function createPopup (select, parentElement) {
                	var popupBlock = createPopupBlock();
                	var popup = createPopupContainer()
                		.append(popupBlock);
                	var popupBackground = createPopupBackground(popup).appendTo(popup);
                	var table = createTable();
                	var tableBody = createTableBody();
                	var options = select.find('option');
                	var popupBlockHeader = createHeader(4, blockHeader).appendTo(popupBlock); 

                	options.each(function () {
                		var option = $(this);
                		var row = createRow()
                			.append(createCell().html( option.html() ))
                			.append(createCell().html(function () {
                				if (option.attr('selected') === 'selected') {
                					return "Selected";
                				}
                				return "";
                			}).click(function () {
                				var clickedValue = option.val();
                				options.each(function () {
                					if ($(this).val() === clickedValue) {
                						$(this).attr('selected', 'selected');
                					} else {
                						$(this).removeAttr('selected');
                					}
                				});
                				select.change();
                				popup.remove();
                			}))
                			.appendTo(tableBody);
                	})
                	table.append(tableBody).appendTo(popupBlock);

                	return popup;
                }	

                function createPopupContainer () {
                	return $('<div class="stp-container" />');
                }

                function createPopupBlock () {
                	return $('<div class="stp-block" />');
                }

                function createPopupBackground (popupContainer, background) {
                	background = background || 'rgba(0,0,0,0.45)';
                	return $('<div class="stp-background" />').click(function () {
                		popupContainer.remove();
                	}).css('background-color', background);
                }

                function createTable () {
                	return $('<table class="stp-table" />');
                }

                function createTableBody () {
                	return $('<tbody />');
                }

                function createRow () {
                	return $('<tr />');
                }

                function createCell () {
                	return $('<td />');
                }

                function createHeader (level, text) { 
                	if (level < 1) level = 1;
                	else if (level > 6) level = 6;
                	return $('<h' + level + ' />').text(text);
                }
        }

        if (typeof $ !== 'undefined') {
        	$.fn.selectToPopup = selectToPopup;
        }
})(jQuery)
