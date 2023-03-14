// create a style element
var style = document.createElement('style');

// add the CSS as a string
style.innerHTML = '.ui.horizontal.section.divider { display: none; }';

// add it to the head
document.getElementsByTagName('head')[0].appendChild(style);
