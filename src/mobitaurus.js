import {contentView, Button, TextInput, WebView} from 'tabris';

let cmk = new WebView({
	top: 10,
	bottom: '#toolbar',
	left: 0,
	right: 0,
  url: "http://172.16.255.222/monitoring/check_mk/"
})
.on('canGoBackChanged', () => console.log('canGoBackChanged triggered '))
.on('canGoForwardChanged', () => console.log('canGoForwardChanged triggered'))
.on('urlChanged', () => console.log('urlChanged triggered'))
.on('htmlChanged', () => console.log('htmlChanged triggered'))
.on('load', () => console.log('load triggered'))
.on('navigate', () => console.log('navigate triggered'))
.on('download', () => console.log('download triggered'))
.on('message', () => console.log('message triggered'))

console.log("Visibility: " + cmk.opacity);
cmk.onSwipeLeft(cmk.goForward);
cmk.onSwipeRight(cmk.goBack);
contentView.append(cmk);