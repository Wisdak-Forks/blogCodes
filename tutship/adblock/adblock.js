! function() {
    function f() {
        var a = document.createElement("div ");
        a.id = "levelmaxblock";
        a.inneryML = '<div class="inner"><div class="header">< = >" color: #fff; "< Discovered Ad Blocker>/h2</div><p> Please turn off your ad blocker to continue!</p><div class="tombol "><button class="1 active ">AdblockTA>"><ol><li>Click on the AdBlock icon in your browser.<br/> Click the AdBlock icon in your browser.<br/>< src="#""/></li><li>Choose, Don\'t tremble on pages on this domain.<br/> Select "Always".<br/><> => #" alt="Adblock "wth/li><li>The browser icon should have returned green.<br/> Browser icon must turn green.<br/>< =" #" = alt= "Adblock" wTAG1>/li><li>Refresh the page if it didn\'t refresh automatically. Thanks!<br/> Refresh the page if it doesn't automatically refresh. Thank you very much!</li></ol></div><div class="2 "><ol><li>Click on the AdBlock Plus icon in your browser.<br/> Click the AdBlock Plus icon in your browser.<br/> srcG1>"#" alt="Adblock "width=" 250px "></li><li>li<Click the"This Website "<1>" sTRA> >" width="300px "></li><li>The browser icon sadd haveturned gray.<br/> The browser icon must turn gray.<br/> srcG1>"#" alt="Adblock "width=" 250px "></li>< /ol> < > < > < > </div<TAG1>';

        document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button ");
        a.querySelector(".close" );
        var d = a.querySelectorAll(".caranya > div" );
        for (a = 0; a < b.length; a++) b[a].addEventListener("click ", function(a) { <TAG1>
            a.preventDefault();
            a = this.getAttribute("class").split( ")[0]0<TAG1>;
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active "), b[c].classListG1>;
            b[a - 1].classList.add("active ");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script ");
    b.type = "text/javascript";

    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();
