/**
 * Created by yangyz on 2016/5/19.
 */

var handler_chart_width;
function handelDetail()
{
    var startDate=$("#startdate1").val();
    var endDate=$("#enddate1").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#orderContainer")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='avgDetail' style='height:300px'></div><div id='maxDetail' style='height:300px;margin-top:10px'></div><div id='minDetail' style='height:300px;margin-top:10px'></div>")
    handler_chart_width = $("#avgDetail").width();
     if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
         var url = '/EagleEye/ajax/pagehandler/' + startDate + '/' + endDate;
         var days = getDays(startDate, endDate) + 1;
         var bigTitle = [];
          bigTitle[0]='详情页-平均值';
        bigTitle[1]='详情页-最大值';
        bigTitle[2]='详情页-最小值';
         var smallTitle = new Array();
         smallTitle[0]='产品预订';smallTitle[1]='产品描述信息';smallTitle[2]='产品详情页页面';smallTitle[3]='产品介绍信息';smallTitle[4]='产品地图';
         smallTitle[5]='机票重新选择';smallTitle[6]='资源反查';smallTitle[7]='单选项资源重新选择';smallTitle[8]='日历框信息';smallTitle[9]='酒店重现选择';
         var div = new Array();
         div[0] = 'avgDetail';
         div[1] = 'maxDetail';
         div[2] = 'minDetail';
         var orderSquence = new Array();
         orderSquence[0] = 1;
         orderSquence[1] = 2;
         orderSquence[2] = 3;
         handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray,3, orderSquence, days, 34,0)
     }

}

function canchosepage()
{
    var startDate=$("#startdate2").val();
    var endDate=$("#enddate2").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#handlerchoseH")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='avgcanchose' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxcanchose' style='height:300px;margin-top:10px;width:"+handler_chart_width+"px;'></div><div id='mincanchose' style='height:300px;margin-top:10px;width:"+handler_chart_width+"px;'></div>")
     if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
         var url = '/EagleEye/ajax/pagehandler/' + startDate + '/' + endDate;
         var days = getDays(startDate, endDate) + 1;
         var bigTitle = [];
          bigTitle[0]='可选项页-平均值';
          bigTitle[1]='可选项页-最大值';
          bigTitle[2]='可选项页-最小值';
         var smallTitle = new Array();
          smallTitle[0]='头部资源框价格框加载';smallTitle[1]='预订';smallTitle[2]='资源反查';
         var div = new Array();
         div[0] = 'avgcanchose';
         div[1] = 'maxcanchose';
         div[2] = 'mincanchose';
         var orderSquence = new Array();
         orderSquence[0] = 4;
         orderSquence[1] = 5;
         orderSquence[2] = 6;
         handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray,3, orderSquence, days, 34,0)
     }

}
function fillpage()//填写页
{
     var startDate=$("#startdate3").val();
    var endDate=$("#enddate3").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#handlerfillH")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='avgfill' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxfill' style='height:300px;margin-top:10px;width:"+handler_chart_width+"px;'></div><div id='minfill' style='height:300px;margin-top:10px;width:"+handler_chart_width+"px;'></div>")
   if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
         var url = '/EagleEye/ajax/pagehandler/' + startDate + '/' + endDate;
         var days = getDays(startDate, endDate) + 1;
         var bigTitle = [];
          bigTitle[0]='填写页-平均值';
          bigTitle[1]='填写页-最大值';
          bigTitle[2]='填写页-最小值';
          var smallTitleFill = new Array();
            smallTitleFill[0]='融合页面资源框加载';smallTitleFill[1]='获取优惠信息';smallTitleFill[2]='验证优惠';smallTitleFill[3]='融合页面获取优惠';smallTitleFill[4]='融合页面优惠验证';
            smallTitleFill[5]='发票配送';smallTitleFill[6]='保存配送地址';smallTitleFill[7]='融合页面发票信息';smallTitleFill[8]='融合页面可订检查';smallTitleFill[9]='融合页面旅客模板';
            smallTitleFill[10]='融合页面page';smallTitleFill[11]='融合页面订单提交';smallTitleFill[12]='订单重复检查';smallTitleFill[13]='旅客信息获取';smallTitleFill[14]='page';smallTitleFill[15]='提交订单';
         var div = new Array();
         div[0] = 'avgfill';
         div[1] = 'maxfill';
         div[2] = 'minfill';
         var orderSquence = new Array();
         orderSquence[0] = 7;
         orderSquence[1] = 8;
         orderSquence[2] = 9;
         handlerCurve(url, div, bigTitle, smallTitleFill, choseTimeArray,3, orderSquence, days, 34,0)
     }
}

function endpage()
{
     var startDate=$("#startdate4").val();
    var endDate=$("#enddate4").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#handlerendH")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='avgend' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxend' style='height:300px;margin-top:10px;width:"+handler_chart_width+"px;'></div><div id='minend' style='height:300px;margin-top:10px;width:"+handler_chart_width+"px;'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
         var url = '/EagleEye/ajax/pagehandler/' + startDate + '/' + endDate;
         var days = getDays(startDate, endDate) + 1;
         var bigTitle = [];
          bigTitle[0]='完成页-平均值';
        bigTitle[1]='完成页-最大值';
        bigTitle[2]='完成页-最小值';
          var smallTitle = new Array();
           smallTitle[0]='检查订单状态';smallTitle[1]='推荐信息';smallTitle[2]='page';smallTitle[3]='加载订单状态';smallTitle[4]='融合成功页'; var div = new Array();
         var div = new Array();
        div[0] = 'avgend';
         div[1] = 'maxend';
         div[2] = 'minend';
         var orderSquence = new Array();
         orderSquence[0] = 10;
         orderSquence[1] = 11;
         orderSquence[2] = 12;
         handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray,3, orderSquence, days, 34,0)
     }

}
//自由行-SDP 详情页
function diysdpdetail()
{

    var startDate=$("#startdate5").val();
    var endDate=$("#enddate5").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#diysdpdetailH")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='avgDiySDPDetail' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxDiySDPDetail' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div><div id='minDiySDPDetail' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
         var url = '/EagleEye/ajax/tourhandler/' + startDate + '/' + endDate;
         var days = getDays(startDate, endDate) + 1;
         var bigTitle = [];
         bigTitle[0]='SDP详情页-平均值';
        bigTitle[1]='SDP详情页-最大值';
        bigTitle[2]='SDP详情页-最小值';
          var smallTitle = new Array();
         smallTitle[0]='主页';smallTitle[1]='日历框';smallTitle[2]='机酒搜索';smallTitle[3]='X资源搜索';smallTitle[4]='“下一步”更新资源';
        smallTitle[5]='“下一步”可订检查(SDP/DP)';smallTitle[6]='重选机票(SDP/DP)';smallTitle[7]='重选酒店(SDP/DP)';
         var div = new Array();
        div[0] = 'avgDiySDPDetail';
         div[1] = 'maxDiySDPDetail';
         div[2] = 'minDiySDPDetail';
         var orderSquence = new Array();
         orderSquence[0] = 16;
         orderSquence[1] = 17;
         orderSquence[2] = 18;
         handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray,3, orderSquence, days, 27,0)
     }
}

function diydpdetail() //自由行DP详情页
{


     var startDate=$("#startdate6").val();
    var endDate=$("#enddate6").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#diydpdetailH")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='avgDiyDPDetail' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxDiyDPDetail' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div><div id='minDiyDPDetail' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/tourhandler/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0] = 'DP详情页-平均值';
        bigTitle[1] = 'DP详情页-最大值';
        bigTitle[2] = 'DP详情页-最小值';
        var smallTitle = new Array();
        smallTitle[0] = '“下一步”更新资源';
        smallTitle[1] = '“下一步”可订检查(SDP/DP)';
        smallTitle[2] = '重新机票(SDP/DP)';
        smallTitle[3] = '重新酒店(SDP/DP)';
        var div = new Array();
        div[0] = 'avgDiyDPDetail';
        div[1] = 'maxDiyDPDetail';
        div[2] = 'minDiyDPDetail';
        var orderSquence = new Array();
        orderSquence[0] = 19;
        orderSquence[1] = 20;
        orderSquence[2] = 21;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 3, orderSquence, days, 27,0)
    }
}
function  diydpfill()//DP填写页
{
    var startDate=$("#startdate7").val();
    var endDate=$("#enddate7").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#diydpfillH")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='avgDiyDPFill' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxDiyDPFill' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div><div id='minDiyDPFill' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/tourhandler/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0] = 'DP填写页-平均值';
        bigTitle[1] = 'DP填写页-最大值';
        bigTitle[2] = 'DP填写页-最小值';
        var smallTitle = new Array();
        smallTitle[0] = '填写页';
        smallTitle[1] = '中文姓名转英文姓名';
        smallTitle[2] = '选常旅时触发';
        smallTitle[3] = '填写页点下一步';
        smallTitle[4] = '获取城市代码';
        var div = new Array();
        div[0] = 'avgDiyDPFill';
        div[1] = 'maxDiyDPFill';
        div[2] = 'minDiyDPFill';
        var orderSquence = new Array();
        orderSquence[0] = 22;
        orderSquence[1] = 23;
        orderSquence[2] = 24;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 3, orderSquence, days, 27,0)
    }

}
function  diydpend()// DP完成页
{
    var startDate=$("#startdate8").val();
    var endDate=$("#enddate8").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#diydpendH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='avgDiyDPEnd' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxDiyDPEnd' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div><div id='minDiyDPEnd' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/tourhandler/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0]='DP完成页-平均值';
        bigTitle[1]='DP完成页-最大值';
        bigTitle[2]='DP完成页-最小值';
        var smallTitle = new Array();
         smallTitle[0]='完成页';
        var div = new Array();
        div[0] = 'avgDiyDPEnd';
        div[1] = 'maxDiyDPEnd';
        div[2] = 'minDiyDPEnd';
        var orderSquence = new Array();
        orderSquence[0] = 25;
        orderSquence[1] = 26;
        orderSquence[2] = 27;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 3, orderSquence, days, 27,0)
    }

}
function  insurdeatil()//保险详情页
{


    var startDate=$("#startdate9").val();
    var endDate=$("#enddate9").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#insurdeatilH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='avgInsurDetail' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxInsurDetail' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div><div id='minInsurDetail' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/tourhandler/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0]='保险详情页-平均值';
        bigTitle[1]='保险详情页-最大值';
        bigTitle[2]='保险详情页-最小值';
        var smallTitle = new Array();
        smallTitle[0]='产品详情页';smallTitle[1]='产品询价详情页';smallTitle[2]='产品搜索页';
        var div = new Array();
        div[0] = 'avgInsurDetail';
        div[1] = 'maxInsurDetail';
        div[2] = 'minInsurDetail';
        var orderSquence = new Array();
        orderSquence[0] = 28;
        orderSquence[1] = 29;
        orderSquence[2] = 30;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 3, orderSquence, days, 27,0)
    }


}
function  insurfill()//保险填写页
{
    var startDate=$("#startdate10").val();
    var endDate=$("#enddate10").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#insurfillH")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='avgInsurFill' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxInsurFill' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div><div id='minInsurFill' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/tourhandler/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
       bigTitle[0]='保险填写页-平均值';
        bigTitle[1]='保险填写页-最大值';
        bigTitle[2]='保险填写页-最小值';
        var smallTitle = new Array();
         smallTitle[0]='获取国家';smallTitle[1]='获取区域目的地';smallTitle[2]='询价';smallTitle[3]='订单提交';smallTitle[4]='去支付';
        var div = new Array();
        div[0] = 'avgInsurFill';
        div[1] = 'maxInsurFill';
        div[2] = 'minInsurFill';
        var orderSquence = new Array();
        orderSquence[0] = 31;
        orderSquence[1] = 32;
        orderSquence[2] = 33;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 3, orderSquence, days, 27,0)
    }
}
function  insurend()//保险完成页
{
    var startDate=$("#startdate11").val();
    var endDate=$("#enddate11").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#insurendH")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='avgInsurEnd' style='height:300px;width:"+handler_chart_width+"px;'></div><div id='maxInsurEnd' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div><div id='minInsurEnd' style='height:300px;width:"+handler_chart_width+"px;;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/tourhandler/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0]='保险完成页-平均值';
        bigTitle[1]='保险完成页-最大值';
        bigTitle[2]='保险完成页-最小值';
        var smallTitle = new Array();
         smallTitle[0]='Page';
        var div = new Array();
        div[0] = 'avgInsurEnd';
        div[1] = 'maxInsurEnd';
        div[2] = 'minInsurEnd';
        var orderSquence = new Array();
        orderSquence[0] = 34;
        orderSquence[1] = 35;
        orderSquence[2] = 36;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 3, orderSquence, days, 27,0)
    }
}

function vacationInterface()
{
    var startDate=$("#startdate1").val();
    var endDate=$("#enddate1").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#orderContainer")
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='Create' style='height:300px'></div><div id='getDetail' style='height:300px;margin-top:10px'></div><div id='manageList' style='height:300px;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/soaperform/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0]='tour.touromdservice.v1.touromdservice.ordercreate（<3s）';
        bigTitle[1]='tour.orderservice.v1.tourorderservice.orderdetailget';
        bigTitle[2]='tour.orderservice.v1.tourorderservice.tourordermanagelist';
        var smallTitle = new Array();
         smallTitle[0]='平均值';smallTitle[1]='最大值';smallTitle[2]='最小值';
        var div = new Array();
        div[0] = 'Create';
        div[1] = 'getDetail';
        div[2] = 'manageList';
        var orderSquence = new Array();
        orderSquence[0] = 13;
        orderSquence[1] = 14;
        orderSquence[2] = 15;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 3, orderSquence, days, 3,0)
    }

}
function plaseWait()//获取订单详情接口
{

}



function handlerCurve(url,div,bigTitle,smallTitle,timeArray,pageid,orderSquence,days,jsonCnt,flag) //pageid=3代表有3个图   k=2代表两根线
{
    if (pageid == 1) {
       var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
         var mychart1 = new Highcharts.Chart(options1);
         mychart1.showLoading('Loading data from server...');

        $.getJSON(url, function (data) {
             var reObj = data;
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)

                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                }

            }


            mychart1.hideLoading();

        })
    }
    else if(pageid == 2)
    {
        var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
        var options2=getHandlerOpition(div[1],bigTitle[1],timeArray,smallTitle,days,flag)
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        mychart1.showLoading('Loading data from server...');
         mychart2.showLoading('Loading data from server...');
        $.getJSON(url, function (data) {
             var reObj = data;
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days-1, orderSquence[1],0,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days, orderSquence[1],1,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                }

            }


            mychart1.hideLoading();
            mychart2.hideLoading();
        })
    }
    else if(pageid == 3)
    {
         var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
         var options2=getHandlerOpition(div[1],bigTitle[1],timeArray,smallTitle,days,flag)
         var options3=getHandlerOpition(div[2],bigTitle[2],timeArray,smallTitle,days,flag)
         var mychart1 = new Highcharts.Chart(options1);
         var mychart2 = new Highcharts.Chart(options2);
         var mychart3 = new Highcharts.Chart(options3);
         mychart1.showLoading('Loading data from server...');
         mychart2.showLoading('Loading data from server...');
         mychart3.showLoading('Loading data from server...');
        $.getJSON(url, function (data) {
             var reObj = data;
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days-1, orderSquence[1],0,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days-1, orderSquence[2],0,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days, orderSquence[1],1,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days, orderSquence[2],1,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                }

            }


            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();

        })
    }
    else if(pageid == 4)
    {
        var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
         var options2=getHandlerOpition(div[1],bigTitle[1],timeArray,smallTitle,days,flag)
         var options3=getHandlerOpition(div[2],bigTitle[2],timeArray,smallTitle,days,flag)
        var options4=getHandlerOpition(div[3],bigTitle[3],timeArray,smallTitle,days,flag)
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
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days-1, orderSquence[1],0,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days-1, orderSquence[2],0,smallTitle.length)
                var dataArray4 = gethandlerDataArray(reObj,days-1, orderSquence[3],0,smallTitle.length)

                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days, orderSquence[1],1,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days, orderSquence[2],1,smallTitle.length)
                 var dataArray4 = gethandlerDataArray(reObj,days, orderSquence[3],1,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                }

            }


            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();

        })
    }
    else if(pageid == 5)
    {

         var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
         var options2=getHandlerOpition(div[1],bigTitle[1],timeArray,smallTitle,days,flag)
         var options3=getHandlerOpition(div[2],bigTitle[2],timeArray,smallTitle,days,flag)
        var options4=getHandlerOpition(div[3],bigTitle[3],timeArray,smallTitle,days,flag)
        var options5=getHandlerOpition(div[4],bigTitle[4],timeArray,smallTitle,days,flag)
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
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days-1, orderSquence[1],0,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days-1, orderSquence[2],0,smallTitle.length)
                var dataArray4 = gethandlerDataArray(reObj,days-1, orderSquence[3],0,smallTitle.length)
                var dataArray5 = gethandlerDataArray(reObj,days-1, orderSquence[4],0,smallTitle.length)

                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days, orderSquence[1],1,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days, orderSquence[2],1,smallTitle.length)
                 var dataArray4 = gethandlerDataArray(reObj,days, orderSquence[3],1,smallTitle.length)
                 var dataArray5 = gethandlerDataArray(reObj,days, orderSquence[4],1,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                }

            }


            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();

        })
    }
    else if(pageid == 6)
    {
         var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
         var options2=getHandlerOpition(div[1],bigTitle[1],timeArray,smallTitle,days,flag)
         var options3=getHandlerOpition(div[2],bigTitle[2],timeArray,smallTitle,days,flag)
        var options4=getHandlerOpition(div[3],bigTitle[3],timeArray,smallTitle,days,flag)
        var options5=getHandlerOpition(div[4],bigTitle[4],timeArray,smallTitle,days,flag)
        var options6=getHandlerOpition(div[5],bigTitle[5],timeArray,smallTitle,days,flag)
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
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days-1, orderSquence[1],0,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days-1, orderSquence[2],0,smallTitle.length)
                var dataArray4 = gethandlerDataArray(reObj,days-1, orderSquence[3],0,smallTitle.length)
                var dataArray5 = gethandlerDataArray(reObj,days-1, orderSquence[4],0,smallTitle.length)
                var dataArray6 = gethandlerDataArray(reObj,days-1, orderSquence[5],0,smallTitle.length)


                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                    mychart6.series[i].setData(dataArray6[i]);

                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days, orderSquence[1],1,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days, orderSquence[2],1,smallTitle.length)
                 var dataArray4 = gethandlerDataArray(reObj,days, orderSquence[3],1,smallTitle.length)
                 var dataArray5 = gethandlerDataArray(reObj,days, orderSquence[4],1,smallTitle.length)
                 var dataArray6 = gethandlerDataArray(reObj,days, orderSquence[5],1,smallTitle.length)

                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                    mychart6.series[i].setData(dataArray6[i]);
                }

            }


            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();
            mychart6.hideLoading();

        })
    }
    else if(pageid == 7)
    {
          var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
         var options2=getHandlerOpition(div[1],bigTitle[1],timeArray,smallTitle,days,flag)
         var options3=getHandlerOpition(div[2],bigTitle[2],timeArray,smallTitle,days,flag)
        var options4=getHandlerOpition(div[3],bigTitle[3],timeArray,smallTitle,days,flag)
        var options5=getHandlerOpition(div[4],bigTitle[4],timeArray,smallTitle,days,flag)
        var options6=getHandlerOpition(div[5],bigTitle[5],timeArray,smallTitle,days,flag)
        var options7=getHandlerOpition(div[6],bigTitle[6],timeArray,smallTitle,days,flag)
         var mychart1 = new Highcharts.Chart(options1);
         var mychart2 = new Highcharts.Chart(options2);
         var mychart3 = new Highcharts.Chart(options3);
        var mychart4 = new Highcharts.Chart(options4);
        var mychart5 = new Highcharts.Chart(options5);
        var mychart6 = new Highcharts.Chart(options6);
        var mychart7 = new Highcharts.Chart(options7);

         mychart1.showLoading('Loading data from server...');
         mychart2.showLoading('Loading data from server...');
         mychart3.showLoading('Loading data from server...');
        mychart4.showLoading('Loading data from server...');
        mychart5.showLoading('Loading data from server...');
        mychart6.showLoading('Loading data from server...');
        mychart7.showLoading('Loading data from server...');

        $.getJSON(url, function (data) {
             var reObj = data;
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days-1, orderSquence[1],0,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days-1, orderSquence[2],0,smallTitle.length)
                var dataArray4 = gethandlerDataArray(reObj,days-1, orderSquence[3],0,smallTitle.length)
                var dataArray5 = gethandlerDataArray(reObj,days-1, orderSquence[4],0,smallTitle.length)
                var dataArray6 = gethandlerDataArray(reObj,days-1, orderSquence[5],0,smallTitle.length)
                var dataArray7 = gethandlerDataArray(reObj,days-1, orderSquence[6],0,smallTitle.length)

                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                    mychart6.series[i].setData(dataArray6[i]);
                    mychart7.series[i].setData(dataArray7[i]);
                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days, orderSquence[1],1,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days, orderSquence[2],1,smallTitle.length)
                 var dataArray4 = gethandlerDataArray(reObj,days, orderSquence[3],1,smallTitle.length)
                 var dataArray5 = gethandlerDataArray(reObj,days, orderSquence[4],1,smallTitle.length)
                 var dataArray6 = gethandlerDataArray(reObj,days, orderSquence[5],1,smallTitle.length)
                 var dataArray7 = gethandlerDataArray(reObj,days, orderSquence[6],1,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                    mychart6.series[i].setData(dataArray6[i]);
                    mychart7.series[i].setData(dataArray7[i]);
                }

            }


            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();
            mychart6.hideLoading();
            mychart7.hideLoading();

        })
    }

    else if(pageid == 8)
    {
          var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
         var options2=getHandlerOpition(div[1],bigTitle[1],timeArray,smallTitle,days,flag)
         var options3=getHandlerOpition(div[2],bigTitle[2],timeArray,smallTitle,days,flag)
        var options4=getHandlerOpition(div[3],bigTitle[3],timeArray,smallTitle,days,flag)
        var options5=getHandlerOpition(div[4],bigTitle[4],timeArray,smallTitle,days,flag)
        var options6=getHandlerOpition(div[5],bigTitle[5],timeArray,smallTitle,days,flag)
        var options7=getHandlerOpition(div[6],bigTitle[6],timeArray,smallTitle,days,flag)
        var options8=getHandlerOpition(div[7],bigTitle[7],timeArray,smallTitle,days,flag)
         var mychart1 = new Highcharts.Chart(options1);
         var mychart2 = new Highcharts.Chart(options2);
         var mychart3 = new Highcharts.Chart(options3);
        var mychart4 = new Highcharts.Chart(options4);
        var mychart5 = new Highcharts.Chart(options5);
        var mychart6 = new Highcharts.Chart(options6);
        var mychart7 = new Highcharts.Chart(options7);
        var mychart8 = new Highcharts.Chart(options8);
         mychart1.showLoading('Loading data from server...');
         mychart2.showLoading('Loading data from server...');
         mychart3.showLoading('Loading data from server...');
        mychart4.showLoading('Loading data from server...');
        mychart5.showLoading('Loading data from server...');
        mychart6.showLoading('Loading data from server...');
        mychart7.showLoading('Loading data from server...');
        mychart8.showLoading('Loading data from server...');

        $.getJSON(url, function (data) {
             var reObj = data;
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days-1, orderSquence[1],0,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days-1, orderSquence[2],0,smallTitle.length)
                var dataArray4 = gethandlerDataArray(reObj,days-1, orderSquence[3],0,smallTitle.length)
                var dataArray5 = gethandlerDataArray(reObj,days-1, orderSquence[4],0,smallTitle.length)
                var dataArray6 = gethandlerDataArray(reObj,days-1, orderSquence[5],0,smallTitle.length)
                var dataArray7 = gethandlerDataArray(reObj,days-1, orderSquence[6],0,smallTitle.length)
                var dataArray8 = gethandlerDataArray(reObj,days-1, orderSquence[7],0,smallTitle.length)

                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                    mychart6.series[i].setData(dataArray6[i]);
                    mychart7.series[i].setData(dataArray7[i]);
                    mychart8.series[i].setData(dataArray8[i]);
                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days, orderSquence[1],1,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days, orderSquence[2],1,smallTitle.length)
                 var dataArray4 = gethandlerDataArray(reObj,days, orderSquence[3],1,smallTitle.length)
                 var dataArray5 = gethandlerDataArray(reObj,days, orderSquence[4],1,smallTitle.length)
                 var dataArray6 = gethandlerDataArray(reObj,days, orderSquence[5],1,smallTitle.length)
                 var dataArray7 = gethandlerDataArray(reObj,days, orderSquence[6],1,smallTitle.length)
                 var dataArray8 = gethandlerDataArray(reObj,days, orderSquence[7],1,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                    mychart6.series[i].setData(dataArray6[i]);
                    mychart7.series[i].setData(dataArray7[i]);
                    mychart8.series[i].setData(dataArray8[i]);
                }

            }


            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();
            mychart6.hideLoading();
            mychart7.hideLoading();
            mychart8.hideLoading();

        })
    }
    else if(pageid == 9)
    {

         var options1=getHandlerOpition(div[0],bigTitle[0],timeArray,smallTitle,days,flag)
         var options2=getHandlerOpition(div[1],bigTitle[1],timeArray,smallTitle,days,flag)
         var options3=getHandlerOpition(div[2],bigTitle[2],timeArray,smallTitle,days,flag)
        var options4=getHandlerOpition(div[3],bigTitle[3],timeArray,smallTitle,days,flag)
        var options5=getHandlerOpition(div[4],bigTitle[4],timeArray,smallTitle,days,flag)
        var options6=getHandlerOpition(div[5],bigTitle[5],timeArray,smallTitle,days,flag)
        var options7=getHandlerOpition(div[6],bigTitle[6],timeArray,smallTitle,days,flag)
        var options8=getHandlerOpition(div[7],bigTitle[7],timeArray,smallTitle,days,flag)
        var options9=getHandlerOpition(div[8],bigTitle[8],timeArray,smallTitle,days,flag)
         var mychart1 = new Highcharts.Chart(options1);
         var mychart2 = new Highcharts.Chart(options2);
         var mychart3 = new Highcharts.Chart(options3);
        var mychart4 = new Highcharts.Chart(options4);
        var mychart5 = new Highcharts.Chart(options5);
        var mychart6 = new Highcharts.Chart(options6);
        var mychart7 = new Highcharts.Chart(options7);
        var mychart8 = new Highcharts.Chart(options8);
        var mychart9 = new Highcharts.Chart(options9);
         mychart1.showLoading('Loading data from server...');
         mychart2.showLoading('Loading data from server...');
         mychart3.showLoading('Loading data from server...');
        mychart4.showLoading('Loading data from server...');
        mychart5.showLoading('Loading data from server...');
        mychart6.showLoading('Loading data from server...');
        mychart7.showLoading('Loading data from server...');
        mychart8.showLoading('Loading data from server...');
        mychart9.showLoading('Loading data from server...');

        $.getJSON(url, function (data) {
             var reObj = data;
            if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = gethandlerDataArray(reObj,days-1, orderSquence[0],0,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days-1, orderSquence[1],0,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days-1, orderSquence[2],0,smallTitle.length)
                var dataArray4 = gethandlerDataArray(reObj,days-1, orderSquence[3],0,smallTitle.length)
                var dataArray5 = gethandlerDataArray(reObj,days-1, orderSquence[4],0,smallTitle.length)
                var dataArray6 = gethandlerDataArray(reObj,days-1, orderSquence[5],0,smallTitle.length)
                var dataArray7 = gethandlerDataArray(reObj,days-1, orderSquence[6],0,smallTitle.length)
                var dataArray8 = gethandlerDataArray(reObj,days-1, orderSquence[7],0,smallTitle.length)
                var dataArray9 = gethandlerDataArray(reObj,days-1, orderSquence[8],0,smallTitle.length)

                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                    mychart6.series[i].setData(dataArray6[i]);
                    mychart7.series[i].setData(dataArray7[i]);
                    mychart8.series[i].setData(dataArray8[i]);
                    mychart9.series[i].setData(dataArray9[i]);
                }
            }
            else{
                 var dataArray1 = gethandlerDataArray(reObj,days, orderSquence[0],1,smallTitle.length)
                 var dataArray2 = gethandlerDataArray(reObj,days, orderSquence[1],1,smallTitle.length)
                 var dataArray3 = gethandlerDataArray(reObj,days, orderSquence[2],1,smallTitle.length)
                 var dataArray4 = gethandlerDataArray(reObj,days, orderSquence[3],1,smallTitle.length)
                 var dataArray5 = gethandlerDataArray(reObj,days, orderSquence[4],1,smallTitle.length)
                 var dataArray6 = gethandlerDataArray(reObj,days, orderSquence[5],1,smallTitle.length)
                 var dataArray7 = gethandlerDataArray(reObj,days, orderSquence[6],1,smallTitle.length)
                 var dataArray8 = gethandlerDataArray(reObj,days, orderSquence[7],1,smallTitle.length)
                 var dataArray9 = gethandlerDataArray(reObj,days, orderSquence[8],1,smallTitle.length)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                    mychart6.series[i].setData(dataArray6[i]);
                    mychart7.series[i].setData(dataArray7[i]);
                    mychart8.series[i].setData(dataArray8[i]);
                    mychart9.series[i].setData(dataArray9[i]);
                }

            }


            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();
            mychart6.hideLoading();
            mychart7.hideLoading();
            mychart8.hideLoading();
            mychart9.hideLoading();

        })
    }
    else if(pageid == 10)
    {
         var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle)
         var options4=options(div[3],type,bigTitle[3],timeArray,smallTitle)
         var options5=options(div[4],type,bigTitle[4],timeArray,smallTitle)
         var options6=options(div[5],type,bigTitle[5],timeArray,smallTitle)
         var options7=options(div[6],type,bigTitle[6],timeArray,smallTitle)
         var options8=options(div[7],type,bigTitle[7],timeArray,smallTitle)
         var options9=options(div[8],type,bigTitle[8],timeArray,smallTitle)
         var options10=options(div[9],type,bigTitle[9],timeArray,smallTitle)
         var mychart1 = new Highcharts.Chart(options1);
         var mychart2 = new Highcharts.Chart(options2);
         var mychart3 = new Highcharts.Chart(options3);
         var mychart4 = new Highcharts.Chart(options4);
         var mychart5 = new Highcharts.Chart(options5);
         var mychart6 = new Highcharts.Chart(options6);
         var mychart7 = new Highcharts.Chart(options7);
         var mychart8 = new Highcharts.Chart(options8);
         var mychart9 = new Highcharts.Chart(options9);
         var mychart10 = new Highcharts.Chart(options10);
         mychart1.showLoading('Loading data from server...');
         mychart2.showLoading('Loading data from server...');
         mychart3.showLoading('Loading data from server...');
         mychart4.showLoading('Loading data from server...');
         mychart5.showLoading('Loading data from server...');
         mychart6.showLoading('Loading data from server...');
         mychart7.showLoading('Loading data from server...');
         mychart8.showLoading('Loading data from server...');
         mychart9.showLoading('Loading data from server...');
         mychart10.showLoading('Loading data from server...');
        $.getJSON(url, function (data) {
             var reObj = data;
             var dataArray1 = getArray(reObj, orderSquence[0],null)
             var dataArray2 = getArray(reObj, orderSquence[1],null)
             var dataArray3 = getArray(reObj, orderSquence[2],null)
             var dataArray4 = getArray(reObj, orderSquence[3],null)
             var dataArray5 = getArray(reObj, orderSquence[4],null)
             var dataArray6 = getArray(reObj, orderSquence[5],null)
             var dataArray7 = getArray(reObj, orderSquence[6],null)
             var dataArray8 = getArray(reObj, orderSquence[7],null)
             var dataArray9 = getArray(reObj, orderSquence[8],null)
             var dataArray10 = getArray(reObj, orderSquence[9],null)
            for(var i=0;i<smallTitle.length;i++)
            {
                mychart1.series[i].setData(dataArray1[i]);
                mychart2.series[i].setData(dataArray2[i]);
                mychart3.series[i].setData(dataArray3[i]);
                mychart4.series[i].setData(dataArray4[i]);
                mychart5.series[i].setData(dataArray5[i]);
                mychart6.series[i].setData(dataArray6[i]);
                mychart7.series[i].setData(dataArray7[i]);
                mychart8.series[i].setData(dataArray8[i]);
                mychart9.series[i].setData(dataArray9[i]);
                mychart10.series[i].setData(dataArray10[i]);
            }

            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();
            mychart6.hideLoading();
            mychart7.hideLoading();
            mychart8.hideLoading();
            mychart9.hideLoading();
            mychart10.hideLoading();
        })
    }
    else if(pageid == 11)
    {
         var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle,days)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle,days)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle,days)
         var options4=options(div[3],type,bigTitle[3],timeArray,smallTitle,days)
         var options5=options(div[4],type,bigTitle[4],timeArray,smallTitle,days)
        var options6=options(div[5],type,bigTitle[5],timeArray,smallTitle,days)
        var options7=options(div[6],type,bigTitle[6],timeArray,smallTitle,days)
        var options8=options(div[7],type,bigTitle[7],timeArray,smallTitle,days)
        var options9=options(div[8],type,bigTitle[8],timeArray,smallTitle,days)
        var options10=options(div[9],type,bigTitle[9],timeArray,smallTitle,days)
        var options11=options(div[10],type,bigTitle[10],timeArray,smallTitle,days)
         var mychart1 = new Highcharts.Chart(options1);
         var mychart2 = new Highcharts.Chart(options2);
         var mychart3 = new Highcharts.Chart(options3);
         var mychart4 = new Highcharts.Chart(options4);
         var mychart5 = new Highcharts.Chart(options5);
        var mychart6 = new Highcharts.Chart(options6);
        var mychart7 = new Highcharts.Chart(options7);
        var mychart8 = new Highcharts.Chart(options8);
        var mychart9 = new Highcharts.Chart(options9);
        var mychart10 = new Highcharts.Chart(options10);
        var mychart11 = new Highcharts.Chart(options11);
         mychart1.showLoading('Loading data from server...');
         mychart2.showLoading('Loading data from server...');
         mychart3.showLoading('Loading data from server...');
         mychart4.showLoading('Loading data from server...');
         mychart5.showLoading('Loading data from server...');
        mychart6.showLoading('Loading data from server...');
        mychart7.showLoading('Loading data from server...');
        mychart8.showLoading('Loading data from server...');
        mychart9.showLoading('Loading data from server...');
        mychart10.showLoading('Loading data from server...');
        mychart11.showLoading('Loading data from server...');
        $.getJSON(url, function (data) {
             var reObj = data;
               if(reObj.value.length<days*jsonCnt)
            {
                 var dataArray1 = newGetArray(reObj, orderSquence[0],0,days-1)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],0,days-1)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],0,days-1)
                 var dataArray4 = newGetArray(reObj, orderSquence[3],0,days-1)
                 var dataArray5 = newGetArray(reObj, orderSquence[4],0,days-1)
                 var dataArray6 = newGetArray(reObj, orderSquence[5],0,days-1)
                 var dataArray7 = newGetArray(reObj, orderSquence[6],0,days-1)
                 var dataArray8 = newGetArray(reObj, orderSquence[7],0,days-1)
                 var dataArray9 = newGetArray(reObj, orderSquence[8],0,days-1)
                 var dataArray10 = newGetArray(reObj, orderSquence[9],0,days-1)
                 var dataArray11 = newGetArray(reObj, orderSquence[10],0,days-1)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                     mychart6.series[i].setData(dataArray6[i]);
                     mychart7.series[i].setData(dataArray7[i]);
                     mychart8.series[i].setData(dataArray8[i]);
                     mychart9.series[i].setData(dataArray9[i]);
                     mychart10.series[i].setData(dataArray10[i]);
                     mychart11.series[i].setData(dataArray11[i]);
                }
            }
            else{
                 var dataArray1 = newGetArray(reObj, orderSquence[0],1,days)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],1,days)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],1,days)
                 var dataArray4 = newGetArray(reObj, orderSquence[3],1,days)
                 var dataArray5 = newGetArray(reObj, orderSquence[4],1,days)
                   var dataArray6 = newGetArray(reObj, orderSquence[5],1,days)
                   var dataArray7 = newGetArray(reObj, orderSquence[6],1,days)
                   var dataArray8 = newGetArray(reObj, orderSquence[7],1,days)
                   var dataArray9 = newGetArray(reObj, orderSquence[8],1,days)
                   var dataArray10 = newGetArray(reObj, orderSquence[9],1,days)
                   var dataArray11 = newGetArray(reObj, orderSquence[10],1,days)

                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                    mychart5.series[i].setData(dataArray5[i]);
                     mychart6.series[i].setData(dataArray6[i]);
                     mychart7.series[i].setData(dataArray7[i]);
                     mychart8.series[i].setData(dataArray8[i]);
                     mychart9.series[i].setData(dataArray9[i]);
                     mychart10.series[i].setData(dataArray10[i]);
                     mychart11.series[i].setData(dataArray11[i]);
                }

            }

            mychart1.hideLoading();
            mychart2.hideLoading();
            mychart3.hideLoading();
            mychart4.hideLoading();
            mychart5.hideLoading();
             mychart6.hideLoading();
             mychart7.hideLoading();
             mychart8.hideLoading();
             mychart9.hideLoading();
             mychart10.hideLoading();
             mychart11.hideLoading();
        })
    }


}


function getHandlerOpition(divId,bigTitle,timeArray,smallTitle,days,flag) //flag=0正常  flag=1  加上%
{
  var options={};
    var data1 = {};var data2 = {};var data3 = {};var data4 = {};var data5 = {};var data6 = {};var data7 = {};var data8 = {};
    var data9 = {};var data10 = {};var data11 = {};var data12 = {};var data13 = {};var data14 = {};var data15 = {};var data16 = {};
    if(flag==0)
    {
             if(smallTitle.length==1)
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
                            step:parseInt(days/6),
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
             else if(smallTitle.length==2)
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
                            step:parseInt(days/6),
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
                          tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        visible: true,
                        shadow: false,
                        stickyTracking: false,
                    }, {
                          tooltip: { valueSuffix: ' %' },
                        tooltip: { valueSuffix: '' },
                        name: smallTitle[1],
                        lineWidth: 1,
                        radius: 1,
                        data: data2,
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
            else if(smallTitle.length==3)
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
                            step:parseInt(days/6),
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
             else if(smallTitle.length==4)
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
                            step:parseInt(days/6),
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
            else if(smallTitle.length==5)
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
                            step:parseInt(days/6),
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
              else  if(smallTitle.length==8)
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
                            step:parseInt(days/6),
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
           else  if(smallTitle.length==10)
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
                            step:parseInt(days/6),
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
            else if(smallTitle.length==16)
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
                            step:parseInt(days/6),
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
    }
    else if(flag==1)
    {
              if(smallTitle.length==1)
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
                            step:parseInt(days/6),
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
                         tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        visible: true,
                        shadow: false,
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
             else if(smallTitle.length==2)
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
                            step:parseInt(days/6),
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
                          tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        visible: true,
                        shadow: false,
                        stickyTracking: false,
                    }, {
                          tooltip: { valueSuffix: ' %' },
                        name: smallTitle[1],
                        lineWidth: 1,
                        radius: 1,
                        data: data2,
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
            else if(smallTitle.length==3)
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
                            step:parseInt(days/6),
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
                         tooltip: { valueSuffix: ' %' },
                        name: smallTitle[1],
                        lineWidth: 1,
                        radius: 1,
                        data: data2,
                        visible: false,
                        shadow: true,
                        stickyTracking: false,
                    },
                        {
                             tooltip: { valueSuffix: ' %' },
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
             else if(smallTitle.length==4)
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
                            step:parseInt(days/6),
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
                         tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        visible: true,
                        shadow: false,
                        stickyTracking: false,
                    }, {
                        tooltip: { valueSuffix: ' %' },
                        name:  smallTitle[1],
                        lineWidth: 1,
                        radius: 1,
                        data: data2,
                        visible: false,
                        shadow: true,
                        stickyTracking: false,
                    },
                        {
                             tooltip: { valueSuffix: ' %' },
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
            else if(smallTitle.length==5)
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
                            step:parseInt(days/6),
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
                         tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        visible: true,
                        shadow: false,
                        stickyTracking: false,
                    }, {
                         tooltip: { valueSuffix: ' %' },
                        name:  smallTitle[1],
                        lineWidth: 1,
                        radius: 1,
                        data: data2,
                        visible: false,
                        shadow: true,
                        stickyTracking: false,
                    },
                        {
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
              else  if(smallTitle.length==8)
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
                            step:parseInt(days/6),
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
                         tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        visible: true,
                        shadow: false,
                        stickyTracking: false,
                    }, {
                         tooltip: { valueSuffix: ' %' },
                        name: smallTitle[1],
                        lineWidth: 1,
                        radius: 1,
                        data: data2,
                        visible: false,
                        shadow: true,
                        stickyTracking: false,
                    },
                        {
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
                            name: smallTitle[5],
                            lineWidth: 1,
                            radius: 1,
                            data: data6,
                            visible: false,
                            shadow: true,
                            stickyTracking: false,
                        } ,
                        {
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
                            name: smallTitle[7],
                            lineWidth: 1,
                            radius: 1,
                            data: data8,
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
               else  if(smallTitle.length==9)
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
                            step:parseInt(days/6),
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
                         tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        visible: true,
                        shadow: false,
                        stickyTracking: false,
                    }, {
                         tooltip: { valueSuffix: ' %' },
                        name: smallTitle[1],
                        lineWidth: 1,
                        radius: 1,
                        data: data2,
                        visible: false,
                        shadow: true,
                        stickyTracking: false,
                    },
                        {
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
                            name: smallTitle[5],
                            lineWidth: 1,
                            radius: 1,
                            data: data6,
                            visible: false,
                            shadow: true,
                            stickyTracking: false,
                        } ,
                        {
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
                            name: smallTitle[8],
                            lineWidth: 1,
                            radius: 1,
                            data: data9,
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
           else  if(smallTitle.length==10)
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
                            step:parseInt(days/6),
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
                         tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        visible: true,
                        shadow: false,
                        stickyTracking: false,
                    }, {
                         tooltip: { valueSuffix: ' %' },
                        name: smallTitle[1],
                        lineWidth: 1,
                        radius: 1,
                        data: data2,
                        visible: false,
                        shadow: true,
                        stickyTracking: false,
                    },
                        {
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
                            name: smallTitle[5],
                            lineWidth: 1,
                            radius: 1,
                            data: data6,
                            visible: false,
                            shadow: true,
                            stickyTracking: false,
                        } ,
                        {
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
            else if(smallTitle.length==16)
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
                            step:parseInt(days/6),
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
                         tooltip: { valueSuffix: ' %' },
                        name:smallTitle[0],
                        lineWidth: 1,
                        radius: 1,
                        data: data1,
                        color: '#FF0033',
                        visible: true,
                        shadow: false,
                        stickyTracking: false,
                    }, {
                         tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
                            name: smallTitle[5],
                            lineWidth: 1,
                            radius: 1,
                            data: data6,
                            visible: false,
                            shadow: true,
                            stickyTracking: false,
                        } ,
                        {
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
                             tooltip: { valueSuffix: ' %' },
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
    }

     return options;
}


function gethandlerDataArray(retobj,days, k,flag,crcCnt)//days 天数, k=1 详情页平均值 ,flag=0异常    --crcCnt  曲线条数
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
          else if(k==16)//SDP 详情页--平均值
         {

             arr1[j] = retobj.value[13+27 * j][5] ;//主页
             arr2[j] = retobj.value[14+27 * j][5] ;//日历框
             arr3[j] = retobj.value[15+27 * j][5] ;//机酒搜索
             arr4[j] = retobj.value[10+27 * j][5] ;//X资源搜索
             arr5[j] = retobj.value[12+27 * j][5] ;//“下一步”更新资源
             arr6[j] = retobj.value[11+27 * j][5] ;//“下一步”可订检查
             arr7[j] = retobj.value[16+27 * j][5] ;//重选机票
             arr8[j] = retobj.value[17+27 * j][5] ;//重选酒店

         }
          else if(k==17)//SDP 详情页--最大值
         {

             arr1[j] = retobj.value[13+27 * j][3] ;//主页
             arr2[j] = retobj.value[14+27 * j][3] ;//日历框
             arr3[j] = retobj.value[15+27 * j][3] ;//机酒搜索
             arr4[j] = retobj.value[10+27 * j][3] ;//X资源搜索
             arr5[j] = retobj.value[12+27 * j][3] ;//“下一步”更新资源
             arr6[j] = retobj.value[11+27 * j][3] ;//“下一步”可订检查
             arr7[j] = retobj.value[16+27 * j][3] ;//重选机票
             arr8[j] = retobj.value[17+27 * j][3] ;//重选酒店

         }
          else if(k==18)//SDP 详情页--最小值
         {

             arr1[j] = retobj.value[13+27 * j][4] ;//主页
             arr2[j] = retobj.value[14+27 * j][4] ;//日历框
             arr3[j] = retobj.value[15+27 * j][4] ;//机酒搜索
             arr4[j] = retobj.value[10+27 * j][4] ;//X资源搜索
             arr5[j] = retobj.value[12+27 * j][4] ;//“下一步”更新资源
             arr6[j] = retobj.value[11+27 * j][4] ;//“下一步”可订检查
             arr7[j] = retobj.value[16+27 * j][4] ;//重选机票
             arr8[j] = retobj.value[17+27 * j][4] ;//重选酒店

         }
          else if(k==19)//DP 详情页--平均值
         {

             arr1[j] = retobj.value[7+27 * j][5] ;//“下一步”更新资源
             arr2[j] = retobj.value[8+27 * j][5] ;//“下一步”可订检查
             arr3[j] = retobj.value[8+27 * j][5] ;//重新机票
             arr4[j] = retobj.value[9+27 * j][5] ;//重新酒店

         }
          else if(k==20)//DP 详情页--最大值
         {

              arr1[j] = retobj.value[7+27 * j][3] ;//“下一步”更新资源
             arr2[j] = retobj.value[8+27 * j][3] ;//“下一步”可订检查
             arr3[j] = retobj.value[8+27 * j][3] ;//重新机票
             arr4[j] = retobj.value[9+27 * j][3] ;//重新酒店

         }
          else if(k==21)//DP 详情页--最小值
         {

              arr1[j] = retobj.value[7+27 * j][4] ;//“下一步”更新资源
             arr2[j] = retobj.value[8+27 * j][4] ;//“下一步”可订检查
             arr3[j] = retobj.value[8+27 * j][4] ;//重新机票
             arr4[j] = retobj.value[9+27 * j][4] ;//重新酒店

         }
          else if(k==22)//DP 填写页--平均值
         {

            arr1[j] = retobj.value[1+27 * j][5] ;//填写页
             arr2[j] = retobj.value[0+27 * j][5] ;//中文姓名转英文姓名
             arr3[j] = retobj.value[4+27 * j][5] ;//选常旅时触发
             arr4[j] = retobj.value[2+27 * j][5] ;//填写页点下一步
             arr5[j] = retobj.value[3+27 * j][5] ;//获取城市代码

         }
          else if(k==23)//DP 填写页--最大值
         {

             arr1[j] = retobj.value[1+27 * j][3] ;//填写页
             arr2[j] = retobj.value[0+27 * j][3] ;//中文姓名转英文姓名
             arr3[j] = retobj.value[4+27 * j][3] ;//选常旅时触发
             arr4[j] = retobj.value[2+27 * j][3] ;//填写页点下一步
             arr5[j] = retobj.value[3+27 * j][3] ;//获取城市代码

         }
          else if(k==24)//DP 填写页--最小值
         {

              arr1[j] = retobj.value[1+27 * j][4] ;//填写页
             arr2[j] = retobj.value[0+27 * j][4] ;//中文姓名转英文姓名
             arr3[j] = retobj.value[4+27 * j][4] ;//选常旅时触发
             arr4[j] = retobj.value[2+27 * j][4] ;//填写页点下一步
             arr5[j] = retobj.value[3+27 * j][4] ;//获取城市代码

         }
          else if(k==25)//DP完成页--平均值
         {

             arr1[j] = retobj.value[5+27 * j][5] ;//完成页


         }
          else if(k==26)//DP完成页--最大值
         {

             arr1[j] = retobj.value[5+27 * j][3] ;//完成页

         }
          else if(k==27)//DP完成页--最小值
         {

             arr1[j] = retobj.value[5+27 * j][4] ;//完成页

         }
          else if(k==28)//保险 详情页--平均值
         {

             arr1[j] = retobj.value[20+27 * j][5] ;//产品详情页
             arr2[j] = retobj.value[19+27 * j][5] ;//产品询价详情页
             arr3[j] = retobj.value[18+27 * j][5] ;//产品搜索页

         }
          else if(k==29)//保险 详情页--最大值
         {

             arr1[j] = retobj.value[20+27 * j][3] ;//产品详情页
             arr2[j] = retobj.value[19+27 * j][3] ;//产品询价详情页
             arr3[j] = retobj.value[18+27 * j][3] ;//产品搜索页

         }
          else if(k==30)//保险 详情页--最小值
         {

              arr1[j] = retobj.value[20+27 * j][4] ;//产品详情页
             arr2[j] = retobj.value[19+27 * j][4] ;//产品询价详情页
             arr3[j] = retobj.value[18+27 * j][4] ;//产品搜索页

         }
          else if(k==31)//保险-订单填写页--平均值
         {

             arr1[j] = retobj.value[24+27 * j][5] ;//获取国家
             arr2[j] = retobj.value[23+27 * j][5] ;//获取区域目的地
             arr3[j] = retobj.value[26+27 * j][5] ;//询价
             arr4[j] = retobj.value[25+27 * j][5] ;//订单提交
             arr5[j] = retobj.value[22+27 * j][5] ;//去支付

         }
          else if(k==32)//保险-订单填写页--最大值
         {

             arr1[j] = retobj.value[24+27 * j][3] ;//获取国家
             arr2[j] = retobj.value[23+27 * j][3] ;//获取区域目的地
             arr3[j] = retobj.value[26+27 * j][3] ;//询价
             arr4[j] = retobj.value[25+27 * j][3] ;//订单提交
             arr5[j] = retobj.value[22+27 * j][3] ;//去支付

         }
          else if(k==33)//保险-订单填写页--最小值
         {

             arr1[j] = retobj.value[24+27 * j][4] ;//获取国家
             arr2[j] = retobj.value[23+27 * j][4] ;//获取区域目的地
             arr3[j] = retobj.value[26+27 * j][4] ;//询价
             arr4[j] = retobj.value[25+27 * j][4] ;//订单提交
             arr5[j] = retobj.value[22+27 * j][4] ;//去支付

         }
          else if(k==34)//保险  完成--平均值
         {

             arr1[j] = retobj.value[21+27 * j][5] ;//完成页

         }
          else if(k==35)//保险  完成---最大值
         {

            arr1[j] = retobj.value[21+27 * j][3] ;//完成页

         }
          else if(k==36)//保险  完成---最小值
         {

             arr1[j] = retobj.value[21+27 * j][4] ;//完成页

         }
          if(k==37)//自由行总book
         {

             if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                  arr1[j]=toDecimal(retobj.value[days*18+7+18* j][3]*100);//现在的数据
                  arr2[j]=toDecimal(retobj.value[7+18* j][3]*100);//历史的数据
             }
             else{
                    arr1[j]=toDecimal(retobj.value[days*18+18+7+18* j][3]*100);//现在的数据
                    arr2[j]=toDecimal(retobj.value[7+18* j][3]*100);//历史的数据

             }

         }
         if(k==38)//自由行总book sdp app
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                    arr1[j]=toDecimal(retobj.value[days*18+4+18* j][3]*100);
                    arr2[j]=toDecimal(retobj.value[4+18* j][3]*100);
             }
             else{

                    arr1[j]=toDecimal(retobj.value[days*18+18+4+18* j][3]*100);
                    arr2[j]=toDecimal(retobj.value[4+18* j][3]*100);

             }

         }
         if(k==39)//自由行总book sdp online
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                   arr1[j]=toDecimal(retobj.value[days*18+6+18* j][3]*100);
                   arr2[j]=toDecimal(retobj.value[6+18* j][3]*100);
             }
             else{

                  arr1[j]=toDecimal(retobj.value[days*18+18+6+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[6+18* j][3]*100);

             }


         }
         if(k==40)//自由行总book sdp h5
         {
               if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                  arr1[j]=toDecimal(retobj.value[days*18+5+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[5+18* j][3]*100);
             }
             else{

                    arr1[j]=toDecimal(retobj.value[days*18+18+5+18* j][3]*100);
                    arr2[j]=toDecimal(retobj.value[5+18* j][3]*100);
             }


         }
         if(k==41)//自由行总book dp app
         {
               if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                   arr1[j]=toDecimal(retobj.value[days*18+0+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[0+18* j][3]*100);
             }
             else{
                    arr1[j]=toDecimal(retobj.value[days*18+18+0+18* j][3]*100);
                    arr2[j]=toDecimal(retobj.value[0+18* j][3]*100);

             }


         }
         if(k==42)//自由行总book dp online
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                  arr1[j]=toDecimal(retobj.value[days*18+2+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[2+18* j][3]*100);
             }
             else{

                  arr1[j]=toDecimal(retobj.value[days*18+18+2+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[2+18* j][3]*100);

             }


         }
         if(k==43)//自由行总book dp h5
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                 arr1[j]=toDecimal(retobj.value[days*18+1+18* j][3]*100);
                 arr2[j]=toDecimal(retobj.value[1+18* j][3]*100);
             }
             else{
                  arr1[j]=toDecimal(retobj.value[days*18+18+1+18* j][3]*100);
                 arr2[j]=toDecimal(retobj.value[1+18* j][3]*100);

             }

         }
         if(k==44)//自由行总book 国际站
         {
               if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                  arr1[j]=toDecimal(retobj.value[days*18+8+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[8+18* j][3]*100);
             }
             else{
                   arr1[j]=toDecimal(retobj.value[days*18+18+8+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[8+18* j][3]*100);

             }

         }
         if(k==45)//自由行总book offline
         {
               if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                 arr1[j]=toDecimal(retobj.value[days*18+3+18* j][3]*100);
                 arr2[j]=toDecimal(retobj.value[3+18* j][3]*100);
             }
             else{
                    arr1[j]=toDecimal(retobj.value[days*18+18+3+18* j][3]*100);
                    arr2[j]=toDecimal(retobj.value[3+18* j][3]*100);

             }


         }
         if(k==46)//自由行总commit
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                arr1[j]=toDecimal(retobj.value[days*18+16+18* j][3]*100);
                arr2[j]=toDecimal(retobj.value[16+18* j][3]*100);
             }
             else{
                  arr1[j]=toDecimal(retobj.value[days*18+18+16+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[16+18* j][3]*100);
             }


         }
         if(k==47)//自由行总commit sdp app
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                arr1[j]=toDecimal(retobj.value[days*18+13+18* j][3]*100);
                arr2[j]=toDecimal(retobj.value[13+18* j][3]*100);
             }
             else{

                  arr1[j]=toDecimal(retobj.value[days*18+18+13+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[13+18* j][3]*100);

             }


         }
         if(k==48)//自由行总commit sdp online
         {
             if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                arr1[j]=toDecimal(retobj.value[days*18+15+18* j][3]*100);
                arr2[j]=toDecimal(retobj.value[15+18* j][3]*100);
             }
             else{

                  arr1[j]=toDecimal(retobj.value[days*18+18+15+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[15+18* j][3]*100);

             }



         }
         if(k==49)//自由行总commit sdp h5
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                arr1[j]=toDecimal(retobj.value[days*18+14+18* j][3]*100);
                arr2[j]=toDecimal(retobj.value[14+18* j][3]*100);
             }
             else{

                  arr1[j]=toDecimal(retobj.value[days*18+18+14+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[14+18* j][3]*100);

             }


         }
         if(k==50)//自由行总commit dp app
         {
             if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                arr1[j]=toDecimal(retobj.value[days*18+9+18* j][3]*100);
                arr2[j]=toDecimal(retobj.value[9+18* j][3]*100);
             }
             else{

                 arr1[j]=toDecimal(retobj.value[days*18+18+9+18* j][3]*100);
                arr2[j]=toDecimal(retobj.value[9+18* j][3]*100);

             }


         }
         if(k==51)//自由行总commit dp online
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                 arr1[j]=toDecimal(retobj.value[days*18+11+18* j][3]*100);
                 arr2[j]=toDecimal(retobj.value[11+18* j][3]*100);
             }
             else{

              arr1[j]=toDecimal(retobj.value[days*18+18+11+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[11+18* j][3]*100);

             }



         }
          if(k==52)//自由行总commit dp h5
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                  arr1[j]=toDecimal(retobj.value[days*18+10+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[10+18* j][3]*100);
             }
             else{
                   arr1[j]=toDecimal(retobj.value[days*18+18+10+18* j][3]*100);
                  arr2[j]=toDecimal(retobj.value[10+18* j][3]*100);

             }


         }
          if(k==53)//自由行总commit 国际站
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                 arr1[j]=toDecimal(retobj.value[days*18+17+18* j][3]*100);
                 arr2[j]=toDecimal(retobj.value[17+18* j][3]*100);
             }
             else{

                   arr1[j]=toDecimal(retobj.value[days*18+18+17+18* j][3]*100);
                 arr2[j]=toDecimal(retobj.value[17+18* j][3]*100);


             }


         }
          if(k==54)//自由行总commit offline
         {
              if((parseInt(retobj.value.length/36)==retobj.value.length/36))
             {
                 arr1[j]=toDecimal(retobj.value[days*18+12+18* j][3]*100);
                 arr2[j]=toDecimal(retobj.value[12+18* j][3]*100);
             }
             else{
              arr1[j]=toDecimal(retobj.value[days*18+18+12+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[12+18* j][3]*100);


             }

         }
           if(k==55)//团队游总book
         {
             if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
                arr1[j]=toDecimal(retobj.value[4+10* j][3]);
             arr2[j]=toDecimal(retobj.value[4+10* j][3]);
             }
             else{
                 arr1[j]=toDecimal(retobj.value[10+4+10* j][3]);
             arr2[j]=toDecimal(retobj.value[4+10* j][3]);

             }


         }
           if(k==56)//团队游book app
         {
             if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
                arr1[j]=toDecimal(retobj.value[days*10+0+10*j][3]*100);
             arr2[j]=toDecimal(retobj.value[0+10* j][3]*100);
             }
             else{
                arr1[j]=toDecimal(retobj.value[days*10+10+0+10*j][3]*100);
             arr2[j]=toDecimal(retobj.value[0+10* j][3]*100);

             }

         }
           if(k==57)//团队游 book online
         {
             if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
                arr1[j]=toDecimal(retobj.value[days*10+3+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[3+10* j][3]*100);
             }
             else{

                  arr1[j]=toDecimal(retobj.value[days*10+10+3+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[3+10* j][3]*100);

             }

         }
           if(k==58)//团队游book h5
         {
             if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
               arr1[j]=toDecimal(retobj.value[days*10+1+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[1+10* j][3]*100);
             }
             else{
                 arr1[j]=toDecimal(retobj.value[days*10+10+1+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[1+10* j][3]*100);


             }


         }
           if(k==59)//团队游book offline
         {
             if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
                arr1[j]=toDecimal(retobj.value[days*10+2+10* j][3]*100);
              arr2[j]=toDecimal(retobj.value[2+10* j][3]*100);
             }
             else{
                  arr1[j]=toDecimal(retobj.value[days*10+10+2+10* j][3]*100);
              arr2[j]=toDecimal(retobj.value[2+10* j][3]*100);

             }


         }
           if(k==60)//团队游总commit
         {
             if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
                arr1[j]=toDecimal(retobj.value[days*10+9+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[9+10* j][3]*100);
             }
             else{
                 arr1[j]=toDecimal(retobj.value[days*10+10+9+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[9+10* j][3]*100);

             }


         }
           if(k==61)//团队游总commit APP
         {
              if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
               arr1[j]=toDecimal(retobj.value[days*10+5+8* j][3]*100);
             arr2[j]=toDecimal(retobj.value[5+8* j][3]*100);
             }
             else{

                  arr1[j]=toDecimal(retobj.value[days*10+10+5+8* j][3]*100);
             arr2[j]=toDecimal(retobj.value[5+8* j][3]*100);

             }


         }
           if(k==62)//团队游总commit ONLINE
         {
              if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
                arr1[j]=toDecimal(retobj.value[days*10+8+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[8+10* j][3]*100);
             }
             else{
                   arr1[j]=toDecimal(retobj.value[days*10+10+8+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[8+10* j][3]*100);

             }


         }
           if(k==63)//团队游总commit H5
         {
              if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
               arr1[j]=toDecimal(retobj.value[days*10+6+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[6+10* j][3]*100);
             }
             else{
                  arr1[j]=toDecimal(retobj.value[days*10+10+6+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[6+10* j][3]*100);

             }


         }
             if(k==64)//团队游总commit OFFLINE
         {
             if((parseInt(retobj.value.length/20)==retobj.value.length/20))
             {
                arr1[j]=toDecimal(retobj.value[days*10+7+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[7+10* j][3]*100);
             }
             else{
                  arr1[j]=toDecimal(retobj.value[days*10+10+7+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[7+10* j][3]*100);

             }

         }
          if(k==65)//签证 总commit
         {
             if((parseInt(retobj.value.length/6)==retobj.value.length/6))
             {
                 arr1[j]=toDecimal(retobj.value[days*3+0+3* j][3]*100/3)+toDecimal(retobj.value[days*3+1+3* j][3]*100/3)+toDecimal(retobj.value[days*3+2+3* j][3]*100/3);
             arr2[j]=toDecimal(retobj.value[0+3* j][3]*100/3)+toDecimal(retobj.value[1+3* j][3]*100/3)+toDecimal(retobj.value[2+3* j][3]*100/3);
             }
             else{
                  arr1[j]=toDecimal(retobj.value[days*3+3+0+3* j][3]*100/3)+toDecimal(retobj.value[days*3+3+1+3* j][3]*100/3)+toDecimal(retobj.value[days*3+3+2+3* j][3]*100/3);
             arr2[j]=toDecimal(retobj.value[0+3* j][3]*100/3)+toDecimal(retobj.value[1+3* j][3]*100/3)+toDecimal(retobj.value[2+3* j][3]*100/3);


             }

         }
          if(k==66)//签证 app
         {
             if((parseInt(retobj.value.length/6)==retobj.value.length/6))
             {
                 arr1[j]=toDecimal(retobj.value[days*3+0+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[0+3* j][3]*100);
             }
             else{
                 arr1[j]=toDecimal(retobj.value[days*3+3+0+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[0+3* j][3]*100);



             }


         }
          if(k==67)//签证 online
         {
               if((parseInt(retobj.value.length/6)==retobj.value.length/6))
             {
                 arr1[j]=toDecimal(retobj.value[days*3+2+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[2+3* j][3]*100);
             }
             else{
                arr1[j]=toDecimal(retobj.value[days*3+3+2+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[2+3* j][3]*100);


             }


         }
          if(k==68)//签证 h5
         {
             if((parseInt(retobj.value.length/6)==retobj.value.length/6))
             {
                 arr1[j]=toDecimal(retobj.value[days*3+1+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[1+3* j][3]*100);
             }
             else{
                arr1[j]=toDecimal(retobj.value[days*3+3+1+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[1+3* j][3]*100);

             }

         }
          if(k==69)//度假总订单
         {
            arr2[j]=retobj.value[15+19* j][3] ;//自由定
            arr3[j]=retobj.value[16+19* j][3]+retobj.value[17+19* j][3]  ;//团队游
            arr4[j]=retobj.value[18+19* j][3] ;//签证
            arr1[j]=arr2[j]+arr3[j]+ arr4[j];//总订单
         }
         if(k==70)//APP总订单
         {
            arr2[j]=retobj.value[0+19* j][3]+retobj.value[7+19* j][3] ;//自由定
            arr3[j]=retobj.value[1+19* j][3]+retobj.value[8+19* j][3]+retobj.value[2+19* j][3]+retobj.value[9+19* j][3]  ;//团队游
            arr4[j]=retobj.value[3+19* j][3]+retobj.value[10+19* j][3] ;//签证
            arr1[j]=arr2[j]+arr3[j]+ arr4[j];//总订单
         }
         if(k==71)//Online 总订单
         {
            arr2[j]=retobj.value[11+19* j][3] ;//自由定
            arr3[j]=retobj.value[12+19* j][3]+retobj.value[13+19* j][3]  ;//团队游
            arr4[j]=retobj.value[14+19* j][3] ;//签证
            arr1[j]=arr2[j]+arr3[j]+ arr4[j];//总订单
         }
         if(k==72)//H5 总订单
         {
            arr2[j]=retobj.value[4+19* j][3] ;//自由定
            arr3[j]=retobj.value[5+19* j][3];//团队游
            arr4[j]=retobj.value[6+19* j][3] ;//签证
            arr1[j]=arr2[j]+arr3[j]+ arr4[j];//总订单
         }
          if(k==73)//度假订单 iphone分版本
         {
              // 0.6.17   1.6.16   2. 6.15  3. 6.14  4.6.13   5. 6.12  6.6.11 7.others
            arr1[j]=retobj.value[14+ 48* j][5] + retobj.value[30 + 48* j][5]+  retobj.value[46 + 48* j][5];
            arr2[j]=retobj.value[13+ 48* j][5] + retobj.value[29 + 48* j][5]+  retobj.value[45 + 48* j][5];
            arr3[j]=retobj.value[12+ 48* j][5] + retobj.value[28 + 48* j][5]+  retobj.value[44 + 48* j][5];
            arr4[j]=retobj.value[11+ 48* j][5] + retobj.value[27 + 48* j][5]+  retobj.value[43 + 48* j][5];
            arr5[j]=retobj.value[10+ 48* j][5] + retobj.value[26 + 48* j][5]+  retobj.value[42 + 48* j][5];
            arr6[j]=retobj.value[9+ 48* j][5] + retobj.value[25 + 48* j][5]+  retobj.value[41 + 48* j][5];
            arr7[j]=retobj.value[8+ 48* j][5] + retobj.value[24 + 48* j][5]+  retobj.value[40 + 48* j][5];
            arr8[j]=retobj.value[15+ 48* j][5] + retobj.value[31 + 48* j][5]+  retobj.value[47 + 48* j][5];
         }
          if(k==74)//自由行订单 iphone分版本
         {
            arr1[j]=retobj.value[14+ 48* j][5];
            arr2[j]=retobj.value[13+ 48* j][5];
            arr3[j]=retobj.value[12+ 48* j][5];
            arr4[j]=retobj.value[11+ 48* j][5];
            arr5[j]=retobj.value[10+ 48* j][5];
            arr6[j]=retobj.value[9+ 48* j][5] ;
            arr7[j]=retobj.value[8+ 48* j][5] ;
            arr8[j]=retobj.value[15+ 48* j][5];
         }
          if(k==75)//团队游订单 iphone分版本
         {
                // 0.6.17   1.6.16   2. 6.15  3. 6.14  4.6.13   5. 6.12  6.6.11 7.others
            arr1[j]= retobj.value[30 + 48* j][5];
            arr2[j]= retobj.value[29 + 48* j][5];
            arr3[j]= retobj.value[28 + 48* j][5];
            arr4[j]= retobj.value[27 + 48* j][5];
            arr5[j]= retobj.value[26 + 48* j][5];
            arr6[j]= retobj.value[25 + 48* j][5];
            arr7[j]= retobj.value[24 + 48* j][5];
            arr8[j]= retobj.value[31 + 48* j][5];
         }
          if(k==76)//签证订单 iphone分版本
         {
                 // 0.6.17   1.6.16   2. 6.15  3. 6.14  4.6.13   5. 6.12  6.6.11 7.others
            arr1[j]= retobj.value[46 + 48* j][5];
            arr2[j]= retobj.value[45 + 48* j][5];
            arr3[j]= retobj.value[44 + 48* j][5];
            arr4[j]= retobj.value[43 + 48* j][5];
            arr5[j]= retobj.value[42 + 48* j][5];
            arr6[j]=retobj.value[41 + 48* j][5];
            arr7[j]=retobj.value[40 + 48* j][5];
            arr8[j]= retobj.value[47 + 48* j][5];
         }
         if(k==77)//度假总金额
         {

             arr2[j]=retobj.value[0+3* j][2];
             arr3[j]=retobj.value[1+3* j][2];
             arr4[j]=retobj.value[2+3* j][2];
             arr1[j]=arr2[j]+arr3[j]+arr4[j];

         }
         if(k==78)//android 度假总订单
         {

            arr1[j]=retobj.value[6+ 48* j][5] + retobj.value[22 + 48* j][5]+  retobj.value[38 + 48* j][5];
            arr2[j]=retobj.value[5+ 48* j][5] + retobj.value[21 + 48* j][5]+  retobj.value[37 + 48* j][5];
            arr3[j]=retobj.value[4+ 48* j][5] + retobj.value[20 + 48* j][5]+  retobj.value[36 + 48* j][5];
            arr4[j]=retobj.value[3+ 48* j][5] + retobj.value[19 + 48* j][5]+  retobj.value[35 + 48* j][5];
            arr5[j]=retobj.value[2+ 48* j][5] + retobj.value[18 + 48* j][5]+  retobj.value[34 + 48* j][5];
            arr6[j]=retobj.value[1+ 48* j][5] + retobj.value[17 + 48* j][5]+  retobj.value[33 + 48* j][5];
            arr7[j]=retobj.value[0+ 48* j][5] + retobj.value[16 + 48* j][5]+  retobj.value[32 + 48* j][5];
            arr8[j]=retobj.value[7+ 48* j][5] + retobj.value[23 + 48* j][5]+  retobj.value[39 + 48* j][5];

         }
         if(k==79)//android 度假自由行分版本订单
         {

            arr1[j]=retobj.value[6+ 48* j][5] ;
            arr2[j]=retobj.value[5+ 48* j][5] ;
            arr3[j]=retobj.value[4+ 48* j][5] ;
            arr4[j]=retobj.value[3+ 48* j][5] ;
            arr5[j]=retobj.value[2+ 48* j][5] ;
            arr6[j]=retobj.value[1+ 48* j][5] ;
            arr7[j]=retobj.value[0+ 48* j][5] ;
            arr8[j]=retobj.value[7+ 48* j][5] ;

         }
         if(k==80)//android 度假团队游分版本订单
         {

            arr1[j]=retobj.value[22 + 48* j][5];
            arr2[j]=retobj.value[21 + 48* j][5];
            arr3[j]=retobj.value[20 + 48* j][5];
            arr4[j]=retobj.value[19 + 48* j][5];
            arr5[j]=retobj.value[18 + 48* j][5];
            arr6[j]=retobj.value[17 + 48* j][5];
            arr7[j]=retobj.value[16 + 48* j][5];
            arr8[j]=retobj.value[23 + 48* j][5];

         }
         if(k==81)//android 度假签证分版本订单
         {

            arr1[j]= retobj.value[38 + 48* j][5];
            arr2[j]= retobj.value[37 + 48* j][5];
            arr3[j]= retobj.value[36 + 48* j][5];
            arr4[j]= retobj.value[35 + 48* j][5];
            arr5[j]= retobj.value[34 + 48* j][5];
            arr6[j]= retobj.value[33 + 48* j][5];
            arr7[j]= retobj.value[32 + 48* j][5];
            arr8[j]= retobj.value[39 + 48* j][5];

         }
         if(k==82)//自由行iphone分版本转化率
         {
            if(retobj.value[14+ 48* j][4]==0)
            {
                arr1[j]=0;
            }
             else{
                 arr1[j]= parseFloat((retobj.value[14+ 48* j][5]*100/retobj.value[14+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[13+ 48* j][4]==0)
            {
                arr2[j]=0;
            }
             else{
                arr2[j]=parseFloat((retobj.value[13+ 48* j][5]*100/retobj.value[13+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[12+ 48* j][4]==0)
            {
                arr3[j]=0;
            }
             else{
                arr3[j]=parseFloat((retobj.value[12+ 48* j][5]*100/retobj.value[12+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[11+ 48* j][4]==0)
            {
                arr4[j]=0;
            }
             else{
                 arr4[j]=parseFloat((retobj.value[11+ 48* j][5]*100/retobj.value[11+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[10+ 48* j][4]==0)
            {
                arr5[j]=0;
            }
             else{
                arr5[j]=parseFloat((retobj.value[10+ 48* j][5]*100/retobj.value[10+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[9+ 48* j][4]==0)
            {
                arr6[j]=0;
            }
             else{
                 arr6[j]=parseFloat((retobj.value[9+ 48* j][5]*100/retobj.value[9+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[8+ 48* j][4]==0)
            {
                arr7[j]=0;
            }
             else{
                 arr7[j]=parseFloat((retobj.value[8+ 48* j][5]*100/retobj.value[8+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[15+ 48* j][4]==0)
            {
                arr8[j]=0;
            }
             else{
                 arr8[j]=parseFloat((retobj.value[15+ 48* j][5]*100/retobj.value[15+ 48* j][4]).toFixed(2));
            }

         }
         if(k==83) //自由行android分版本转化率
         {
             if(retobj.value[6+ 48* j][4]==0)
            {
                arr1[j]=0;
            }
             else{
                 arr1[j]= parseFloat((retobj.value[6+ 48* j][5]*100/retobj.value[6+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[5+ 48* j][4]==0)
            {
                arr2[j]=0;
            }
             else{
                 arr2[j]=parseFloat((retobj.value[5+ 48* j][5]*100/retobj.value[5+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[4+ 48* j][4]==0)
            {
                arr3[j]=0;
            }
             else{
                 arr3[j]=parseFloat((retobj.value[4+ 48* j][5]*100/retobj.value[4+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[3+ 48* j][4]==0)
            {
                arr4[j]=0;
            }
             else{
                 arr4[j]=parseFloat((retobj.value[3+ 48* j][5]*100/retobj.value[3+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[2+ 48* j][4]==0)
            {
                arr5[j]=0;
            }
             else{
                 arr5[j]=parseFloat((retobj.value[2+ 48* j][5]*100/retobj.value[2+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[1+ 48* j][4]==0)
            {
                arr6[j]=0;
            }
             else{
                 arr6[j]=parseFloat((retobj.value[1+ 48* j][5]*100/retobj.value[1+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[0+ 48* j][4]==0)
            {
                arr7[j]=0;
            }
             else{
                 arr7[j]=parseFloat((retobj.value[0+ 48* j][5]*100/retobj.value[0+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[7+ 48* j][4]==0)
            {
                arr8[j]=0;
            }
             else{
                 arr8[j]=parseFloat((retobj.value[7+ 48* j][5]*100/retobj.value[7+ 48* j][4]).toFixed(2));
            }



         }
         if(k==84)//团队游iphone分版本转化率
         {

             if(retobj.value[30+ 48* j][4]==0)
            {
                arr1[j]=0;
            }
             else{
                  arr1[j]= parseFloat((retobj.value[30+ 48* j][5]*100/retobj.value[30+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[29+ 48* j][4]==0)
            {
                arr2[j]=0;
            }
             else{
                arr2[j]=parseFloat((retobj.value[29+ 48* j][5]*100/retobj.value[29+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[28+ 48* j][4]==0)
            {
                arr3[j]=0;
            }
             else{
                 arr3[j]=parseFloat((retobj.value[28+ 48* j][5]*100/retobj.value[28+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[27+ 48* j][4]==0)
            {
                arr4[j]=0;
            }
             else{
                 arr4[j]=parseFloat((retobj.value[27+ 48* j][5]*100/retobj.value[27+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[26+ 48* j][4]==0)
            {
                arr5[j]=0;
            }
             else{
                 arr5[j]=parseFloat((retobj.value[26+ 48* j][5]*100/retobj.value[26+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[25+ 48* j][4]==0)
            {
                arr6[j]=0;
            }
             else{
                 arr6[j]=parseFloat((retobj.value[25+ 48* j][5]*100/retobj.value[25+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[24+ 48* j][4]==0)
            {
                arr7[j]=0;
            }
             else{
                arr7[j]=parseFloat((retobj.value[24+ 48* j][5]*100/retobj.value[24+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[31+ 48* j][4]==0)
            {
                arr8[j]=0;
            }
             else{
                 arr8[j]=parseFloat((retobj.value[31+ 48* j][5]*100/retobj.value[31+ 48* j][4]).toFixed(2));
            }

         }
         if(k==85)//团队游android分版本转化率
         {
             if(retobj.value[22+ 48* j][4]==0)
            {
                arr1[j]=0;
            }
             else{
                  arr1[j]= parseFloat((retobj.value[22+ 48* j][5]*100/retobj.value[22+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[21+ 48* j][4]==0)
            {
                arr2[j]=0;
            }
             else{
                 arr2[j]=parseFloat((retobj.value[21+ 48* j][5]*100/retobj.value[21+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[20+ 48* j][4]==0)
            {
                arr3[j]=0;
            }
             else{
                 arr3[j]=parseFloat((retobj.value[20+ 48* j][5]*100/retobj.value[20+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[19+ 48* j][4]==0)
            {
                arr4[j]=0;
            }
             else{
                 arr4[j]=parseFloat((retobj.value[19+ 48* j][5]*100/retobj.value[19+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[18+ 48* j][4]==0)
            {
                arr5[j]=0;
            }
             else{
                  arr5[j]=parseFloat((retobj.value[18+ 48* j][5]*100/retobj.value[18+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[17+ 48* j][4]==0)
            {
                arr6[j]=0;
            }
             else{
                 arr6[j]=parseFloat((retobj.value[17+ 48* j][5]*100/retobj.value[17+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[16+ 48* j][4]==0)
            {
                arr7[j]=0;
            }
             else{
                arr7[j]=parseFloat((retobj.value[16+ 48* j][5]*100/retobj.value[16+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[23+ 48* j][4]==0)
            {
                arr8[j]=0;
            }
             else{
                 arr8[j]=parseFloat((retobj.value[23+ 48* j][5]*100/retobj.value[23+ 48* j][4]).toFixed(2));
            }


         }
         if(k==86)//签证iphone分版本转化率
         {

              if(retobj.value[46+ 48* j][4]==0)
            {
                arr1[j]=0;
            }
             else{
                  arr1[j]= parseFloat((retobj.value[46+ 48* j][5]*100/retobj.value[46+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[45+ 48* j][4]==0)
            {
                arr2[j]=0;
            }
             else{
                 arr2[j]=parseFloat((retobj.value[45+ 48* j][5]*100/retobj.value[45+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[44+ 48* j][4]==0)
            {
                arr3[j]=0;
            }
             else{
                 arr3[j]=parseFloat((retobj.value[44+ 48* j][5]*100/retobj.value[44+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[43+ 48* j][4]==0)
            {
                arr4[j]=0;
            }
             else{
                arr4[j]=parseFloat((retobj.value[43+ 48* j][5]*100/retobj.value[43+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[42+ 48* j][4]==0)
            {
                arr5[j]=0;
            }
             else{
                  arr5[j]=parseFloat((retobj.value[42+ 48* j][5]*100/retobj.value[42+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[41+ 48* j][4]==0)
            {
                arr6[j]=0;
            }
             else{
                  arr6[j]=parseFloat((retobj.value[41+ 48* j][5]*100/retobj.value[41+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[40+ 48* j][4]==0)
            {
                arr7[j]=0;
            }
             else{
                arr7[j]=parseFloat((retobj.value[40+ 48* j][5]*100/retobj.value[40+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[47+ 48* j][4]==0)
            {
                arr8[j]=0;
            }
             else{
                 arr8[j]=parseFloat((retobj.value[47+ 48* j][5]*100/retobj.value[47+ 48* j][4]).toFixed(2));
            }

         }
         if(k==87)//签证android分版本转化率
         {
             if(retobj.value[38+ 48* j][4]==0)
            {
                arr1[j]=0;
            }
             else{
                   arr1[j]= parseFloat((retobj.value[38+ 48* j][5]*100/retobj.value[38+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[37+ 48* j][4]==0)
            {
                arr2[j]=0;
            }
             else{
                 arr2[j]=parseFloat((retobj.value[37+ 48* j][5]*100/retobj.value[37+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[36+ 48* j][4]==0)
            {
                arr3[j]=0;
            }
             else{
                 arr3[j]=parseFloat((retobj.value[36+ 48* j][5]*100/retobj.value[36+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[35+ 48* j][4]==0)
            {
                arr4[j]=0;
            }
             else{
                arr4[j]=parseFloat((retobj.value[35+ 48* j][5]*100/retobj.value[35+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[34+ 48* j][4]==0)
            {
                arr5[j]=0;
            }
             else{
                   arr5[j]=parseFloat((retobj.value[34+ 48* j][5]*100/retobj.value[34+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[33+ 48* j][4]==0)
            {
                arr6[j]=0;
            }
             else{
                  arr6[j]=parseFloat((retobj.value[33+ 48* j][5]*100/retobj.value[33+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[32+ 48* j][4]==0)
            {
                arr7[j]=0;
            }
             else{
               arr7[j]=parseFloat((retobj.value[32+ 48* j][5]*100/retobj.value[32+ 48* j][4]).toFixed(2));
            }
             if(retobj.value[39+ 48* j][4]==0)
            {
                arr8[j]=0;
            }
             else{
                arr8[j]=parseFloat((retobj.value[39+ 48* j][5]*100/retobj.value[39+ 48* j][4]).toFixed(2));
            }

         }






     }
 if(crcCnt==1)
    {
        resultThree[0]=arr1;
    }
    else if(crcCnt==2)
    {
         resultThree[0]=arr1;
        resultThree[1]=arr2;
    }
    else if(crcCnt==3){
         resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;

    }
    else if(crcCnt==4)
    {

        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
    }
    else if(crcCnt==5)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
    }
 else if(crcCnt==6)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
        resultThree[5]=arr6;
    }
 else if(crcCnt==7)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
        resultThree[5]=arr6;
        resultThree[6]=arr7;
    }
else if(crcCnt==8)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
        resultThree[5]=arr6;
        resultThree[6]=arr7;
        resultThree[7]=arr8;
    }
     else if(crcCnt==10)
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
     else if(crcCnt==16)
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