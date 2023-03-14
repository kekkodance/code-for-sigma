// create a style element
var style = document.createElement('style');

// add the CSS as a string
style.innerHTML = '.ui.bottom.right.wide.basic.popup.transition.visible.Popup_wrapper__gjV0g { display: none !important; } .Header_logo__shVBB.Header_title__l\+wMf { visibility: hidden; } .Header_logo__shVBB.Header_title__l\+wMf:after { visibility: visible; position: absolute; top: 0; left: 1rem; content: "TheSigmaArts"; } ';

// add it to the head
document.getElementsByTagName('head')[0].appendChild(style);
