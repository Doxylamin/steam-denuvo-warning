// ==UserScript==
// @name         Steam Store: Anti Denuvo
// @namespace    https://doxy.dev/
// @version      1.0
// @description  Searches all text nodes on a given store page to find the string Denuvo
// @author       You
// @match        https://store.steampowered.com/app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function highlightDenuvo() {
        var textNodes = getTextNodesIn(document.body);
        for (var i = 0; i < textNodes.length; i++) {
            var node = textNodes[i];
            var nodeText = node.nodeValue;
            if (nodeText.includes('Denuvo')) {
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

    function getTextNodesIn(node) {
        var textNodes = [];

        if (node.nodeType == 3) {
            textNodes.push(node);
        } else {
            var children = node.childNodes;
            for (var i = 0, len = children.length; i < len; ++i) {
                textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
            }
        }

        return textNodes;
    }

    highlightDenuvo();
})();