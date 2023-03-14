// create a style element
var style = document.createElement('style');

// add the CSS as a string
style.innerHTML = '.ui.bottom.right.wide.basic.popup.transition.visible.Popup_wrapper__gjV0g { display: none !important; }';

// add it to the head
document.getElementsByTagName('head')[0].appendChild(style);

// select the element with the specified class
const headerItem = document.querySelector('itemHeader_item__OOEY7.Header_itemHoverable__nf6CM');

// add a click event listener to the element
headerItem.addEventListener('click', function() {
  // open the website in a new window/tab
  window.open('https://ripped.guide', '_blank');
});
