var urlBlog = 'https://t.me/wisdak1';
var license = $('#license-code').text();
var informasibatas = '<style>body{background:#fff}#peringatan span{font-size:50px}#peringatan{z-index:99999;position:fixed;top:0;right:0;left:0;height:30%;text-align:center;background:rgba(235, 0, 0, 1);border:5px solid #444;color:#fff;padding:70px 30px;font-family:monospace;border-radius:10px}#peringatan h4{font-size:20px}</style><div id="peringatan"><h4>Activate Templates</h4><p>Untuk mendapatkan lisensi Anda bisa menghubungi Admin blog.choipanwendy.com | 0813 1123 3392</p><span id="batas-waktu-template">20</span></div>';

function nolicense() {
    $(document.body).html(informasibatas);
    var mydiv = document.getElementById("batas-waktu-template"),
        time = setInterval(getcounter, 1000);

    function getcounter() {
        if (mydiv.textContent <= 0) {
            window.location.href = urlBlog;
            clearInterval(time);
        } else {
            setTimeout(function() {
                mydiv.textContent -= 1;
            }, 1000);

        }
    }

}

$(document).ready(function() {
    var dataLicense = license.split('-');
    var codeLicense = dataLicense[0];
    var arrayLicense = dataLicense[1];
    console.log(codeLicense);
    console.log(arrayLicense);
    if (arrayLicense === undefined) {
        nolicense();
    }
    str = [arrayLicense];
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwHMUDeQkEe3hVcHmpwGpZsyx-T4_nhECgmSUli_kaPSgTVa9VJk3Tgw-5ru2UUWFHEhA/exec",
        type: "GET",
        data: "users",
        crossDomain: true,
        dataType: "",
        success: function(data) {

            // mengambil data JSON dari user google sheet
            var json = data.user;

            // mengambil data dari Array ke-n
            var sheetLicense = json[str];
            console.log(sheetLicense)
            if (sheetLicense === undefined) {

                nolicense();
            }
            // mengambil data dari sheet, ada ID dan Code
            var ID = sheetLicense.id;
            var code = sheetLicense.code;
            // Mengambil data ID Blog dengan Ajax
            $.ajax({
                url: "/feeds/posts/summary/?alt=json",
                type: "get",
                dataType: "jsonp",
                success: function(data) {
                    // Mengambil ID Blog dari post summary blogger
                    var dataID = data.feed.id.$t;
                    console.log(dataID)

                    // Hasil tag:blogger.com,1999:blog-4666907241397774044, yang kita butuhkan hanya ID jadi butuh kita eksplode
                    var IDblog = dataID.split('-');

                    // Hasil eksplode - akan ada dua array yaitu tag:blogger.com,1999:blog dan 4666907241397774044 ["tag:blogger.com,1999:blog", "4666907241397774044"]

                    var blogID = IDblog[1];
                    try {
                        var dataInBlog = blogID + codeLicense,
                            dataInSheet = ID + code;
                        if (dataInBlog === dataInSheet) {
                            return;
                        }

                        nolicense();
                    } catch (input) {
                        window.location.href = urlBlog;
                    }
                },
            });
        },
    });
});
