(function () {
var root = this, exports = {};

// The jade runtime:
var jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects

// email.jade compiled template
exports.email = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html>\n  <head>\n    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\n  </head>\n  <body>\n    <p>Hello</p>\n    <p>text= text</p>\n    <p>{#text}</p>\n  </body>\n</html>');
    }
    return buf.join("");
};

// contact.jade compiled template
exports.contact = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<div class="screen-margin">\n  <div class="row-fluid">\n    <div class="span3"></div>\n    <div class="span6 common-back pt10 contact">\n      <div class="row">\n        <div class="span3"><span>Votre email :&nbsp;</span></div>\n        <div class="span6">\n          <input id="email" type="email" class="w100"/>\n        </div>\n        <div id="warnMail" class="warning span3 hidden">\n          <p>Email incorrect</p>\n        </div>\n      </div>\n      <div class="row">\n        <div class="span3"><span>Votre message :&nbsp;</span></div>\n        <div class="span6">\n          <textarea id="mailText" rows="" cols=""></textarea>\n        </div>\n        <div id="warnText" class="warning span3 p20 hidden">\n          <p>N\'oubliez pas d\'écrire un message</p>\n        </div>\n      </div>\n      <div class="row mt10">\n        <div class="span3"></div>\n        <div class="span6 centered">\n          <input type="submit" value="Envoyer" onclick="sendMail();"/>\n        </div>\n      </div>\n      <div class="row">\n        <div class="span3"></div>\n        <div class="span6 centered">\n          <p class="error hidden">Votre message n\'a pas pu être envoyé</p>\n          <p class="validation hidden">Votre message a bien été envoyé</p>\n        </div>\n      </div>\n      <div id="fp_loading" class="fp_loading"></div>\n    </div>\n  </div>\n</div>');
    }
    return buf.join("");
};

// arts.jade compiled template
exports.arts = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<div id="fp_thumbContainer">\n  <div id="fp_thumbScroller">\n    <div class="imgContainer">');
        (function() {
            if ("number" == typeof images.length) {
                for (var $index = 0, $$l = images.length; $index < $$l; $index++) {
                    var image = images[$index];
                    buf.push('\n      <div class="content">\n        <div><a href="#"><img');
                    buf.push(attrs({
                        src: "data:image/jpg;base64," + image.get("data"),
                        alt: "data:image/jpg;base64," + image.get("data"),
                        "class": "thumb"
                    }, {
                        src: true,
                        alt: true
                    }));
                    buf.push("/></a></div>\n      </div>");
                }
            } else {
                for (var $index in images) {
                    var image = images[$index];
                    buf.push('\n      <div class="content">\n        <div><a href="#"><img');
                    buf.push(attrs({
                        src: "data:image/jpg;base64," + image.get("data"),
                        alt: "data:image/jpg;base64," + image.get("data"),
                        "class": "thumb"
                    }, {
                        src: true,
                        alt: true
                    }));
                    buf.push("/></a></div>\n      </div>");
                }
            }
        }).call(this);
        buf.push('\n    </div>\n  </div>\n</div>\n<div id="fp_scrollWrapper" class="fp_scrollWrapper"><span id="fp_prev_thumb" class="fp_prev_thumb"></span>\n  <div id="slider" class="slider"></div><span id="fp_next_thumb" class="fp_next_thumb"></span>\n</div>\n<div id="fp_overlay" class="fp_overlay"></div>\n<div id="fp_loading" class="fp_loading"></div>\n<div id="fp_next" class="fp_next"></div>\n<div id="fp_prev" class="fp_prev"></div>\n<div id="fp_close" class="fp_close"></div>\n<script type="text/javascript" charset="utf-8" src="javascripts/slider.js"></script>');
    }
    return buf.join("");
};

// home.jade compiled template
exports.home = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<div id="homeGallery">');
        (function() {
            if ("number" == typeof images.length) {
                for (var $index = 0, $$l = images.length; $index < $$l; $index++) {
                    var image = images[$index];
                    buf.push('\n  <div class="home-img hidden"><img');
                    buf.push(attrs({
                        src: "data:image/jpg;base64," + image.get("data")
                    }, {
                        src: true
                    }));
                    buf.push("/></div>");
                }
            } else {
                for (var $index in images) {
                    var image = images[$index];
                    buf.push('\n  <div class="home-img hidden"><img');
                    buf.push(attrs({
                        src: "data:image/jpg;base64," + image.get("data")
                    }, {
                        src: true
                    }));
                    buf.push("/></div>");
                }
            }
        }).call(this);
        buf.push("\n</div>");
    }
    return buf.join("");
};

// myself.jade compiled template
exports.myself = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<div class="screen-margin">\n  <div class="row-fluid">\n    <div class="span2 common-back pt10 centered"><img src="images/portrait.jpg"/>\n      <p class="pt15 prl5">Blablabla hem djljd Blablabla hem djljd Blablabla</p>\n      <p class="prl5">Blablabla hem djljd Blablabla hem djljd Blablabla</p>\n    </div>\n    <div class="span10 common-back pt10 text-content">\n      <p>\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n      </p>\n    </div>\n  </div>\n</div>');
    }
    return buf.join("");
};

// err404.jade compiled template
exports.err404 = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<div class="miss"></div>');
    }
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();