/**
 * Created by wang.zy on 2016/6/2.
 */

function init() {
    $(function () {
        var sdt = sysdatetime(-1), edt = sysdatetime(0), interval = 10, type = 'all';
        $("#d5221").val(sdt);
        $("#d5222").val(edt);
        $("#d5221,#d5222,#interval").bind('change', function () {
            sdt = $("#d5221").val();
            edt = $("#d5222").val();
            interval = $("#interval").val();
        });
        $('#rate').knob({
            'max': 100,
            'step': 0.01,
            'width': 120,
            'thickness': ".1",
            'fgColor': 'rgb(247, 163, 92)',
            'readOnly': true
        });
        $("#failed,#total").knob({
            'max': 50000,
            'width': 100,
            'thickness': ".1",
            'fgColor': 'rgb(247, 163, 92)',
            'readOnly': true
        });
        //init
        function rendermetirx() {
            sdt = $("#d5221").val();
            edt = $("#d5222").val();
            $.getJSON('/EagleEye/bookable/today/' + sdt + '/' + edt + '/' + type + '/', function (data) {
                $.each(data, function (key, value) {
                    if (key == 'rate')
                        $('#rate').val(value).trigger('change');
                    else if (key == 'failed')
                        $('#failed').val(value).trigger('change');
                    else
                        $('#total').val(value).trigger('change');
                })
            })
        }

        rendermetirx();
        //update
        setInterval(function () {
            var sdt = sysdatetime(-1), edt = sysdatetime(0);
            $.getJSON('/EagleEye/bookable/today/' + sdt + '/' + edt + '/' + type + '/', function (data) {
                $.each(data, function (key, value) {
                    if (key == 'rate')
                        $('#rate').val(value).trigger('change');
                    else if (key == 'failed')
                        $('#failed').val(value).trigger('change');
                    else
                        $('#total').val(value).trigger('change');
                })
            })
        }, 1000 * 60 * 3);

        rendercharts(type);
        $("#search").click(function () {
            rendercharts(type);
            rendermetirx();
        });
        $(".selectparam").select2({
            minimumResultsForSearch: Infinity
        });
        $("#1d").click(function () {
            $("#d5221").val(sysdatetime(-1));
            $("#d5222").val(sysdatetime(0));
            $("#1d").addClass('active');
            $("#2d,#3d").removeClass('active');
            rendercharts(type);
            rendermetirx();

        });
        $("#2d").click(function () {
            $("#d5221").val(sysdatetime(-2));
            $("#d5222").val(sysdatetime(0));
            $("#2d").addClass('active');
            $("#1d,#3d").removeClass('active');
            rendercharts(type);
            rendermetirx()
        });
        $("#3d").click(function () {
            $("#d5221").val(sysdatetime(-3));
            $("#d5222").val(sysdatetime(0));
            $("#3d").addClass('active');
            $("#1d,#2d").removeClass('active');
            rendercharts(type);
            rendermetirx()

        });
        $("#bt_all").click(function () {
            type = 'all';
            $("#bt_dp,#bt_sdp").removeClass('active');
            $("#bt_all").addClass('active');
            rendercharts(type);
            rendermetirx()

        });
        $("#bt_dp").click(function () {
            alert("DP数据还没进埋点，暂不可用！");
            return;
            type = 'dp';
            $("#bt_all,#bt_sdp").removeClass('active');
            $("#bt_dp").addClass('active');
            rendercharts(type);
            rendermetirx()
        });
        $("#bt_sdp").click(function () {
            type = 'sdp';
            $("#bt_all,#bt_dp").removeClass('active');
            $("#bt_sdp").addClass('active');
            rendercharts(type);
            rendermetirx()
        });
        function rendercharts(type) {
            var sdt = $("#d5221").val(), edt = $("#d5222").val(), interval = $("#interval").val();
            $.render_line_charts('spline', 'chart_1', '可定失败率', '/EagleEye/bookable/rate/' + sdt + '/' + edt + '/' + interval + '/' + type + '/', '/EagleEye/bookable/rate/' + sdt + '/' + interval + '/' + type + '/', interval, null, 250, null, '%', null);
            $.render_line_charts('spline', 'chart_2', '可定失败数', '/EagleEye/bookable/failure/' + sdt + '/' + edt + '/' + interval + '/' + type + '/', '/EagleEye/bookable/failure/' + sdt + '/' + interval + '/' + type + '/', interval, null, 250, null, '次', null);
            $.render_line_charts('spline', 'chart_3', '可定调用数', '/EagleEye/bookable/all/' + sdt + '/' + edt + '/' + interval + '/' + type + '/', '/EagleEye/bookable/all/' + sdt + '/' + interval + '/' + type + '/', interval, null, 250, null, '次', null);
        }

        $("#interval").bind('change', function () {
            rendercharts(type);
        });
    })
}