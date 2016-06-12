/**
 * Created by wang.zy on 2015/9/14.
 */
var intervalarray = [];

var sysdate = function (offset) {
    var now = new Date();
    var day = new Date(now.getTime() + 1000 * 60 * 60 * 24 * offset).getDate();
    var month = new Date(now.getTime() + 1000 * 60 * 60 * 24 * offset).getMonth();
    month = (month + 1) - 12 > 0 ? ((month + 1) - 12) : (month + 1);
    var year = new Date(now.getTime() + 1000 * 60 * 60 * 24 * offset).getFullYear();
    var date = year + "-";
    if (month < 10)
        date += "0";
    date += month + "-";
    if (day < 10)
        date += "0";
    date += day;
    return date;
};

var systime = function () {
    var now = new Date();
    var hour = now.getHours();
    if (hour < 10)
        hour = '0' + hour;
    var minute = now.getMinutes();
    if (minute < 10)
        minute = '0' + minute;
    var second = now.getSeconds();
    if (second < 10)
        second = '0' + second;
    return hour + ":" + minute + ":" + second
};

var sysdatetime = function (offset) {
    return sysdate(offset) + " " + systime()
};
var charts = {
        render_single: function (type, name, initurl, appendurl, height, gap, container, color, width, interval) {
            var data = [];
            var options = {};
            options.chart = {
                type: type,
                animation: Highcharts.svg,
                //shadow: true,
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
                            }, 1000 * 60 * gap);
                            intervalarray.push(this.intervalid);
                        }
                    },
                }
            };
            options.title = {
                text: '',
            };
            options.xAxis = {
                type: 'datetime',
                showFirstLabel: true,
                showLastLabel: true,
            };
            options.yAxis = {
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }],
                min: 0,
                labels: {
                    enabled: true
                },
                showLastLabel: true,
            };
            options.tooltip = {
                shared: true, //是否共享提示，也就是X一样的所有点都显示出来
                xDateFormat: '%Y-%m-%d %H:%M',
                animation: true,
                crosshairs: [{
                    width: 1,
                    color: '#8BAFA3'
                }, {
                    width: 1,
                    color: '#8BAFA3'
                }],
                useHTML: true,
                formatter: function () {
                    var arr = [];
                    var points = this.points;
                    var x = 0;
                    var y = 0;
                    x = points[0].x;
                    arr.push('<i class="icon_clock_alt"></i> &nbsp;' + Highcharts.dateFormat('%H:%M', x - 1000 * 60 * interval) + '-' + Highcharts.dateFormat('%H:%M', x));
                    for (var i = 0; i < points.length; i++) {
                        var name = $.trim(points[i].series.name);
                        x = points[i].x;
                        y = points[i].y;
                        arr.push('<span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + name + '</span><span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + y + '</span>&nbsp;单');
                    }
                    return arr.join("<br>");
                },
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                },
                followPointer: false,
                //backgroundColor: {
                //    linearGradient: [0, 0, 0, 60],
                //    stops: [
                //        [0, '#2E2E2E'],
                //        [1, '#E0E0E0']
                //    ]
                //},
                //borderWidth: 1,
                borderColor: '#AAA'
            };
            options.legend = {
                //layout: 'vertical',
                //borderWidth: 0.5,
                layout: 'horizontal',
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                itemMarginBottom: 5,
                shadow: true,
                x: 20,
                y: 0,
            };
            options.credits = {
                enabled: false // 禁用版权信息
            };
            options.exporting = {
                enabled: false
            };
            options.series = [{
                name: name,
                data: data,
                color: color,
                shadow: true,
                stickyTracking: false,
            }];
            options.plotOptions = {
                spline: {
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 2.5
                        }
                    },
                    marker: {
                        enabled: false,
                        radius: 2.5,
                    },
                }
            };
            options.loading = {
                style: {
                    position: 'absolute',
                    backgroundColor: '#252830',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
            var mychart = new Highcharts.Chart(options);
            mychart.showLoading('Loading data from server...');

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
        render_singlem1: function (type, name, initurl, appendurl, height, gap, container, color, width, interval) {
            var data = [];
            var options = {};
            options.chart = {
                type: type,
                animation: Highcharts.svg,
                //shadow: true,
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
                            }, 1000 * 60 * gap);
                            intervalarray.push(this.intervalid);
                        }
                    },
                }
            };
            options.title = {
                text: '',
            };
            options.xAxis = {
                type: 'datetime',
                showFirstLabel: true,
                showLastLabel: true
            };
            options.yAxis = {
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }],
                min: 0,
                labels: {
                    enabled: true
                },
                showLastLabel: true,
            };
            options.tooltip = {
                shared: true, //是否共享提示，也就是X一样的所有点都显示出来
                xDateFormat: '%Y-%m-%d %H:%M',
                animation: true,
                crosshairs: [{
                    width: 1,
                    color: '#8BAFA3'
                }, {
                    width: 1,
                    color: '#8BAFA3'
                }],
                useHTML: true,
                formatter: function () {
                    var arr = [];
                    var points = this.points;
                    var x = 0;
                    var y = 0;
                    x = points[0].x;
                    arr.push('<i class="icon_clock_alt"></i> &nbsp;' + Highcharts.dateFormat('%H:%M', x - 1000 * 60 * interval) + '-' + Highcharts.dateFormat('%H:%M', x));
                    for (var i = 0; i < points.length; i++) {
                        var name = $.trim(points[i].series.name);
                        x = points[i].x;
                        y = points[i].y;
                        arr.push('<span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + name + '</span><span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + y + '</span>&nbsp;');
                    }
                    return arr.join("<br>");
                },
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                },
                followPointer: false,
                //backgroundColor: {
                //    linearGradient: [0, 0, 0, 60],
                //    stops: [
                //        [0, '#2E2E2E'],
                //        [1, '#E0E0E0']
                //    ]
                //},
                //borderWidth: 1,
                borderColor: '#AAA'
            };
            options.legend = {
                //layout: 'vertical',
                //borderWidth: 0.5,
                layout: 'horizontal',
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                itemMarginBottom: 5,
                shadow: true,
                x: 20,
                y: 0,
            };
            options.credits = {
                enabled: false // 禁用版权信息
            };
            options.exporting = {
                enabled: false
            };
            options.series = [{
                name: name,
                data: data,
                color: color,
                shadow: true,
                stickyTracking: false,
            }];
            options.plotOptions = {
                spline: {
                    lineWidth: 2.5,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    marker: {
                        enabled: false,
                        radius: 2
                    },
                }
            };
            options.loading = {
                style: {
                    position: 'absolute',
                    backgroundColor: null,
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
            var mychart = new Highcharts.Chart(options);
            mychart.showLoading('Loading data from server...');

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
        render_singlem2: function (type, name, initurl, appendurl, height, gap, container, color, width) {
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
                                }, 1000 * 60 * gap);
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
                    },
                    //min: 0,
                },
                plotOptions: {
                    series: {
                        animation: {
                            duration: 600
                        }
                    }
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
                    text: '',
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
                    x: 20,
                    y: 0,
                },
                //legend: {
                //    align: 'right',
                //    verticalAlign: 'top',
                //    layout: 'vertical',
                //    y: 30,
                //    //itemStyle: {
                //    //    color: '#DDDF0D'
                //    //},
                //    //itemHoverStyle: {
                //    //    color: '#DF5353'
                //    //},
                //    //itemHiddenStyle: {
                //    //    color: '#FFF'
                //    //},
                //    navigation: {
                //        style: {
                //            color: '#55BF3B'
                //        }
                //    },
                //    labelFormatter: function () {
                //        if (this.name.length > 200) {
                //            return this.name.substr(0, 50) + '<br/>' + this.name.substr(50, 50) + '<br/>' + this.name.substr(100, 50) + '<br/>' + this.name.substr(150, 50) + this.name.substring(200);
                //        } else if (this.name.length > 150) {
                //            return this.name.substr(0, 50) + '<br/>' + this.name.substr(50, 50) + '<br/>' + this.name.substr(100, 50) + '<br/>' + this.name.substring(150);
                //        } else if (this.name.length > 100) {
                //            return this.name.substr(0, 50) + '<br/>' + this.name.substr(50, 50) + '<br/>' + this.name.substring(100);
                //        } else if (this.name.length > 50) {
                //            return this.name.substr(0, 50) + '<br/>' + this.name.substring(50);
                //        } else {
                //            return this.name;
                //        }
                //    }
                //},

                credits: {
                    enabled: false // 禁用版权信息
                }
            };
            options.tooltip = {
                tooltip: {
                    shared: false,
                    formatter: function () {
                        var arr = [];
                        var points = this.points;
                        var x = 0;
                        var y = 0;
                        x = points[0].x;
                        arr.push(
                            '<i class="icon_clock_alt"></i>'
                            + '&nbsp;'
                            + Highcharts.dateFormat('%Y/%m/%d %H:%M', x - 1000 * 60 * interval)
                            + '-' + Highcharts.dateFormat('%H:%M', x)
                        );
                        for (var i = 0; i < points.length; i++) {
                            var name = $.trim(points[i].series.name);
                            x = points[i].x;
                            y = points[i].y;
                            arr.push('<span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + name + '</span><span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + y + '</span>&nbsp;');
                        }
                        return arr.join("<br>");
                    },
                    backgroundColor: {
                        linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, 'rgba(96, 96, 96, .8)'],
                            [1, 'rgba(16, 16, 16, .8)']
                        ]
                    },
                    borderWidth: 0,
                    style: {
                        color: '#FFF'
                    }
                }
            }
//options.title = {
//    text: '',
//};
//options.xAxis = {
//    type: 'datetime',
//    showFirstLabel: true,
//    showLastLabel: true,
//};
//options.yAxis = {
//    title: {
//        text: null
//    },
//    plotLines: [{
//        value: 0,
//        width: 2,
//        color: '#808080'
//    }],
//    min: 0,
//    labels: {
//        enabled: true
//    },
//    showLastLabel: true,
//};
//options.tooltip = {
//    shared: true, //是否共享提示，也就是X一样的所有点都显示出来
//    xDateFormat: '%Y-%m-%d %H:%M',
//    animation: true,
//    crosshairs: [{
//        width: 1,
//        color: '#8BAFA3'
//    }, {
//        width: 1,
//        color: '#8BAFA3'
//    }],
//    useHTML: true,
//formatter: function () {
//    var arr = [];
//    var points = this.points;
//    var x = 0;
//    var y = 0;
//    x = points[0].x;
//    arr.push('<i class="icon_clock_alt"></i>&nbsp;' + Highcharts.dateFormat('%Y/%m/%d %H:%M', x - 1000 * 60 * interval) + '-' + Highcharts.dateFormat('%H:%M', x));
//    for (var i = 0; i < points.length; i++) {
//        var name = $.trim(points[i].series.name);
//        x = points[i].x;
//        y = points[i].y;
//        arr.push('<span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + name + '</span><span style="display:inline-block;margin:2px;color:' + points[i].series.color + '">' + y + '</span>&nbsp;');
//    }
//    return arr.join("<br>");
//}
//,
//    style: {
//        padding: 10,
//        fontWeight: 'bold'
//    },
//    followPointer: false,
//    //backgroundColor: {
//    //    linearGradient: [0, 0, 0, 60],
//    //    stops: [
//    //        [0, '#2E2E2E'],
//    //        [1, '#E0E0E0']
//    //    ]
//    //},
//    //borderWidth: 1,
//    borderColor: '#AAA'
//};
//options.legend = {
//    //layout: 'vertical',
//    //borderWidth: 0.5,
//    layout: 'horizontal',
//    align: 'left',
//    verticalAlign: 'top',
//    floating: true,
//    itemMarginBottom: 5,
//    shadow: true,
//    x: 20,
//    y: 0,
//};
//options.credits = {
//    enabled: false // 禁用版权信息
//};
//options.exporting = {
//    enabled: false
//};
            options.series = [{
                name: name,
                data: data,
                color: color,
                shadow: true,
                stickyTracking: false,
            }];
            options.plotOptions = {
                spline: {
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    marker: {
                        enabled: true,
                        radius: 2.5,
                    },
                }
            };
            options.loading = {
                style: {
                    position: 'absolute',
                    backgroundColor: null,
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
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
        render_double: function (type, name1, name2, initurl, appendurl, height, interval, container, color1, color2, width) {
            var data1 = [];
            var data2 = [];
            options = {
                chart: {
                    type: type,
                    animation: Highcharts.svg,
                    //shadow: true,
                    renderTo: container,
                    height: height,
                    width: width,
                    events: {
                        load: function () {
                            var series0 = this.series[0];
                            var series1 = this.series[1];
                            this.intervalid = setInterval(function () {
                                $.getJSON(appendurl, function (data) {
                                    var __list1 = {};
                                    var __list2 = {};
                                    $.each(data, function (key, value) {
                                        if (key == 'data1') {
                                            __list1 = value;
                                            $.each(__list1, function (key, value) {
                                                var dt = Date.parse(key.replace(/-/g, "/"));
                                                series0.addPoint([dt, value], true, false, true);
                                            })
                                        }
                                        else if (key == 'data2') {
                                            __list2 = value;
                                            $.each(__list2, function (key, value) {
                                                var dt = Date.parse(key.replace(/-/g, "/"));
                                                series1.addPoint([dt, value], true, false, true);
                                            })
                                        }
                                    })
                                })
                            }, 1000 * 60 * interval);
                            intervalarray.push(this.intervalid);
                        }
                    }
                },
                title: {
                    text: ''
                },
                xAxis: {
                    type: 'datetime',
                    showFirstLabel: true,
                    showLastLabel: true
                },
                yAxis: [{ // left y axis
                    title: {
                        text: null
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }],
                    min: 0,
                    showLastLabel: true
                }, { // right y axis
                    title: {
                        text: null
                    },
                    plotLines: [{
                        value: 0,
                        width: 1
                    }],
                    min: 0,
                    showFirstLabel: true,
                    opposite: true
                }
                ],
                tooltip: {
                    xDateFormat: '%Y-%m-%d %H:%M',
                    animation: true,
                    style: {
                        padding: 10,
                        fontWeight: 'bold'
                    },
                    crosshairs: [{
                        width: 1,
                        color: '#8BAFA3'
                    }, {
                        width: 1,
                        color: '#8BAFA3'
                    }],
                    shared: true,
                    followPointer: false,
                    borderColor: '#AAA'
                },
                legend: {
                    layout: 'horizontal',
                    //backgroundColor: '#FFFFFF',
                    align: 'left',
                    verticalAlign: 'top',
                    //borderWidth: 0.5,
                    //maxHeight: 20,
                    floating: true,
                    draggable: true,
                    zIndex: 20,
                    itemMarginBottom: 5,
                    shadow: true,
                    x: 20,
                    y: 0
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: name1,
                    type: type,
                    yAxis: 0,
                    data: data1,
                    color: color1,
                    visible: false,
                    shadow: true,
                    stickyTracking: false
                }, {
                    name: name2,
                    type: type,
                    data: data2,
                    color: color2,
                    yAxis: 1,
                    shadow: true,
                    stickyTracking: false
                }],
                credits: {
                    enabled: false // 禁用版权信息
                },
                plotOptions: {
                    spline: {
                        lineWidth: 2,
                        states: {
                            hover: {
                                lineWidth: 2.4
                            }
                        },
                        marker: {
                            enabled: false,
                            radius: 2.5
                        }
                    }
                },
                loading: {
                    style: {
                        position: 'absolute',
                        backgroundColor: '#252830',
                        opacity: 0.5,
                        textAlign: 'center'
                    }
                }
            };
            var mychart = new Highcharts.Chart(options);
            mychart.showLoading('Loading data from server...');
            $.getJSON(initurl, function (data) {
                var __list1 = {};
                var __list2 = {};
                $.each(data, function (key, value) {
                    if (key == 'data1') {
                        __list1 = value;
                        $.each(__list1, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data1.push({x: dt, y: value})
                        })
                    }
                    else if (key == 'data2') {
                        __list2 = value;
                        $.each(__list2, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data2.push({x: dt, y: value})
                        })
                    }
                }),
                    //sort data1
                    data1.sort(function (a, b) {
                        return a.x - b.x
                    });
                //sort data2
                data2.sort(function (a, b) {
                    return a.x - b.x
                });
                try {
                    if (mychart && mychart.series[0]) {
                        mychart.series[0].setData(data1);
                    }
                    if (mychart && mychart.series[1]) {
                        mychart.series[1].setData(data2);
                        mychart.hideLoading();
                    }
                } catch (e) {
                    console.error(e);
                }
            })

            return mychart;
        }
        ,
        load_highstock: function (type, url, height, container, name) {

            var data = [];
            var mychart = new Highcharts.StockChart({
                chart: {
                    type: type,
                    animation: true,
                    //shadow: true,
                    renderTo: container,
                    height: height,
                },
                exporting: {
                    enabled: false
                },
                scrollbar: {
                    enabled: true,
                },
                navigator: {
                    enabled: true,
                },
                credits: {
                    enabled: false // 禁用版权信息
                },
                title: {
                    text: null
                },
                xAxis: {
                    type: 'datetime',
                    showFirstLabel: true,
                    showLastLabel: true,
                    //labels: {
                    //    formatter: function () {
                    //        var vDate = new Date(this.value);
                    //        //alert(this.value);
                    //        return vDate.getFullYear() + "-" + (vDate.getMonth() + 1) + "-" + vDate.getDate();
                    //    },
                    //    align: 'center'
                    //}
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    min: 0,
                    showFirstLabel: true,
                    showLastLabel: true,
                },
                tooltip: {
                    crosshairs: [true, true],
                    xDateFormat: '%Y-%m-%d %H:%M'
                },
                rangeSelector: {
                    buttons: [{//定义一组buttons,下标从0开始
                        type: 'hour',
                        count: 1,
                        text: '1H'
                    }, {
                        type: 'hour',
                        count: 2,
                        text: '2H'
                    }, {
                        type: 'hour',
                        count: 3,
                        text: '3H'
                    }, {
                        type: 'day',
                        count: 1,
                        text: '1D'
                    }, {
                        type: 'day',
                        count: 2,
                        text: '2D'
                    }, {
                        type: 'day',
                        count: 3,
                        text: '3D'
                    }, {
                        type: 'day',
                        count: 7,
                        text: '1W'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    inputEnabled: false,
                    selected: 3  //表示以上定义button的index,从0开始
                },
                series: [{
                    name: name,
                    data: data,
                    dataGrouping: {
                        enabled: true
                    },
                    shadow: true
                }],
                plotOptions: {
                    spline: {
                        lineWidth: 2,
                        states: {
                            hover: {
                                lineWidth: 2.4
                            }
                        },
                        marker: {
                            enabled: false,
                            radius: 2.5,
                        },
                        turboThreshold: 10000,
                    }
                },
                loading: {
                    style: {
                        position: 'absolute',
                        backgroundColor: 'black',
                        opacity: 0.5,
                        textAlign: 'center'
                    }
                }
            })

            mychart.showLoading('Loading data from server...');
            $.getJSON(url, function (json) {
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
        }
        ,
        loadstockchart: function (charttype, url, container, loadcolor) {
            var chart;
            var data = [];
            $.getJSON(url, function (json) {
                $.each(json, function (key, value) {
                    var dt = Date.parse(key.replace(/-/g, "/"));
                    data.push({x: dt, y: value});
                });
                data.sort(function (a, b) {
                    return a.x - b.x
                });
                chart = new Highcharts.StockChart({
                    chart: {
                        renderTo: container,
                    },
                    exporting: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    xAxis: {
                        type: 'datetime',
                        labels: {
                            formatter: function () {
                                var vDate = new Date(this.value);
                                //alert(this.value);
                                return vDate.getFullYear() + "-" + (vDate.getMonth() + 1) + "-" + vDate.getDate();
                            },
                            align: 'center'
                        }
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        crosshairs: [true, true],
                        xDateFormat: '%H:%M:%S'
                    },
                    rangeSelector: {
                        buttons: [{//定义一组buttons,下标从0开始
                            type: 'minute',
                            count: 60,
                            text: '60MI'
                        }, {
                            type: 'minute',
                            count: 120,
                            text: '120MI'
                        }, {
                            type: 'day',
                            count: 1,
                            text: '1D'
                        }, {
                            type: 'day',
                            count: 2,
                            text: '2D'
                        }, {
                            type: 'day',
                            count: 7,
                            text: '1W'
                        }, {
                            type: 'year',
                            count: 1,
                            text: '1y'
                        }, {
                            type: 'all',
                            text: 'All'
                        }],
                        selected: 2  //表示以上定义button的index,从0开始
                    },
                    credits: {
                        enabled: false // 禁用版权信息
                    },
                    series: [{
                        name: 'pv',//鼠标移到趋势线上时显示的属性名
                        data: data,//属性值
                        //marker : {
                        //      enabled : true,
                        //      radius : 3
                        //  },
                        shadow: true
                    }],
                    plotOptions: {
                        spline: {
                            lineWidth: 2.5,
                            states: {
                                hover: {
                                    lineWidth: 3
                                }
                            },
                            marker: {
                                enabled: false,
                                radius: 2.5,
                            },
                            turboThreshold: 10000,
                        }
                    },
                })
            })
            return chart;
        }
        ,
        loadchart_ext: function (init, update, id) {

            var data1 = [];
            var data2 = [];

            $.getJSON(init, function (data) {

                var __list1 = {};
                var __list2 = {};
                $.each(data, function (key, value) {
                    if (key == 'data1') {
                        __list1 = value;
                        $.each(__list1, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data1.push({x: dt, y: value})
                        })
                    }
                    else if (key == 'data2') {
                        __list2 = value;
                        $.each(__list2, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data2.push({x: dt, y: value})
                        })
                    }
                })

                //sort data1
                data1.sort(function (a, b) {
                    return a.x - b.x
                });

                //sort data2
                data2.sort(function (a, b) {
                    return a.x - b.x
                });

                $('#' + id).highcharts({
                    chart: {
                        type: 'spline',
                        animation: Highcharts.svg, // don't animate in old IE
                        height: 270,
                        events: {
                            load: function () {
                                var series0 = this.series[0];
                                var series1 = this.series[1];
                                setInterval(function () {
                                    $.getJSON(update, function (data) {
                                        var __list1 = {};
                                        var __list2 = {};
                                        $.each(data, function (key, value) {
                                            if (key == 'data1') {
                                                __list1 = value;
                                                $.each(__list1, function (key, value) {
                                                    var dt = Date.parse(key.replace(/-/g, "/"));
                                                    series0.addPoint([dt, value], true, true);
                                                })
                                            }
                                            else if (key == 'data2') {
                                                __list2 = value;
                                                $.each(__list2, function (key, value) {
                                                    var dt = Date.parse(key.replace(/-/g, "/"));
                                                    series1.addPoint([dt, value], true, true);
                                                })
                                            }
                                        })
                                    })
                                }, 1000 * 60 * 10);  //10 minutes
                            }
                        }
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        type: 'datetime',
                        //tickPixelInterval: 10,
                        showLastLabel: true,
                    },
                    yAxis: {
                        title: {
                            text: null
                        },
                        plotLines: [{
                            value: 0,
                            width: 2,
                            color: '#808080'
                        }],
                        min: 0,

                        labels: {
                            enabled: true
                        }
                    },
                    tooltip: {
                        xDateFormat: '%H:%M:%S',
                        shared: true,
                        style: {
                            padding: 10,
                            fontWeight: 'bold'
                        },
                        crosshairs: {
                            width: 2,
                            color: 'gray',
                            dashStyle: 'shortdot'
                        },

                    },
                    legend: {
                        enabled: false

                    },
                    exporting: {
                        enabled: false
                    },
                    series: [{
                        name: id,
                        data: data1,
                        shadow: true
                    }, {
                        name: id,
                        data: data2
                    }],
                    credits: {
                        enabled: false // 禁用版权信息
                    },
                    plotOptions: {
                        spline: {
                            lineWidth: 2,
                            states: {
                                hover: {
                                    lineWidth: 2.5
                                }
                            },
                            marker: {
                                enabled: false,
                                radius: 2.5,
                            },
                            //pointInterval: 60000, // one hour
                        }
                    },
                })
            })
        }
        ,
        loadchart_detail_ext: function (init, update, id) {

            var data1 = [];
            var data2 = [];

            $.getJSON(init, function (data) {

                var __list1 = {};
                var __list2 = {};
                $.each(data, function (key, value) {
                    if (key == 'data1') {
                        __list1 = value;
                        $.each(__list1, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data1.push({x: dt, y: value})
                        })
                    }
                    else if (key == 'data2') {
                        __list2 = value;
                        $.each(__list2, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data2.push({x: dt, y: value})
                        })
                    }
                })

                //sort data1
                data1.sort(function (a, b) {
                    return a.x - b.x
                });

                //sort data2
                data2.sort(function (a, b) {
                    return a.x - b.x
                });

                $('#' + id).highcharts({
                    chart: {
                        type: 'spline',
                        animation: Highcharts.svg, // don't animate in old IE
                        //height: 270,
                        //zoomType: 'x',
                        //margin: [10, 10, 40, 60],
                        events: {
                            load: function () {
                                var series = this.series[0];
                                setInterval(function () {
                                    $.getJSON(update, function (data) {
                                        var __list1 = {};
                                        var __list2 = {};
                                        $.each(data, function (key, value) {
                                            if (key == 'data1') {
                                                __list1 = value;
                                                $.each(__list1, function (key, value) {
                                                    var dt = Date.parse(key.replace(/-/g, "/"));
                                                    series[0].series.addPoint([dt, value], true, true);
                                                })
                                            }
                                            else if (key == 'data2') {
                                                __list2 = value;
                                                $.each(__list2, function (key, value) {
                                                    var dt = Date.parse(key.replace(/-/g, "/"));
                                                    series[1].series.addPoint([dt, value], true, true);
                                                })
                                            }
                                        })
                                    })
                                }, 1000 * 60 * 10);  //10 minutes
                            }
                        }
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        type: 'datetime',
                        //tickPixelInterval: 10,
                        showLastLabel: true,
                    },
                    yAxis: {
                        title: {
                            text: null
                        },
                        plotLines: [{
                            value: 0,
                            width: 2,
                            color: '#808080'
                        }],
                        min: 0,

                        labels: {
                            enabled: true
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + Highcharts.dateFormat('%H:%M:%S', this.x) + '< /b><br/ >' +
                                this.series.name + '=' + Highcharts.numberFormat(this.y, 0);
                        },
                        style: {
                            padding: 10,
                            fontWeight: 'bold'
                        }
                    },
                    legend: {
                        enabled: true

                    },
                    exporting: {
                        enabled: false
                    },
                    series: [{
                        name: id,
                        data: data1,
                        shadow: true
                    }, {
                        name: id,
                        data: data2,
                        dashStyle: 'longdash'
                    }],
                    credits: {
                        enabled: false // 禁用版权信息
                    },
                    plotOptions: {
                        spline: {
                            lineWidth: 2.5,
                            states: {
                                hover: {
                                    lineWidth: 3
                                }
                            },
                            marker: {
                                enabled: false,
                                radius: 2.5,
                            },
                        }
                    },
                })
            })
        }
        ,
        loadchart_detail_exts: function (init, update, id) {

            var data1 = [];
            var data2 = [];

            var chart = {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                events: {
                    load: function () {
                        var series = this.series[0];
                        setInterval(function () {
                            $.getJSON(update, function (data) {
                                var __list1 = {};
                                var __list2 = {};
                                $.each(data, function (key, value) {
                                    if (key == 'data1') {
                                        __list1 = value;
                                        $.each(__list1, function (key, value) {
                                            var dt = Date.parse(key.replace(/-/g, "/"));
                                            series[0].series.addPoint([dt, value], true, true);
                                        })
                                    }
                                    else if (key == 'data2') {
                                        __list2 = value;
                                        $.each(__list2, function (key, value) {
                                            var dt = Date.parse(key.replace(/-/g, "/"));
                                            series[1].series.addPoint([dt, value], true, true);
                                        })
                                    }
                                })
                            })
                        }, 1000 * 60 * 10);  //10 minutes
                    }
                }
            };
            var title = {
                text: ''
            };
            var xAxis = {
                type: 'datetime',
            };
            var yAxis = [{ // left y axis
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                }],
                min: 0,
                showFirstLabel: true
            }, { // right y axis
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                }],
                min: 0,
                showFirstLabel: true,
                opposite: true,
            }
            ];

            var tooltip = {
                shared: true,
                crosshairs: true
            }

            var legend = {
                enabled: false
            };

            var plotOptions = {
                spline: {
                    lineWidth: 2.5,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    marker: {
                        enabled: false,
                        radius: 2.5
                    },
                }
            };

            var series = [{
                name: 'pv',
                type: 'spline',
                yAxis: 0,
                data: data1,

            }, {
                name: 'uv',
                type: 'spline',
                yAxis: 1,
                data: data2,
            }];
            var exporting = {
                enabled: false
            };
            var credits = {
                enabled: false // 禁用版权信息
            };

            var json = {};
            json.chart = chart;
            json.title = title;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.tooltip = tooltip;
            json.legend = legend;
            json.series = series;
            json.plotOptions = plotOptions;
            json.exporting = exporting;
            json.credits = credits;


            $.getJSON(init, function (data) {

                var __list1 = {};
                var __list2 = {};
                $.each(data, function (key, value) {
                    if (key == 'data1') {
                        __list1 = value;
                        $.each(__list1, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data1.push({x: dt, y: value})
                        })
                    }
                    else if (key == 'data2') {
                        __list2 = value;
                        $.each(__list2, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data2.push({x: dt, y: value})
                        })
                    }
                })

                //sort data1
                data1.sort(function (a, b) {
                    return a.x - b.x
                });

                //sort data2
                data2.sort(function (a, b) {
                    return a.x - b.x
                });
                $('#' + id).highcharts(json);
            });
        }
        ,
        append_single: function (chart, url, type, color, visible) {
            var data = [];
            $.getJSON(url, function (json) {
                $.each(json, function (key, value) {
                    var dt = Date.parse(key.replace(/-/g, "/"));
                    data.push({x: dt, y: value});
                });
                data.sort(function (a, b) {
                    return a.x - b.x
                });
                series = {
                    name: type,
                    type: 'spline',
                    data: data,
                    color: color,
                    shadow: true,
                    visible: visible,
                    //dataLabels: {
                    //    enabled: true,
                    //    align: 'left',
                    //    style: {
                    //        fontWeight: 'bold'
                    //    },
                    //    x: 3,
                    //    verticalAlign: 'middle',
                    //    overflow: true,
                    //    crop: false
                    //},
                };
                chart.addSeries(series);
            })
        }
        ,
        append_double: function (chart, url, name1, name2, color1, color2) {
            var data1 = [];
            var data2 = [];
            $.getJSON(url, function (data) {
                var __list1 = {};
                var __list2 = {};
                $.each(data, function (key, value) {
                    if (key == 'data1') {
                        __list1 = value;
                        $.each(__list1, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data1.push({x: dt, y: value})
                        })
                    }
                    else if (key == 'data2') {
                        __list2 = value;
                        $.each(__list2, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data2.push({x: dt, y: value})
                        })
                    }
                })
                //sort data1
                data1.sort(function (a, b) {
                    return a.x - b.x
                });
                //sort data2
                data2.sort(function (a, b) {
                    return a.x - b.x
                });
                series1 = {
                    name: name1,
                    type: "spline",
                    yAxis: 0,
                    data: data1,
                    color: color1,
                    visible: false,
                    shadow: true
                };
                series2 =
                {
                    name: name2,
                    type: "spline",
                    data: data2,
                    yAxis: 1,
                    color: color2,
                    visible: true,
                    shadow: false
                };
                chart.addSeries(series1);
                chart.addSeries(series2);
            });
        }
        ,
        append_three: function (chart, url, name1, name2, color1, color2) {
            var data1 = [];
            var data2 = [];
            $.getJSON(url, function (data) {
                var __list1 = {};
                var __list2 = {};
                $.each(data, function (key, value) {
                    if (key == 'data1') {
                        __list1 = value;
                        $.each(__list1, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data1.push({x: dt, y: value})
                        })
                    }
                    else if (key == 'data2') {
                        __list2 = value;
                        $.each(__list2, function (key, value) {
                            var dt = Date.parse(key.replace(/-/g, "/"));
                            data2.push({x: dt, y: value})
                        })
                    }
                })
                //sort data1
                data1.sort(function (a, b) {
                    return a.x - b.x
                });
                //sort data2
                data2.sort(function (a, b) {
                    return a.x - b.x
                });
                series1 = {
                    name: name1,
                    type: "spline",
                    yAxis: 0,
                    data: data1,
                    color: color1,
                    visible: false,
                    shadow: true
                };
                series2 =
                {
                    name: name2,
                    type: "spline",
                    data: data2,
                    yAxis: 1,
                    color: color2,
                    visible: true,
                    shadow: false,
                };
                chart.addSeries(series1);
                chart.addSeries(series2);
            });
        }
        ,
        load_pie_chart: function (url, container, name, title) {
            var data = [];
            var option = {
                chart: {
                    type: 'pie',
                    renderTo: container,
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                },
                title: {
                    text: title || null,
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false // 禁用版权信息
                },
                series: [{
                    type: 'pie',
                    name: name,
                    data: data
                }]
            }
            $.getJSON(url, function (json) {
                $.each(json, function (key, value) {
                    data.push([key, value]);
                })
                data.sort(function (a, b) {
                    return a.value - b.value
                });
                var mychart = new Highcharts.Chart(option);
            })
        }
        ,
        removeChart: function (chart) {
            if (chart) {
                window.clearInterval(chart.intervalid);
                //chart.destroy();
                delete chart;
            }
        }
    }
    ;

function removeChart(chart) {
    if (chart) {
        window.clearInterval(chart.intervalid);
        //chart.destroy();
        delete chart;
        console.log(chart + ' is deleted');
    }
}

// the button action
var $showpv = $('.showpv');
var $showuv = $('.showuv');
$showpv.click(function () {
    if (tabid == 'frt') {
        frtpv();
    } else if (tabid == 'pkg') {
        pkgpv();
    } else if (tabid == 'cru') {
        crupv();
    }
});
$showuv.click(function () {
    if (tabid == 'frt') {
        frtuv()
    } else if (tabid == 'pkg') {
        pkguv();
    } else if (tabid == 'cru') {
        cruuv();
    }
});

function frtpv() {
    var series1 = chart_traffic.series[0];
    var series2 = chart_detail.series[0];
    var series3 = chart_input.series[0];

    if (series1.visible) {
        series1.hide();
        series2.hide();
        series3.hide();
        $showpv.html('显示PV');
    } else {
        series1.show();
        series2.show();
        series3.show();
        $showpv.html('隐藏PV');
    }
    var series4 = chart_traffic.series[2];
    var series5 = chart_detail.series[2];
    var series6 = chart_input.series[2];
    if (series4.visible) {
        series4.hide();
        series5.hide();
        series6.hide();
        $showpv.html('显示PV');
    } else {
        series4.show();
        series5.show();
        series6.show();
        $showpv.html('隐藏PV');
    }
}
function frtuv() {
    var series1 = chart_traffic.series[1];
    var series2 = chart_detail.series[1];
    var series3 = chart_input.series[1];
    if (series1.visible) {
        series1.hide();
        series2.hide();
        series3.hide();
        $showuv.html('显示UV');
    } else {
        series1.show();
        series2.show();
        series3.show();
        $showuv.html('隐藏UV');
    }
    var series4 = chart_traffic.series[3];
    var series5 = chart_detail.series[3];
    var series6 = chart_input.series[3];
    if (series4.visible) {
        series4.hide();
        series5.hide();
        series6.hide();
        $showuv.html('显示UV');
    } else {
        series4.show();
        series5.show();
        series6.show();
        $showuv.html('隐藏UV');
    }
}
function crupv() {
    var series1 = chart_crutraffic.series[0];
    var series2 = chart_crudetail.series[0];
    var series3 = chart_cruccabin.series[0];
    var series4 = chart_cruitem.series[0];
    var series5 = chart_cruwrite.series[0];
    if (series1.visible) {
        series1.hide();
        series2.hide();
        series3.hide();
        series4.hide();
        series5.hide();
        $showpv.html('显示PV');
    } else {
        series1.show();
        series2.show();
        series3.show();
        series4.show();
        series5.show();
        $showpv.html('隐藏PV');
    }
    var series6 = chart_crutraffic.series[2];
    var series7 = chart_crudetail.series[2];
    var series8 = chart_cruccabin.series[2];
    var series9 = chart_cruitem.series[2];
    var series10 = chart_cruwrite.series[2];
    if (series6.visible) {
        series6.hide();
        series7.hide();
        series8.hide();
        series9.hide();
        series10.hide();
        $showpv.html('显示PV');
    } else {
        series6.show();
        series7.show();
        series8.show();
        series9.show();
        series10.show();
        $showpv.html('隐藏PV');
    }
}
function cruuv() {
    var series1 = chart_crutraffic.series[1];
    var series2 = chart_crudetail.series[1];
    var series3 = chart_cruccabin.series[1];
    var series4 = chart_cruitem.series[1];
    var series5 = chart_cruwrite.series[1];
    if (series1.visible) {
        series1.hide();
        series2.hide();
        series3.hide();
        series4.hide();
        series5.hide();
        $showuv.html('显示UV');
    } else {
        series1.show();
        series2.show();
        series3.show();
        series4.show();
        series5.show();
        $showuv.html('隐藏UV');
    }
    var series6 = chart_crutraffic.series[3];
    var series7 = chart_crudetail.series[3];
    var series8 = chart_cruccabin.series[3];
    var series9 = chart_cruitem.series[3];
    var series10 = chart_cruwrite.series[3];
    if (series6.visible) {
        series6.hide();
        series7.hide();
        series8.hide();
        series9.hide();
        series10.hide();
        $showuv.html('显示UV');
    } else {
        series6.show();
        series7.show();
        series8.show();
        series9.show();
        series10.show();
        $showuv.html('隐藏UV');
    }
}

function pkgpv() {
    var series1 = chart_pkgtraffic.series[0];
    var series2 = chart_pkgdetail.series[0];
    var series3 = chart_pkginput.series[0];

    if (series1.visible) {
        series1.hide();
        series2.hide();
        series3.hide();
        $showpv.html('显示PV');
    } else {
        series1.show();
        series2.show();
        series3.show();
        $showpv.html('隐藏PV');
    }
    var series4 = chart_pkgtraffic.series[2];
    var series5 = chart_pkgdetail.series[2];
    var series6 = chart_pkginput.series[2];
    if (series4.visible) {
        series4.hide();
        series5.hide();
        series6.hide();
        $showpv.html('显示PV');
    } else {
        series4.show();
        series5.show();
        series6.show();
        $showpv.html('隐藏PV');
    }
}

function pkguv() {
    var series1 = chart_pkgtraffic.series[1];
    var series2 = chart_pkgdetail.series[1];
    var series3 = chart_pkginput.series[1];

    if (series1.visible) {
        series1.hide();
        series2.hide();
        series3.hide();
        $showuv.html('显示UV');
    } else {
        series1.show();
        series2.show();
        series3.show();
        $showuv.html('隐藏UV');
    }
    var series4 = chart_pkgtraffic.series[3];
    var series5 = chart_pkgdetail.series[3];
    var series6 = chart_pkginput.series[3];
    if (series4.visible) {
        series4.hide();
        series5.hide();
        series6.hide();
        $showuv.html('显示UV');
    } else {
        series4.show();
        series5.show();
        series6.show();
        $showuv.html('隐藏UV');
    }

}

function clearinterval() {
    if (intervalarray.length !== 0) {
        for (var i = 0; i < intervalarray.length; i++) {
            window.clearinterval(intervalarray[i]);
        }
        intervalarray = [];
    }

}