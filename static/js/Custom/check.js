/**
 * Created by wang.zy on 2015/12/29.
 */

var checkcharts = function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        var product = $("#product").val();
        var channel = $("#channel").val();
        var interval = $("#interval").val();
        var isintl = $("#isintl").val();


        function checkcharts() {
            chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/False/False/False', null, 220, 5, "invokes", '#FF9900', null, interval);
            charts.append_single(chart_invoke, '/EagleEye/ajax/check/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/False/False', '上周调用数', '#00BFFF', false);
            charts.append_single(chart_invoke, '/EagleEye/ajax/check/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/False/False', '昨日调用数', '#9400D3', false);

            chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/False/False/False', null, 220, 5, "feilures", '#FF9900', null, interval);
            charts.append_single(chart_feilure, '/EagleEye/ajax/check/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/True/False/False', '昨日失败数', '#9400D3', false);
            charts.append_single(chart_feilure, '/EagleEye/ajax/check/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/True/False/False', '上周失败数', '#00BFFF', false);

            chart_ratio = charts.render_singlem1('spline', '实时失败率', '/EagleEye/ajax/check2/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/False/False', null, 220, 5, "ratio", '#FF9900', null, interval);
            charts.append_single(chart_ratio, '/EagleEye/ajax/check2/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/False', '昨日失败率', '#9400D3', false);
            charts.append_single(chart_ratio, '/EagleEye/ajax/check2/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/False', '上周失败率', '#00BFFF', false);
        }

        checkcharts();
        $('#product').bind('change', function (e) {
            product = $('#product').val();
        });
        $('#interval').bind('click', function (e) {
            interval = $('#interval').val();
        });
        $('#channel').bind('change', function (e) {
            channel = $('#channel').val();
        });
        $('#isintl').bind('click', function (e) {
            isintl = $('#isintl').val();
        });
        $('#refresh').bind('click', function (e) {
            charts.removeChart(chart_invoke);
            charts.removeChart(chart_feilure);
            charts.removeChart(chart_ratio);
            checkcharts();
        });
        $('#mode_change').bind('click', function (e) {
            charts.removeChart(chart_invoke);
            charts.removeChart(chart_feilure);
            charts.removeChart(chart_ratio);
            chart_invoke = charts.render_singlem1('spline', '实时调用数', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/False/True/False', null, 220, 5, "invokes", '#FF9900', null, interval);
            charts.append_single(chart_invoke, '/EagleEye/ajax/check/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/True/False', '上周调用数', '#00BFFF', false);
            charts.append_single(chart_invoke, '/EagleEye/ajax/check/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&-1&' + isintl + '&' + channel + '/True/True/False', '昨日调用数', '#9400D3', false);
            chart_feilure = charts.render_singlem1('spline', '实时失败数', '/EagleEye/ajax/check/' + sysdate(0) + '&' + sysdate(1) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/False/True/False', null, 220, 5, "feilures", '#FF9900', null, interval);
            charts.append_single(chart_feilure, '/EagleEye/ajax/check/' + sysdate(-1) + '&' + sysdate(0) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/True/True/False', '昨日失败数', '#9400D3', false);
            charts.append_single(chart_feilure, '/EagleEye/ajax/check/' + sysdate(-7) + '&' + sysdate(-6) + '&' + interval + '&' + product + '&0&' + isintl + '&' + channel + '/True/True/False', '上周失败数', '#00BFFF', false);

        })
        $(".selectparam").select2();
        $("[data-toggle = 'tooltip']").tooltip();
    })

    var toggleHidden = function () {
        var elem = document.getElementById("toggle");
        var elem1 = document.getElementById("main-content");
        if (elem.hasAttribute("hidden")) {
            elem.removeAttribute("hidden");
            elem1.style.marginLeft = "160px";
        } else {
            elem.setAttribute("hidden", "hidden");
            elem1.style.marginLeft = "0px";
        }
    }
};