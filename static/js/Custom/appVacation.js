/**
 * Created by wang.zy on 2016/5/25.
 */
/**
 * Created by yangyz on 2016/04/04.
 */

var vaorder_chart_width;
function VacationOrder()
{

    var startDate=$("#startdate1").val();
    var endDate=$("#enddate1").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#orderContainer")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='allOrder' style='height:350px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='appOrder' style='height:350px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div><div id='onlineOrder' style='height:350px;width:49%;float:left;clear:left;margin-top:10px'></div><div id='h5Order' style='height:350px;width:49%;float:left;margin-left:10px;margin-top:10px'></div>")
       vaorder_chart_width= $("#allOrder").width();//:" + chart_width + "px;
   // bbc_width =$("#diyall").width();
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/appvaallorder/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
         bigTitle[0]='度假总订单';
        bigTitle[1]='度假-APP总订单';
        bigTitle[2]='度假-Online总订单';
        bigTitle[3]='度假-H5总订单';
        var smallTitle = new Array();
         smallTitle[0]='总订单';smallTitle[1]='自由行订单';smallTitle[2]='团队游订单';smallTitle[3]='签证订单';
        var div = new Array();
         div[0]='allOrder';div[1]='appOrder';div[2]='onlineOrder';div[3]='h5Order';
        var orderSquence = new Array();
        orderSquence[0] = 69;orderSquence[1] = 70;orderSquence[2] = 71;orderSquence[3] = 72;

        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 4, orderSquence, days, 19)
    }



}

function getTimeDiff(calDate)
{

    var d1   =   new   Date(); //今天
    var  d2   =   new   Date(calDate.replace(/-/g,   "/"));
    var d3=d2.getTime()-d1.getTime();
    var x=Math.floor(d3/(24*3600*1000))+2 ;

    return x;
}
//自由行
function iphoneVersionOrder()
{

    var startDate=$("#startdate2").val();
    var endDate=$("#enddate2").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#orderdiyH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='allOrdervs' style='height:350px;width:" + vaorder_chart_width + "px;float:left;clear:left;margin-top: 2px'></div><div id='diyOrdervs' style='height:350px;width:" + vaorder_chart_width + "px;float:left;margin-left:10px;margin-top: 2px '></div><div id='pkgOrdervs' style='height:350px;width:" + vaorder_chart_width + "px;float:left;clear:left;margin-top:10px'></div><div id='visaOrdervs' style='height:350px;width:" + vaorder_chart_width + "px;float:left;margin-left:10px;margin-top:10px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/appvaorder/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
         bigTitle[0]='度假总体-iphone总订单';
        bigTitle[1]='自由行-iphone总订单';
        bigTitle[2]='团队游-iphone总订单';
        bigTitle[3]='签证-iphone总订单';
        var smallTitle = new Array();
         smallTitle[0]='iphone_6.17';smallTitle[1]='iphone_6.16';smallTitle[2]='iphone_6.15';
         smallTitle[3]='iphone_6.14';smallTitle[4]='iphone_6.13';smallTitle[5]='iphone_6.12';
         smallTitle[6]='iphone_6.11';smallTitle[7]='iphone_others';
        var div = new Array();
         div[0]='allOrdervs';div[1]='diyOrdervs';div[2]='pkgOrdervs';div[3]='visaOrdervs';
        var orderSquence = new Array();
        orderSquence[0] = 73;orderSquence[1] = 74;orderSquence[2] = 75;orderSquence[3] = 76;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 4, orderSquence, days, 32)
    }


}
//度假金额明细
function tourMoney()
{

    var startDate=$("#startdate4").val();
    var endDate=$("#enddate4").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    var chart_width=$("#visaOrder").width()
    $orderContainer = $("#visaH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='money' style='height:350px;width:" + 2.03*vaorder_chart_width + "px;margin-top: 2px'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/appvaamount/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
         bigTitle[0]='度假金额明细';
         var smallTitle = new Array();
         smallTitle[0]='度假总体';smallTitle[1]='自由行';smallTitle[2]='团队游';
         smallTitle[3]='签证';
        var div = new Array();
         div[0]='money';
        var orderSquence = new Array();
        orderSquence[0] = 77;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray,1, orderSquence, days, 3)
    }

}

//各订单金额占比
function tourRate()
{
    var enddate=$("#enddate3").val();
    var taday=new Date();
    $orderContainer = $("#orderpkgH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='tourOrder' style='height:350px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='iphoneOrder' style='height:350px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div><div id='diyallOrder' style='height:350px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='diyiphoneOrder' style='height:350px;width:49%;float:left;margin-left:10px;margin-top:2px'></div><div id='pkgallOrder' style='height:350px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='pkgiphoneOrder' style='height:350px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div><div id='visaallOrder' style='height:350px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='visaiphoneOrder' style='height:350px;width:49%;float:left;margin-left:10px;margin-top:2px'></div>")
    console.log();
    if(enddate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/pieOrder/' + enddate + '/' + enddate;
        var bigTitle = [];
        bigTitle[0]='度假移动端订单来源占比';
        bigTitle[1]='度假-iphone各版本订单占比';
        bigTitle[2]='自由行移动端订单来源占比';
        bigTitle[3]='自由行-iphone各版本订单占比';
        bigTitle[4]='团队游移动端订单来源占比';
        bigTitle[5]='团队游-iphone各版本订单占比';
        bigTitle[6]='签证移动端订单来源占比';
        bigTitle[7]='签证-iphone各版本订单占比';
        var smallTitle1 = new Array();
         smallTitle1[0]='android';smallTitle1[1]='iphone';
        var smallTitle2 = new Array();
         smallTitle2[0]='iphone_6.17';smallTitle2[1]='iphone_6.16';smallTitle2[2]='iphone_6.15';
         smallTitle2[3]='iphone_6.14';smallTitle2[4]='iphone_6.13';smallTitle2[5]='iphone_6.12';
         smallTitle2[6]='iphone_6.11';smallTitle2[7]='iphone_others';
        var div = new Array();
         div[0]='tourOrder';div[1]='iphoneOrder';div[2]='diyallOrder';div[3]='diyiphoneOrder';
         div[4]='pkgallOrder';div[5]='pkgiphoneOrder';div[6]='visaallOrder';div[7]='visaiphoneOrder';
            drawPie(url, div[0],bigTitle[0],1); drawPie(url, div[1],bigTitle[1],2); drawPie(url, div[2],bigTitle[2],3); drawPie(url, div[3],bigTitle[3],4);
            drawPie(url, div[4],bigTitle[4],5); drawPie(url, div[5],bigTitle[5],6); drawPie(url, div[6],bigTitle[6],7); drawPie(url, div[7],bigTitle[7],8);

    }

}

function getLastYear(curDate)
{
    var strs=new Array();
    strs=curDate.split('-');
    return parseInt(strs[0])-1+'-'+strs[1]+'-'+strs[2];
}
//自由行book

var bc_chart_width;
var bbc_width;
function diybook()
{
    var startDate=$("#startdate1").val();
    var endDate=$("#enddate1").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#orderContainer")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='diyall' style='height:350px;margin-top:5px;width:99%;'></div><div id='sdpapp' style='height:350px;float:left;clear:left;width:49%;margin-top: 5px'></div><div id='sdponline' style='height:350px;float:left;clear:right;width:49%;margin-left:10px;margin-top: 5px '></div><div id='sdph5' style='height:350px;float:left;clear:left;margin-top: 5px;width:49%'></div><div id='dpapp' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:49% '></div><div id='dponline' style='height:350px;float:left;clear:left;margin-top: 5px;width:49%'></div><div id='dph5' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:49% '></div><div id='国际站' style='height:350px;float:left;clear:left;margin-top: 5px;width:49%'></div><div id='offline' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:49% '></div>")
    bc_chart_width= $("#sdph5").width();
    bbc_width =$("#diyall").width();
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/diybookcommitnew/' +getLastYear(startDate)+'/'+getLastYear(endDate)+'/'+startDate+'/'+endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
         bigTitle[0]='自由行book失败率';
        bigTitle[1]='sdp app失败率';
        bigTitle[2]='sdp online失败率';
        bigTitle[3]='sdp h5失败率';
        bigTitle[4]='dp app失败率';
        bigTitle[5]='dp online失败率';
        bigTitle[6]='dp h5失败率';
        bigTitle[7]='国际站失败率';
        bigTitle[8]='offline失败率';
        var smallTitle = new Array();
         smallTitle[0]='失败率';smallTitle[1]='历史同期失败率';
        var div = new Array();
         div[0]='diyall';div[1]='sdpapp';div[2]='sdponline';div[3]='sdph5';
	     div[4]='dpapp';div[5]='dponline';div[6]='dph5';div[7]='国际站';div[8]='offline';
        var orderSquence = new Array();
        orderSquence[0] = 37;orderSquence[1] = 38;orderSquence[2] = 39;orderSquence[3] = 40;orderSquence[4] = 41;orderSquence[5] = 42;
        orderSquence[6] = 43;orderSquence[7] = 44;orderSquence[8] = 45

        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 9, orderSquence, days, 18*2)
    }

}
//自由行commit
function diycommit()
{

    var startDate=$("#startdate2").val();
    var endDate=$("#enddate2").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#diycommitH")  //
    $orderContainer.empty();//清空翻页标签
     $orderContainer.append("<div id='diyallcommit' style='height:350px;margin-top:5px;width:"+bbc_width+"px;'></div><div id='sdpappcommit' style='height:350px;float:left;clear:left;width:"+bc_chart_width+"px;;margin-top: 5px'></div><div id='sdponlinecommit' style='height:350px;float:left;clear:right;width:"+bc_chart_width+"px;;margin-left:10px;margin-top: 5px '></div><div id='sdph5commit' style='height:350px;float:left;clear:left;margin-top: 5px;width:"+bc_chart_width+"px;'></div><div id='dpappcommit' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:"+bc_chart_width+"px; '></div><div id='dponlinecommit' style='height:350px;float:left;clear:left;margin-top: 5px;width:"+bc_chart_width+"px;'></div><div id='dph5commit' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:"+bc_chart_width+"px; '></div><div id='国际站commit' style='height:350px;float:left;clear:left;margin-top: 5px;width:"+bc_chart_width+"px;'></div><div id='offlinecommit' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:"+bc_chart_width+"px; '></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/diybookcommitnew/' + getLastYear(startDate) + '/' + getLastYear(endDate) + '/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0] = '自由行commit失败率';
        bigTitle[1] = 'sdp app失败率';
        bigTitle[2] = 'sdp online失败率';
        bigTitle[3] = 'sdp h5失败率';
        bigTitle[4] = 'dp app失败率';
        bigTitle[5] = 'dp online失败率';
        bigTitle[6] = 'dp h5失败率';
        bigTitle[7] = '国际站失败率';
        bigTitle[8] = 'offline失败率';
        var smallTitle = new Array();
        smallTitle[0] = '失败率';
        smallTitle[1] = '历史同期失败率';
        var div = new Array();
        div[0] = 'diyallcommit';
        div[1] = 'sdpappcommit';
        div[2] = 'sdponlinecommit';
        div[3] = 'sdph5commit';
        div[4] = 'dpappcommit';
        div[5] = 'dponlinecommit';
        div[6] = 'dph5commit';
        div[7] = '国际站commit';
        div[8] = 'offlinecommit';
        var orderSquence = new Array();
        orderSquence[0] = 46;
        orderSquence[1] = 47;
        orderSquence[2] = 48;
        orderSquence[3] = 49;
        orderSquence[4] = 50;
        orderSquence[5] = 51;
        orderSquence[6] = 52;
        orderSquence[7] = 53;
        orderSquence[8] = 54

        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 9, orderSquence, days, 18 * 2)
    }

}
//团队游book
function pkgbook()
{

    var startDate=$("#startdate3").val();
    var endDate=$("#enddate3").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#pkgbookH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='pkgall' style='height:350px;margin-top:5px;width:"+bbc_width+"px;'></div><div id='pkgapp' style='height:350px;float:left;clear:left;width:"+bc_chart_width+"px;;margin-top: 5px'></div><div id='pkgonline' style='height:350px;float:left;clear:right;width:"+bc_chart_width+"px;;margin-left:10px;margin-top: 5px '></div><div id='pkgh5' style='height:350px;float:left;clear:left;margin-top: 5px;width:"+bc_chart_width+"px;'></div><div id='pkgoffline' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:"+bc_chart_width+"px;'></div>")
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/pkgbookcommitnew/' + getLastYear(startDate) + '/' + getLastYear(endDate) + '/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0]='团队游book失败率';
        bigTitle[1]='APP失败率';
        bigTitle[2]='Online失败率';
        bigTitle[3]='H5失败率';
        bigTitle[4]='offline失败率';
        var smallTitle = new Array();
        smallTitle[0] = '失败率';
        smallTitle[1] = '历史同期失败率';
        var div = new Array();
        div[0]='pkgall';div[1]='pkgapp';div[2]='pkgonline';div[3]='pkgh5';
	     div[4]='pkgoffline';
        var orderSquence = new Array();
        orderSquence[0] = 55;orderSquence[1] = 56;orderSquence[2] = 57;orderSquence[3] = 58;orderSquence[4] = 59;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 5, orderSquence, days, 10 * 2)
    }

}
//团队游commit
function pkgcommit()
{
    var startDate=$("#startdate4").val();
    var endDate=$("#enddate4").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#pkgcommitH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='pkgallcommit' style='height:350px;margin-top:5px;width:"+bbc_width+"px;'></div><div id='pkgappcommit' style='height:350px;float:left;clear:left;width:"+bc_chart_width+"px;;margin-top: 5px'></div><div id='pkgonlinecommit' style='height:350px;float:left;clear:right;width:"+bc_chart_width+"px;;margin-left:10px;margin-top: 5px '></div><div id='pkgh5commit' style='height:350px;float:left;clear:left;margin-top: 5px;width:"+bc_chart_width+"px;'></div><div id='pkgofflinecommit' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:"+bc_chart_width+"px; '></div>")
     if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/pkgbookcommitnew/' + getLastYear(startDate) + '/' + getLastYear(endDate) + '/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0]='团队游commit失败率';
        bigTitle[1]='APP失败率';
        bigTitle[2]='Online失败率';
        bigTitle[3]='H5失败率';
        bigTitle[4]='offline失败率';
        var smallTitle = new Array();
        smallTitle[0] = '失败率';
        smallTitle[1] = '历史同期失败率';
        var div = new Array();
        div[0]='pkgallcommit';div[1]='pkgappcommit';div[2]='pkgonlinecommit';div[3]='pkgh5commit';
	    div[4]='pkgofflinecommit';
        var orderSquence = new Array();
        orderSquence[0] = 60;orderSquence[1] = 61;orderSquence[2] = 62;orderSquence[3] = 63;orderSquence[4] = 64;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 5, orderSquence, days, 10 * 2)
    }
}
//签证commit
function visacommit()
{
    var startDate=$("#startdate5").val();
    var endDate=$("#enddate5").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#visacommitH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='visaall' style='height:350px;float:left;clear:left;width:"+bc_chart_width+"px;margin-top: 5px'></div><div id='visaapp' style='height:350px;float:left;clear:right;width:"+bc_chart_width+"px;margin-left:10px;margin-top: 5px '></div><div id='visaonline' style='height:350px;float:left;clear:left;margin-top: 5px;width:"+bc_chart_width+"px;'></div><div id='visah5' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:"+bc_chart_width+"px; '></div>")
     if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else {
        var url = '/EagleEye/ajax/visacommitnew/' + getLastYear(startDate) + '/' + getLastYear(endDate) + '/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle = [];
        bigTitle[0]='签证commit失败率';
        bigTitle[1]='APP失败率';
        bigTitle[2]='Online失败率';
        bigTitle[3]='H5失败率';
        var smallTitle = new Array();
        smallTitle[0] = '失败率';
        smallTitle[1] = '历史同期失败率';
        var div = new Array();
        div[0]='visaall';div[1]='visaapp';div[2]='visaonline';div[3]='visah5';
        var orderSquence = new Array();
        orderSquence[0] = 65;orderSquence[1] = 66;orderSquence[2] = 67;orderSquence[3] = 68;
        handlerCurve(url, div, bigTitle, smallTitle, choseTimeArray, 4, orderSquence, days, 3 * 2)
    }


}

//用于画饼形图2
function getPieData(retobj,k)//k=1 度假总订单android/iphone占比  k=2 iphone个版本占比
{
    var pieSeriesTotal;     //k=3 自由行总订单android/iphone占比  k=4 iphone个版本占比
    var pieSeriesIphone;   //k=5 团队游总订单android/iphone占比  k=6 iphone个版本占比
                            //k=7 签证总订单android/iphone占比  k=8 iphone个版本占比
    //var pieSeriesTotal=[{name: 'android',y: 88.2},{name: 'iphone',y:11.8}];
   if(k==1) //度假总订单
   {
        var android=retobj.value[0][3] +retobj.value[1][3]+retobj.value[2][3]+retobj.value[3][3];
        var iphone=retobj.value[4][3] +retobj.value[5][3]+retobj.value[6][3]+retobj.value[7][3];
        var androidRate=(android*100/(android+iphone)).toFixed(2);
        var iphoneRate=(iphone*100/(android+iphone)).toFixed(2);
        pieSeriesTotal=[{name: 'android',y: parseFloat(androidRate)},{name: 'iphone',y:parseFloat(iphoneRate)}];
        return pieSeriesTotal;
   }
    if(k==2)//度假iphone个版本
    {
        var iphone_611=retobj.value[8][3] +retobj.value[9][3]+retobj.value[10][3]+retobj.value[11][3];;
        var iphone_612=retobj.value[12][3] +retobj.value[13][3]+retobj.value[14][3]+retobj.value[15][3];;
        var iphone_613=retobj.value[16][3] +retobj.value[17][3]+retobj.value[18][3]+retobj.value[19][3];;
        var iphone_614=retobj.value[20][3] +retobj.value[21][3]+retobj.value[22][3]+retobj.value[23][3];
        var iphone_615=retobj.value[24][3] +retobj.value[25][3]+retobj.value[26][3]+retobj.value[27][3];
        var iphone_616=retobj.value[28][3] +retobj.value[29][3]+retobj.value[30][3]+retobj.value[31][3];
        var iphone_617=retobj.value[32][3] +retobj.value[33][3]+retobj.value[34][3]+retobj.value[35][3];
        var iphone_others=retobj.value[36][3] +retobj.value[37][3]+retobj.value[38][3]+retobj.value[39][3];
        console.log("retobj.value[32][3]:"+retobj.value[32][3]);

        var iphone_611Rate=(iphone_611*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_612Rate=(iphone_612*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_613Rate=(iphone_613*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_614Rate=(iphone_614*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_615Rate=(iphone_615*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_616Rate=(iphone_616*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_617Rate=(iphone_617*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_othersRate=(iphone_others*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_others)).toFixed(2);
        pieSeriesIphone=[{name: 'iphone_6.17',y: parseFloat(iphone_617Rate)},{name: 'iphone_6.16',y: parseFloat(iphone_616Rate)},{name: 'iphone_6.15',y: parseFloat(iphone_615Rate)},{name: 'iphone_6.14',y: parseFloat(iphone_614Rate)},{name: 'iphone_6.13',y: parseFloat(iphone_613Rate)},{name: 'iphone_6.12',y:parseFloat(iphone_612Rate)},{name: 'iphone_6.11',y: parseFloat(iphone_611Rate)},{name: 'iphone_others',y: parseFloat(iphone_othersRate)}];
       console.log("pieSeriesIphone:"+pieSeriesIphone[0].y);
        return pieSeriesIphone;
    }
    if(k==3)//自由行总订单
    {
        var android=retobj.value[0][3];
        var iphone=retobj.value[4][3] ;
        var  androidRate=(android*100/(android+iphone)).toFixed(2);
        var iphoneRate=(iphone*100/(android+iphone)).toFixed(2);
        pieSeriesTotal=[{name: 'android',y: parseFloat(androidRate)},{name: 'iphone',y:parseFloat(iphoneRate)}];
        return pieSeriesTotal;
    }
    if(k==4)//自由行iphone
    {
        var iphone_611=retobj.value[8][3]
        var iphone_612=retobj.value[12][3] ;
        var iphone_613=retobj.value[16][3] ;
        var iphone_614=retobj.value[20][3] ;
        var iphone_615=retobj.value[24][3] ;
        var iphone_616=retobj.value[28][3] ;
        var iphone_617=retobj.value[32][3] ;
        var iphone_others=retobj.value[36][3] ;

        var iphone_611Rate=(iphone_611*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_612Rate=(iphone_612*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_613Rate=(iphone_613*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_614Rate=(iphone_614*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_615Rate=(iphone_615*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_616Rate=(iphone_616*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_617Rate=(iphone_617*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_othersRate=(iphone_others*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_others)).toFixed(2);
        pieSeriesIphone=[{name: 'iphone_6.17',y: parseFloat(iphone_617Rate)},{name: 'iphone_6.16',y: parseFloat(iphone_616Rate)},{name: 'iphone_6.15',y: parseFloat(iphone_615Rate)},{name: 'iphone_6.14',y: parseFloat(iphone_614Rate)},{name: 'iphone_6.13',y: parseFloat(iphone_613Rate)},{name: 'iphone_6.12',y:parseFloat(iphone_612Rate)},{name: 'iphone_6.11',y: parseFloat(iphone_611Rate)},{name: 'iphone_others',y: parseFloat(iphone_othersRate)}];
        return pieSeriesIphone;
    }
    if(k==5)//团队总定订单
    {
        var android=retobj.value[1][3]+retobj.value[2][3];
        var iphone=retobj.value[5][3]+retobj.value[6][3];
        var  androidRate=(android*100/(android+iphone)).toFixed(2);
        var iphoneRate=(iphone*100/(android+iphone)).toFixed(2);
        pieSeriesTotal=[{name: 'android',y: parseFloat(androidRate)},{name: 'iphone',y:parseFloat(iphoneRate)}];
        return pieSeriesTotal;
    }
    if(k==6)//团队iphone个版本
    {
        var iphone_611=retobj.value[9][3]+retobj.value[10][3];
        var iphone_612=retobj.value[13][3]+retobj.value[14][3];
        var iphone_613=retobj.value[17][3]+retobj.value[18][3];
        var iphone_614=retobj.value[21][3]+retobj.value[22][3];
        var iphone_615=retobj.value[25][3]+retobj.value[26][3];
        var iphone_616=retobj.value[29][3]+retobj.value[30][3];
        var iphone_617=retobj.value[33][3]+retobj.value[34][3];
        var iphone_others=retobj.value[37][3]+retobj.value[38][3];

        var iphone_611Rate=(iphone_611*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_612Rate=(iphone_612*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_613Rate=(iphone_613*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_614Rate=(iphone_614*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_615Rate=(iphone_615*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_616Rate=(iphone_616*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_617Rate=(iphone_617*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_othersRate=(iphone_others*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_others)).toFixed(2);
        pieSeriesIphone=[{name: 'iphone_6.17',y: parseFloat(iphone_617Rate)},{name: 'iphone_6.16',y: parseFloat(iphone_616Rate)},{name: 'iphone_6.15',y: parseFloat(iphone_615Rate)},{name: 'iphone_6.14',y: parseFloat(iphone_614Rate)},{name: 'iphone_6.13',y: parseFloat(iphone_613Rate)},{name: 'iphone_6.12',y:parseFloat(iphone_612Rate)},{name: 'iphone_6.11',y: parseFloat(iphone_611Rate)},{name: 'iphone_others',y: parseFloat(iphone_othersRate)}];
        return pieSeriesIphone;
    }
    if(k==7)//签证总订单
    {
         var android=retobj.value[3][3];
        var iphone=retobj.value[7][3] ;
        var  androidRate=(android*100/(android+iphone)).toFixed(2);
        var iphoneRate=(iphone*100/(android+iphone)).toFixed(2);
        pieSeriesTotal=[{name: 'android',y: parseFloat(androidRate)},{name: 'iphone',y:parseFloat(iphoneRate)}];
        return pieSeriesTotal;
    }
    if(k==8)//签证iphone个版本
    {
        var iphone_611=retobj.value[11][3];;
        var iphone_612=retobj.value[15][3];;
        var iphone_613=retobj.value[19][3];;
        var iphone_614=retobj.value[23][3];
        var iphone_615=retobj.value[27][3];
        var iphone_616=retobj.value[31][3];
        var iphone_617=retobj.value[35][3];
        var iphone_others=retobj.value[39][3];

        var iphone_611Rate=(iphone_611*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_612Rate=(iphone_612*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_613Rate=(iphone_613*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_614Rate=(iphone_614*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_615Rate=(iphone_615*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_616Rate=(iphone_616*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_617Rate=(iphone_617*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_617+iphone_others)).toFixed(2);
        var iphone_othersRate=(iphone_others*100/(iphone_611+iphone_612+iphone_613+iphone_614+iphone_615+iphone_616+iphone_others)).toFixed(2);
        pieSeriesIphone=[{name: 'iphone_6.17',y: parseFloat(iphone_617Rate)},{name: 'iphone_6.16',y: parseFloat(iphone_616Rate)},{name: 'iphone_6.15',y: parseFloat(iphone_615Rate)},{name: 'iphone_6.14',y: parseFloat(iphone_614Rate)},{name: 'iphone_6.13',y: parseFloat(iphone_613Rate)},{name: 'iphone_6.12',y:parseFloat(iphone_612Rate)},{name: 'iphone_6.11',y: parseFloat(iphone_611Rate)},{name: 'iphone_others',y: parseFloat(iphone_othersRate)}];
        return pieSeriesIphone;
    }



}

//画饼形图1
function drawPie(url,pieDivId,bigTitle,k)
{
   $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray =  getPieData(reObj,k);

        $('#'+pieDivId).highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: bigTitle
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '订单占比',
            data: dataArray
        }]
    });

        })

}
 function toDecimal(x) {
            var f = parseFloat(x);
            if (isNaN(f)) {
                return;
            }
            f = Math.round(x*100)/100;
            return f;
        }

