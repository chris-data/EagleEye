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
    $checkContainer.append("<div id='all' style='height:250px;width:47%;float:left;clear:left;margin-top: 2px'></div><div id='Dp' style='height:250px;width:47%;float:left;margin-left:10px;margin-top: 2px '></div><div id='Sdp' style='height:250px;width:47%;float:left;clear:left;margin-top: 2px'></div><div id='Online' style='height:250px;width:47%;float:left;margin-left:10px;margin-top:2px'></div><div id='Wireless' style='height:250px;width:47%;float:left;clear:left;margin-top: 2px'></div><div id='Offline' style='height:250px;width:47%;float:left;margin-left:10px;margin-top: 2px '></div>")
    var url = '/EagleEye/ajax/allCheck/'+sysdate(-30)+'/'+sysdate(0);
    drawCurve(url, 'spline', nameArray, timeArray, 0,null)

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
{                             //k=10 机票国际  k=11机票大系统  k=12机票度假 k=13 机票其他  k=14 机票全部
    var resultThree = [];      //k=15 酒店全部  k=16 x资源; K=17单选项  ;k=18  当地玩乐
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
             var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

        if (k == 2)//SDP
        {
            fail[j] = retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//SDP失败数
            total[j] = retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//DP总数
              var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

        if (k == 5)//offline
        {
            fail[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 3 + 12 * j][4];//Offline失败数
            total[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 6 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4];//Offline总数
              var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

        if (k == 3)//online
        {
            fail[j] = retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4];//online失败数
            total[j] = retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 7 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4];//online总数
               var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 4)//wireless
        {
            fail[j] = retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//wireless失败数
            total[j] = retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 8 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//wireless总数
             var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 0) //全部
        {
            fail[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//DP失败数
            total[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 6 + 12 * j][4] + retobj.value[i + 7 + 12 * j][4] + retobj.value[i + 8 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//全部总数
             var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 6) {

            fail[j] = retobj.value[8 * j][4]  //DP 国内失败
            total[j] = retobj.value[8 * j][4] + retobj.value[4 + 8 * j][4]//DP国际总数
            console.log('total[j]:'+total[j])
               var x= (fail[j] / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 7) {
            fail[j] = retobj.value[i + 1 + 8 * j][4];//DP国际 失败
            total[j] = retobj.value[i + 1 + 8 * j][4] + retobj.value[i + 5 + 8 * j][4];//DP国际总数
              var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 8) {
            fail[j] = retobj.value[i + 2 + 8 * j][4];//SDP国内 失败
            total[j] = retobj.value[i + 2 + 8 * j][4] + retobj.value[i + 6 + 8 * j][4];//SDP国内总数
              var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 9) {

            fail[j] = retobj.value[i + 3 + 8 * j][4];//SDP国际 失败
            total[j] = retobj.value[i + 3 + 8 * j][4] + retobj.value[i + 7 + 8 * j][4];//SDP国际总数
              var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==10)
        {
            fail[j] = retobj.value[i + 1 + 8 * j][3];//机票 国际 失败
            total[j] = retobj.value[i + 1 + 8 * j][3] + retobj.value[i + 5 + 8 * j][3];//机票国际总数
               var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==11)
        {
             fail[j] = retobj.value[i + 2 + 8 * j][3];//机票 大系统 失败
            total[j] = retobj.value[i + 2 + 8 * j][3] + retobj.value[i + 6 + 8 * j][3];//机票大系统总数
              var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat

        }
        if(k==12)
        {
            fail[j] = retobj.value[i + 3 + 8 * j][3];//机票 度假 失败
            total[j] = retobj.value[i + 3 + 8 * j][3] + retobj.value[i + 7 + 8 * j][3];//机票度假总数
              var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j] / total[j]).toFixed(4);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==13)
        {
            fail[j] = retobj.value[i + 0 + 8 * j][3];//机票 其他 失败
            total[j] = retobj.value[i + 0 + 8 * j][3] + retobj.value[i + 4+ 8 * j][3];//机票其他总数
             var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==14)
        {
            fail[j] = retobj.value[i + 0 + 8 * j][3]+retobj.value[i +1+ 8 * j][3]+retobj.value[i + 2 + 8 * j][3]+retobj.value[i + 3+ 8 * j][3];//机票 全部 失败
            total[j] =fail[j]+ retobj.value[i + 4 + 8 * j][3] + retobj.value[i + 5+ 8 * j][3]+ retobj.value[i + 6+ 8 * j][3]+ retobj.value[i + 7+ 8 * j][3];//机票全部总数
              var x= (fail[j] / total[j]).toFixed(4);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==15)//资源--酒店
        {
             fail[j] = retobj.value[i + 3 + 8 * j][3];//机票 全部 失败
            total[j] =fail[j]+ retobj.value[i + 3 + 8 * j][3] + retobj.value[i + 7+ 8 * j][3];//机票全部总数
             var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j] / total[j]).toFixed(4);
            }
            rate[j] = parseFloat(x);//失败率
        }
          if(k==16)//资源--x资源
        {
             fail[j] = retobj.value[i  + 8 * j][3];//机票 全部 失败
            total[j] =fail[j]+ retobj.value[i  + 8 * j][3] + retobj.value[i + 4+ 8 * j][3];//机票全部总数
              var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j] / total[j]).toFixed(4);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
          if(k==17)//资源--单选项
        {
             fail[j] = retobj.value[i + 1 + 8 * j][3];//机票 全部 失败
            total[j] =fail[j]+ retobj.value[i + 1+ 8 * j][3] + retobj.value[i + 5+ 8 * j][3];//机票全部总数
              var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j] / total[j]).toFixed(4);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
          if(k==18)//资源--当地玩乐
        {
             fail[j] = retobj.value[i + 2 + 8 * j][3];//机票 全部 失败
            total[j] =fail[j]+ retobj.value[i + 2 + 8 * j][3] + retobj.value[i + 6+ 8 * j][3];//机票全部总数
            var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j] / total[j]).toFixed(4);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

    }
    resultThree[0] = rate;
    resultThree[1] = fail;
    resultThree[2] = total;
    return resultThree;

}


function options(divId,type,bigTitle,timeArray)
{

    var options={};
    var data1 = {};
    var data2 = {};
    var data3 = {};
    options={
            chart: {
                type: type,
                animation: Highcharts.svg,

                renderTo: divId,
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
                text: bigTitle  //大标题 如DP Offline 国内
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
    return options;
}


function getresourceType(url,data1,data2,data3,divId,name,type,timeArray,k)
{
 var options1=options(divId,type,name,timeArray)
        var mychart1 = new Highcharts.Chart(options1);

        mychart1.showLoading('Loading data from server...');

         $.getJSON(url, function (data) {
            var reObj = data;
            var dataArray1 = getArray(reObj, k)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);

            mychart1.hideLoading();

        })

}
//画图函数
function drawCurve(url, type, nameArray, timeArray, pageid,resourceType)//pageid=0 首页;  pageid=1  分渠道; pageid=2 机票;
{
    var data1 = {};
    var data2 = {};
    var data3 = {};
    if (pageid == 1) {
        var options1=options('char1',type,nameArray[0],timeArray)
        var options2=options('char2',type,nameArray[1],timeArray)
        var options3=options('char3',type,nameArray[2],timeArray)
        var options4=options('char4',type,nameArray[3],timeArray)
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
            console.log('dataArray1:'+dataArray1[0])
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
         var options1=options('all',type,nameArray[0],timeArray)
         var options2=options('Dp',type,nameArray[1],timeArray)
         var options3=options('Sdp',type,nameArray[2],timeArray)
         var options4=options('Online',type,nameArray[3],timeArray)
         var options5=options('Wireless',type,nameArray[4],timeArray)
         var options6=options('Offline',type,nameArray[5],timeArray)
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
    if(pageid==2){ //资源  机票
        var options1=options('flight0',type,nameArray[0],timeArray)
        var options2=options('flight1',type,nameArray[1],timeArray)
        var options3=options('flight2',type,nameArray[2],timeArray)
        var options4=options('flight3',type,nameArray[3],timeArray)
        var options5=options('flight4',type,nameArray[4],timeArray)
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        var mychart3 = new Highcharts.Chart(options3);
        var mychart4 = new Highcharts.Chart(options4);
        var mychart5 = new Highcharts.Chart(options5);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        mychart3.showLoading('Loading data from server...');
        mychart4.showLoading('Loading data from server...');
        mychart5.showLoading('Loading data from server...');
         $.getJSON(url, function (data) {
            var reObj = data;
            var dataArray1 = getArray(reObj, 14)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);
            var dataArray2 = getArray(reObj, 10)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            var dataArray3 = getArray(reObj, 11)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            var dataArray4 = getArray(reObj, 12)
            data1 = dataArray4[0];
            data2 = dataArray4[1];
            data3 = dataArray4[2];
            mychart4.series[0].setData(data1);
            mychart4.series[1].setData(data2);
            mychart4.series[2].setData(data3);
            var dataArray5 = getArray(reObj, 13)
            data1 = dataArray5[0];
            data2 = dataArray5[1];
            data3 = dataArray5[2];
            mychart5.series[0].setData(data1);
            mychart5.series[1].setData(data2);
            mychart5.series[2].setData(data3);
            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();
        })
    }
    if(pageid==3){ //资源  酒店
        if(resourceType=='hotel')
        {
            getresourceType(url,data1,data2,data3,'hotel0',nameArray[0],type,timeArray,15)
        }
        if(resourceType=='xResource')
        {
             getresourceType(url,data1,data2,data3,'xResource0',nameArray[0],type,timeArray,16)
        }
        if(resourceType=='oneSelect')
        {

            getresourceType(url,data1,data2,data3,'select0',nameArray[0],type,timeArray,17)
        }
         if(resourceType=='play')
        {

            getresourceType(url,data1,data2,data3,'play0',nameArray[0],type,timeArray,18)
        }
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
    $checkContainer.append("<div id='char1' style='height:250px;width:47%;float:left;clear:left;margin-top: 2px'></div><div id='char2' style='height:250px;width:47%;float:left;margin-left:10px;margin-top: 2px '></div><div id='char3' style='height:250px;width:47%;float:left;clear:left;margin-top: 2px'></div><div id='char4' style='height:250px;width:47%;float:left;margin-left:10px;margin-top: 2px '></div>")
    var url = '/EagleEye/ajax/channelCheck/'+sysdate(-31)+'/'+sysdate(0) +'/'+sysdate(-30)+'/'+sysdate(0)+'/' +channelId;
    var nameArray = [];
    nameArray[0] = 'DP 国内';
    nameArray[1] = 'DP 国际';
    nameArray[2] = 'SDP 国内';
    nameArray[3] = 'SDP 国际';
    drawCurve(url, 'spline', nameArray, timeArray, 1,null)


}

var flightFlag=0;
var hotelFlag=0;
var xResource=0;
var selectFlag=0;
var playFlag=0;
function checkFilght()//机票
{

    flightFlag++;
    if(flightFlag==1)
    {
        var timeArray = getMonth30();
    $checkFlightH= $("#checkFlightH")
    $checkFlightH.append("<div id='flight0' style='height:250px;margin-top:5px;width:88%'></div><div id='flight1' style='height:250px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='flight2' style='height:250px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div><div id='flight3' style='height:250px;float:left;clear:left;margin-top: 5px;width:44%'></div><div id='flight4' style='height:250px;float:left;clear:right;margin-left:80px;margin-top: 5px;width:44% '></div>")

    var url = '/EagleEye/ajax/fhCheckHistory/'+sysdate(-31)+'/'+sysdate(0)  ;
    var nameArray = [];
    nameArray[0] = '机票-全部';
    nameArray[1] = '机票-国际';
    nameArray[2] = '机票-大系统';
    nameArray[3] = '机票-度假';
    nameArray[4] = '机票-其他';
    drawCurve(url, 'spline', nameArray, timeArray, 2,'hotel')
    }


}
function checkHotel()//酒店
{
    hotelFlag++;
    if(hotelFlag==1)
    {
       var timeArray = getMonth30();
        $checkHotelH= $("#checkHotelH")
        $checkHotelH.append("<div id='hotel0' style='height:250px;margin-top:5px;width:88%'></div>")

        var url = '/EagleEye/ajax/htCheckHistory/'+sysdate(-31)+'/'+sysdate(0)+'/'+sysdate(-30)+'/'+sysdate(0)  ;
        var nameArray = [];
        nameArray[0] = '酒店-全部';
        drawCurve(url, 'spline', nameArray, timeArray, 3,'hotel')
    }

}
function checkX()//X资源
{
   xResource++;
     if(xResource==1)
    {
       var timeArray = getMonth30();
        $xResourceH= $("#xResourceH")
        $xResourceH.append("<div id='xResource0' style='height:250px;margin-top:5px;width:88%'></div>")

        var url = '/EagleEye/ajax/htCheckHistory/'+sysdate(-31)+'/'+sysdate(0)+'/'+sysdate(-30)+'/'+sysdate(0)  ;
        var nameArray = [];
        nameArray[0] = 'X资源-全部';
        drawCurve(url, 'spline', nameArray, timeArray, 3,'xResource')
    }

}



function checkSelect()//单选项
{
   selectFlag++;
      if(selectFlag==1)
    {
       var timeArray = getMonth30();
        $selectH= $("#selectH")
        $selectH.append("<div id='select0' style='height:250px;margin-top:5px;width:88%'></div>")

        var url = '/EagleEye/ajax/htCheckHistory/'+sysdate(-31)+'/'+sysdate(0)+'/'+sysdate(-30)+'/'+sysdate(0)  ;
        var nameArray = [];
        nameArray[0] = '单选项-全部';
        drawCurve(url, 'spline', nameArray, timeArray, 3,'oneSelect')
    }
}



function checkPlay()//当地玩乐
{
   playFlag++;
      if(playFlag==1)
    {
       var timeArray = getMonth30();
        $TTDH= $("#TTDH")
        $TTDH.append("<div id='play0' style='height:250px;margin-top:5px;width:88%'></div>")

        var url = '/EagleEye/ajax/htCheckHistory/'+sysdate(-31)+'/'+sysdate(0)+'/'+sysdate(-30)+'/'+sysdate(0)  ;
        var nameArray = [];
        nameArray[0] = '当地玩乐-全部';
        drawCurve(url, 'spline', nameArray, timeArray, 3,'play')
    }
}