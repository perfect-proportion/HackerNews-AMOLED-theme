// ==UserScript==
// @name         Hacker News AMOLED Black Theme
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Applies a permanent AMOLED black theme to Hacker News with gray comment trees
// @author       rayne
// @match        https://news.ycombinator.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const amoledCSS = `
        body, table, .hnname, .pagetop, .c00, .topsel, .subsel,
        .itemlist, .athing, .default, .comhead, td, .spacer, .votearrow,
        .title, .subtext, .score, .age, textarea, input[type="text"], .votelinks,
        .morelink, .rank, .par, .subline, .yclinks {
            background-color: #000 !important;
            color: #fff !important;
            border-color: #333 !important;
        }
        .comment > span, .ind, .comment-tree {
            background-color: #1c1c1c !important;
            color: #ccc !important;
        }
        a, .hnmore a, .subtext a {
            color: #8ab4f8 !important;
        }
        a:visited {
            color: #ce93d8 !important;
        }
        textarea, input[type="text"] {
            border: 1px solid #444 !important;
        }
    `;

    const style = document.createElement('style');
    style.id = 'amoledStyle';
    style.innerHTML = amoledCSS;
    document.head.appendChild(style);
})();