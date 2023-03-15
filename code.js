// create a style element
var style = document.createElement('style');

// add the CSS as a string
style.innerHTML = `

.Header_logo__shVBB {
 visibility: hidden !important;
}
.Header_logo__shVBB:after {
 visibility: visible;
 position: absolute;
 top: 0;
 left: 1rem;
 content: "TheSigmaArts";
}
a.item:nth-child(2) {
  user-select: none !important;
}
.fluid.button.ActionsStep_button__2Cph7 {
  display: none !important;
}
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1) {
  display: none !important;
}
`;

// add it to the head
document.getElementsByTagName('head')[0].appendChild(style);
