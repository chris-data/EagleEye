/**
 * Created by yangyz on 2016/5/19.
 */


function handelDetail()
{
    var timeArray = getMonth30(31);
    var bigTitle=new Array();
    bigTitle[0]='详情页-平均值';
    bigTitle[1]='详情页-最大值';
    bigTitle[2]='详情页-最小值';


    $orderContainer = $("#orderContainer");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='avgDetail' style='height:300px'></div><div id='maxDetail' style='height:300px;margin-top:10px'></div><div id='minDetail' style='height:300px;margin-top:10px'></div>")
    var url='/EagleEye/ajax/pagehandler/'+sysdate(-31)+'/'+sysdate(0);//总订单

    var DivIdArray=new Array();
    DivIdArray[0]='avgDetail';DivIdArray[1]='maxDetail';DivIdArray[2]='minDetail';
    var numberArray=new Array();//编号
    numberArray[0]=1;numberArray[1]=2;numberArray[2]=3;
     //详情页
    var smallTitle=new Array();
    smallTitle[0]='产品预订';smallTitle[1]='产品描述信息';smallTitle[2]='产品详情页页面';smallTitle[3]='产品介绍信息';smallTitle[4]='产品地图';
    smallTitle[5]='机票重新选择';smallTitle[6]='资源反查';smallTitle[7]='单选项资源重新选择';smallTitle[8]='日历框信息';smallTitle[9]='酒店重现选择';

    drawCurveForHandler(url, DivIdArray,bigTitle ,numberArray,smallTitle,timeArray, 10)

}

function canchosepage()
{
 var timeArray = getMonth30(31);
    var bigTitle=new Array();
    bigTitle[0]='可选项页-平均值';
    bigTitle[1]='可选项页-最大值';
    bigTitle[2]='可选项页-最小值';
    $orderContainer = $("#handlerchoseH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='avgcanchose' style='height:300px;width:90%'></div><div id='maxcanchose' style='height:300px;margin-top:10px;width:90%'></div><div id='mincanchose' style='height:300px;margin-top:10px;width:90%'></div>")
    var url='/EagleEye/ajax/pagehandler/'+sysdate(-31)+'/'+sysdate(0);//总订单

    var DivIdArray=new Array();
    DivIdArray[0]='avgcanchose';DivIdArray[1]='maxcanchose';DivIdArray[2]='mincanchose';
    var numberArray=new Array();//编号
    numberArray[0]=4;numberArray[1]=5;numberArray[2]=6;

    //可选项页
     var smallTitle=new Array();
    smallTitle[0]='头部资源框价格框加载';smallTitle[1]='预订';smallTitle[2]='资源反查';
    drawCurveForHandler(url, DivIdArray,bigTitle ,numberArray,smallTitle,timeArray, 3)

}
function fillpage()//填写页
{
   var timeArray = getMonth30(31);
    var bigTitle=new Array();
    bigTitle[0]='填写页-平均值';
    bigTitle[1]='填写页-最大值';
    bigTitle[2]='填写页-最小值';
    $orderContainer = $("#handlerfillH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='avgfill' style='height:300px;width:90%'></div><div id='maxfill' style='height:300px;margin-top:10px;width:90%'></div><div id='minfill' style='height:300px;margin-top:10px;width:90%'></div>")
    var url='/EagleEye/ajax/pagehandler/'+sysdate(-31)+'/'+sysdate(0);//总订单

    var DivIdArray=new Array();
    DivIdArray[0]='avgfill';DivIdArray[1]='maxfill';DivIdArray[2]='minfill';
    var numberArray=new Array();//编号
    numberArray[0]=7;numberArray[1]=8;numberArray[2]=9;
      //填写页
    var smallTitleFill=new Array();
    smallTitleFill[0]='融合页面资源框加载';smallTitleFill[1]='获取优惠信息';smallTitleFill[2]='验证优惠';smallTitleFill[3]='融合页面获取优惠';smallTitleFill[4]='融合页面优惠验证';
    smallTitleFill[5]='发票配送';smallTitleFill[6]='保存配送地址';smallTitleFill[7]='融合页面发票信息';smallTitleFill[8]='融合页面可订检查';smallTitleFill[9]='融合页面旅客模板';
    smallTitleFill[10]='融合页面page';smallTitleFill[11]='融合页面订单提交';smallTitleFill[12]='订单重复检查';smallTitleFill[13]='旅客信息获取';smallTitleFill[14]='page';smallTitleFill[15]='提交订单';
    drawCurveForHandler(url, DivIdArray,bigTitle ,numberArray,smallTitleFill,timeArray, 16)
}

function endpage()
{
 var timeArray = getMonth30(31);
    var bigTitle=new Array();
    bigTitle[0]='完成页-平均值';
    bigTitle[1]='完成页-最大值';
    bigTitle[2]='完成页-最小值';
    $orderContainer = $("#handlerendH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='avgend' style='height:300px;width:90%'></div><div id='maxend' style='height:300px;margin-top:10px;width:90%'></div><div id='minend' style='height:300px;margin-top:10px;width:90%'></div>")
    var url='/EagleEye/ajax/pagehandler/'+sysdate(-31)+'/'+sysdate(0);//总订单

    var DivIdArray=new Array();
    DivIdArray[0]='avgend';DivIdArray[1]='maxend';DivIdArray[2]='minend';
    var numberArray=new Array();//编号
    numberArray[0]=10;numberArray[1]=11;numberArray[2]=12;

   //完成页
     var smallTitle=new Array();
    smallTitle[0]='检查订单状态';smallTitle[1]='推荐信息';smallTitle[2]='page';smallTitle[3]='加载订单状态';smallTitle[4]='融合成功页';
    drawCurveForHandler(url, DivIdArray,bigTitle ,numberArray,smallTitle,timeArray, 5)

}


function vacationInterface()
{
    var timeArray = getMonth30(31);
    var bigTitle=new Array();
    bigTitle[0]='tour.touromdservice.v1.touromdservice.ordercreate（<3s）';
    bigTitle[1]='tour.orderservice.v1.tourorderservice.orderdetailget';
    bigTitle[2]='tour.orderservice.v1.tourorderservice.tourordermanagelist';
    $orderContainer = $("#orderContainer");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='Create' style='height:300px'></div><div id='getDetail' style='height:300px;margin-top:10px'></div><div id='manageList' style='height:300px;margin-top:10px'></div>")
    var url='/EagleEye/ajax/soaperform/'+sysdate(-31)+'/'+sysdate(0);//总订单
    var DivIdArray=new Array();
    DivIdArray[0]='Create';DivIdArray[1]='getDetail';DivIdArray[2]='manageList';
    var numberArray=new Array();//编号
    numberArray[0]=13;numberArray[1]=14;numberArray[2]=15;
   //接口耗时
     var smallTitle=new Array();
    smallTitle[0]='平均值';smallTitle[1]='最大值';smallTitle[2]='最小值';
    drawCurveForHandler(url, DivIdArray,bigTitle ,numberArray,smallTitle,timeArray, 3)


}
function plaseWait()//获取订单详情接口
{

}

//获取过去30天日期
function getMonth30(k) {
    var timeArray = [];
    var dd = new Date();
    dd.setDate(dd.getDate() - k);//获取往前30天日期
    for (var m = 0; m < 30; m++) {
        dd.setDate(dd.getDate() + 1);//往前30天日期+1
        timeArray[m] = dd.Format("yyyy-MM-dd")
    }
    return timeArray;


}
function drawCurveForHandler(url,divIDArray,bigTitleArray,numberArray,smallTitle,timeArray,pageid)
{
    var data1 = {};var data2 = {}; var data3 = {};var data4 = {};var data5 = {};var data6 = {};var data7 = {};
    var data8 = {};var data9 = {};var data10 = {};var data11 = {};var data12 = {};var data13 = {};
    var data14 = {};var data15 = {};var data16 = {};


    if(pageid==3){
        var options1=getHandlerOpition(divIDArray[0],bigTitleArray[0],timeArray,smallTitle,3);
        var options2=getHandlerOpition(divIDArray[1],bigTitleArray[1],timeArray,smallTitle,3);
        var options3=getHandlerOpition(divIDArray[2],bigTitleArray[2],timeArray,smallTitle,3);
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        var mychart3 = new Highcharts.Chart(options3);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        mychart3.showLoading('Loading data from server...');
           $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray1 =  getDataArray(reObj,30, numberArray[0],3)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);

             var dataArray2 =  getDataArray(reObj,30, numberArray[1],3)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);


            var dataArray3 =  getDataArray(reObj,30, numberArray[2],3)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);

            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();

        })


    }
    if(pageid==5){
        var options1=getHandlerOpition(divIDArray[0],bigTitleArray[0],timeArray,smallTitle,5);
        var options2=getHandlerOpition(divIDArray[1],bigTitleArray[1],timeArray,smallTitle,5);
        var options3=getHandlerOpition(divIDArray[2],bigTitleArray[2],timeArray,smallTitle,5);
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        var mychart3 = new Highcharts.Chart(options3);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        mychart3.showLoading('Loading data from server...');
           $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray1 =  getDataArray(reObj,30, numberArray[0],5)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            data4 = dataArray1[3];
            data5 = dataArray1[4];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);
            mychart1.series[3].setData(data4);
            mychart1.series[4].setData(data5);

             var dataArray2 =  getDataArray(reObj,30, numberArray[1],5)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            data4 = dataArray2[3];
            data5 = dataArray2[4];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            mychart2.series[3].setData(data4);
            mychart2.series[4].setData(data5);
            var dataArray3 =  getDataArray(reObj,30, numberArray[2],5)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            data4 = dataArray3[3];
            data5 = dataArray3[4];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            mychart3.series[3].setData(data4);
            mychart3.series[4].setData(data5);
            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();

        })

    }
    if(pageid==10){
        var options1=getHandlerOpition(divIDArray[0],bigTitleArray[0],timeArray,smallTitle,10);
        var options2=getHandlerOpition(divIDArray[1],bigTitleArray[1],timeArray,smallTitle,10);
        var options3=getHandlerOpition(divIDArray[2],bigTitleArray[2],timeArray,smallTitle,10);
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        var mychart3 = new Highcharts.Chart(options3);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        mychart3.showLoading('Loading data from server...');
           $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray1 =  getDataArray(reObj,30, numberArray[0],10)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            data4 = dataArray1[3];
            data5 = dataArray1[4];
            data6 = dataArray1[5];
            data7 = dataArray1[6];
            data8 = dataArray1[7];
            data9 = dataArray1[8];
            data10= dataArray1[9];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);
            mychart1.series[3].setData(data4);
            mychart1.series[4].setData(data5);
            mychart1.series[5].setData(data6);
            mychart1.series[6].setData(data7);
            mychart1.series[7].setData(data8);
            mychart1.series[8].setData(data9);
            mychart1.series[9].setData(data10);

             var dataArray2 =  getDataArray(reObj,30, numberArray[1],10)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            data4 = dataArray2[3];
            data5 = dataArray2[4];
            data6 = dataArray2[5];
            data7 = dataArray2[6];
            data8 = dataArray2[7];
            data9 = dataArray2[8];
            data10= dataArray2[9];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            mychart2.series[3].setData(data4);
            mychart2.series[4].setData(data5);
            mychart2.series[5].setData(data6);
            mychart2.series[6].setData(data7);
            mychart2.series[7].setData(data8);
            mychart2.series[8].setData(data9);
            mychart2.series[9].setData(data10);

            var dataArray3 =  getDataArray(reObj,30, numberArray[2],10)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            data4 = dataArray3[3];
            data5 = dataArray3[4];
            data6 = dataArray3[5];
            data7 = dataArray3[6];
            data8 = dataArray3[7];
            data9 = dataArray3[8];
            data10= dataArray3[9];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            mychart3.series[3].setData(data4);
            mychart3.series[4].setData(data5);
            mychart3.series[5].setData(data6);
            mychart3.series[6].setData(data7);
            mychart3.series[7].setData(data8);
            mychart3.series[8].setData(data9);
            mychart3.series[9].setData(data10);

            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();



        })


    }if(pageid==16){

 var options1=getHandlerOpition(divIDArray[0],bigTitleArray[0],timeArray,smallTitle,16);
        var options2=getHandlerOpition(divIDArray[1],bigTitleArray[1],timeArray,smallTitle,16);
        var options3=getHandlerOpition(divIDArray[2],bigTitleArray[2],timeArray,smallTitle,16);
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        var mychart3 = new Highcharts.Chart(options3);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        mychart3.showLoading('Loading data from server...');
           $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray1 =  getDataArray(reObj,30, numberArray[0],16)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            data4 = dataArray1[3];
            data5 = dataArray1[4];
            data6 = dataArray1[5];
            data7 = dataArray1[6];
            data8 = dataArray1[7];
            data9 = dataArray1[8];
            data10= dataArray1[9];
            data11= dataArray1[10];
            data12= dataArray1[11];
            data13= dataArray1[12];
            data14= dataArray1[13];
            data15= dataArray1[14];
            data16= dataArray1[15];

            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);
            mychart1.series[3].setData(data4);
            mychart1.series[4].setData(data5);
            mychart1.series[5].setData(data6);
            mychart1.series[6].setData(data7);
            mychart1.series[7].setData(data8);
            mychart1.series[8].setData(data9);
            mychart1.series[9].setData(data10);
            mychart1.series[10].setData(data11);
            mychart1.series[11].setData(data12);
            mychart1.series[12].setData(data13);
            mychart1.series[13].setData(data14);
            mychart1.series[14].setData(data15);
            mychart1.series[15].setData(data16);
             var dataArray2 =  getDataArray(reObj,30, numberArray[1],16)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            data4 = dataArray2[3];
            data5 = dataArray2[4];
            data6 = dataArray2[5];
            data7 = dataArray2[6];
            data8 = dataArray2[7];
            data9 = dataArray2[8];
            data10= dataArray2[9];
            data11= dataArray2[10];
            data12= dataArray2[11];
            data13= dataArray2[12];
            data14= dataArray2[13];
            data15= dataArray2[14];
            data16= dataArray2[15];

            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            mychart2.series[3].setData(data4);
            mychart2.series[4].setData(data5);
            mychart2.series[5].setData(data6);
            mychart2.series[6].setData(data7);
            mychart2.series[7].setData(data8);
            mychart2.series[8].setData(data9);
            mychart2.series[9].setData(data10);
            mychart2.series[10].setData(data11);
            mychart2.series[11].setData(data12);
            mychart2.series[12].setData(data13);
            mychart2.series[13].setData(data14);
            mychart2.series[14].setData(data15);
            mychart2.series[15].setData(data16);

            var dataArray3 =  getDataArray(reObj,30, numberArray[2],16)
           data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            data4 = dataArray3[3];
            data5 = dataArray3[4];
            data6 = dataArray3[5];
            data7 = dataArray3[6];
            data8 = dataArray3[7];
            data9 = dataArray3[8];
            data10= dataArray3[9];
            data11= dataArray3[10];
            data12= dataArray3[11];
            data13= dataArray3[12];
            data14= dataArray3[13];
            data15= dataArray3[14];
            data16= dataArray3[15];

            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            mychart3.series[3].setData(data4);
            mychart3.series[4].setData(data5);
            mychart3.series[5].setData(data6);
            mychart3.series[6].setData(data7);
            mychart3.series[7].setData(data8);
            mychart3.series[8].setData(data9);
            mychart3.series[9].setData(data10);
            mychart3.series[10].setData(data11);
            mychart3.series[11].setData(data12);
            mychart3.series[12].setData(data13);
            mychart3.series[13].setData(data14);
            mychart3.series[14].setData(data15);
            mychart3.series[15].setData(data16);

            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();



        })
    }


}

function getHandlerOpition(divId,bigTitle,timeArray,smallTitle,flag)
{
  var options={};
    var data1 = {};var data2 = {};var data3 = {};var data4 = {};var data5 = {};var data6 = {};var data7 = {};var data8 = {};
    var data9 = {};var data10 = {};var data11 = {};var data12 = {};var data13 = {};var data14 = {};var data15 = {};var data16 = {};
    if(flag==3)
    {
        options={
            chart: {

                animation: Highcharts.svg,
                renderTo: divId,
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {

                }
            },
            title: {
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: bigTitle  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            line: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 2.7
                    }
                },
                marker: {
                    enabled: true,
                    radius: 2.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step:4,
                    staggerLines: 1 ,
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

                crosshairs: [{            // 设置准星线样式
                            width:2,
                            color: '#408080'
                        }, {
                            width: 1,
                            color: "#006cee",
                            dashStyle: 'longdashdot',
                            zIndex: 100
                            }],
                shadow: false,
                backgroundColor: '#996666',
            },
            series: [{
                name:smallTitle[0],
                lineWidth: 1,
                radius: 1,
                data: data1,
                visible: true,
                shadow: false,
                stickyTracking: false,
            }, {
                tooltip: { valueSuffix: '' },
                name: smallTitle[1],
                lineWidth: 1,
                radius: 1,
                data: data2,
                visible: false,
                shadow: true,
                stickyTracking: false,
            },
                {
                    name:smallTitle[2],
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }

            ],
                legend : {
                    //layout: 'vertical',
                    //borderWidth: 0.5,
                   // itemHiddenStyle: {color: 'red'}
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
    }
    if(flag==5)
    {
        options={
            chart: {

                animation: Highcharts.svg,
                renderTo: divId,
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {

                }
            },
            title: {
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: bigTitle  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            line: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 2.7
                    }
                },
                marker: {
                    enabled: true,
                    radius: 2.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step:4,
                    staggerLines: 1 ,
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

                crosshairs: [{            // 设置准星线样式
                            width:2,
                            color: '#408080'
                        }, {
                            width: 1,
                            color: "#006cee",
                            dashStyle: 'longdashdot',
                            zIndex: 100
                            }],
                shadow: false,
                borderColor: '#663333',
                backgroundColor: '#996666',
            },
            series: [{
                name:smallTitle[0],
                lineWidth: 1,
                radius: 1,
                data: data1,
                visible: true,
                shadow: false,
                stickyTracking: false,
            }, {
                tooltip: { valueSuffix: '' },
                name:  smallTitle[1],
                lineWidth: 1,
                radius: 1,
                data: data2,
                visible: false,
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: smallTitle[2],
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                  ,
                {
                    name: smallTitle[3],
                    lineWidth: 1,
                    radius: 1,
                    data: data4,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[4],
                    lineWidth: 1,
                    radius: 1,
                    data: data5,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }

            ],
                legend : {
                    //layout: 'vertical',
                    //borderWidth: 0.5,
                   // itemHiddenStyle: {color: 'red'}
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
    }
    if(flag==10)
    {
        options={
            chart: {

                animation: Highcharts.svg,
                renderTo: divId,
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {

                }
            },
            title: {
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: bigTitle  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            line: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 2.7
                    }
                },
                marker: {
                    enabled: true,
                    radius: 2.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step:4,
                    staggerLines: 1 ,
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

                crosshairs: [{            // 设置准星线样式
                            width:2,
                            color: '#408080'
                        }, {
                            width: 1,
                            color: "#006cee",
                            dashStyle: 'longdashdot',
                            zIndex: 100
                            }],
                shadow: false,
                borderColor: '#663333',
                backgroundColor: '#996666',
            },
            series: [{
                name:smallTitle[0],
                lineWidth: 1,
                radius: 1,
                data: data1,
                visible: true,
                shadow: false,
                stickyTracking: false,
            }, {
                name: smallTitle[1],
                lineWidth: 1,
                radius: 1,
                data: data2,
                visible: false,
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: smallTitle[2],
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                  ,
                {
                    name: smallTitle[3],
                    lineWidth: 1,
                    radius: 1,
                    data: data4,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[4],
                    lineWidth: 1,
                    radius: 1,
                    data: data5,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                  ,
                {
                    name: smallTitle[5],
                    lineWidth: 1,
                    radius: 1,
                    data: data6,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                } ,
                {
                    name: smallTitle[6],
                    lineWidth: 1,
                    radius: 1,
                    data: data7,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[7],
                    lineWidth: 1,
                    radius: 1,
                    data: data8,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[8],
                    lineWidth: 1,
                    radius: 1,
                    data: data9,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[9],
                    lineWidth: 1,
                    radius: 1,
                    data: data10,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
            ],
                legend : {
                    //layout: 'vertical',
                    //borderWidth: 0.5,
                    //itemHiddenStyle: {color: 'red'}
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
    }
    if(flag==16)
    {
        options={
            chart: {

                animation: Highcharts.svg,
                renderTo: divId,
                backgroundColor: '#FCFCFC',//黑色：#272727
                borderColor: '#743A3A',
                borderWidth: 1,
                events: {

                }
            },
            title: {
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold', //刻度字体加粗
                    color: '#000000'
                },
                text: bigTitle  //大标题 如DP Offline 国内
            },
            subtitle: {
                text: ''       //小标题省略
            },
            credits: {
                text: '',
                href: 'http://www.ctrip.com/'
            },
             plotOptions : {
            line: {
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 2.7
                    }
                },
                marker: {
                    enabled: true,
                    radius: 2.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step:4,
                    staggerLines: 1 ,
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

                crosshairs: [{            // 设置准星线样式
                            width:2,
                            color: '#408080'
                        }, {
                            width: 1,
                            color: "#006cee",
                            dashStyle: 'longdashdot',
                            zIndex: 100
                            }],
                shadow: false,
                borderColor: '#663333',
                backgroundColor: '#996666',
            },
            series: [{
                name:smallTitle[0],
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0033',
                visible: true,
                shadow: false,
                stickyTracking: false,
            }, {
                tooltip: { valueSuffix: '' },
                name: smallTitle[1],
                lineWidth: 1,
                radius: 1,
                data: data2,
                color: '#663366',
                visible: false,
                shadow: true,
                stickyTracking: false,
            },
                {
                    name: smallTitle[2],
                    lineWidth: 1,
                    radius: 1,
                    data: data3,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                  ,
                {
                    name: smallTitle[3],
                    lineWidth: 1,
                    radius: 1,
                    data: data4,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[4],
                    lineWidth: 1,
                    radius: 1,
                    data: data5,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                  ,
                {
                    name: smallTitle[5],
                    lineWidth: 1,
                    radius: 1,
                    data: data6,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                } ,
                {
                    name: smallTitle[6],
                    lineWidth: 1,
                    radius: 1,
                    data: data7,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[7],
                    lineWidth: 1,
                    radius: 1,
                    data: data8,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[8],
                    lineWidth: 1,
                    radius: 1,
                    data: data9,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name:smallTitle[9],
                    lineWidth: 1,
                    radius: 1,
                    data: data10,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[10],
                    lineWidth: 1,
                    radius: 1,
                    data: data11,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[11],
                    lineWidth: 1,
                    radius: 1,
                    data: data12,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[12],
                    lineWidth: 1,
                    radius: 1,
                    data: data13,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[13],
                    lineWidth: 1,
                    radius: 1,
                    data: data14,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[14],
                    lineWidth: 1,
                    radius: 1,
                    data: data15,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
                 ,
                {
                    name: smallTitle[15],
                    lineWidth: 1,
                    radius: 1,
                    data: data16,
                    visible: false,
                    shadow: true,
                    stickyTracking: false,
                }
            ],
                legend : {
                    //layout: 'vertical',
                    //borderWidth: 0.5,
                    //itemHiddenStyle: {color: 'red'}
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
    }
     return options;
}

function getDataArray(retobj,days, k,flag)
{
var resultThree = [];      //k=15 酒店全部  k=16 x资源; K=17单选项  ;k=18  当地玩乐
    //返回4个数组
    var arr1=[];var arr2=[];var arr3=[];var arr4=[];var arr5=[];var arr6=[];var arr7=[];var arr8=[];
    var arr9=[];var arr10=[];var arr11=[];var arr12=[];var arr13=[];var arr14=[];var arr15=[];var arr16=[];
     for (var j = 0; j < days; j++)
     {
         if (k == 1)//详情页 --平均值
         {
             //  smallTitle[0]='产品预订';smallTitle[1]='产品描述信息';smallTitle[2]='产品详情页页面';smallTitle[3]='产品介绍信息';smallTitle[4]='产品地图';
              //  smallTitle[5]='机票重新选择';smallTitle[6]='资源反查';smallTitle[7]='单选项资源重新选择';smallTitle[8]='日历框信息';smallTitle[9]='酒店重现选择';
             arr1[j] = retobj.value[4+34 * j][5] ;//产品预订
             arr2[j] = retobj.value[2+34 * j][5] ;//产品描述信息
             arr3[j] = retobj.value[3+34 * j][5] ;//产品详情页页面
             arr4[j] = retobj.value[0+34 * j][5] ;//产品介绍信息
             arr5[j] = retobj.value[1+34 * j][5] ;//产品地图
             arr6[j] = retobj.value[7+34 * j][5] ;//机票重新选择
             arr7[j] = retobj.value[8+34 * j][5] ;//资源反查
             arr8[j] = retobj.value[5+34 * j][5] ;//单选项资源重新选择
             arr9[j] = retobj.value[6+34 * j][5] ;//日历框信息
             arr10[j] = retobj.value[9+34 * j][5] ;//酒店重现选择

         }
         else if(k==2)//详情页--最大值
         {

             arr1[j] = retobj.value[4+34 * j][3] ;//产品预订
             arr2[j] = retobj.value[2+34 * j][3] ;//产品描述信息
             arr3[j] = retobj.value[3+34 * j][3] ;//产品详情页页面
             arr4[j] = retobj.value[0+34 * j][3] ;//产品介绍信息
             arr5[j] = retobj.value[1+34 * j][3] ;//产品地图
             arr6[j] = retobj.value[7+34 * j][3] ;//机票重新选择
             arr7[j] = retobj.value[8+34 * j][3] ;//资源反查
             arr8[j] = retobj.value[5+34 * j][3] ;//单选项资源重新选择
             arr9[j] = retobj.value[6+34 * j][3] ;//日历框信息
             arr10[j] = retobj.value[9+34 * j][3] ;//酒店重现选择

         }
         else if(k==3)//详情页--最大值
         {

             arr1[j] = retobj.value[4+34 * j][4] ;//产品预订
             arr2[j] = retobj.value[2+34 * j][4] ;//产品描述信息
             arr3[j] = retobj.value[3+34 * j][4] ;//产品详情页页面
             arr4[j] = retobj.value[0+34 * j][4] ;//产品介绍信息
             arr5[j] = retobj.value[1+34 * j][4] ;//产品地图
             arr6[j] = retobj.value[7+34 * j][4] ;//机票重新选择
             arr7[j] = retobj.value[8+34 * j][4] ;//资源反查
             arr8[j] = retobj.value[5+34 * j][4] ;//单选项资源重新选择
             arr9[j] = retobj.value[6+34 * j][4] ;//日历框信息
             arr10[j] = retobj.value[9+34 * j][4] ;//酒店重现选择

         }
          else if(k==4)//可选项页--平均值
         {

             arr1[j] = retobj.value[10+34 * j][5] ;//头部资源框价格框加载
             arr2[j] = retobj.value[12+34 * j][5] ;//预订
             arr3[j] = retobj.value[11+34 * j][5] ;//资源反查

         }
         else if(k==5)//可选项页--最大值
         {

             arr1[j] = retobj.value[10+34 * j][3] ;//头部资源框价格框加载
             arr2[j] = retobj.value[12+34 * j][3] ;//预订
             arr3[j] = retobj.value[11+34 * j][3] ;//资源反查

         }
         else if(k==6)//可选项页--最小值
         {

             arr1[j] = retobj.value[10+34 * j][4] ;//头部资源框价格框加载
             arr2[j] = retobj.value[12+34 * j][4] ;//预订
             arr3[j] = retobj.value[11+34 * j][4] ;//资源反查

         }
          else if(k==7)//填写页--平均值
         {

             arr1[j] = retobj.value[26+34 * j][5] ;//融合页面资源框加载
             arr2[j] = retobj.value[18+34 * j][5] ;//获取优惠信息
             arr3[j] = retobj.value[28+34 * j][5] ;//验证优惠
             arr4[j] = retobj.value[24+34 * j][5] ;//融合页面获取优惠
             arr5[j] = retobj.value[20+34 * j][5] ;//融合页面优惠验证
             arr6[j] = retobj.value[15+34 * j][5] ;//发票配送
             arr7[j] = retobj.value[14+34 * j][5] ;//保存配送地址
             arr8[j] = retobj.value[21+34 * j][5] ;//融合页面发票信息
             arr9[j] = retobj.value[22+34 * j][5] ;//融合页面可订检查
             arr10[j] = retobj.value[23+34 * j][5] ;//融合页面旅客模板
             arr11[j] = retobj.value[19+34 * j][5] ;//融合页面page
             arr12[j] = retobj.value[25+34 * j][5] ;//融合页面订单提交
             arr13[j] = retobj.value[27+34 * j][5] ;//订单重复检查
             arr14[j] = retobj.value[17+34 * j][5] ;//旅客信息获取
             arr15[j] = retobj.value[13+34 * j][5] ;//page
             arr16[j] = retobj.value[16+34 * j][5] ;//提交订单

         }
          else if(k==8)//填写页--最大值
         {

             arr1[j] = retobj.value[26+34 * j][3] ;//融合页面资源框加载
             arr2[j] = retobj.value[18+34 * j][3] ;//获取优惠信息
             arr3[j] = retobj.value[28+34 * j][3] ;//验证优惠
             arr4[j] = retobj.value[24+34 * j][3] ;//融合页面获取优惠
             arr5[j] = retobj.value[20+34 * j][3] ;//融合页面优惠验证
             arr6[j] = retobj.value[15+34 * j][3] ;//发票配送
             arr7[j] = retobj.value[14+34 * j][3] ;//保存配送地址
             arr8[j] = retobj.value[21+34 * j][3] ;//融合页面发票信息
             arr9[j] = retobj.value[22+34 * j][3] ;//融合页面可订检查
             arr10[j] = retobj.value[23+34 * j][3] ;//融合页面旅客模板
             arr11[j] = retobj.value[19+34 * j][3] ;//融合页面page
             arr12[j] = retobj.value[25+34 * j][3] ;//融合页面订单提交
             arr13[j] = retobj.value[27+34 * j][3] ;//订单重复检查
             arr14[j] = retobj.value[17+34 * j][3] ;//旅客信息获取
             arr15[j] = retobj.value[13+34 * j][3] ;//page
             arr16[j] = retobj.value[16+34 * j][3] ;//提交订单

         }
          else if(k==9)//填写页--最小值
         {

             arr1[j] = retobj.value[26+34 * j][4] ;//融合页面资源框加载
             arr2[j] = retobj.value[18+34 * j][4] ;//获取优惠信息
             arr3[j] = retobj.value[28+34 * j][4] ;//验证优惠
             arr4[j] = retobj.value[24+34 * j][4] ;//融合页面获取优惠
             arr5[j] = retobj.value[20+34 * j][4] ;//融合页面优惠验证
             arr6[j] = retobj.value[15+34 * j][4] ;//发票配送
             arr7[j] = retobj.value[14+34 * j][4] ;//保存配送地址
             arr8[j] = retobj.value[21+34 * j][4] ;//融合页面发票信息
             arr9[j] = retobj.value[22+34 * j][4] ;//融合页面可订检查
             arr10[j] = retobj.value[23+34 * j][4] ;//融合页面旅客模板
             arr11[j] = retobj.value[19+34 * j][4] ;//融合页面page
             arr12[j] = retobj.value[25+34 * j][4] ;//融合页面订单提交
             arr13[j] = retobj.value[27+34 * j][4] ;//订单重复检查
             arr14[j] = retobj.value[17+34 * j][4] ;//旅客信息获取
             arr15[j] = retobj.value[13+34 * j][4] ;//page
             arr16[j] = retobj.value[16+34 * j][4] ;//提交订单

         }
          else if(k==10)//完成页--平均值
         {

             arr1[j] = retobj.value[32+34 * j][5] ;//检查订单状态
             arr2[j] = retobj.value[31+34 * j][5] ;//推荐信息
             arr3[j] = retobj.value[29+34 * j][5] ;//page
             arr4[j] = retobj.value[30+34 * j][5] ;//加载订单状态
             arr5[j] = retobj.value[33+34 * j][5] ;//融合成功页


         }
          else if(k==11)//完成页--最大值
         {

             arr1[j] = retobj.value[32+34 * j][3] ;//检查订单状态
             arr2[j] = retobj.value[31+34 * j][3] ;//推荐信息
             arr3[j] = retobj.value[29+34 * j][3] ;//page
             arr4[j] = retobj.value[30+34 * j][3] ;//加载订单状态
             arr5[j] = retobj.value[33+34 * j][3] ;//融合成功页

         }
          else if(k==12)//完成页--最小值
         {

             arr1[j] = retobj.value[32+34 * j][4] ;//检查订单状态
             arr2[j] = retobj.value[31+34 * j][4] ;//推荐信息
             arr3[j] = retobj.value[29+34 * j][4] ;//page
             arr4[j] = retobj.value[30+34 * j][4] ;//加载订单状态
             arr5[j] = retobj.value[33+34 * j][4] ;//融合成功页

         }
          else if(k==13)//度假下单接口
         {

             arr1[j] = retobj.value[2+3 * j][5] ;//平均
             arr2[j] = retobj.value[2+3 * j][3] ;//最大
             arr3[j] = retobj.value[2+3 * j][4] ;//最小

         }
          else if(k==14)//度假获取订单详情接口
         {

             arr1[j] = retobj.value[0+3 * j][5] ;//平均
             arr2[j] = retobj.value[0+3 * j][3] ;//最大
             arr3[j] = retobj.value[0+3 * j][4] ;//最小

         }
          else if(k==15)//度假订单订单管理接口
         {

             arr1[j] = retobj.value[1+3 * j][5] ;//平均
             arr2[j] = retobj.value[1+3 * j][3] ;//最大
             arr3[j] = retobj.value[1+3 * j][4] ;//最小

         }

     }
 if(flag==1)
    {
        resultThree[0]=arr1;
    }
    else if(flag==2)
    {
         resultThree[0]=arr1;
        resultThree[1]=arr2;
    }
    else if(flag==3){
         resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;

    }
    else if(flag==4)
    {

        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
    }
    else if(flag==5)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
    }

     else if(flag==10)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
        resultThree[5]=arr6;
        resultThree[6]=arr7;
        resultThree[7]=arr8;
        resultThree[8]=arr9;
        resultThree[9]=arr10;
    }
     else if(flag==16)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
        resultThree[5]=arr6;
        resultThree[6]=arr7;
        resultThree[7]=arr8;
        resultThree[8]=arr9;
        resultThree[9]=arr10;
        resultThree[10]=arr11;
        resultThree[11]=arr12;
        resultThree[12]=arr13;
        resultThree[13]=arr14;
        resultThree[14]=arr15;
        resultThree[15]=arr16;
    }
return resultThree;
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