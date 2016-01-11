/**
 * Created by wang.zy on 2015/9/14.
 */

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
}

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
                    }
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'datetime',
                showFirstLabel: true,
                showLastLabel: true,
            },
            yAxis: [{ // left y axis
                title: {
                    text: null,
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080',
                }],
                min: 0,
                showLastLabel: true,
            }, { // right y axis
                title: {
                    text: null,
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                }],
                min: 0,
                showFirstLabel: true,
                opposite: true,
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
                y: 0,
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
                stickyTracking: false,
            }, {
                name: name2,
                type: type,
                data: data2,
                color: color2,
                yAxis: 1,
                shadow: true,
                stickyTracking: false,
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
                        radius: 2.5,
                    },
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
            })
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
                shadow: false,
            };
            chart.addSeries(series1);
            chart.addSeries(series2);
        });
    },
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
    },
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
                data: data,
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
    },
    removeChart: function (chart) {
        if (chart) {
            window.clearInterval(chart.intervalid);
            //chart.destroy();
            delete chart;
        }
    }
};

