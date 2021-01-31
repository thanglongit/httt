function loadCSS(e, t, n) {
    "use strict";
    var i = window.document.createElement("link");
    var o = t || window.document.getElementsByTagName("script")[0];
    i.rel = "stylesheet";
    i.href = e;
    i.media = "only x";
    o.parentNode.insertBefore(i, o);
    setTimeout(function() {
        i.media = n || "all"
    })
}
loadCSS("./style1.css");
loadCSS("./style2.css");
loadCSS("./style3.css");
loadCSS("./style4.css");
loadCSS("./style5.css");
loadCSS("./style6.css");
loadCSS("./style7.css");
loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
loadCSS("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese");
loadCSS("https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600");