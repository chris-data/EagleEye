/**
 * Created by yangyz on 2015/12/28.
 */
function checkAll() {
    //定义线的颜色
    var timeArray = getMonth30();
    var nameArray = [];
    nameArray[0] = '全部';
    nameArray[1] = 'DP';
    nameArray[2] = 'SDP';
    nameArray[3] = 'Online';
    nameArray[4] = '无线';
    nameArray[5] = 'Offline';
    $checkContainer = $("#checkContainer")
    $checkContainer.empty();//清空翻页标签
    $checkContainer.append("<div id='all' style='height:250px;border:1px solid #2894FF;width:47%;float:left;clear:left;margin-top: 10px'></div><div id='Dp' style='height:250px;border:1px solid #2894FF;width:47%;float:left;margin-left:10px;margin-top: 10px '></div><div id='Sdp' style='height:250px;border:1px solid #2894FF;width:47%;float:left;clear:left;margin-top: 10px'></div><div id='Online' style='height:250px;border:1px solid #2894FF;width:47%;float:left;margin-left:10px;margin-top:10px'></div><div id='Wireless' style='height:250px;border:1px solid #2894FF;width:47%;float:left;clear:left;margin-top: 10px'></div><div id='Offline' style='height:250px;border:1px solid #2894FF;width:47%;float:left;margin-left:10px;margin-top: 10px '></div>")
    var url = '/EagleEye/ajax/allCheck/'
    drawCurve(url, 'spline', nameArray, timeArray, 0)

}
function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x * 100) / 100;
    return f;
}
//获取过去30天日期
function getMonth30() {
    var timeArray = [];
    var dd = new Date();
    dd.setDate(dd.getDate() - 31);//获取往前30天日期
    for (var m = 0; m < 30; m++) {
        dd.setDate(dd.getDate() + 1);//往前30天日期+1
        timeArray[m] = dd.Format("yyyy-MM-dd")
    }
    return timeArray;


}


function getArray(retobj, k)  //k=0  全部,  k=1 dp  ,k=2sdp  ,k=3online ,k=4无线 ,k=5 offline    k=6 dp国内  k=7dp 国际  k=8  sdp国内  k=9sdp国际
{
    var resultThree = [];
    var i = 0;
    var fail = [];
    var total = [];
    var rate = [];
    var seriesArray = [];
    for (var j = 0; j < 30; j++) {
        if (k == 1) //dp
        {
            fail[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4];//DP失败数
            total[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 6 + 12 * j][4] + retobj.value[i + 7 + 12 * j][4] + retobj.value[i + 8 + 12 * j][4];//DP总数
            rate[j] = toDecimal((fail[j] / total[j]));//失败率
        }

        if (k == 2)//SDP
        {
            fail[j] = retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//SDP失败数
            total[j] = retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//DP总数
            rate[j] = toDecimal((fail[j]  / total[j]));//失败率
        }

        if (k == 5)//offline
        {
            fail[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 3 + 12 * j][4];//Offline失败数
            total[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 6 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4];//Offline总数
            rate[j] = toDecimal((fail[j]/ total[j]));//失败率
        }

        if (k == 3)//online
        {
            fail[j] = retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4];//online失败数
            total[j] = retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 7 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4];//online总数
            rate[j] = toDecimal((fail[j]  / total[j]));//失败率
        }
        if (k == 4)//wireless
        {
            fail[j] = retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//wireless失败数
            total[j] = retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 8 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//wireless总数
            rate[j] = toDecimal((fail[j]  / total[j]));//失败率
        }
        if (k == 0) //全部
        {
            fail[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//DP失败数
            total[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 6 + 12 * j][4] + retobj.value[i + 7 + 12 * j][4] + retobj.value[i + 8 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//全部总数
            rate[j] = toDecimal((fail[j]  / total[j]));//失败率
        }
        if (k == 6) {

            fail[j] = retobj.value[8 * j][4]  //DP 国内失败
            total[j] = retobj.value[8 * j][4] + retobj.value[4 + 8 * j][4]//DP国际总数
            rate[j] = toDecimal((fail[j] / total[j]))
        }
        if (k == 7) {
            fail[j] = retobj.value[i + 1 + 8 * j][4];//DP国际 失败
            total[j] = retobj.value[i + 1 + 8 * j][4] + retobj.value[i + 5 + 8 * j][4];//DP国际总数
            rate[j] = toDecimal((fail[j] / total[j]));//失败率
        }
        if (k == 8) {
            fail[j] = retobj.value[i + 2 + 8 * j][4];//SDP国内 失败
            total[j] = retobj.value[i + 2 + 8 * j][4] + retobj.value[i + 6 + 8 * j][4];//SDP国内总数
            rate[j] = toDecimal((fail[j] / total[j]));//失败率
        }
        if (k == 9) {

            fail[j] = retobj.value[i + 3 + 8 * j][4];//SDP国际 失败
            total[j] = retobj.value[i + 3 + 8 * j][4] + retobj.value[i + 7 + 8 * j][4];//SDP国际总数
            rate[j] = toDecimal((fail[j] / total[j]));//失败率
        }

    }
    resultThree[0] = rate;
    resultThree[1] = fail;
    resultThree[2] = total;
    return resultThree;

}


//画图函数
function drawCurve(url, type, nameArray, timeArray, pageid)//pageid=0 首页   pageid=1  分渠道
{
    var data1 = {};
    var data2 = {};
    var data3 = {};
    if (pageid == 1) {
        var options1 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'char1',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',

                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[0]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var options2 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'char2',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[1]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var options3 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'char3',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[2]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var options4 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'char4',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                renderTo: 'char4',
                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[3]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };


        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        var mychart3 = new Highcharts.Chart(options3);
        var mychart4 = new Highcharts.Chart(options4);


        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        mychart3.showLoading('Loading data from server...');
        mychart4.showLoading('Loading data from server...');

        $.getJSON(url, function (data) {

            var reObj = data;

            var dataArray1 = getArray(reObj, 6)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);

            var dataArray2 = getArray(reObj, 7)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            var dataArray3 = getArray(reObj, 8)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            var dataArray4 = getArray(reObj, 9)
            data1 = dataArray4[0];
            data2 = dataArray4[1];
            data3 = dataArray4[2];
            mychart4.series[0].setData(data1);
            mychart4.series[1].setData(data2);
            mychart4.series[2].setData(data3);

            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();


        })
    }
    if (pageid == 0) {
        var options1 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'all',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',

                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[0]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var options2 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'Dp',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[1]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var options3 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'Sdp',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[2]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var options4 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'Online',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[3]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var options5 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'Wireless',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[4]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var options6 = {
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: 'Offline',
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {
                    load: function (event) {
                        for (var i = this.series.length - 1; i > 0; i--) {
                            this.series[i].hide();        //设置只显示第一条线，其他都不显示
                        }
                    }
                }
            },
            title: {
                style: {

                    fontSize: '12px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: nameArray[5]  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '可订检查',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            spline: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false,
                    radius: 1.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step: 5,
                    staggerLines: 1
                    ,
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                labels: {
                    style: {
                        color: '#000000', //刻度字体颜色
                        fontSize: '10px' //刻度字体大小
                    }
                }
            },
            tooltip: {

                crosshairs: true,
                shared: true,
                backgroundColor: '#9D9D9D'

            },
            series: [{
                name: '失败率',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0000',
                visible: true,
                shadow: true,
                stickyTracking: false,
            }, {
                name: '失败数',
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#804040',
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: '调用数',
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    color: '#FF5809',
                    shadow: true,
                    stickyTracking: false,
                }],
            loading: {
                style: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    opacity: 0.5,
                    textAlign: 'center'
                }
            }
        };
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        var mychart3 = new Highcharts.Chart(options3);
        var mychart4 = new Highcharts.Chart(options4);
        var mychart5 = new Highcharts.Chart(options5);
        var mychart6 = new Highcharts.Chart(options6);


        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        mychart3.showLoading('Loading data from server...');
        mychart4.showLoading('Loading data from server...');
        mychart5.showLoading('Loading data from server...');
        mychart6.showLoading('Loading data from server...');

        $.getJSON(url, function (data) {

            var reObj = data;


            var dataArray1 = getArray(reObj, 0)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);

            var dataArray2 = getArray(reObj, 1)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            var dataArray3 = getArray(reObj, 2)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            var dataArray4 = getArray(reObj, 3)
            data1 = dataArray4[0];
            data2 = dataArray4[1];
            data3 = dataArray4[2];
            mychart4.series[0].setData(data1);
            mychart4.series[1].setData(data2);
            mychart4.series[2].setData(data3);
            var dataArray5 = getArray(reObj, 4)
            data1 = dataArray5[0];
            data2 = dataArray5[1];
            data3 = dataArray5[2];
            mychart5.series[0].setData(data1);
            mychart5.series[1].setData(data2);
            mychart5.series[2].setData(data3);
            var dataArray6 = getArray(reObj, 5)
            data1 = dataArray6[0];
            data2 = dataArray6[1];
            data3 = dataArray6[2];
            mychart6.series[0].setData(data1);
            mychart6.series[1].setData(data2);
            mychart6.series[2].setData(data3);
            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();
            mychart6.hideLoading();
        })
    }
}

//时间格式函数
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //
        "d+": this.getDate(), //
        "h+": this.getHours(), //
        "m+": this.getMinutes(), //
        "s+": this.getSeconds(), //
        "q+": Math.floor((this.getMonth() + 3) / 3), //
        "S": this.getMilliseconds() //
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


function searchChannel() {
    var channel = $("#channel").val();
    if (channel == 'all') {
        checkAll()
    }
    else if (channel == 'onlineCheck') {
        checkChannel(1);
    }
    else if (channel == 'offlineCheck') {
        checkChannel(2);
    }
    else if (channel == 'wirelessCheck') {
        checkChannel(3);
    }


}

function checkChannel(channelId) {
    var timeArray = getMonth30();
    $checkContainer.empty();//清空翻页标签
    $checkContainer.append("<div id='char1' style='height:250px;border:1px solid #2894FF;width:47%;float:left;clear:left;margin-top: 10px'></div><div id='char2' style='height:250px;border:1px solid #2894FF;width:47%;float:left;margin-left:10px;margin-top: 10px '></div><div id='char3' style='height:250px;border:1px solid #2894FF;width:47%;float:left;clear:left;margin-top: 10px'></div><div id='char4' style='height:250px;border:1px solid #2894FF;width:47%;float:left;margin-left:10px;margin-top: 10px '></div>")
    var url = '/EagleEye/ajax/channelCheck/' + channelId;
    var nameArray = [];
    nameArray[0] = 'DP 国内';
    nameArray[1] = 'DP 国际';
    nameArray[2] = 'SDP 国内';
    nameArray[3] = 'SDP 国际';
    drawCurve(url, 'spline', nameArray, timeArray, 1)


}

