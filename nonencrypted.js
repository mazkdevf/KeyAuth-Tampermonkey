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


    GM_xmlhttpRequest({
        method: "POST",
        url: `https://keyauth.win/api/1.2/?type=init&ver=${appConfig.version}&name=${appConfig.name}&ownerid=${appConfig.ownerid}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "keyauth.win",
            "accept": "application/json"
        },
        onload: function (response) {
            var jsonResponse = JSON.parse(response.responseText);
            if (jsonResponse.success) {

                var sessionId = jsonResponse.sessionid;

                GM_xmlhttpRequest({
                    method: "POST",
                    url: "https://keyauth.win/api/1.2/?type=license&key=" + license + "&sessionid=" + sessionId + `&name=${appConfig.name}&ownerid=${appConfig.ownerid}`,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Host": "keyauth.win",
                        "accept": "application/json"
                    },
                    onload: function (response) {
                        var jsonResponse = JSON.parse(response.responseText);
                        if (jsonResponse.success) {
                            console.log("Successfully authenticated with KeyAuth!", jsonResponse)
                            document.documentElement.style.backgroundColor = "black";
                            document.body.innerHTML = "";

                            document.body.innerHTML = `
                            <h1 style='text-align: center; font-size: 50px; margin-top: 50px;'>
                            Successfully Authenticated with Tampermonkey and <small>KeyAuth</small>!</h1>
                            <br><br>

                            <div style='text-align: center; font-size: 25px;'>
                                <small>Application: ${appConfig.name}</small>

                                <br><br>

                                <small>Username: ${jsonResponse.info.username}</small>
                                <br>
                                <small>Subscription: ${jsonResponse.info.subscriptions[0].subscription}</small>
                                <br>
                                <small>Expiry: ${convertTimestamp(jsonResponse.info.subscriptions[0].expiry)}</small>
                                <br>
                                <small>Time Left: ${jsonResponse.info.subscriptions[0].timeleft}</small>
                                <br>
                                <small>IP: ${jsonResponse.info.ip}</small>
                                <br>
                                <small>HWID: ${jsonResponse.info.hwid}</small>
                                <br>
                                <small>Create Date: ${convertTimestamp(jsonResponse.info.createdate)}</small>
                                <br>
                                <small>Last Login: ${convertTimestamp(jsonResponse.info.lastlogin)}</small>
                            </div>
                            `;
                        } else {
                            alert(jsonResponse.message);
                        }
                    }
                });
            } else {
                alert(jsonResponse.message);
            }
        }
    });

    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        time = yyyy + '-' + mm + '-' + dd + ' @ ' + h + ':' + min + ' ' + ampm;

        return time;
    }
})();