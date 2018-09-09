(function() {
    var _id="4975700b4985eec21c20f735bf122bec";
    while(document.getElementById("timer"+_id))_id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:433px;height:86px;'></div>");
    var _t=document.createElement("script");

    _t.src="timer/timer.js";
    
    var _f=function(_k) {
        var l=new MegaTimer(_id, {
            "view":[0, 1, 1, 1], "type": {
                "currentType":"3", "params": {
                    "weekdays": [1, 1, 1, 1, 1, 1, 1], "usertime": true, "time": "00:00", "tz": -180, "hours": "24", "minutes": "0"
                }
            }
            , "design": {
                "type":"plate", "params": {
                    "round":"10", "background":"solid", "background-color":"#414141", "effect":"flipchart", "space":"2", "separator-margin":"20", "number-font-family": {
                        "family": "Roboto", "link": "<link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }
                    , "number-font-size":"60", "number-font-color":"#ffffff", "padding":"12", "separator-on":false, "separator-text":":", "text-on":false, "text-font-family": {
                        "family": "Fira Sans", "link": "<link href='https://fonts.googleapis.com/css?family=Fira+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }
                    , "text-font-size":"12", "text-font-color":"red"
                }
            }
            , "designId":3, "theme":"white", "width":433, "height":86
        }
        );
        if(_k!=null)l.run();
    }
    ;
    _t.onload=_f;
    _t.onreadystatechange=function() {
        if(_t.readyState=="loaded")_f(1);
    }
    ;
    var _h=document.head||document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}

).call(this);