var screenWidth = window.innerWidth,
	screenHeight = window.innerHeight,
	headerSize = 150;

window.homeZ = 1;

function randomCoordinates() {
	var x = Math.floor(Math.random() * (screenWidth - 200));
	var y = Math.floor(Math.random() * ((screenHeight - 200) - headerSize + 1) + headerSize);
	var rotation = Math.floor(Math.random() * 61) - 30;
	
	return {x:x, y:y, rotation:rotation};
}

function createPolaroid(image) {
	var coord = randomCoordinates(),
		parent = image.parent();
	parent.css('top', coord.y);
	parent.css('left', coord.x);
	parent.css('z-index', window.homeZ);
	window.homeZ++;
    addRotation(parent, coord.rotation);
    image.height('200px');
    
    parent.draggable({
    	cursor: 'move',
    	start: function(e) {
    		var elem = $(e.target);
    		elem.css('z-index', window.homeZ);
    		window.homeZ++;
    	}
    });
}

function addRotation(elem, value) {
	var val = 'rotate(' + value + 'deg)';
	applyBrowserCssProperty(elem, {
		Firefox: {name: '-moz-transform', value: val},
		MSIE: {name: '-ms-transform', value: val},
		Opera: {name: '-o-transform', value: val},
		Safari: {name: '-webkit-transform', value: val}
	});
}

function applyBrowserCssProperty(elem, values) {
	var nav = navigator.userAgent;
	if (/Firefox[\/\s](\d+\.\d+)/.test(nav))
		elem.css(values.Firefox.name, values.Firefox.value);
	else if (/MSIE (\d+\.\d+);/.test(nav))
		elem.css(values.MSIE.name, values.MSIE.value);
	else if (/Opera[\/\s](\d+\.\d+)/.test(nav))
		elem.css(values.Opera.name, values.Opera.value);
	else if (/Safari[\/\s](\d+\.\d+)/.test(nav))
		elem.css(values.Safari.name, values.Safari.value);
}

function shufflingArray(array) {
    for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}