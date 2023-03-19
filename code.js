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
  font-size: clamp(16px, 3vw, 20px);
}
a.item:nth-child(2) {
  user-select: none !important;
  font-size: clamp(10px, 3vw, 15px);
}
.fluid.button.ActionsStep_button__2Cph7 {
  display: none !important;
}
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1) {
  display: none !important;
}
.menu a.item.UserStep_menuItem__5pvtT:nth-child(2) {
  font-size: 1rem;
}
.Header_item__OOEY7.Header_itemHoverable__nf6CM:nth-child(1) {
  padding: 0px;
  bottom: 0.5px
}
.large > div:nth-child(1) > a:nth-child(1) {
  position: relative;
  left: 8px;
}
.Header_itemHoverable__nf6CM:hover {
  background: none !important;
}
span.Filters_filter__Y8tDL:nth-child(1) > button:nth-child(1) {
  display: none !important;
}
div.Login_inputWrapper__SbI14:nth-child(1) > div:nth-child(1) {
  display: none;
}
div.Login_inputWrapper__SbI14:nth-child(1):before {
  content: "⤥ Type 'viewer' here ⤦";
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  position: relative;
  bottom: 4px;
}
div.Login_inputWrapper__SbI14:nth-child(2) > div:nth-child(1) {
  display: none;
}
div.Login_inputWrapper__SbI14:nth-child(2):before {
  content: "⤥ Then, type 'Queue1234' here ⤦";
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  position: relative;
  bottom: 4px;
}
div.Login_inputWrapper__SbI14:nth-child(2) {
  margin-bottom: 25px !important;
}
html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div div.ui.error.visible.message div.content > p:nth-child(1) {
  display: none;
}
html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div div.ui.error.visible.message div.content:after {
  content: "You made a typo. Try again.";
}
.Login_wrapper__zYzT6 {
  background: #22252a !important;
}
.Login_formTitle__xnYyM {
  background-image: url(https://github.com/kekkodance/code-for-sigma/raw/main/logo.png);
  padding-top: 150px !important;
  background-repeat: no-repeat;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  background-position: center;
}
.Login_inputWrapper__SbI14 {
  color: white !important;
}
html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div form.ui.large.form div.field button.ui.large.icon.primary.right.floated.labeled.button {
  background-color: #fe4678 !important;
}
html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div form.ui.large.form div.field button.ui.large.icon.primary.right.floated.labeled.button:hover {
  background-color: #f42160 !important;
  transition: background .3s ease;
}
`;

// add it to the head
document.getElementsByTagName('head')[0].appendChild(style);
