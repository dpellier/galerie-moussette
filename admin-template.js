(function () {
var root = this, exports = {};

// The jade runtime:
var jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects

// login.jade compiled template
exports.login = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<link rel="stylesheet" type="text/css" href="/stylesheets/style.css"/>\n<link rel="stylesheet" type="text/css" href="/stylesheets/bootstrap.min.css"/>\n<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Montserrat+Alternates"/>\n<script type="text/javascript" charset="utf-8" src="/javascripts/lib/jquery-1.8.2.min.js"></script>\n<script type="text/javascript" charset="utf-8" src="/javascripts/admin.js"></script>\n<div class="row-fluid">\n  <div class="span4"></div>\n  <div class="span4 login common-back">\n    <form action="/login" method="post" enctype="multipart/form-data" class="centered">\n      <div><span>Nom d\'utilisateur :&nbsp;</span>\n        <input type="text" name="username"/>\n      </div>\n      <div><span>Mot de passe :&nbsp;</span>\n        <input type="password" name="password"/>\n      </div>\n      <input type="submit" value="Se connecter" class="btn"/>');
        if (error) {
            buf.push('\n      <p class="error mt10">' + escape((interp = error) == null ? "" : interp) + "</p>");
        }
        buf.push("\n    </form>\n  </div>\n</div>");
    }
    return buf.join("");
};

// admin_menu.jade compiled template
exports.admin_menu = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<link rel="stylesheet" type="text/css" href="/stylesheets/style.css"/>\n<link rel="stylesheet" type="text/css" href="/stylesheets/bootstrap.min.css"/>\n<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Montserrat+Alternates"/>\n<script type="text/javascript" charset="utf-8" src="/javascripts/lib/jquery-1.8.2.min.js"></script>\n<script type="text/javascript" charset="utf-8" src="/javascripts/admin.js"></script>\n<h2 class="centered mb20 title-font">Administration du site</h2>\n<div class="logout">\n  <button onclick="window.location.href = &quot;/logout&quot;;" class="btn"><span>Se déconnecter</span></button>\n</div>\n<div class="admin-back">\n  <button onclick="window.location.href = &quot;/&quot;;" class="btn"><span>Retour au site</span></button>\n</div>\n<div class="row-fluid">\n  <div class="span2"></div>\n  <div class="span3 common-back">\n    <h4 class="centered title-font">Images</h4>\n    <div class="ml30 pb10">\n      <button onclick="window.location.href=&quot;/admin/arts/pictures&quot;" class="btn admin_btn"><img src="images/btnPicture.jpg"/></button><span class="admin-link title-font">Modifier les Photos</span>\n    </div>\n    <div class="ml30 pb10">\n      <button onclick="window.location.href=&quot;/admin/arts/collages&quot;" class="btn admin_btn"><img src="images/btnCollage.jpg"/></button><span class="admin-link title-font">Modifier les Collages</span>\n    </div>\n    <div class="ml30 pb10">\n      <button onclick="window.location.href=&quot;/admin/arts/drawings&quot;" class="btn admin_btn"><img src="images/btnDrawing.jpg"/></button><span class="admin-link title-font">Modifier les Dessins</span>\n    </div>\n  </div>\n  <div class="span1"></div>\n  <div class="span3 common-back">\n    <h4 class="centered title-font">Contenu</h4><span>Coming Soon ...</span><!--\n    <button onclick="window.location.href=&quot;/admin/text&quot;" class="btn admin_btn"><img src="images/btnText.png"/>\n      <p>TEXTE</p>\n    </button>-->\n  </div>\n</div>');
    }
    return buf.join("");
};

// admin.jade compiled template
exports.admin = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<link rel="stylesheet" type="text/css" href="/stylesheets/style.css"/>\n<link rel="stylesheet" type="text/css" href="/stylesheets/bootstrap.min.css"/>\n<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Montserrat+Alternates"/>\n<script type="text/javascript" charset="utf-8" src="/javascripts/lib/jquery-1.8.2.min.js"></script>\n<script type="text/javascript" charset="utf-8" src="/javascripts/admin.js"></script>');
    }
    return buf.join("");
};

// admin_images.jade compiled template
exports.admin_images = function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var buf = [];
    with (locals || {}) {
        var interp;
        var __indent = [];
        buf.push('\n<link rel="stylesheet" type="text/css" href="/stylesheets/style.css"/>\n<link rel="stylesheet" type="text/css" href="/stylesheets/bootstrap.min.css"/>\n<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Montserrat+Alternates"/>\n<script type="text/javascript" charset="utf-8" src="/javascripts/lib/jquery-1.8.2.min.js"></script>\n<script type="text/javascript" charset="utf-8" src="/javascripts/admin.js"></script>\n<h2 class="centered mb20 title-font">Administration de la galerie</h2>\n<input');
        buf.push(attrs({
            id: "type",
            type: "hidden",
            value: "" + type
        }, {
            id: true,
            type: true,
            value: true
        }));
        buf.push('/>\n<div class="logout">\n  <button onclick="window.location.href = &quot;/logout&quot;;" class="btn"><span>Se déconnecter</span></button>\n</div>\n<div class="admin-back">\n  <button onclick="window.location.href = &quot;/admin&quot;;" class="btn"><span>Retour au menu >></span></button>\n</div>\n<div class="row-fluid">\n  <div class="span2"></div>\n  <div class="span8 common-back img-list">');
        (function() {
            if ("number" == typeof images.length) {
                for (var $index = 0, $$l = images.length; $index < $$l; $index++) {
                    var image = images[$index];
                    buf.push('\n    <div class="img-min"><img');
                    buf.push(attrs({
                        src: "data:Image;base64," + image.data
                    }, {
                        src: true
                    }));
                    buf.push("/></div>");
                }
            } else {
                for (var $index in images) {
                    var image = images[$index];
                    buf.push('\n    <div class="img-min"><img');
                    buf.push(attrs({
                        src: "data:Image;base64," + image.data
                    }, {
                        src: true
                    }));
                    buf.push("/></div>");
                }
            }
        }).call(this);
        buf.push('\n  </div>\n  <div class="span1">\n    <div class="common-back admin-img-btn">\n      <form');
        buf.push(attrs({
            id: "uploadForm",
            action: "/upload/" + type,
            method: "post",
            enctype: "multipart/form-data",
            style: "margin:0"
        }, {
            id: true,
            action: true,
            method: true,
            enctype: true,
            style: true
        }));
        buf.push('>\n        <input type="file" id="browseImage" name="browseImage" onchange="uploadImage();" class="hidden"/>\n      </form><img src="/images/add.png" title="Ajouter une nouvelle image" onclick="browseImage();"/>\n    </div>\n    <div class="common-back admin-img-btn"><img src="/images/zoom.png" title="Afficher l&rsquo;image" class="enabled hidden"/><img src="/images/zoom-disable.png" title="Aucune image sélectionnée" class="disabled"/></div>\n    <div class="common-back admin-img-btn"><img src="/images/delete.png" title="Supprimer l&rsquo;image" class="enabled hidden"/><img src="/images/delete-disable.png" title="Aucune image sélectionnée" class="disabled"/></div>\n  </div>\n</div>\n<script type="text/javascript" charset="utf-8">$(\'.img-min > img\').click(enableMenu);</script>');
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