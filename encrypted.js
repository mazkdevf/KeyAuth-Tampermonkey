// ==UserScript==
// @name         KeyAuth Tampermonkey License Example
// @namespace    https://github.com/mazkdevf/KeyAuth-Tampermonkey
// @version      1.0
// @description  This is an example of how to use KeyAuth with Tampermonkey (LICENSE VERSION)
// @author       mazkdevf
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
    'use strict';

    var license = "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX";

    let appConfig = {
        name: "",
        ownerid: "",
        version: "1.0"
    }

    var O = R;
    function f() {
        var G = [
            'getDate',
            'Content-Type',
            'application/x-www-form-urlencoded',
            'backgroundColor',
            'getMonth',
            'table',
            'function\x20*\x5c(\x20*\x5c)',
            'input',
            'success',
            'POST',
            '56YwgqXf',
            'length',
            'log',
            '94191zwoaSs',
            'constructor',
            'body',
            '1116927aHdgVH',
            'getMinutes',
            'apply',
            'createdate',
            'console',
            '{}.constructor(\x22return\x20this\x22)(\x20)',
            'expiry',
            'slice',
            'lastlogin',
            'toString',
            'error',
            '417744zpPCPH',
            'getFullYear',
            '1243RPydmm',
            'username',
            '9qRcTUu',
            '6156876XrPXrA',
            'counter',
            '10HotHcf',
            'responseText',
            'subscription',
            '1525990MrXKRk',
            'action',
            'https://keyauth.win/api/1.2/?type=init&ver=',
            '1475020fjVKmT',
            'exception',
            '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>HWID:\x20',
            'innerHTML',
            '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
            '</small>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br><br>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Username:\x20',
            '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Last\x20Login:\x20',
            '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Expiry:\x20',
            'warn',
            'string',
            'gger',
            'name',
            'init',
            '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Create\x20Date:\x20',
            'https://keyauth.win/api/1.2/?type=license&key=',
            '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
            'while\x20(true)\x20{}',
            '&ownerid=',
            'sessionid',
            'application/json',
            '&name=',
            'Successfully\x20authenticated\x20with\x20KeyAuth!',
            'chain',
            '36123fIUySy',
            'Host',
            '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Time\x20Left:\x20',
            'bind',
            'documentElement',
            'getHours',
            'return\x20(function()\x20',
            'accept',
            'subscriptions',
            'message',
            'keyauth.win',
            '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>IP:\x20',
            'hwid',
            'test',
            'info',
            'call',
            'prototype',
            'ownerid',
            '40LhstZn'
        ];
        f = function () {
            return G;
        };
        return f();
    }
    (function (h, d) {
        var B = R;
        var z = h();
        while (!![]) {
            try {
                var g = -parseInt(B(0x17f)) / 0x1 * (parseInt(B(0x194)) / 0x2) + -parseInt(B(0x1b1)) / 0x3 * (parseInt(B(0x1c3)) / 0x4) + -parseInt(B(0x19a)) / 0x5 + -parseInt(B(0x192)) / 0x6 + -parseInt(B(0x182)) / 0x7 * (parseInt(B(0x1ce)) / 0x8) + parseInt(B(0x191)) / 0x9 * (-parseInt(B(0x197)) / 0xa) + -parseInt(B(0x18f)) / 0xb * (-parseInt(B(0x18d)) / 0xc);
                if (g === d) {
                    break;
                } else {
                    z['push'](z['shift']());
                }
            } catch (q) {
                z['push'](z['shift']());
            }
        }
    }(f, 0xb7863));
    function R(D, x) {
        var Q = f();
        R = function (J, L) {
            J = J - 0x17d;
            var h = Q[J];
            return h;
        };
        return R(D, x);
    }
    var J = (function () {
        var h = !![];
        return function (d, z) {
            var g = h ? function () {
                if (z) {
                    var q = z['apply'](d, arguments);
                    z = null;
                    return q;
                }
            } : function () {
            };
            h = ![];
            return g;
        };
    }());
    (function () {
        J(this, function () {
            var i = R;
            var h = new RegExp(i(0x1ca));
            var d = new RegExp(i(0x1a9), 'i');
            var z = Q(i(0x1a6));
            if (!h[i(0x1be)](z + i(0x1b0)) || !d[i(0x1be)](z + i(0x1cb))) {
                z('0');
            } else {
                Q();
            }
        })();
    }());
    var x = (function () {
        var h = !![];
        return function (d, z) {
            var g = h ? function () {
                var E = R;
                if (z) {
                    var q = z[E(0x184)](d, arguments);
                    z = null;
                    return q;
                }
            } : function () {
            };
            h = ![];
            return g;
        };
    }());
    var D = x(this, function () {
        var c = R;
        var h;
        try {
            var d = Function(c(0x1b7) + c(0x187) + ');');
            h = d();
        } catch (M) {
            h = window;
        }
        var z = h['console'] = h[c(0x186)] || {};
        var g = [
            c(0x17e),
            c(0x1a2),
            'info',
            c(0x18c),
            c(0x19b),
            c(0x1c9),
            'trace'
        ];
        for (var q = 0x0; q < g[c(0x17d)]; q++) {
            var T = x[c(0x180)][c(0x1c1)][c(0x1b4)](x);
            var j = g[q];
            var X = z[j] || T;
            T['__proto__'] = x[c(0x1b4)](x);
            T[c(0x18b)] = X[c(0x18b)][c(0x1b4)](X);
            z[j] = T;
        }
    });
    D();
    var L = {};
    L[O(0x1c5)] = 'application/x-www-form-urlencoded';
    L[O(0x1b2)] = O(0x1bb);
    L[O(0x1b8)] = O(0x1ad);
    GM_xmlhttpRequest({
        'method': O(0x1cd),
        'url': O(0x199) + appConfig['version'] + O(0x1ae) + appConfig[O(0x1a5)] + O(0x1ab) + appConfig[O(0x1c2)],
        'headers': L,
        'onload': function (d) {
            var C = O;
            var z = JSON['parse'](d[C(0x195)]);
            if (z[C(0x1cc)]) {
                var g = z[C(0x1ac)];
                var q = {};
                q[C(0x1c5)] = C(0x1c6);
                q[C(0x1b2)] = C(0x1bb);
                q['accept'] = C(0x1ad);
                GM_xmlhttpRequest({
                    'method': 'POST',
                    'url': C(0x1a8) + license + '&sessionid=' + g + (C(0x1ae) + appConfig[C(0x1a5)] + C(0x1ab) + appConfig[C(0x1c2)]),
                    'headers': q,
                    'onload': function (e) {
                        var l = C;
                        var T = JSON['parse'](e['responseText']);
                        if (T[l(0x1cc)]) {
                            console['log'](l(0x1af), T);
                            document[l(0x1b5)]['style'][l(0x1c7)] = 'black';
                            document[l(0x181)][l(0x19d)] = '';
                            document[l(0x181)]['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x27text-align:\x20center;\x20font-size:\x2050px;\x20margin-top:\x2050px;\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Successfully\x20Authenticated\x20with\x20Tampermonkey\x20and\x20<small>KeyAuth</small>!</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br><br>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x27text-align:\x20center;\x20font-size:\x2025px;\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Application:\x20' + appConfig[l(0x1a5)] + l(0x19f) + T[l(0x1bf)][l(0x190)] + '</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Subscription:\x20' + T[l(0x1bf)][l(0x1b9)][0x0][l(0x196)] + l(0x1a1) + convertTimestamp(T[l(0x1bf)][l(0x1b9)][0x0][l(0x188)]) + l(0x1b3) + T['info'][l(0x1b9)][0x0]['timeleft'] + l(0x1bc) + T['info']['ip'] + l(0x19c) + T[l(0x1bf)][l(0x1bd)] + l(0x1a7) + convertTimestamp(T[l(0x1bf)][l(0x185)]) + l(0x1a0) + convertTimestamp(T[l(0x1bf)][l(0x18a)]) + l(0x19e);
                        } else {
                            alert(T['message']);
                        }
                    }
                });
            } else {
                alert(z[C(0x1ba)]);
            }
        }
    });
    function convertTimestamp(z) {
        var o = O;
        var g = new Date(z * 0x3e8), q = g[o(0x18e)](), e = ('0' + (g[o(0x1c8)]() + 0x1))[o(0x189)](-0x2), T = ('0' + g[o(0x1c4)]())['slice'](-0x2), j = g[o(0x1b6)](), X = j, M = ('0' + g[o(0x183)]())[o(0x189)](-0x2), n = 'AM', m;
        if (j > 0xc) {
            X = j - 0xc;
            n = 'PM';
        } else if (j === 0xc) {
            X = 0xc;
            n = 'PM';
        } else if (j == 0x0) {
            X = 0xc;
        }
        m = q + '-' + e + '-' + T + '\x20@\x20' + X + ':' + M + '\x20' + n;
        return m;
    }
    function Q(h) {
        function d(z) {
            var U = R;
            if (typeof z === U(0x1a3)) {
                return function (g) {
                }[U(0x180)](U(0x1aa))['apply'](U(0x193));
            } else {
                if (('' + z / z)[U(0x17d)] !== 0x1 || z % 0x14 === 0x0) {
                    (function () {
                        return !![];
                    }[U(0x180)]('debu' + U(0x1a4))[U(0x1c0)](U(0x198)));
                } else {
                    (function () {
                        return ![];
                    }['constructor']('debu' + U(0x1a4))[U(0x184)]('stateObject'));
                }
            }
            d(++z);
        }
        try {
            if (h) {
                return d;
            } else {
                d(0x0);
            }
        } catch (z) {
        }
    }
})();   