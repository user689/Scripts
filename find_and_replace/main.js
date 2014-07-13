// ==UserScript==
// @name          Find and replace editing tool
// @namespace     http://use.i.E.your.homepage/
// @version       0.1
// @description   A javascript tool to make editing posts easier and faster.
// @require       http://code.jquery.com/ui/1.11.0/jquery-ui.js
// @match http*://*.stackoverflow.com/*
// @match http*://*.serverfault.com/*
// @match http*://*.superuser.com/*
// @match http*://*.stackexchange.com/*
// @match http*://*.askubuntu.com/*
// @match http*://*.answers.onstartups.com/*
// @match http*://*.mathoverflow.net/*
// @match http*://stackapps.com/*
// @copyright  2014+, Mhmd
// ==/UserScript==
try{
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame          ||
            window.msRequestAnimationFrame     ||
            function(callback, element){
              window.setTimeout(callback, 100);
            };
})();
}catch(e){ return;}
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css.replace(/;/g, " !important;");
    head.appendChild(style);
}

function regs(){
    $pattern = $("#find").val();
    $replace = $("#replace").val();
    requestAnimationFrame(regs);
    try{
    $regex = new RegExp($pattern, modifiers())
    $matches = $textarea.val().match($regex)
    }catch(e){
        return;
    }
}
function update(){
    regs();
    if($matches){  
        $text = $matches.length
        $text += $matches.length == 1 ? ' match found' : ' matches found'   
        $("#last-p").html($text).css("color" ,"green");        
    }else{
        $text = "No matches found"
        $("#last-p").html($text).css("color", "red");
    }
}
function modifiers() {         
    var modifier = [];
    $('input[name=modifiers]').each(function() {
        if ($(this).is(":checked")) {
            modifier.push( $(this).val());
        }  
    });
    return modifier.join('');
}
//Adding the html into the body
$html = $(function() {/*
<div class="popup no-auto-close replace" id="find_and_replace" style="position: fixed;cursor: move;display : none;left: 580px; top: 322px;">
<h1></h1>
       <form name="Find and replace" id="find-and-replace-form"> 
        <fieldset class = "group">
        <legend> Replace </legend>
        
                    <ul class="checkbox">
                    <li>
                        <input type=text placeholder = "find" size=18 id="find"/>
                    </li>
                    <li>
                        <input type=text size=18 placeholder = "replace" id="replace"/>
                    </li>
                    <li>
                       <input type=submit value=replace id="replace-submit-button" />
                    </li>
                <br>
<li><input type=checkbox value = "g" name="modifiers" id="g" checked/><label for = "g">General</label></li>       
<li><input type=checkbox value = "m" name="modifiers" id="m"/><label for = "m">Multiline</label></li>
<li><input type=checkbox value = "i" name="modifiers" id = "i" /><label for= "i">Insensitive</label>
                    
                    </ul>
                    </fieldset>
        </form>
        <div style = "right: 0px;"><p id="last-p"></p></div>
    </div>*/}.toString()
             .slice(15,-3))
             .appendTo('body')
             .draggable()             
    
$button =   $('<button id="find-button" title="Find & Replace"></button>').css({
    position: 'fixed',
    display : 'none',
    bottom: '10px',
    left: '10px',
    cursor: 'pointer',
   'background-image':     
    'url(\'http://www.wrensoft.com/zoom/support/images/searchform_images/searchbutton3.gif\')',
    width: '24px',
    height: '22px',
    border : '1px solid #4B7B9F'
    }).appendTo('body')
      .click( function () { $html.toggle(); });
//The css                                                                        
addGlobalStyle (function(){/*
#find-and-replace-form > fieldset {
  padding: 1em;
  font:80%/1 sans-serif;
  border: 1px ridge #888;
  }
#find-and-replace-form > fieldset legend {
  padding: 0.2em 0.5em;
  border:1px solid #888;
  color:#888;
  font-size:90%;
  text-align:right;
  }
#last-p {
  padding-top: 0.5em;
}
ul.checkbox li { 
  border: 1px transparent solid; 
  display:inline-block;
  width:12em;
} 

#find-and-replace-form > fieldset > ul{ 
  margin: 0; 
  padding: 0; 
  margin-left: 20px; 
  list-style: none; 
}
  
*/}.toString()
   .slice(14,-3))                                                        
                  
$(document).on('focus blur', 'textarea', function() {
                                 $textarea = $(this)
                                 $("#find-button").show()
                               })
           .on('click', 'a', function(){
                                 $html.hide();
                                 $("#find-button").hide()})
           .on('focus blur input propertychange paste', '#find,#replace',function(){update()})
           .on('change' , 'input[name=modifiers]', function(){update()})
                              
$("#find-and-replace-form").submit(function(e) {
                            e.preventDefault();
                            regs();
                            $("#last-p").text('')
                            if($matches) {
                                    $textarea.val($textarea.val().replace($regex, $replace))
                                             .focus();
                                    $('#find').focus();
                            }else{ alert("no matches found");$('#find').focus(); }
                            return false;
});
