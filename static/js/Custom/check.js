/**
 * Created by wang.zy on 2015/12/29.
 */

var checkcharts = function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    $(document).ready(function () {
        tabid = 0;
        $(".selectparam").select2();
        var $product = $("#product");
        var $channel = $('#channel');
        var $interval = $("#interval");
        var $isintl = $("#isintl");
        product = $product.val();
        channel = $channel.val();
        interval = $interval.val();
        isintl = $isintl.val();

        var checkcharts = function () {
            chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/False/False/False', null, 240, 5, "invokes", '#159c6e', null, interval);
            charts.append_single(chart_invoke, '/EagleEye/ajax/check/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/False/False', '上周调用数', '#9f86ff', true);
            charts.append_single(chart_invoke, '/EagleEye/ajax/check/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/False/False', '昨日调用数', '#ccbf1b', false);

            chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/False/False/False', null, 240, 5, "feilures", '#159c6e', null, interval);
            charts.append_single(chart_feilure, '/EagleEye/ajax/check/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/True/False/False', '昨日失败数', '#ccbf1b', false);
            charts.append_single(chart_feilure, '/EagleEye/ajax/check/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/True/False/False', '上周失败数', '#9f86ff', true);

            chart_ratio = charts.render_singlem1('spline', '实时失败率', '/EagleEye/ajax/check2/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/False/False', null, 240, 5, "ratio", '#159c6e', null, interval);
            charts.append_single(chart_ratio, '/EagleEye/ajax/check2/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/False', '昨日失败率', '#ccbf1b', false);
            charts.append_single(chart_ratio, '/EagleEye/ajax/check2/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/False', '上周失败率', '#9f86ff', true);
        };

        checkcharts();
        $product.bind('change', function () {
            product = $('#product').val();
        });
        $interval.bind('click', function () {
            interval = $('#interval').val();
        });
        $channel.bind('change', function () {
            channel = $('#channel').val();
        });
        $isintl.bind('click', function () {
            isintl = $('#isintl').val();
        });
        $('#refresh').bind('click', function () {
            if (tabid === 0) {
                removecharts();
                checkcharts();
            } else if (tabid === 1) {
                renderresource(1);
            } else if (tabid === 2) {
                renderresource(2);
            } else if (tabid === 3) {
                renderresource(3);
            } else if (tabid === 4) {
                renderresource(4);
            } else if (tabid === 5) {
                renderresource(5);
            } else if (tabid === 6) {
                renderresource(6);
            }
        });
        $('#mode_change').bind('click', function () {
            if (tabid === 0) {
                removecharts();
                chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/False/True/False', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/False/True/True', 220, 5, "invokes", '#159c6e', null, interval);
                charts.append_single(chart_invoke, '/EagleEye/ajax/check/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/True/False', '上周调用数', '#9f86ff', true);
                charts.append_single(chart_invoke, '/EagleEye/ajax/check/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/True/False', '昨日调用数', '#ccbf1b', false);
                chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/False/True/False', null, 220, 5, "feilures", '#159c6e', null, interval);
                charts.append_single(chart_feilure, '/EagleEye/ajax/check/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/True/True/False', '昨日失败数', '#ccbf1b', false);
                charts.append_single(chart_feilure, '/EagleEye/ajax/check/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/True/True/False', '上周失败数', '#9f86ff', true);
            } else if (tabid === 1) {
                chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&0&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&0&-1/' + interval + '/False/True/True', 240, 5, "feilures", '#159c6e', null, interval);
                chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&-1&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&-1&-1/' + interval + '/False/True/True', 240, 5, "invokes", '#159c6e', null, interval);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '上周调用数', '#9f86ff', true);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '昨日调用数', '#ccbf1b', false);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&0&-1/' + interval + '/True/True/False', '上周失败数', '#9f86ff', true);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&0&-1/' + interval + '/True/True/False', '昨日失败数', '#ccbf1b', false);
            } else if (tabid === 2) {
                chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&0&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&0&-1/' + interval + '/False/True/True', 240, 5, "feilures", '#159c6e', null, interval);
                chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&-1&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&-1&-1/' + interval + '/False/True/True', 240, 5, "invokes", '#159c6e', null, interval);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '上周调用数', '#9f86ff', true);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '昨日调用数', '#ccbf1b', false);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&0&-1/' + interval + '/True/True/False', '上周失败数', '#9f86ff', true);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&0&-1/' + interval + '/True/True/False', '昨日失败数', '#ccbf1b', false);
            } else if (tabid === 3) {
                chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&0&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&0&-1/' + interval + '/False/True/True', 240, 5, "feilures", '#159c6e', null, interval);
                chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&-1&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&-1&-1/' + interval + '/False/True/True', 240, 5, "invokes", '#159c6e', null, interval);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '上周调用数', '#9f86ff', true);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '昨日调用数', '#ccbf1b', false);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&0&-1/' + interval + '/True/True/False', '上周失败数', '#9f86ff', true);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&0&-1/' + interval + '/True/True/False', '昨日失败数', '#ccbf1b', false);
            } else if (tabid === 4) {
                chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&0&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&0&-1/' + interval + '/False/True/True', 240, 5, "feilures", '#159c6e', null, interval);
                chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&-1&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&-1&-1/' + interval + '/False/True/True', 240, 5, "invokes", '#159c6e', null, interval);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '上周调用数', '#9f86ff', true);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '昨日调用数', '#ccbf1b', false);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&0&-1/' + interval + '/True/True/False', '上周失败数', '#9f86ff', true);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&0&-1/' + interval + '/True/True/False', '昨日失败数', '#ccbf1b', false);
            } else if (tabid === 5) {
                chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&0&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&0&-1/' + interval + '/False/True/True', 240, 5, "feilures", '#159c6e', null, interval);
                chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&-1&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&-1&-1/' + interval + '/False/True/True', 240, 5, "invokes", '#159c6e', null, interval);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '上周调用数', '#9f86ff', true);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '昨日调用数', '#ccbf1b', false);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&0&-1/' + interval + '/True/True/False', '上周失败数', '#9f86ff', true);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&0&-1/' + interval + '/True/True/False', '昨日失败数', '#ccbf1b', false);
            } else if (tabid === 6) {
                chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&0&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&0&-1/' + interval + '/False/True/True', 240, 5, "feilures", '#159c6e', null, interval);
                chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&-1&-1/' + interval + '/False/True/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&-1&-1/' + interval + '/False/True/True', 240, 5, "invokes", '#159c6e', null, interval);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '上周调用数', '#9f86ff', true);
                charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&-1&-1/' + interval + '/True/True/False', '昨日调用数', '#ccbf1b', false);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&0&-1/' + interval + '/True/True/False', '上周失败数', '#9f86ff', true);
                charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&0&-1/' + interval + '/True/True/False', '昨日失败数', '#ccbf1b', false);
            }
        });

        $("[data-toggle = 'tooltip']").tooltip();

        var resetparam = function () {
            $("#product").val("all").trigger("change");
            $("#channel").val("all").trigger('change');
            $("#isintl").val("-1").trigger('change');
            $("#interval").val("10").trigger('change');
        };
        var removecharts = function () {
            charts.removeChart(chart_ratio);
            charts.removeChart(chart_feilure);
            charts.removeChart(chart_invoke);
        };
        var hideselects = function () {
            $("#product").hide();
            $("#channel").hide();
            $("#isintl").hide();
        };
        $('#tab_default').click(function (e) {
            $(".param").prop("disabled", false);
            e.preventDefault();
            removecharts();
            checkcharts();
        });
        $('#tab_flight').click(function (e) {
            e.preventDefault();
            renderresource(1);
            tabid = 1;
        });
        $('#tab_hotel').click(function (e) {
            e.preventDefault();
            renderresource(2);
            tabid = 2;
        });
        $('#tab_x').click(function (e) {
            e.preventDefault();
            renderresource(3);
            tabid = 3;
        });
        $('#tab_item').click(function (e) {
            e.preventDefault();
            renderresource(4);
            tabid = 4;
        });
        $('#tab_train').click(function (e) {
            e.preventDefault();
            renderresource(5);
            tabid = 5;
        });
        $('#tab_TTD').click(function (e) {
            e.preventDefault();
            renderresource(6);
            tabid = 6;
        });
        var renderresource = function (product) {
            removecharts();
            $(".param").prop("disabled", true);
            chart_ratio = charts.render_singlem1('spline', '实时失败率', '/EagleEye/ajax/checkresourceratio/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&-1&-1/' + interval + '/False/False', '/EagleEye/ajax/checkresourceratio/' + sysdate(0) + '/' + sysdate(1) + '/1&-1&-1/' + interval + '/False/True', 240, 5, "ratio", '#159c6e', null, interval);
            chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&0&-1/' + interval + '/False/False/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&0&-1/' + interval + '/False/False/True', 240, 5, "feilures", '#159c6e', null, interval);
            chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/' + product + '&-1&-1/' + interval + '/False/False/False', '/EagleEye/ajax/checkresource/' + sysdate(0) + '/' + sysdate(1) + '/1&-1&-1/' + interval + '/False/False/True', 240, 5, "invokes", '#159c6e', null, interval);
            charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&-1&-1/' + interval + '/True/False/False', '上周调用数', '#9f86ff', true);
            charts.append_single(chart_invoke, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&-1&-1/' + interval + '/True/False/False', '昨日调用数', '#ccbf1b', false);
            charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&0&-1/' + interval + '/True/False/False', '上周失败数', '#9f86ff', true);
            charts.append_single(chart_feilure, '/EagleEye/ajax/checkresource/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&0&-1/' + interval + '/True/False/False', '昨日失败数', '#ccbf1b', false);
            charts.append_single(chart_ratio, '/EagleEye/ajax/checkresourceratio/' + sysdate(-7) + '/' + sysdate(-6) + '/' + product + '&-1&-1/' + interval + '/True/False', '昨日失败率', '#ccbf1b', false);
            charts.append_single(chart_ratio, '/EagleEye/ajax/checkresourceratio/' + sysdate(-1) + '/' + sysdate(0) + '/' + product + '&-1&-1/' + interval + '/True/False', '上周失败率', '#9f86ff', true);
        }
    });


};