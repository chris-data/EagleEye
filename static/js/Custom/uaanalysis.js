/**
 * Created by wang.zy on 2015/12/21.
 */

function RenderUAcharts() {
    $(document).ready(function () {
        chart_device = charts.load_pie_chart("/EagleEye/ajax/ua/device/" + sysdate(-1) + "/" + sysdate(0) + "/", "device", "设备分布");
        chart_operationsystem = charts.load_pie_chart("/EagleEye/ajax/ua/operationsystem/" + sysdate(-1) + "/" + sysdate(0) + "/", "operation", "操作系统分布");
        chart_browser = charts.load_pie_chart("/EagleEye/ajax/ua/browser/" + sysdate(-1) + "/" + sysdate(0) + "/", "browser", "浏览器分布");
        chart_edition = charts.load_pie_chart("/EagleEye/ajax/ua/edition/" + sysdate(-1) + "/" + sysdate(0) + "/", "edition", "APP版本分布");

        function item(name, cnt) {
            this.name = name;
            this.cnt = cnt;
        }

        $('#d5221').val(sysdate(-1));
        $('#d5222').val(sysdate(0));
        $("[data-toggle = 'tooltip']").tooltip();
        $('#d5221').hover(
            function () {
                var d5221 = $dp.$('d5221');
                d5221.focus();
            },
            function () {
                var d5221 = $dp.$('d5221');
                d5221.blur();
            }
        );
        $('#d5222').hover(
            function () {
                var d5222 = $dp.$('d5222');
                d5222.focus();
            },
            function () {
                var d5222 = $dp.$('d5222');
                d5222.blur();
            }
        );
        $('.fa').hover(
            function () {
                $(this).css({"color": "#34aadc"});
            },
            function () {
                $(this).css({"color": "#688a7e"});
            }
        );

        $.getJSON("/EagleEye/ajax/ua/device/" + sysdate(-1) + "/" + sysdate(0) + "/", function (data) {
            var device = [];
            $.each(data, function (key, value) {
                device.push(new item(key, value));
            })
            device.sort(function (a, b) {
                return b.cnt - a.cnt
            });
            tb_device = $('#tb_device').DataTable({
                data: device,
                columns: [
                    {data: 'name'},
                    {data: 'cnt'}
                ],
                "searching": false,
                "bLengthChange": false,
                "info": false,
                "scrollY": "280px",
                "scrollCollapse": true,
                "paging": false,
                retrieve: true,
                buttons: [
                    'copy', 'excel', 'pdf'
                ]
            });
        })
        $.getJSON("/EagleEye/ajax/ua/operationsystem/" + sysdate(-1) + "/" + sysdate(0) + "/", function (data) {
            var operation = [];
            $.each(data, function (key, value) {
                operation.push(new item(key, value));
            })
            operation.sort(function (a, b) {
                return b.cnt - a.cnt
            });
            $('#tb_operation').DataTable({
                data: operation,
                columns: [
                    {data: 'name'},
                    {data: 'cnt'}
                ],
                "searching": false,
                "bLengthChange": false,
                "info": false,
                "scrollY": "280px",
                "scrollCollapse": true,
                "paging": false,
                retrieve: true,
            });
        })
        $.getJSON("/EagleEye/ajax/ua/browser/" + sysdate(-1) + "/" + sysdate(0) + "/", function (data) {
            var browser = [];
            $.each(data, function (key, value) {
                browser.push(new item(key, value));
            })
            browser.sort(function (a, b) {
                return b.cnt - a.cnt
            });
            $('#tb_browser').DataTable({
                data: browser,
                columns: [
                    {data: 'name'},
                    {data: 'cnt'}
                ],
                "searching": false,
                "bLengthChange": false,
                "info": false,
                "scrollY": "280px",
                "scrollCollapse": true,
                "paging": false,
                retrieve: true,
            });
        })
        $.getJSON("/EagleEye/ajax/ua/edition/" + sysdate(-1) + "/" + sysdate(0) + "/", function (data) {
            var edition = [];
            $.each(data, function (key, value) {
                edition.push(new item(key, value));
            })
            edition.sort(function (a, b) {
                return b.cnt - a.cnt
            });
            $('#tb_edition').DataTable({
                data: edition,
                columns: [
                    {data: 'name'},
                    {data: 'cnt'}
                ],
                "searching": false,
                "bLengthChange": false,
                "info": false,
                "scrollY": "280px",
                "scrollCollapse": true,
                "paging": false,
                retrieve: true,
            });
        })
        $("#search").click(function () {
            var sdt = document.getElementById("d5221").value;
            var edt = document.getElementById("d5222").value;
            if (sdt === "" || edt === "") {
                alert("请输入完整时间段!");
                return
            }
            chart_device = charts.load_pie_chart("/EagleEye/ajax/ua/device/" + sdt + "/" + edt + "/", "device", "设备分布");
            chart_operationsystem = charts.load_pie_chart("/EagleEye/ajax/ua/operationsystem/" + sdt + "/" + edt + "/", "operation", "操作系统分布");
            chart_browser = charts.load_pie_chart("/EagleEye/ajax/ua/browser/" + sdt + "/" + edt + "/", "browser", "浏览器分布");
            chart_edition = charts.load_pie_chart("/EagleEye/ajax/ua/edition/" + sdt + "/" + edt + "/", "edition", "APP版本分布");
            $.getJSON("/EagleEye/ajax/ua/device/" + sdt + "/" + edt + "/", function (data) {
                var device = [];
                $.each(data, function (key, value) {
                    device.push(new item(key, value));
                })
                device.sort(function (a, b) {
                    return b.cnt - a.cnt
                });
                delete  tb_device;
                tb_device = $('#tb_device').DataTable({
                    data: device,
                    columns: [
                        {data: 'name'},
                        {data: 'cnt'}
                    ],
                    "searching": false,
                    "bLengthChange": false,
                    "info": false,
                    "scrollY": "280px",
                    "scrollCollapse": true,
                    "paging": false,
                    retrieve: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                });
            })
            $.getJSON("/EagleEye/ajax/ua/operationsystem/", function (data) {
                var operation = [];
                $.each(data, function (key, value) {
                    operation.push(new item(key, value));
                })
                operation.sort(function (a, b) {
                    return b.cnt - a.cnt
                });
                $('#tb_operation').DataTable({
                    data: operation,
                    columns: [
                        {data: 'name'},
                        {data: 'cnt'}
                    ],
                    "searching": false,
                    "bLengthChange": false,
                    "info": false,
                    "scrollY": "280px",
                    "scrollCollapse": true,
                    "paging": false,
                    retrieve: true,
                });
            })
            $.getJSON("/EagleEye/ajax/ua/browser/", function (data) {
                var browser = [];
                $.each(data, function (key, value) {
                    browser.push(new item(key, value));
                })
                browser.sort(function (a, b) {
                    return b.cnt - a.cnt
                });
                $('#tb_browser').DataTable({
                    data: browser,
                    columns: [
                        {data: 'name'},
                        {data: 'cnt'}
                    ],
                    "searching": false,
                    "bLengthChange": false,
                    "info": false,
                    "scrollY": "280px",
                    "scrollCollapse": true,
                    "paging": false,
                    retrieve: true,
                });
            })
            $.getJSON("/EagleEye/ajax/ua/edition/", function (data) {
                var edition = [];
                $.each(data, function (key, value) {
                    edition.push(new item(key, value));
                })
                edition.sort(function (a, b) {
                    return b.cnt - a.cnt
                });
                $('#tb_edition').DataTable({
                    data: edition,
                    columns: [
                        {data: 'name'},
                        {data: 'cnt'}
                    ],
                    "searching": false,
                    "bLengthChange": false,
                    "info": false,
                    "scrollY": "280px",
                    "scrollCollapse": true,
                    "paging": false,
                    retrieve: true
                });
            })
        })
    })
}
