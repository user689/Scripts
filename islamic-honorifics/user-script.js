// ==UserScript==
// @name Islamic Honorifics
// @namespace http://islam.stackexchange.com/users/4456
// @grant none
// @version 1.0
// @description replaces abbreviations with their corresponding islamic honorifics.
// @match *://*.islam.stackexchange.com/*
// @copyright 2014+, http://islam.stackexchange.com/users/4456
// ==/UserScript==
// This userscript is based on a feature-request here: http://meta.islam.stackexchange.com/questions/75

var script = function($) {

    var abbrev = [
        //Adding abbreviations in the form : [abreviation, source, title].
        //These will be used next as <img/> attributes.
        ["ra", "http://i.stack.imgur.com/u2z9W.jpg", "May Allah be pleased with him"],
        ["raf", "http://i.stack.imgur.com/9v0xO.jpg", "May Allah be pleased with her"],
        ["rap", "http://i.stack.imgur.com/24mjy.png", "May Allah be pleased with them"],
        ["as", "http://i.stack.imgur.com/WWKuc.gif" , "Peace be upon him"],
        ["asf", "http://i.stack.imgur.com/1sDTt.png" , "Peace be upon her"],
        ["asp", "http://i.stack.imgur.com/Y0uxT.png" , "Peace be upon them"],
        ["rha",  "http://i.stack.imgur.com/YXixz.jpg", "Allah have mercy upon him"],
        ["rhaf",  "http://i.stack.imgur.com/YXixz.jpg", "Allah have mercy upon her"],
        ["(?:saws|pbuh)", "http://i.stack.imgur.com/eLxdl.png", "Peace be upon him"], 
        ["swta?",  "http://i.stack.imgur.com/58xwk.jpg", "May He be Glorified and Exalted"],
        ["azwjl",  "http://i.stack.imgur.com/Zqr27.gif", "May His Majesty Be Exalted"]
         
    ]

    $(document).on('blur', 'textarea.wmd-input', function(){
        $textarea = $(this)
        $.each(abbrev, function(_, item){
            regex = new RegExp("\\[:(" + item[0] + ")\\]", "gi")
            $textarea.val($textarea.val().replace(regex, "<img src=\"" + item[1] + "\" width=\"18\" height=\"18\" alt=\"$1\" title=\"" + item[2] + "\" />") )
        }) 
    });
}
var Tag = document.createElement('script');
Tag.type = 'text/javascript';
Tag.text = '(' + script + ')(jQuery);';
document.head.appendChild(Tag);
