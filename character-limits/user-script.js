// ==UserScript==
// @name            character limits restriction
// @namespace       StackExchange
// @description     Bypass character limits restriction for comments
// @version         1.0
// @match           *://*.askubuntu.com/*
// @match           *://*.serverfault.com/*
// @match           *://*.stackapps.com/*
// @match           *://*.stackexchange.com/*
// @match           *://*.stackoverflow.com/*
// @match           *://*.superuser.com/*
// ==/UserScript==

var script = function($) {
    $(document).delegate('textarea[name=comment]' , "focus", function(){
         m = $(this).val().length
         for(var i=0; i< (15 - m); i++){
         $(this).val($(this).val() + "\u200b")
        }
    })
};

var el = document.createElement('script');
el.type = 'text/javascript';
el.text = '(' + script + ')(jQuery);';
document.head.appendChild(el);
