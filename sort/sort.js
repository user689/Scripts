//Sorting questions for guest users. see:http://meta.stackexchange.com/questions/242639/guest-not-logged-in-users-can-only-sort-questions-with-specific-tag-by-newest
// ==UserScript==
// @name         Sort-questions
// @namespace    http://random.16mb.com/
// @version      0.1
// @description  Adds the sort link back.
// @author       Mhmd
// @match http*://*.stackoverflow.com/*
// @match http*://*.serverfault.com/*
// @match http*://*.superuser.com/*
// @match http*://*.stackexchange.com/*
// @match http*://*.askubuntu.com/*
// @match http*://*.answers.onstartups.com/*
// @match http*://*.mathoverflow.net/*
// @match http*://stackapps.com/*
// @grant        none
// ==/UserScript==
if( ( StackExchange.options.routeName.indexOf('Questions/Show') === -1 ) && $(".login-link").val() == "")
  {
  document.getElementById('tabs').insertAdjacentHTML('afterbegin', '\
  <a href="/questions?sort=featured">featured</a>\
  <a href="/questions?sort=frequent">frequent</a>\
  <a href="/questions?sort=votes">votes</a>\
  <a href="/questions?sort=active">active</a>\
  <a href="/questions?sort=unanswered">unanswered</a>\
  ');
  }
