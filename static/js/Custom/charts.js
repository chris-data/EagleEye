/**
 * Created by wang.zy on 2016/6/12.
 */
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
$.extend({
    /*
     * type:图表类型，如spline,line,area 等
     * container:防止图表的锚点
     * name:图表数据名称
     * initurl:图表初始化URL
     * appendurl:图表加点URL
     * interval:图表统计间隔时间
     * width:图表宽度
     * height:图表高度
     * prefix:数据前缀
     * suffix:数据后缀
     * color:图表颜色
     */
    render_line_charts: function (type, container, name, initurl, appendurl, interval, width, height, prefix, suffix, color) {
        var data = [];
        var options = {
            colors: [
                "rgb(31, 85, 130)", "#55BF3B", "#ff0066", "#DF5353", "#DDDF0D", "#7798BF", "#DF5353"],
            chart: {
                type: type,
                animation: Highcharts.svg,
                height: height,
                width: width,
                renderTo: container,
                events: {
                    load: function () {
                        if (appendurl === '') return
                        var series = this.series[0];
                        if (series !== undefined) {
                            this.intervalid = setInterval(function () {
                                $.getJSON(appendurl, function (data) {
                                    $.each(data, function (key, value) {
                                        var dt = Date.parse(key.replace(/-/g, "/"));
                                        series.addPoint([dt, value], false, false, true);
                                        series.chart.redraw();
                                    });
                                });
                            }, 1000 * 60 * interval);
                            intervalarray.push(this.intervalid);
                        }
                    }
                },
                //backgroundColor: {
                //    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                //    stops: [
                //        [0, 'rgb(0,0,0)'],
                //        [1, 'rgb(70,130,180)']
                //    ]
                //},
                backgroundColor: '#F7F7F7',
                borderWidth: 0,
                //borderRadius: 10,
                plotBackgroundColor: null,
                plotShadow: true,
                //shadow: true,
                plotBorderWidth: 0
            },
            subtitle: {
                text: '',
                style: {
                    color: '#DDD',
                    font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                }
            },
            yAxis: {
                alternateGridColor: null,
                minorTickInterval: null,
                gridLineColor: 'rgba(255, 255, 255, .1)',
                minorGridLineColor: 'rgba(255,255,255,0.07)',
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    style: {
                        color: '#999',
                        fontWeight: 'bold'
                    }
                },
                title: {
                    text: null
                }
                //min: 0,
            },
            visibleNo: 9,
            type: 'max',
            xAxis: {
                type: "datetime",
                gridLineWidth: 0,
                lineColor: '#999',
                tickColor: '#999',
                labels: {
                    style: {
                        color: '#999',
                        fontWeight: 'bold'
                    }
                },
                title: {
                    style: {
                        color: '#AAA',
                        font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                    }
                }
            },
            isLegend: false,
            title: {
                style: {
                    color: '#FFF',
                    font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                },
                text: ''
            },
            legend: {
                //layout: 'vertical',
                //borderWidth: 0.5,
                layout: 'horizontal',
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                itemMarginBottom: 5,
                shadow: true,
                x: 35,
                y: 0
            },
            credits: {
                enabled: false // 禁用版权信息
            },
            tooltip: {
                shared: true,
                valueDecimals: 2,
                valuePrefix: prefix,
                valueSuffix: suffix,
                style: {},
                borderWidth: 0,
                formatter: function () {
                    var arr = [];
                    var points = this.points;
                    var x = 0;
                    var y = 0;
                    x = points[0].x;
                    arr.push('<span style="color:#00a65a" >' + '时间段：' + Highcharts.dateFormat('%H:%M', x - 1000 * 60 * interval) + '~' + Highcharts.dateFormat('%H:%M', x) + '</span>');
                    for (var i = 0; i < points.length; i++) {
                        var name = $.trim(points[i].series.name);
                        x = points[i].x;
                        y = points[i].y;
                        if (suffix == '%') {
                            arr.push('<span style="display:inline-block;margin:2px;color:#00a65a">' + name + ': ' + '</span><span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + '<b>' + Math.round(y * 100) + ' ' + suffix + '</b>' + '</span>');
                        } else {
                            arr.push('<span style="display:inline-block;margin:2px;color:#00a65a">' + name + ': ' + '</span><span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + '<b>' + y + ' ' + suffix + '</b>' + '</span>');
                        }
                    }
                    return arr.join("<br>");
                },
                //backgroundColor: {
                //    linearGradient: {
                //        x1: 0, y1: 0, x2: 0, y2: 1
                //    }
                //    ,
                //    stops: [
                //        [0, 'rgba(96, 96, 96, .8)'],
                //        [1, 'rgba(16, 16, 16, .8)']
                //    ]
                //},
            },
            series: [{
                name: name,
                data: data,
                color: color,
                shadow: true,
                stickyTracking: false
            }],
            plotOptions: {
                spline: {
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    marker: {
                        enabled: true,
                        radius: 2.5
                    }
                },
                series: {
                    animation: {
                        duration: 600
                    }
                }
            },
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: null,
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };

        var mychart = new Highcharts.Chart(options);
        mychart.showLoading('Loading data from matrix...');

        $.getJSON(initurl, function (json) {
            $.each(json, function (key, value) {
                var dt = Date.parse(key.replace(/-/g, "/"));
                data.push({x: dt, y: value});
            });
            data.sort(function (a, b) {
                return a.x - b.x
            });
            mychart.series[0].setData(data);

            mychart.hideLoading();
        });
        return mychart;
    },
    //update_metrix: function (url, interval) {
    //    var intervalid = null;
    //    var gap = interval
    //    if (interval == undefined || interval == '') {
    //        gap = 3;
    //    }
    //    intervalid = setInterval(function () {
    //        $.getJSON(url, function (data) {
    //            $.each(data, function (key, value) {
    //                var dt = Date.parse(key.replace(/-/g, "/"));
    //                series.addPoint([dt, value], false, false, true);
    //                series.chart.redraw();
    //            });
    //        });
    //    }, 1000 * 60 * gap);
    //}
})
;