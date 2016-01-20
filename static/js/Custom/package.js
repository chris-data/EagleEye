/**
 * Created by wang.zy on 2015/12/4.
 */

Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
var groupcharts = function () {
    $(document).ready(function () {
        today = sysdate(0);
        yesterday = sysdate(-1);
        lastweek = sysdate(-7);
        tommorw = sysdate(1);
        lastweekplus = sysdate(-6);

        var $channel = $("#channel");
        var $product_pkg = $("#product_pkg");
        var $interval = $("#interval");
        var $product = $("#product");
        var $btn_mode_change = $("#mode_change");
        var $btn_refresh = $("#refresh");

        $(".selectparam").select2({
            minimumResultsForSearch: Infinity
        });

        pageid3 = -1000;
        pageid4 = -1005;
        pageid5 = -1010;

        channel = $channel.val();
        product_pkg = $product_pkg.val();
        product = $product.val();
        interval = $interval.val();
        $interval.bind('change', function (event) {
            interval = $interval.val();

        })
        $channel.bind('change', function (event) {
            channel = $channel.val();
            if (product === "all") {
                if (channel === 'all') {
                    pageid = 0;
                } else if (channel === "online") {
                    pageid = 7;
                } else if (channel === "app") {
                    pageid = 8;
                } else if (channel === "h5") {
                    pageid = 9;
                } else if (channel === "offline") {
                    pageid = -1;
                }
            }
            else if (product === "dp") {
                if (channel === "all") {
                    pageid = 18;
                } else if (channel === "online") {
                    pageid = 1;
                } else if (channel === "app") {
                    pageid = 3;
                } else if (channel === "h5") {
                    pageid = 5;
                } else if (channel === "offline") {
                    pageid = -1;
                }
            }
            else if (product === "sdp") {
                if (channel === "all") {
                    pageid = 19;
                } else if (channel === "online") {
                    pageid = 2;
                } else if (channel === "app") {
                    pageid = 4;
                } else if (channel === "h5") {
                    pageid = 6;
                } else if (channel === "offline") {
                    pageid = -1;
                }
            }
            if (product_pkg === 'all') {
                if (channel === "all") {
                    pageid3 = -1000;
                } else if (channel === "online") {
                    pageid3 = -1015;
                } else if (channel === "app") {
                    pageid3 = -1030;
                } else if (channel === "h5") {
                    pageid3 = -1045;
                } else {
                    pageid3 = -10000
                }
            } else if (product_pkg === 'pkg') {
                if (channel === "all") {
                    pageid3 = -1001;
                } else if (channel === "online") {
                    pageid3 = -1016;
                } else if (channel === "app") {
                    pageid3 = -1031;
                } else if (channel === "h5") {
                    pageid3 = -1046;
                } else {
                    pageid3 = -10000
                }
            } else if (product_pkg === 'short') {
                if (channel === "all") {
                    pageid3 = -1002;
                } else if (channel === "online") {
                    pageid3 = -1017;
                } else if (channel === "app") {
                    pageid3 = -1032;
                } else if (channel === "h5") {
                    pageid3 = -1047;
                } else {
                    pageid3 = -10000
                }
            } else if (product_pkg === 'visa') {
                if (channel === "all") {
                    pageid3 = -1004;
                } else if (channel === "online") {
                    pageid3 = -1019;
                } else if (channel === "app") {
                    pageid3 = -1034;
                } else if (channel === "h5") {
                    pageid3 = -1049;
                } else {
                    pageid3 = -10000
                }
            }

            if (product_pkg === 'all') {
                if (channel === "all") {
                    pageid4 = -1005;
                } else if (channel === "online") {
                    pageid4 = -1020;
                } else if (channel === "app") {
                    pageid4 = -1035;
                } else if (channel === "h5") {
                    pageid4 = -1050;
                } else {
                    pageid4 = -10000
                }
            } else if (product_pkg === 'pkg') {
                if (channel === "all") {
                    pageid4 = -1006;
                } else if (channel === "online") {
                    pageid4 = -1021;
                } else if (channel === "app") {
                    pageid4 = -1036;
                } else if (channel === "h5") {
                    pageid4 = -1046;
                }
                else {
                    pageid4 = -10000
                }
            } else if (product_pkg === 'short') {
                if (channel === "all") {
                    pageid4 = -1007;
                } else if (channel === "online") {
                    pageid4 = -1017;
                } else if (channel === "app") {
                    pageid4 = -1032;
                } else if (channel === "h5") {
                    pageid4 = -1052;
                } else {
                    pageid4 = -10000
                }
            } else if (product_pkg === 'visa') {
                if (channel === "all") {
                    pageid4 = -1009;
                } else if (channel === "online") {
                    pageid4 = -1024;
                } else if (channel === "app") {
                    pageid4 = -1039;
                } else if (channel === "h5") {
                    pageid4 = -1054;
                } else {
                    pageid4 = -10000
                }
            }

            if (product_pkg === 'all') {
                if (channel === "offline") {
                    pageid5 = -10000;
                } else if (channel === "online") {
                    pageid5 = -1025;
                } else if (channel === "app") {
                    pageid5 = -1040;
                } else if (channel === "h5") {
                    pageid5 = -1055;
                } else if (channel === "offline") {
                    pageid5 = -1021
                }
            } else if (product_pkg === 'pkg') {
                if (channel === "all") {
                    pageid5 = -1011;
                } else if (channel === "online") {
                    pageid5 = -1026;
                } else if (channel === "app") {
                    pageid5 = -1041;
                } else if (channel === "h5") {
                    pageid5 = -1056;
                } else {
                    pageid5 = -10000
                }
            } else if (product_pkg === 'short') {
                if (channel === "all") {
                    pageid5 = -1012;
                } else if (channel === "online") {
                    pageid5 = -1027;
                } else if (channel === "app") {
                    pageid5 = -1042;
                } else if (channel === "h5") {
                    pageid5 = -1057;
                } else {
                    pageid5 = -10000
                }
            } else if (product_pkg === 'visa') {
                if (channel === "all") {
                    pageid5 = -1014;
                } else if (channel === "online") {
                    pageid5 = -1029;
                } else if (channel === "app") {
                    pageid5 = -1044;
                } else if (channel === "h5") {
                    pageid5 = -1059;
                } else {
                    pageid5 = -10000
                }
            }

            // history order category
            if (product === "all") {
                if (channel === 'all') {
                    productpattern = 1;
                } else if (channel === "online") {
                    productpattern = 12;
                } else if (channel === "offline") {
                    productpattern = 14;
                } else if (channel === "app") {
                    productpattern = 13;
                } else if (channel === "h5") {
                    productpattern = 15;
                }
            }
            else if (product === "dp") {
                if (channel === "all") {
                    productpattern = 8;
                } else if (channel === "online") {
                    productpattern = 2;
                } else if (channel === "app") {
                    productpattern = 3;
                } else if (channel === "h5") {
                    productpattern = 10;
                } else if (channel === "offline") {
                    productpattern = 4;
                }
            }
            else if (product === "sdp") {
                if (channel === "all") {
                    productpattern = 9;
                } else if (channel === "online") {
                    productpattern = 5;
                } else if (channel === "app") {
                    productpattern = 6;
                } else if (channel === "h5") {
                    productpattern = 11;
                } else if (channel === "offline") {
                    productpattern = 7;
                }
            }

            // 填写页pageid 对应storm表 pageid
            if (product === "all") {
                if (channel === 'all') {
                    pageid1 = 23;
                } else if (channel === "online") {
                    pageid1 = 20;
                } else if (channel === "offline") {
                    pageid1 = -1;
                } else if (channel === "app") {
                    pageid1 = 21;
                } else if (channel === "h5") {
                    pageid1 = 22;
                }
            }
            else if (product === "dp") {
                if (channel === "all") {
                    pageid1 = 16;
                } else if (channel === "online") {
                    pageid1 = 10;
                } else if (channel === "app") {
                    pageid1 = 12;
                } else if (channel === "h5") {
                    pageid1 = 10;
                } else if (channel === "offline") {
                    pageid1 = -1;
                }
            }
            else if (product === "sdp") {
                if (channel === "all") {
                    pageid1 = 17;
                } else if (channel === "online") {
                    pageid1 = 11;
                } else if (channel === "app") {
                    pageid1 = 13;
                } else if (channel === "h5") {
                    pageid1 = 15;
                } else if (channel === "offline") {
                    pageid1 = -1;
                }
            }
        })
        $product_pkg.bind('change', function (event) {
            product_pkg = $product_pkg.val();

            if (product_pkg === 'all') {
                if (channel === "all") {
                    pageid3 = -1000;
                } else if (channel === "online") {
                    pageid3 = -1015;
                } else if (channel === "app") {
                    pageid3 = -1030;
                } else if (channel === "h5") {
                    pageid3 = -1045;
                } else {
                    pageid3 = -10000
                }
            } else if (product_pkg === 'pkg') {
                if (channel === "all") {
                    pageid3 = -1001;
                } else if (channel === "online") {
                    pageid3 = -1016;
                } else if (channel === "app") {
                    pageid3 = -1031;
                } else if (channel === "h5") {
                    pageid3 = -1046;
                } else {
                    pageid3 = -10000
                }
            } else if (product_pkg === 'short') {
                if (channel === "all") {
                    pageid3 = -1002;
                } else if (channel === "online") {
                    pageid3 = -1017;
                } else if (channel === "app") {
                    pageid3 = -1032;
                } else if (channel === "h5") {
                    pageid3 = -1047;
                } else {
                    pageid3 = -10000
                }
            } else if (product_pkg === 'visa') {
                if (channel === "all") {
                    pageid3 = -1004;
                } else if (channel === "online") {
                    pageid3 = -1019;
                } else if (channel === "app") {
                    pageid3 = -1034;
                } else if (channel === "h5") {
                    pageid3 = -1049;
                } else {
                    pageid3 = -10000
                }
            }

            if (product_pkg === 'all') {
                if (channel === "all") {
                    pageid4 = -1005;
                } else if (channel === "online") {
                    pageid4 = -1020;
                } else if (channel === "app") {
                    pageid4 = -1035;
                } else if (channel === "h5") {
                    pageid4 = -1050;
                } else {
                    pageid4 = -10000
                }
            } else if (product_pkg === 'pkg') {
                if (channel === "all") {
                    pageid4 = -1006;
                } else if (channel === "online") {
                    pageid4 = -1021;
                } else if (channel === "app") {
                    pageid4 = -1036;
                } else if (channel === "h5") {
                    pageid4 = -1046;
                } else {
                    pageid4 = -10000
                }
            } else if (product_pkg === 'short') {
                if (channel === "all") {
                    pageid4 = -1007;
                } else if (channel === "online") {
                    pageid4 = -1017;
                } else if (channel === "app") {
                    pageid4 = -1032;
                } else if (channel === "h5") {
                    pageid4 = -1052;
                } else {
                    pageid4 = -10000
                }
            } else if (product_pkg === 'visa') {
                if (channel === "all") {
                    pageid4 = -1009;
                } else if (channel === "online") {
                    pageid4 = -1024;
                } else if (channel === "app") {
                    pageid4 = -1039;
                } else if (channel === "h5") {
                    pageid4 = -1054;
                } else {
                    pageid4 = -10000
                }
            }

            if (product_pkg === 'all') {
                if (channel === "all") {
                    pageid5 = -1010;
                } else if (channel === "online") {
                    pageid5 = -1025;
                } else if (channel === "app") {
                    pageid5 = -1040;
                } else if (channel === "h5") {
                    pageid5 = -1055;
                } else {
                    pageid5 = -10000
                }
            } else if (product_pkg === 'pkg') {
                if (channel === "all") {
                    pageid5 = -1011;
                } else if (channel === "online") {
                    pageid5 = -1026;
                } else if (channel === "app") {
                    pageid5 = -1041;
                } else if (channel === "h5") {
                    pageid5 = -1056;
                } else {
                    pageid5 = -10000
                }
            } else if (product_pkg === 'short') {
                if (channel === "all") {
                    pageid5 = -1012;
                } else if (channel === "online") {
                    pageid5 = -1027;
                } else if (channel === "app") {
                    pageid5 = -1042;
                } else if (channel === "h5") {
                    pageid5 = -1057;
                } else {
                    pageid5 = -10000
                }
            } else if (product_pkg === 'visa') {
                if (channel === "all") {
                    pageid5 = -1014;
                } else if (channel === "online") {
                    pageid5 = -1029;
                } else if (channel === "app") {
                    pageid5 = -1044;
                } else if (channel === "h5") {
                    pageid5 = -1059;
                } else {
                    pageid5 = -10000
                }
            }

            // history order category
            if (product === "all") {
                if (channel === 'all') {
                    productpattern = 1;
                } else if (channel === "online") {
                    productpattern = 12;
                } else if (channel === "offline") {
                    productpattern = 14;
                } else if (channel === "app") {
                    productpattern = 13;
                } else if (channel === "h5") {
                    productpattern = 15;
                }
            }
            else if (product === "dp") {
                if (channel === "all") {
                    productpattern = 8;
                } else if (channel === "online") {
                    productpattern = 2;
                } else if (channel === "app") {
                    productpattern = 3;
                } else if (channel === "h5") {
                    productpattern = 10;
                } else if (channel === "offline") {
                    productpattern = 4;
                }
            }
            else if (product === "sdp") {
                if (channel === "all") {
                    productpattern = 9;
                } else if (channel === "online") {
                    productpattern = 5;
                } else if (channel === "app") {
                    productpattern = 6;
                } else if (channel === "h5") {
                    productpattern = 11;
                } else if (channel === "offline") {
                    productpattern = 7;
                }
            }

            // 填写页pageid 对应storm表 pageid
            if (product === "all") {
                if (channel === 'all') {
                    pageid1 = 23;
                } else if (channel === "online") {
                    pageid1 = 20;
                } else if (channel === "offline") {
                    pageid1 = -1;
                } else if (channel === "app") {
                    pageid1 = 21;
                } else if (channel === "h5") {
                    pageid1 = 22;
                }
            }
            else if (product === "dp") {
                if (channel === "all") {
                    pageid1 = 16;
                } else if (channel === "online") {
                    pageid1 = 10;
                } else if (channel === "app") {
                    pageid1 = 12;
                } else if (channel === "h5") {
                    pageid1 = 10;
                } else if (channel === "offline") {
                    pageid1 = -1;
                }
            }
            else if (product === "sdp") {
                if (channel === "all") {
                    pageid1 = 17;
                } else if (channel === "online") {
                    pageid1 = 11;
                } else if (channel === "app") {
                    pageid1 = 13;
                } else if (channel === "h5") {
                    pageid1 = 15;
                } else if (channel === "offline") {
                    pageid1 = -1;
                }
            }
        })
        $product.bind('change', function (event) {
            product = $product.val();
            if (product === "all") {
                if (channel === 'all') {
                    pageid = 0;
                } else if (channel === "online") {
                    pageid = 7;
                } else if (channel === "app") {
                    pageid = 8;
                } else if (channel === "h5") {
                    pageid = 9;
                } else if (channel === "offline") {
                    pageid = -1;
                }
            }
            else if (product === "dp") {
                if (channel === "all") {
                    pageid = 18;
                } else if (channel === "online") {
                    pageid = 1;
                } else if (channel === "app") {
                    pageid = 3;
                } else if (channel === "h5") {
                    pageid = 5;
                } else if (channel === "offline") {
                    pageid = -1;
                }
            }
            else if (product === "sdp") {
                if (channel === "all") {
                    pageid = 19;
                } else if (channel === "online") {
                    pageid = 2;
                } else if (channel === "app") {
                    pageid = 4;
                } else if (channel === "h5") {
                    pageid = 6;
                } else if (channel === "offline") {
                    pageid = -1;
                }
            }
            // history order category
            if (product === "all") {
                if (channel === 'all') {
                    productpattern = 1;
                } else if (channel === "online") {
                    productpattern = 12;
                } else if (channel === "offline") {
                    productpattern = 14;
                } else if (channel === "app") {
                    productpattern = 13;
                } else if (channel === "h5") {
                    productpattern = 15;
                }
            }
            else if (product === "dp") {
                if (channel === "all") {
                    productpattern = 8;
                } else if (channel === "online") {
                    productpattern = 2;
                } else if (channel === "app") {
                    productpattern = 3;
                } else if (channel === "h5") {
                    productpattern = 10;
                } else if (channel === "offline") {
                    productpattern = 4;
                }
            }
            else if (product === "sdp") {
                if (channel === "all") {
                    productpattern = 9;
                } else if (channel === "online") {
                    productpattern = 5;
                } else if (channel === "app") {
                    productpattern = 6;
                } else if (channel === "h5") {
                    productpattern = 11;
                } else if (channel === "offline") {
                    productpattern = 7;
                }
            }

            // 填写页pageid 对应storm表 pageid
            if (product === "all") {
                if (channel === 'all') {
                    pageid1 = 23;
                } else if (channel === "online") {
                    pageid1 = 20;
                } else if (channel === "offline") {
                    pageid1 = -1;
                } else if (channel === "app") {
                    pageid1 = 21;
                } else if (channel === "h5") {
                    pageid1 = 22;
                }
            }
            else if (product === "dp") {
                if (channel === "all") {
                    pageid1 = 16;
                } else if (channel === "online") {
                    pageid1 = 10;
                } else if (channel === "app") {
                    pageid1 = 12;
                } else if (channel === "h5") {
                    pageid1 = 10;
                } else if (channel === "offline") {
                    pageid1 = -1;
                }
            }
            else if (product === "sdp") {
                if (channel === "all") {
                    pageid1 = 17;
                } else if (channel === "online") {
                    pageid1 = 11;
                } else if (channel === "app") {
                    pageid1 = 13;
                } else if (channel === "h5") {
                    pageid1 = 15;
                } else if (channel === "offline") {
                    pageid1 = -1;
                }
            }
        });


        $("#param_frt").hide();
        $("#refresh").hide();
        $("#mode_change").hide();

        $("#param_pkg").show();
        $("#mode_change_pkg").show();
        $("#refresh_pkg").show();
        $('.fa').hover(
            function () {
                $(this).css({"color": "#34aadc"});
            },
            function () {
                $(this).css({"color": "#688a7e"});
            }
        );
        $('.arrow_condense').hover(
            function () {
                $(this).css({"color": "#34aadc"});
            },
            function () {
                $(this).css({"color": "#688a7e"});
            }
        );
        chart_width = $("#pkg_order").width();


        renderpkg();
    })
    $("#refresh_pkg").bind("click", function (e) {
        renderpkg()
    });
    $("#mode_change_pkg").bind("click", function (e) {
        charts.removeChart(chart_pkgorder);
        chart_pkgorder = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", "", 220, 5, 'pkg_order', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
        charts.removeChart(chart_pkgcreate);
        chart_pkgcreate = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_create', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
        charts.removeChart(chart_pkgcommit);
        chart_pkgcommit = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_commit', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
        charts.removeChart(chart_pkgtraffic);
        chart_pkgtraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid3 + "/" + interval + "/False", null, 220, 5, 'pkg_traffic', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkgtraffic, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid3 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
        charts.removeChart(chart_pkgdetail);
        chart_pkgdetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid4 + "/" + interval + "/False", null, 220, 5, 'pkg_detail', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkgdetail, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid4 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
        charts.removeChart(chart_pkginput);
        chart_pkginput = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid5 + "/" + interval + "/False", null, 220, 5, 'pkg_input', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkginput, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid5 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
    });

    function renderpkg() {
        chart_pkgorder = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_order', "#E5E67B", chart_width, interval);
        chart_pkgcreate = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_create', "#E5E67B", chart_width, interval);
        chart_pkgcommit = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_commit', "#E5E67B", chart_width, interval);
        chart_pkgdetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid4 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid4 + "/" + interval, 220, 5, 'pkg_detail', "#f45b5b", "#E5E67B", chart_width);
        chart_pkginput = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid5 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid5 + "/" + interval, 220, 5, 'pkg_input', "#f45b5b", "#E5E67B", chart_width);
        chart_pkgtraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid3 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid3 + "/" + interval, 220, 5, 'pkg_traffic', "#f45b5b", "#E5E67B", chart_width);
        charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);

        charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);

        charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);
        charts.append_double(chart_pkgdetail, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid4 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
        charts.append_double(chart_pkginput, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid5 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
        charts.append_double(chart_pkgtraffic, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid3 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
    }

    $('#pkgorder2').bind('click', function (event) {
        charts.removeChart(chart_pkgorder);
        chart_pkgorder = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_order', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);
    });
    $('#pkgorder3').bind('click', function (event) {
        charts.removeChart(chart_pkgorder);
        chart_pkgorder = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", null, 220, 5, 'pkg_order', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
    });
    $('#pkgbooking2').bind('click', function (event) {
        charts.removeChart(chart_pkgcreate);
        chart_pkgcreate = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_create', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);
    });
    $('#pkgbooking3').bind('click', function (event) {
        charts.removeChart(chart_pkgcreate);
        chart_pkgcreate = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", null, 220, 5, 'pkg_create', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
    });
    $('#pkgcommit2').bind('click', function (event) {
        charts.removeChart(chart_pkgcommit);
        chart_pkgcommit = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_commit', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);
    });
    $('#pkgcommit3').bind('click', function (event) {
        charts.removeChart(chart_pkgcommit);
        chart_pkgcommit = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", null, 220, 5, 'pkg_commit', "#E5E67B", chart_width, interval);
        charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
        charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
    });

    $('#pkgtraffic2').bind('click', function (event) {
        charts.removeChart(chart_pkgtraffic);
        chart_pkgtraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid3 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid3 + "/" + interval, 220, 5, 'pkg_traffic', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkgtraffic, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid3 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
    });
    $('#pkgtraffic3').bind('click', function (event) {
        charts.removeChart(chart_pkgtraffic);
        chart_pkgtraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid3 + "/" + interval + "/False", null, 220, 5, 'pkg_traffic', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkgtraffic, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid3 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
    });
    $('#pkgdetail2').bind('click', function (event) {
        charts.removeChart(chart_pkgdetail);
        chart_pkgdetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid4 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid4 + "/" + interval, 220, 5, 'pkg_detail', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkgdetail, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid4 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
    });
    $('#pkgdetail3').bind('click', function (event) {
        charts.removeChart(chart_pkgdetail);
        chart_pkgdetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid4 + "/" + interval + "/False", null, 220, 5, 'pkg_detail', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkgdetail, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid4 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
    });
    $('#pkginput2').bind('click', function (event) {
        charts.removeChart(chart_pkginput);
        chart_pkginput = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid5 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid5 + "/" + interval, 220, 5, 'pkg_input', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkginput, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid5 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
    });
    $('#pkginput3').bind('click', function (event) {
        charts.removeChart(chart_pkginput);
        chart_pkginput = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid5 + "/" + interval + "/False", null, 220, 5, 'pkg_input', "#f45b5b", "#E5E67B");
        charts.append_double(chart_pkginput, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid5 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
    });
    $('#tab_frt').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $("#param_pkg").hide();
        $("#mode_change_pkg").hide();
        $("#refresh_pkg").hide();

        $("#param_frt").show();
        $("#mode_change").show();
        $("#refresh").show();
        $("#product").select2('val', 'all');
        $("#channel").select2('val', 'all');
        $("#interval").select2('val', '10');
        renderCharts();
    });
    $('#tab_pkg').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $("#product_pkg").val("all").trigger('change');
        $("#channel").val("all").trigger('change');
        $("#interval").val("10").trigger('change');
        $("#param_frt").hide();
        $("#refresh").hide();
        $("#mode_change").hide();
        $("#param_pkg").show();
        $("#mode_change_pkg").show();
        $("#refresh_pkg").show();
        charts.removeChart(chart_pkgorder);
        charts.removeChart(chart_pkgcreate);
        charts.removeChart(chart_pkgcommit);
        charts.removeChart(chart_pkgdetail);
        charts.removeChart(chart_pkginput);
        charts.removeChart(chart_pkgtraffic);
        charts.removeChart(chart_order);
        charts.removeChart(chart_booking);
        charts.removeChart(chart_commit);
        charts.removeChart(chart_detail);
        charts.removeChart(chart_input);
        charts.removeChart(chart_traffic);
        console.log(channel);
        pageid3 = -1000;
        pageid4 = -1005;
        pageid5 = -1010;
        renderpkg();
    });
    $("[data-toggle = 'tooltip']").tooltip();

    $("#reset").click(function (e) {
        e.preventDefault();
        $("#product").val("all").trigger("change");
        $("#product_pkg").val("all").trigger('change');
        $("#channel").val("all").trigger('change');
        $("#interval").val("10").trigger('change');
    });
}

