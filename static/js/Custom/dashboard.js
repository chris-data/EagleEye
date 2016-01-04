/**
 * Created by wang.zy on 2015/10/8.
 */
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

var loadpageid = function () {
    $.getJSON("/EagleEye/ajax/pageid/", function (data) {
        var $pageid = $('#pageid')
        data_list = new Array(data.pageid_list.substr(1, data.pageid_list.length - 2).split(','));
        data_list[0].sort(function (a, b) {  //自定义函数排序
            var a1 = parseInt(a);
            var b1 = parseInt(b);
            if (a1 < b1) {
                return -1;
            } else if (a1 > b1) {
                return 1;
            }
            return 0;
        });
        for (var i = 0; i < data_list[0].length; i++) {
            $pageid.append("<option value=" + data_list[0][i] + ">Pageid:" + data_list[0][i] + "</option>");
        }
        $pageid.select2();
        $('#interval').select2();
    })
}

var renderCharts = function () {
    var $channel = $("#channel");
    var $product = $("#product");
    var $product_pkg = $("#product_pkg");
    var $interval = $("#interval");

    channel = $channel.val();
    product = $product.val();
    interval = $interval.val();

    $channel.select2();
    $product.select2();
    $product_pkg.select2();
    $interval.select2();
    pageid = 0; //storm 流量表对应 Pageid
    pageid1 = 23;
    productpattern = 1;

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
    })
    $interval.bind('change', function (event) {
        interval = $interval.val();
    })
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
    //渲染图
    chart_width = $("#pkg_order").width();
    // init today's data
    chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order2/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/order2/" + channel + "/" + product + "/" + interval, 210, 10, 'order', "#E5E67B", chart_width, interval);
    chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/0/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/0/" + interval, 210, 5, 'traffic', "#f45b5b", "#E5E67B", chart_width);
    chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/booking/" + channel + "/" + product + "/" + interval, 210, 5, 'booking', "#E5E67B", chart_width, interval);
    chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/commit/" + channel + "/" + product + "/" + interval, 210, 1, 'commit', "#E5E67B", chart_width, interval);
    chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/0/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/0/" + interval, 210, 5, 'detail', "#f45b5b", "#E5E67B", chart_width);
    chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/23/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/23/" + interval, 210, 5, 'input', "#f45b5b", "#E5E67B", chart_width);
    // add last weekday's data
    //charts.append_single(chart_order, "/EagleEye/ajax/init/order2/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", "昨日订单");
    charts.append_single(chart_order, "/EagleEye/ajax/init/order4/" + sysdate(0) + "/" + sysdate(1) + "/" + productpattern, "预测订单", "#34aadc", true);
    charts.append_double(chart_traffic, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/0/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc", true);
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc", true);
    charts.append_double(chart_detail, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/" + pageid + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    charts.append_double(chart_input, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/" + pageid1 + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");

    $('#refresh').bind('click', function (event) {
        resetCharts();
    });
    $('#order2').bind('click', function (event) {
        charts.removeChart(chart_order);
        chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order2/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/order2/" + channel + "/" + product + "/" + interval, 210, 10, 'order', "#E5E67B", chart_width, interval);
        charts.append_single(chart_order, "/EagleEye/ajax/init/order4/" + sysdate(0) + "/" + sysdate(1) + "/" + productpattern, "预测订单", "#34aadc");
    });
    $('#order3').bind('click', function (event) {
        if (chart_order !== undefined) {
            charts.removeChart(chart_order);
        }
        chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order5/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", null, 210, 10, 'order', "#E5E67B", chart_width, interval);
        charts.append_single(chart_order, "/EagleEye/ajax/init/order5/" + sysdate(-1) + "/" + sysdate(0) + "/" + channel + "/" + product + "/" + interval + "/True", "昨日订单", "#34aadc", false);
        charts.append_single(chart_order, "/EagleEye/ajax/init/order5/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", "上周订单", "#CA171B", false);
        charts.append_single(chart_order, "/EagleEye/ajax/init/order7/" + sysdate(0) + "/" + sysdate(1) + "/" + productpattern, "预测订单", "#34aadc", true);
    });
    $('#mode_change').bind('click', function (event) {
        //$(".arrow_condense").show();
        //$(".fa-refresh").hide();
        if (chart_order !== undefined) {
            charts.removeChart(chart_order);
        }
        chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order5/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", null, 210, 10, 'order', "#E5E67B", chart_width, interval);
        charts.append_single(chart_order, "/EagleEye/ajax/init/order5/" + sysdate(-1) + "/" + sysdate(0) + "/" + channel + "/" + product + "/" + interval + "/True", "昨日订单", "#34aadc", false);
        charts.append_single(chart_order, "/EagleEye/ajax/init/order5/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", "上周订单", "#CA171B", false);
        charts.append_single(chart_order, "/EagleEye/ajax/init/order7/" + sysdate(0) + "/" + sysdate(1) + "/" + productpattern, "预测订单", "#34aadc", true);

        charts.removeChart(chart_traffic);
        chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + sysdate(0) + "/0/" + interval + "/False", null, 210, 5, 'traffic', "#f45b5b", "#E5E67B");
        charts.append_double(chart_traffic, "/EagleEye/ajax/init/traffic2/" + sysdate(-7) + "/0/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");

        charts.removeChart(chart_booking);
        chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking2/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", null, 210, 5, 'booking', "#E5E67B", chart_width, interval);
        charts.append_single(chart_booking, "/EagleEye/ajax/init/booking2/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc", true);
        charts.append_single(chart_booking, "/EagleEye/ajax/init/booking2/" + sysdate(-1) + "/" + sysdate(0) + "/" + channel + "/" + product + "/" + interval + "/True", '昨日Booking', "#ffffff", false);

        charts.removeChart(chart_commit);
        chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit2/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", null, 210, 5, 'commit', "#E5E67B", chart_width, interval);
        charts.append_single(chart_commit, "/EagleEye/ajax/init/commit2/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc", true);
        charts.append_single(chart_commit, "/EagleEye/ajax/init/commit2/" + sysdate(-1) + "/" + sysdate(0) + "/" + channel + "/" + product + "/" + interval + "/True", '昨日Commit', "#34aadc", false);

        charts.removeChart(chart_detail);
        chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + sysdate(0) + "/" + pageid + "/" + interval + "/False", null, 210, 5, 'detail', "#f45b5b", "#E5E67B");
        charts.append_double(chart_detail, "/EagleEye/ajax/init/traffic2/" + sysdate(-7) + "/" + pageid + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");

        charts.removeChart(chart_input);
        chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + sysdate(0) + "/" + pageid1 + "/" + interval + "/False", null, 210, 5, 'input', "#f45b5b", "#E5E67B");
        charts.append_double(chart_input, "/EagleEye/ajax/init/traffic2/" + sysdate(-7) + "/" + pageid1 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");

    })
    $('#traffic2').bind('click', function (event) {
        charts.removeChart(chart_traffic);
        chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/0/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/0/" + interval, 210, 5, 'traffic', "#f45b5b", "#E5E67B");
        charts.append_double(chart_traffic, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/0/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    });

    $('#traffic3').bind('click', function (event) {
        charts.removeChart(chart_traffic);
        chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + sysdate(0) + "/0/" + interval + "/False", null, 210, 5, 'traffic', "#f45b5b", "#E5E67B");
        charts.append_double(chart_traffic, "/EagleEye/ajax/init/traffic2/" + sysdate(-7) + "/0/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");
    });

    $('#booking2').bind('click', function (event) {
        charts.removeChart(chart_booking);
        chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/booking/" + channel + "/" + product + "/" + interval, 210, 5, 'booking', "#E5E67B");
        charts.append_single(chart_booking, "/EagleEye/ajax/init/booking/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc");
    });

    $('#booking3').bind('click', function (event) {
        charts.removeChart(chart_booking);
        chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking2/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", null, 210, 5, 'booking', "#E5E67B", chart_width, interval);
        charts.append_single(chart_booking, "/EagleEye/ajax/init/booking2/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc", true);
        charts.append_single(chart_booking, "/EagleEye/ajax/init/booking2/" + sysdate(-1) + "/" + sysdate(0) + "/" + channel + "/" + product + "/" + interval + "/True", '昨日Booking', "#ffffff", false);
    });

    $('#commit2').bind('click', function (event) {
        charts.removeChart(chart_commit);
        chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/commit/" + channel + "/" + product + "/" + interval, 210, 5, 'commit', "#E5E67B", chart_width, interval);
        charts.append_single(chart_commit, "/EagleEye/ajax/init/commit/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc");
    });

    $('#commit3').bind('click', function (event) {
        charts.removeChart(chart_commit);
        chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit2/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", null, 210, 5, 'commit', "#E5E67B", chart_width, interval);
        charts.append_single(chart_commit, "/EagleEye/ajax/init/commit2/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc", true);
        charts.append_single(chart_commit, "/EagleEye/ajax/init/commit2/" + sysdate(-1) + "/" + sysdate(0) + "/" + channel + "/" + product + "/" + interval + "/True", '昨日Commit', "#34aadc", false);
    });

    $('#detail2').bind('click', function (event) {
        charts.removeChart(chart_detail);
        chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/" + pageid + "/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/" + pageid + "/" + interval, 210, 5, 'detail', "#f45b5b", "#E5E67B");
        charts.append_double(chart_detail, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/" + pageid + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    });

    $('#detail3').bind('click', function (event) {
        charts.removeChart(chart_detail);
        chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + sysdate(0) + "/" + pageid + "/" + interval + "/False", null, 210, 5, 'detail', "#f45b5b", "#E5E67B");
        charts.append_double(chart_detail, "/EagleEye/ajax/init/traffic2/" + sysdate(-7) + "/" + pageid + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");
    });

    $('#input2').bind('click', function (event) {
        charts.removeChart(chart_input);
        chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/" + pageid1 + "/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/" + pageid1 + "/" + interval, 210, 5, 'input', "#f45b5b", "#E5E67B");
        charts.append_double(chart_input, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/" + pageid1 + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    });

    $('#input3').bind('click', function (event) {
        charts.removeChart(chart_input);
        chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic2/" + sysdate(0) + "/" + pageid1 + "/" + interval + "/False", null, 210, 5, 'input', "#f45b5b", "#E5E67B");
        charts.append_double(chart_input, "/EagleEye/ajax/init/traffic2/" + sysdate(-7) + "/" + pageid1 + "/" + interval + "/True", '上周PV', '上周UV', "#E5E67B", "#34aadc");
    });

    $("[data-toggle = 'tooltip']").tooltip();
}

var resetCharts = function () {
    charts.removeChart(chart_order);
    charts.removeChart(chart_traffic);
    charts.removeChart(chart_booking);
    charts.removeChart(chart_commit);
    charts.removeChart(chart_detail);
    charts.removeChart(chart_input);
    // init today's data
    chart_order = charts.render_single('spline', '实时订单', "/EagleEye/ajax/init/order2/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/order2/" + channel + "/" + product + "/" + interval, 210, 10, 'order', "#E5E67B", chart_width, interval);
    chart_traffic = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/0/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/0/" + interval, 210, 5, 'traffic', "#f45b5b", "#E5E67B");
    chart_booking = charts.render_single('spline', '实时Booking', "/EagleEye/ajax/init/booking/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/booking/" + channel + "/" + product + "/" + interval, 210, 5, 'booking', "#E5E67B", chart_width, interval);
    chart_commit = charts.render_single('spline', '实时Commit', "/EagleEye/ajax/init/commit/" + sysdate(0) + "/" + sysdate(1) + "/" + channel + "/" + product + "/" + interval + "/False", "/EagleEye/ajax/update/commit/" + channel + "/" + product + "/" + interval, 210, 5, 'commit', "#E5E67B", chart_width, interval);
    chart_detail = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/" + pageid + "/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/" + pageid + "/" + interval, 210, 5, 'detail', "#f45b5b", "#E5E67B");
    chart_input = charts.render_double('spline', '实时PV', '实时UV', "/EagleEye/ajax/init/traffic/" + sysdate(0) + "/" + pageid1 + "/" + interval, "/EagleEye/ajax/update/traffic/" + sysdate(0) + "/" + pageid1 + "/" + interval, 210, 5, 'input', "#f45b5b", "#E5E67B");
    // add last weekday's data
    charts.append_single(chart_order, "/EagleEye/ajax/init/order4/" + sysdate(0) + "/" + sysdate(1) + "/" + productpattern, "预测订单", "#34aadc");
    charts.append_double(chart_traffic, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/0/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    charts.append_single(chart_booking, "/EagleEye/ajax/init/booking/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Booking', "#34aadc");
    charts.append_single(chart_commit, "/EagleEye/ajax/init/commit/" + sysdate(-7) + "/" + sysdate(-6) + "/" + channel + "/" + product + "/" + interval + "/True", '上周Commit', "#34aadc");
    charts.append_double(chart_detail, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/" + pageid + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
    charts.append_double(chart_input, "/EagleEye/ajax/history/traffic/" + sysdate(-7) + "/" + pageid1 + "/" + interval, '上周PV', '上周UV', "#E5E67B", "#34aadc");
}

var toggleHidden = function () {
    var elem = document.getElementById("toggle");
    var elem1 = document.getElementById("main-content");
    if (elem.hasAttribute("hidden")) {
        elem.removeAttribute("hidden");
        elem1.style.marginLeft = "160px";
    }
    else {
        elem.setAttribute("hidden", "hidden");
        elem1.style.marginLeft = "0px";
    }
    resetCharts();
};
