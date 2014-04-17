// ==UserScript==
// @name         quran link helper
// @description  Automatically adds links to a quran verse
// @version    1.0.0
// @match      http://islam.stackexchange.com/*
// @require    http://code.jquery.com/jquery-git.js
// ==/UserScript==


//avoiding conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function(){

//creating the button
var input=document.createElement("input");
input.type="button";
input.value="Add";
input.onclick = Add();

//creating the input field
var qinput = document.createElement("input");
qinput.type="text";
qinput.attr('placeholder', '21:30');
$('#mdhelp-tabs').prepend(qinput);
qinput.after(input);

});
