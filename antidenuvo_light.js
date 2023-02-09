// ==UserScript==
// @name         Steam Store: Anti Denuvo (lightweight)
// @namespace    https://doxy.dev/
// @version      1.0
// @description  Searches all DRM notice nodes (#DRM_Notice) on a given store page to find the string Denuvo
// @author       You
// @match        https://store.steampowered.com/app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function highlightDenuvo() {
        var elements = document.getElementsByClassName("DRM_notice");
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          if (element.innerHTML.toLowerCase().indexOf("denuvo") !== -1) {
            var parentElement = document.getElementById('game_area_purchase');
            var denuvoWrapper = document.createElement('div');
            denuvoWrapper.innerHTML = '<div id="earlyAccessHeader" class="early_access_header" style="border: 1px solid #ae4e4e!important;">' +
                '<div class="heading" style="background: linear-gradient(135deg, rgb(208 87 87) 0%,rgb(122 48 48) 100%)!important;">' +
                '<h1 class="inset">Denuvo Anti-Tampering</h1>' +
                '<h2 class="inset">This game might be using Denuvo Anti-Tamper. A DRM system known to have massive impact on performance, while causing even more issues down the line.</h2>' +
                '<p style="color:#fdb8b8!important;"><span>Note:</span> This game uses Denuvo Anti-Tamper and may cause unpredictable problems while playing. If you do not like the game in its current state, you should wait to see if the publisher removes Denuvo. <a href="https://en.wikipedia.org/wiki/Denuvo#Criticism">Learn more</a></p>' +
                '</div>' +
                '</div>';
            parentElement.insertBefore(denuvoWrapper, parentElement.firstChild);
          }
        }
    }
    highlightDenuvo();
})();