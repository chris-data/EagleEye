/**
 * Created by wang.zy on 2016/1/19.
 * Dashboard Page JS functions
 * 页面加载后只渲染自由行
 */
var today = sysdate(0);
var yesterday = sysdate(-1);
var lastweek = sysdate(-7);
var tommorw = sysdate(1);
var lastweekplus = sysdate(-6);

var $channel = $("#channel");
var $cruise = $("#cruise");
var $product_pkg = $("#product_pkg");
var $interval = $("#interval");
var $product = $("#product");
var $accumulated = $(".accumulated");
var $segmented = $(".segmented");

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
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

$("#reset").click(function (e) {
    e.preventDefault();
    reset();
});

function reset() {
    $("#product").val("all").trigger("change");
    $("#product_pkg").val("all").trigger('change');
    $("#channel").val("all").trigger('change');
    $("#interval").val("10").trigger('change');
    $("#cruise").val("all").trigger('change');
}
// 初始化页面参数
function initenvs() {
    tabid = 'frt';
    pageid = 0;
    pageid1 = 23;
    productpattern = 1;
    pageid3 = -1000;
    pageid4 = -1005;
    pageid5 = -1010;
    channel = $channel.val();
    product_pkg = $product_pkg.val();
    product = $product.val();
    interval = $interval.val();
    $("[data-toggle = 'tooltip']").tooltip();
    $(".selectparam").select2({
        minimumResultsForSearch: Infinity
    });
}
$interval.bind('change', function () {
    interval = $interval.val();

});
$channel.bind('change', function () {
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
});
$cruise.bind('change', function () {
    cruise = $cruise.val();
    pageid_all = -2023;
    pageid_detail = -2018;
    pageid_ccabin = -2019;
    pageid_item = -2020;
    pageid_write = -2021;
    pageid_submit = -2022;
    //联动逻辑
    if (cruise == 'all') {
        pageid_all = -2023;
        pageid_detail = -2018;
        pageid_ccabin = -2019;
        pageid_item = -2020;
        pageid_write = -2021;
        pageid_submit = -2022;
    } else if (cruise == 'online') {
        pageid_all = -2005;
        pageid_detail = -2000;
        pageid_ccabin = -2001;
        pageid_item = -2002;
        pageid_write = -2003;
        pageid_submit = -2004;
    } else if (cruise == 'app') {
        pageid_all = -2011;
        pageid_detail = -2006;
        pageid_ccabin = -2007;
        pageid_item = -2008;
        pageid_write = -2009;
        pageid_submit = -2010;
    } else if (cruise == 'h5') {
        pageid_all = -2017;
        pageid_detail = -2012;
        pageid_ccabin = -2013;
        pageid_item = -2014;
        pageid_write = -2015;
        pageid_submit = -2016;
    } else if (cruise == 'offline' || cruise == 'skysea') {
        pageid_all = -10000;
        pageid_detail = -10000;
        pageid_ccabin = -10000;
        pageid_item = -10000;
        pageid_write = -10000;
        pageid_submit = -10000;
    }
});
$product_pkg.bind('change', function () {
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
});
$product.bind('change', function () {
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
//删除图表
function removefrt() {
    window.clearInterval(chart_order.intervalid);
    delete chart_order;

    window.clearInterval(chart_traffic.intervalid);
    delete chart_traffic;

    window.clearInterval(chart_booking.intervalid);
    delete chart_booking;

    window.clearInterval(chart_commit.intervalid);
    delete chart_commit;

    window.clearInterval(chart_detail.intervalid);
    delete chart_detail;

    window.clearInterval(chart_input.intervalid);
    delete chart_input
}
//删除团队游图表
function removepkg() {
    window.clearInterval(chart_pkgorder.intervalid);
    delete chart_pkgorder;

    window.clearInterval(chart_pkgcreate.intervalid);
    delete chart_pkgcreate;

    window.clearInterval(chart_pkgcommit.intervalid);
    delete chart_pkgcommit;

    window.clearInterval(chart_pkgtraffic.intervalid);
    delete chart_pkgtraffic;

    window.clearInterval(chart_pkgdetail.intervalid);
    delete chart_pkgdetail;

    window.clearInterval(chart_pkginput.intervalid);
    delete chart_pkginput;
}
//删除邮轮图表
function removecru() {
    window.clearInterval(chart_cruorder.intervalid);
    delete chart_cruorder;

}
//渲染自由行分段图表
function renderfrt() {
    if (tabid == 'pkg') {
        chart_width = $("#pkg_order").width();
        removepkg();
    } else if (tabid == 'cru') {
        chart_width = $("#cru_order").width();
        removecru();
    } else {
        chart_width = $("#order").width();
        removefrt();
    }
    tabid = 'frt';
    // init today's data
    console.log(chart_width);
    chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order2/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/order2/" + channel + "/" + product + "/" + interval, 220, 10, 'order', "#E5E67B", chart_width, interval);
    chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/0/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/0/" + interval, 220, 5, 'traffic', "#f45b5b", "#E5E67B", chart_width);
    chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/booking/" + channel + "/" + product + "/" + interval, 220, 5, 'booking', "#E5E67B", chart_width, interval);
    chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/commit/" + channel + "/" + product + "/" + interval, 220, 5, 'commit', "#E5E67B", chart_width, interval);
    chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid + "/" + interval, 220, 5, 'detail', "#f45b5b", "#E5E67B", chart_width);
    chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid1 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid1 + "/" + interval, 220, 5, 'input', "#f45b5b", "#E5E67B", chart_width);
    // add last weekday's data
    charts.append_single(chart_order, "/EagleEye/ajax/init/order4/" + today + "/" + tommorw + "/" + productpattern, "预测订单", "#34aadc");
    charts.append_double(chart_traffic, "/EagleEye/ajax/history/traffic/" + lastweek + "/0/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc");
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc");
    charts.append_double(chart_detail, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    charts.append_double(chart_input, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid1 + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
}

function initcharts() {
    chart_width = $("#order").width();
    chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order2/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/order2/" + channel + "/" + product + "/" + interval, 220, 10, 'order', "#E5E67B", chart_width, interval);
    chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/0/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/0/" + interval, 220, 5, 'traffic', "#f45b5b", "#E5E67B", chart_width);
    chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/booking/" + channel + "/" + product + "/" + interval, 220, 5, 'booking', "#E5E67B", chart_width, interval);
    chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/commit/" + channel + "/" + product + "/" + interval, 220, 5, 'commit', "#E5E67B", chart_width, interval);
    chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid + "/" + interval, 220, 5, 'detail', "#f45b5b", "#E5E67B", chart_width);
    chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid1 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid1 + "/" + interval, 220, 5, 'input', "#f45b5b", "#E5E67B", chart_width);
    // add last weekday's data
    charts.append_single(chart_order, "/EagleEye/ajax/init/order4/" + today + "/" + tommorw + "/" + productpattern, "预测订单", "#34aadc");
    charts.append_double(chart_traffic, "/EagleEye/ajax/history/traffic/" + lastweek + "/0/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc");
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc");
    charts.append_double(chart_detail, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    charts.append_double(chart_input, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid1 + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
}
//渲染团队分段图表
function renderpkg() {
    if (tabid == 'frt') {
        chart_width = $("#order").width();
        removefrt();
    } else if (tabid == 'cru') {
        chart_width = $("#cru_order").width();
        removecru();
    } else {
        chart_width = $("#pkg_order").width();
        removepkg();
    }
    tabid = 'pkg';
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
//渲染邮轮分段图表

function rendercru() {
    if (tabid == 'frt') {
        chart_width = $("#order").width();
        removefrt();
    } else if (tabid == 'pkg') {
        chart_width = $("#pkg_order").width();
        removepkg();
    } else {
        chart_width = $("#cur_order").width();
        removecru();
    }
    tabid = 'cru';
    chart_cruorder = charts.render_single('spline', '实时', "/EagleEye/ajax/cruise/order/" + today + "/" + tommorw + "/" + interval + "/" + cruise + "/False/False/False", "/EagleEye/ajax/cruise/order/" + today + "/" + tommorw + "/" + interval + "/" + cruise + "/False/True/False", 220, 5, "cru_order", "#E5E67B", chart_width, interval);
    charts.append_single(chart_cruorder, "/EagleEye/ajax/cruise/order/" + yesterday + "/" + today + "/" + interval + "/" + cruise + "/True/False/False", '昨日', '#027BFF', true);
    charts.append_single(chart_cruorder, "/EagleEye/ajax/cruise/order/" + lastweek + "/" + lastweekplus + "/" + interval + "/" + cruise + "/True/False/False", '上周', '#027BFF', false);
    chart_crutraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_all + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_all + "/" + interval, 220, 5, 'cru_traffic', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_crutraffic, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_all + "/" + interval, '昨日PV', '昨日UV', "#E5E67B", "#027BFF");
    chart_crudetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_detail + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_detail + "/" + interval, 220, 5, 'cru_detail', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_crudetail, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_detail + "/" + interval, '昨日PV', '昨日UV', "#f45b5b", "#027BFF");
    chart_cruccabin = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_ccabin + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_ccabin + "/" + interval, 220, 5, 'cru_ccabin', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruccabin, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_ccabin + "/" + interval, '昨日PV', '昨日UV', "#f45b5b", "#027BFF");
    chart_cruitem = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_item + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_item + "/" + interval, 220, 5, 'cru_item', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruitem, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_item + "/" + interval, '昨日PV', '昨日UV', "#f45b5b", "#027BFF");
    chart_cruwrite = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_write + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_write + "/" + interval, 220, 5, 'cru_write', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruwrite, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_write + "/" + interval, '昨日PV', '昨日UV', "#f45b5b", "#027BFF");
}

//渲染自由行累积图
function renderfrt_s() {

    var chart_width = $("#order").width();
    if (tabid == 'pkg') {
        chart_width = $("#pkg_order").width();
        removefrt();
    } else if (tabid == 'cru') {
        chart_width = $("#cru_order").width();
        removecru();
    }
    tabid = 'frt';

    chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order5/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", null, 220, 10, 'order', "#E5E67B", chart_width, interval);
    charts.append_single(chart_order, "/EagleEye/ajax/init/order5/" + yesterday + "/" + today + "/" + channel + "/" + product + "/" + interval + "/True", "昨日订单", "#34aadc", false);
    charts.append_single(chart_order, "/EagleEye/ajax/init/order5/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", "上周订单", "#CA171B", false);
    charts.append_single(chart_order, "/EagleEye/ajax/init/order7/" + today + "/" + tommorw + "/" + productpattern, "预测订单", "#34aadc", true);

    chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/0/" + interval + "/False", null, 220, 5, 'traffic', "#f45b5b", "#E5E67B");
    charts.append_double(chart_traffic, "/EagleEye/ajax/init/traffic2/" + lastweek + "/0/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");

    chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking2/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", null, 220, 5, 'booking', "#E5E67B", chart_width, interval);
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking2/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc", true);
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking2/" + yesterday + "/" + today + "/" + channel + "/" + product + "/" + interval + "/True", '昨日Booking', "#ffffff", false);

    chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit2/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", null, 220, 5, 'commit', "#E5E67B", chart_width, interval);
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit2/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc", true);
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit2/" + yesterday + "/" + today + "/" + channel + "/" + product + "/" + interval + "/True", '昨日Commit', "#34aadc", false);

    chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid + "/" + interval + "/False", null, 220, 5, 'detail', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_detail, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");

    chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid1 + "/" + interval + "/False", null, 220, 5, 'input', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_input, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid1 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");
}

//渲染团队游累积图
function renderpkg_s() {

    var chart_width = $("#pkg_order").width(); //图表宽度
    if (tabid == 'frt') {
        chart_width = $("#order").width();
        removefrt();
    } else if (tabid == 'cru') {
        chart_width = $("#cru_order").width();
        removecru();
    }
    tabid = 'pkg';
    chart_pkgorder = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", "", 220, 5, 'pkg_order', "#E5E67B", chart_width, interval);
    charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
    chart_pkgcreate = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_create', "#E5E67B", chart_width, interval);
    charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
    chart_pkgcommit = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_commit', "#E5E67B", chart_width, interval);
    charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
    chart_pkgtraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid3 + "/" + interval + "/False", null, 220, 5, 'pkg_traffic', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_pkgtraffic, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid3 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
    chart_pkgdetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid4 + "/" + interval + "/False", null, 220, 5, 'pkg_detail', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_pkgdetail, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid4 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
    chart_pkginput = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid5 + "/" + interval + "/False", null, 220, 5, 'pkg_input', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_pkginput, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid5 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
}

//渲染团队游累积图
function rendercru_s() {

    var chart_width = $("#cru_order").width(); //图表宽度
    if (tabid == 'frt') {
        chart_width = $("#order").width();
        removefrt();
    } else if (tabid == 'pkg') {
        chart_width = $("#pkg_order").width();
        removepkg();
    }
    tabid = 'cru';
    chart_cruorder = charts.render_single('spline', '实时', "/EagleEye/ajax/cruise/order/" + today + "/" + tommorw + "/" + interval + "/" + cruise + "/False/False/True", "/EagleEye/ajax/cruise/order/" + today + "/" + tommorw + "/" + interval + "/" + cruise + "/False/True/True", 220, 5, "cru_order", "#E5E67B", chart_width, interval);
    charts.append_single(chart_cruorder, "/EagleEye/ajax/cruise/order/" + yesterday + "/" + today + "/" + interval + "/" + cruise + "/True/False/True", '昨日', '', false);
    charts.append_single(chart_cruorder, "/EagleEye/ajax/cruise/order/" + lastweek + "/" + lastweekplus + "/" + interval + "/" + cruise + "/True/False/True", '上周', '#027BFF', false);
    chart_crutraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_all + "/" + interval + "/False", null, 220, 5, 'cru_traffic', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_crutraffic, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_all + "/" + interval + "/True", '昨日PV', '昨日UV', "#f45b5b", "#E5E67B");
    chart_crudetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_detail + "/" + interval + "/False", null, 220, 5, 'cru_detail', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_crudetail, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_detail + "/" + interval + "/True", '昨日PV', '昨日UV', "#f45b5b", "#E5E67B");
    chart_cruccabin = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_ccabin + "/" + interval + "/False", null, 220, 5, 'cru_ccabin', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruccabin, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_ccabin + "/" + interval + "/True", '昨日PV', '昨日UV', "#f45b5b", "#E5E67B");
    chart_cruitem = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_item + "/" + interval + "/False", null, 220, 5, 'cru_item', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruitem, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_item + "/" + interval + "/True", '昨日PV', '昨日UV', "#f45b5b", "#E5E67B");
    chart_cruwrite = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_write + "/" + interval + "/False", null, 220, 5, 'cru_write', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruwrite, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_write + "/" + interval + "/True", '昨日PV', '昨日UV', "#f45b5b", "#E5E67B");
}

//点击分段趋势
$segmented.bind("click", function (event) {
    event.preventDefault();
    if (tabid == 'frt') {
        renderfrt();
    } else if (tabid == 'pkg') {
        renderpkg();
    } else {

        rendercru();
    }
});

//点击累积趋势
$accumulated.bind("click", function (event) {
    event.preventDefault();
    if (tabid == 'frt') {
        renderfrt_s();
    } else if (tabid == 'pkg') {
        renderpkg_s();
    } else {
        rendercru_s();
    }
});
/*
 团队游绑定functions
 */
$('#pkgorder2').bind('click', function () {
    charts.removeChart(chart_pkgorder);
    chart_pkgorder = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_order', "#E5E67B", null, interval);
    charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);
});
$('#pkgorder3').bind('click', function () {
    charts.removeChart(chart_pkgorder);
    chart_pkgorder = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgorder/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", null, 220, 5, 'pkg_order', "#E5E67B", null, interval);
    charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgorder, "/EagleEye/ajax/pkgorder/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
});
$('#pkgbooking2').bind('click', function () {
    charts.removeChart(chart_pkgcreate);
    chart_pkgcreate = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_create', "#E5E67B", null, interval);
    charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);
});
$('#pkgbooking3').bind('click', function () {
    charts.removeChart(chart_pkgcreate);
    chart_pkgcreate = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcreate/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", null, 220, 5, 'pkg_create', "#E5E67B", null, interval);
    charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgcreate, "/EagleEye/ajax/pkgcreate/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
});
$('#pkgcommit2').bind('click', function () {
    charts.removeChart(chart_pkgcommit);
    chart_pkgcommit = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/False", "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/False/True", 220, 5, 'pkg_commit', "#E5E67B", null, interval);
    charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/False/False", '上周', '#027BFF', true);
});
$('#pkgcommit3').bind('click', function () {
    charts.removeChart(chart_pkgcommit);
    chart_pkgcommit = charts.render_single('spline', '实时', "/EagleEye/ajax/pkgcommit/" + today + "/" + tommorw + "/" + channel + "/" + product_pkg + "/" + interval + "/False/True/False", null, 220, 5, 'pkg_commit', "#E5E67B", null, interval);
    charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + yesterday + "/" + today + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '昨日', '#E42535', false);
    charts.append_single(chart_pkgcommit, "/EagleEye/ajax/pkgcommit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product_pkg + "/" + interval + "/True/True/False", '上周', '#027BFF', true);
});

$('#pkgtraffic2').bind('click', function () {
    charts.removeChart(chart_pkgtraffic);
    chart_pkgtraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid3 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid3 + "/" + interval, 220, 5, 'pkg_traffic', "#f45b5b", "#E5E67B");
    charts.append_double(chart_pkgtraffic, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid3 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
});
$('#pkgtraffic3').bind('click', function () {
    charts.removeChart(chart_pkgtraffic);
    chart_pkgtraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid3 + "/" + interval + "/False", null, 220, 5, 'pkg_traffic', "#f45b5b", "#E5E67B");
    charts.append_double(chart_pkgtraffic, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid3 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
});
$('#pkgdetail2').bind('click', function () {
    charts.removeChart(chart_pkgdetail);
    chart_pkgdetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid4 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid4 + "/" + interval, 220, 5, 'pkg_detail', "#f45b5b", "#E5E67B");
    charts.append_double(chart_pkgdetail, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid4 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
});
$('#pkgdetail3').bind('click', function () {
    charts.removeChart(chart_pkgdetail);
    chart_pkgdetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid4 + "/" + interval + "/False", null, 220, 5, 'pkg_detail', "#f45b5b", "#E5E67B");
    charts.append_double(chart_pkgdetail, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid4 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
});
$('#pkginput2').bind('click', function () {
    charts.removeChart(chart_pkginput);
    chart_pkginput = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid5 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid5 + "/" + interval, 220, 5, 'pkg_input', "#f45b5b", "#E5E67B");
    charts.append_double(chart_pkginput, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid5 + "/" + interval, '上周PV', '上周UV', "#E5E67B", '#027BFF');
});
$('#pkginput3').bind('click', function () {
    charts.removeChart(chart_pkginput);
    chart_pkginput = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid5 + "/" + interval + "/False", null, 220, 5, 'pkg_input', "#f45b5b", "#E5E67B");
    charts.append_double(chart_pkginput, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid5 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", '#027BFF');
});

/*
 * 自由行绑定functions
 */
$('#order2').bind('click', function () {
    charts.removeChart(chart_order);
    chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order2/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/order2/" + channel + "/" + product + "/" + interval, 220, 10, 'order', "#E5E67B", null, interval);
    charts.append_single(chart_order, "/EagleEye/ajax/init/order4/" + today + "/" + tommorw + "/" + productpattern, "预测订单", "#34aadc");
});
$('#order3').bind('click', function () {
    if (chart_order !== undefined) {
        charts.removeChart(chart_order);
    }
    chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order5/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", null, 220, 10, 'order', "#E5E67B", null, interval);
    charts.append_single(chart_order, "/EagleEye/ajax/init/order5/" + yesterday + "/" + today + "/" + channel + "/" + product + "/" + interval + "/True", "昨日订单", "#34aadc", false);
    charts.append_single(chart_order, "/EagleEye/ajax/init/order5/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", "上周订单", "#CA171B", false);
    charts.append_single(chart_order, "/EagleEye/ajax/init/order7/" + today + "/" + tommorw + "/" + productpattern, "预测订单", "#34aadc", true);
});
$('#traffic2').bind('click', function () {
    charts.removeChart(chart_traffic);
    chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/0/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/0/" + interval, 220, 5, 'traffic', "#f45b5b", "#E5E67B");
    charts.append_double(chart_traffic, "/EagleEye/ajax/history/traffic/" + lastweek + "/0/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
});

$('#traffic3').bind('click', function () {
    charts.removeChart(chart_traffic);
    chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/0/" + interval + "/False", null, 220, 5, 'traffic', "#f45b5b", "#E5E67B");
    charts.append_double(chart_traffic, "/EagleEye/ajax/init/traffic2/" + lastweek + "/0/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");
});

$('#booking2').bind('click', function () {
    charts.removeChart(chart_booking);
    chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/booking/" + channel + "/" + product + "/" + interval, 220, 5, 'booking', "#E5E67B");
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc");
});

$('#booking3').bind('click', function () {
    charts.removeChart(chart_booking);
    chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking2/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", null, 220, 5, 'booking', "#E5E67B", null, interval);
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking2/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc", true);
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking2/" + yesterday + "/" + today + "/" + channel + "/" + product + "/" + interval + "/True", '昨日Booking', "#ffffff", false);
});

$('#commit2').bind('click', function () {
    charts.removeChart(chart_commit);
    chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/commit/" + channel + "/" + product + "/" + interval, 220, 5, 'commit', "#E5E67B", null, interval);
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc");
});

$('#commit3').bind('click', function () {
    charts.removeChart(chart_commit);
    chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit2/" + today + "/" + tommorw + "/" + channel + "/" + product + "/" + interval + "/False", null, 220, 5, 'commit', "#E5E67B", null, interval);
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit2/" + lastweek + "/" + lastweekplus + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc", true);
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit2/" + yesterday + "/" + today + "/" + channel + "/" + product + "/" + interval + "/True", '昨日Commit', "#34aadc", false);
});

$('#detail2').bind('click', function () {
    charts.removeChart(chart_detail);
    chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid + "/" + interval, 220, 5, 'detail', "#f45b5b", "#E5E67B");
    charts.append_double(chart_detail, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
});

$('#detail3').bind('click', function () {
    charts.removeChart(chart_detail);
    chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid + "/" + interval + "/False", null, 220, 5, 'detail', "#f45b5b", "#E5E67B");
    charts.append_double(chart_detail, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");
});

$('#input2').bind('click', function () {
    charts.removeChart(chart_input);
    chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid1 + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid1 + "/" + interval, 220, 5, 'input', "#f45b5b", "#E5E67B");
    charts.append_double(chart_input, "/EagleEye/ajax/history/traffic/" + lastweek + "/" + pageid1 + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
});

$('#input3').bind('click', function () {
    charts.removeChart(chart_input);
    chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid1 + "/" + interval + "/False", null, 220, 5, 'input', "#f45b5b", "#E5E67B");
    charts.append_double(chart_input, "/EagleEye/ajax/init/traffic2/" + lastweek + "/" + pageid1 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");
});

/*
 邮轮相关按钮
 */
$('#cruorder2').bind('click', function () {
    charts.removeChart(chart_cruorder);
    chart_cruorder = charts.render_single('spline', '实时', "/EagleEye/ajax/cruise/order/" + today + "/" + tommorw + "/" + interval + "/" + cruise + "/False/False/False", "/EagleEye/ajax/cruise/order/" + today + "/" + tommorw + "/" + interval + "/" + cruise + "/False/True/False", 220, 5, "cru_order", "#E5E67B", chart_width, interval);
    charts.append_single(chart_cruorder, "/EagleEye/ajax/cruise/order/" + yesterday + "/" + today + "/" + interval + "/" + cruise + "/True/False/False", '昨日', '#027BFF', true);
    charts.append_single(chart_cruorder, "/EagleEye/ajax/cruise/order/" + lastweek + "/" + lastweekplus + "/" + interval + "/" + cruise + "/True/False/False", '上周', '#027BFF', false);
});

$('#cruorder3').bind('click', function () {
    charts.removeChart(chart_cruorder);
    chart_cruorder = charts.render_single('spline', '实时', "/EagleEye/ajax/cruise/order/" + today + "/" + tommorw + "/" + interval + "/" + cruise + "/False/False/True", "/EagleEye/ajax/cruise/order/" + today + "/" + tommorw + "/" + interval + "/" + cruise + "/False/True/True", 220, 5, "cru_order", "#E5E67B", chart_width, interval);
    charts.append_single(chart_cruorder, "/EagleEye/ajax/cruise/order/" + yesterday + "/" + today + "/" + interval + "/" + cruise + "/True/False/True", '昨日', '', false);
    charts.append_single(chart_cruorder, "/EagleEye/ajax/cruise/order/" + lastweek + "/" + lastweekplus + "/" + interval + "/" + cruise + "/True/False/True", '上周', '#027BFF', true);
});

$('#crutraffic2').bind('click', function () {
    charts.removeChart(chart_crutraffic);
    chart_crutraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_all + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_all + "/" + interval, 220, 5, 'cru_traffic', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_crutraffic, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_all + "/" + interval, '昨日PV', '昨日UV', "#E5E67B", "#027BFF");
});

$('#crutraffic3').bind('click', function () {
    charts.removeChart(chart_crutraffic);
    chart_crutraffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_all + "/" + interval + "/False", null, 220, 5, 'cru_traffic', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_crutraffic, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_all + "/" + interval + "/True", '昨日PV', '昨日UV', "#E5E67B", "#027BFF");
});

$('#crudetail2').bind('click', function () {
    charts.removeChart(chart_crudetail);
    chart_crudetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_detail + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_detail + "/" + interval, 220, 5, 'cru_detail', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_crudetail, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_detail + "/" + interval, '昨日PV', '昨日UV', "#E5E67B", "#027BFF");
});

$('#crudetail3').bind('click', function () {
    charts.removeChart(chart_crudetail);
    chart_crudetail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_detail + "/" + interval + "/False", null, 220, 5, 'cru_detail', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_crudetail, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_detail + "/" + interval + "/True", '昨日PV', '昨日UV', "#E5E67B", "#E5E67B");
});

$('#cruccabin2').bind('click', function () {
    charts.removeChart(chart_cruccabin);
    chart_cruccabin = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_ccabin + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_ccabin + "/" + interval, 220, 5, 'cru_ccabin', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruccabin, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_ccabin + "/" + interval, '昨日PV', '昨日UV', "#E5E67B", "#027BFF");
});

$('#cruccabin3').bind('click', function () {
    charts.removeChart(chart_cruccabin);
    chart_cruccabin = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_ccabin + "/" + interval + "/False", null, 220, 5, 'cru_ccabin', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruccabin, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_ccabin + "/" + interval + "/True", '昨日PV', '昨日UV', "#E5E67B", "#E5E67B");
});


$('#cruitem2').bind('click', function () {
    charts.removeChart(chart_cruitem);
    chart_cruitem = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_item + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_item + "/" + interval, 220, 5, 'cru_item', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruitem, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_item + "/" + interval, '昨日PV', '昨日UV', "#E5E67B", "#027BFF");
});

$('#cruitem3').bind('click', function () {
    charts.removeChart(chart_cruitem);
    chart_cruitem = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_item + "/" + interval + "/False", null, 220, 5, 'cru_item', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruitem, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_item + "/" + interval + "/True", '昨日PV', '昨日UV', "#E5E67B", "#E5E67B");
});

$('#cruwrite2').bind('click', function () {
    charts.removeChart(chart_cruwrite);
    chart_cruwrite = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + today + "/" + pageid_write + "/" + interval, "/EagleEye/ajax/update/traffic/" + today + "/" + pageid_write + "/" + interval, 220, 5, 'cru_write', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruwrite, "/EagleEye/ajax/history/traffic/" + yesterday + "/" + pageid_write + "/" + interval, '昨日PV', '昨日UV', "#E5E67B", "#027BFF");
});

$('#cruwrite3').bind('click', function () {
    charts.removeChart(chart_cruwrite);
    chart_cruwrite = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + today + "/" + pageid_write + "/" + interval + "/False", null, 220, 5, 'cru_write', "#f45b5b", "#E5E67B", chart_width);
    charts.append_double(chart_cruwrite, "/EagleEye/ajax/init/traffic2/" + yesterday + "/" + pageid_write + "/" + interval + "/True", '昨日PV', '昨日UV', "#E5E67B", "#E5E67B");
});


$('#tab_frt').click(function (e) {

    e.preventDefault();
    reset();
    $(".param_frt").show();
    $("#sharedchannel").show();
    $(".param_pkg").hide();
    $(".param_cru").hide();
    //$(".pvuv").show();
    renderfrt();
});
$('#tab_pkg').click(function (e) {
    e.preventDefault();
    reset();
    $(".param_pkg").show();
    $("#sharedchannel").show();
    $(".param_cru").hide();
    $(".param_frt").hide();
    //$(".pvuv").hide();
    pageid3 = -1000;
    pageid4 = -1005;
    pageid5 = -1010;
    renderpkg();
});
$('#tab_cru').click(function (e) {
    e.preventDefault();
    reset();
    $(".param_cru").show();
    $(".param_frt").hide();
    $(".param_pkg").hide();
    $("#sharedchannel").hide();
    //$(".pvuv").show();
    //$("#interval").val("15").trigger("change");
    rendercru();
});

