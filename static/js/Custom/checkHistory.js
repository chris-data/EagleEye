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
    $checkContainer.append("<div id='all' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Dp' style='height:300px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div><div id='Sdp' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Online' style='height:300px;width:49%;float:left;margin-left:10px;margin-top:2px'></div><div id='Wireless' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Offline' style='height:300px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div>")
    var url = '/EagleEye/ajax/allCheck/'+sysdate(-30)+'/'+sysdate(0);
     var smallTitle=new Array();
    smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
    var orderSquence= new Array();
    orderSquence[0]=0;orderSquence[1]=1;orderSquence[2]=2;orderSquence[3]=3;orderSquence[4]=4;orderSquence[5]=5;
    drawCurve(url, 'spline', nameArray, timeArray, 0,null,smallTitle,orderSquence)

}
var  chart_width ;
//自由行可订检查
function checkSDP()
{   //2016-05-31

        //第一步  确定X轴   获取日历框选择的起始时间  将起始时间之内的时间塞进数据以备做成X轴横坐标
    var startDate=$("#startdate1").val();
    var endDate=$("#enddate1").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $checkContainer = $("#checkContainer")
    $checkContainer.empty();//清空翻页标签
    $checkContainer.append("<div id='all' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Dp' style='height:300px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div><div id='Sdp' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Online' style='height:300px;width:49%;float:left;margin-left:10px;margin-top:2px'></div><div id='Wireless' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Offline' style='height:300px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div>")
    chart_width = $("#all").width();
     if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
     else if(startDate<'2016-05-13')
     {
          alert("之前的数据因没有埋点暂无数据记录")
     }
    else {
         var url = '/EagleEye/ajax/newcheckhis/' + startDate + '/' + endDate;
         var days = getDays(startDate, endDate) + 1;
         var bigTitle = [];
         bigTitle[0] = 'SDP Online-详情页';
         bigTitle[1] = 'SDP APP-详情页';
         bigTitle[2] = 'SDP Online-填写页';
         bigTitle[3] = 'SDP APP-填写页';
         bigTitle[4] = '新机票引擎';
         bigTitle[5] = '旧机票引擎';
         var smallTitle = new Array();
         smallTitle[0] = '失败率';
         smallTitle[1] = '失败数';
         smallTitle[2] = '调用数'
         var div = new Array();
         div[0] = 'all';
         div[1] = 'Dp';
         div[2] = 'Sdp';
         div[3] = 'Online';
         div[4] = 'Wireless';
         div[5] = 'Offline';
         var orderSquence = new Array();
         orderSquence[0] = 4;
         orderSquence[1] = 5;
         orderSquence[2] = 6;
         orderSquence[3] = 7;
         orderSquence[4] = 8;
         orderSquence[5] = 9;
         appcrCurve(url, div, bigTitle, smallTitle, choseTimeArray, 6, orderSquence, days, 20)
     }




}
//自由行SDP可订检查   分资源
function checkResource()
{

    var startDate=$("#startdate2").val();
    var endDate=$("#enddate2").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $checkContainer = $("#checkResourceH")
    $checkContainer.empty();//清空翻页标签
    $checkContainer.append("<div id='char11' style='height:300px;width:"+chart_width+"px;float:left;clear:left;margin-top: 10px'></div><div id='char12' style='height:300px;width:"+chart_width+"px;float:left;margin-left:10px;margin-top: 10px '></div><div id='char13' style='height:300px;width:"+chart_width+"px;float:left;clear:left;margin-top: 10px'></div><div id='char14' style='height:300px;width:"+chart_width+"px;float:left;margin-left:10px;margin-top:10px'></div>")
     var url = '/EagleEye/ajax/newcheckhis/'+startDate+'/'+endDate ;
     var days=getDays(startDate,endDate)+1;
      var bigTitle = [];
    bigTitle[0] = 'SDP 机票';
    bigTitle[1] = 'SDP 酒店';
    bigTitle[2] = 'SDP 可选项';
    bigTitle[3] = 'SDP 产品';
     var smallTitle=new Array();
     smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var div=new Array();
     div[0]='char11'; div[1]='char12'; div[2]='char13';div[3]='char14';
     var orderSquence=new Array();
     orderSquence[0]=10;orderSquence[1]=11;orderSquence[2]=12;orderSquence[3]=13;
     appcrCurve(url,div,bigTitle,smallTitle,choseTimeArray,4,orderSquence,days,20)


}
//自由行可订检查 DP
function checkDP()
{

    var startDate=$("#startdate3").val();
    var endDate=$("#enddate3").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $checkContainer = $("#DPH")
    $checkContainer.empty();//清空翻页标签
   $checkContainer.append("<div id='char1' style='height:300px;width:"+chart_width+"px;float:left;clear:left;margin-top: 10px'></div><div id='char2' style='height:300px;width:"+chart_width+"px;float:left;margin-left:10px;margin-top: 10px '></div><div id='char3' style='height:300px;width:"+chart_width+"px;float:left;clear:left;margin-top: 10px'></div><div id='char4' style='height:300px;width:"+chart_width+"px;float:left;margin-left:10px;margin-top:10px'></div>")
    var url = '/EagleEye/ajax/olddpcheckhis/'+startDate+'/'+endDate ;
     var days=getDays(startDate,endDate)+1;
      var bigTitle = [];
    bigTitle[0] = 'SDP 机票';
    bigTitle[1] = 'SDP 酒店';
    bigTitle[2] = 'SDP 可选项';
    bigTitle[3] = 'SDP 产品';
     var smallTitle=new Array();
     smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var div=new Array();
     div[0]='char1'; div[1]='char2'; div[2]='char3';div[3]='char4';
     var orderSquence=new Array();
     orderSquence[0]=14;orderSquence[1]=15;orderSquence[2]=16;orderSquence[3]=17;
     appcrCurve(url,div,bigTitle,smallTitle,choseTimeArray,4,orderSquence,days,6)


}


//自由行查询为空
var invoke_chart_width;
function diyServiceInvoke()
{


    var startDate=$("#startdate1").val();
    var endDate=$("#enddate1").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
    //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#orderContainer")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='diyall' style='height:350px;margin-top:5px;width:99%'></div><div id='dp' style='height:350px;float:left;clear:left;width:49%;margin-top: 5px'></div><div id='sdp' style='height:350px;float:left;clear:right;width:49%;margin-left:10px;margin-top: 5px '></div><div id='sdponlineDe' style='height:350px;float:left;clear:left;margin-top: 5px;width:49%'></div><div id='sdponlineIn' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:49% '></div><div id='sdpwrilessDe' style='height:350px;float:left;clear:left;margin-top: 5px;width:49%'></div><div id='sdpwrilessIn' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:49% '></div><div id='dponlineDe' style='height:350px;float:left;clear:left;margin-top: 5px;width:49%'></div><div id='dponlineIn' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:49% '></div><div id='dpwirelessDe' style='height:350px;float:left;clear:left;margin-top: 5px;width:49%'></div><div id='dpwirelessIn' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:49% '></div>")
     invoke_chart_width= $("#dp").width();
     if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else{
        var url = '/EagleEye/ajax/diyservicehis/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle=new Array();
        bigTitle[0]='总体为空率(包含DP和SDP)';
        bigTitle[1]='DP为空率';
        bigTitle[2]='SDP为空率';
        bigTitle[3]='DP Online国内为空率';
        bigTitle[4]='SDP Online国内为空率';
        bigTitle[5]='DP 无线国内为空率';
        bigTitle[6]='SDP 无线国内为空率';
        bigTitle[7]='DP Online国际为空率';
        bigTitle[8]='SDP Online国际为空率';
        bigTitle[9]='DP 无线国际为空率';
        bigTitle[10]='SDP 无线国际为空率';
         var smallTitle = new Array();
         smallTitle[0] = '为空率';
         smallTitle[1] = '为空数';
         smallTitle[2] = '调用数'
        var div=new Array();
        div[0]='diyall';div[1]='dp';div[2]='sdp';div[3]='sdponlineDe';
        div[4]='sdponlineIn';div[5]='sdpwrilessDe';div[6]='sdpwrilessIn';
        div[7]='dponlineDe';div[8]='dponlineIn';div[9]='dpwirelessDe';div[10]='dpwirelessIn';
         var orderSquence = new Array();
         orderSquence[0] = 27;orderSquence[1] = 28;
         orderSquence[2] = 29;orderSquence[3] = 30;
         orderSquence[4] = 31;orderSquence[5] = 32;
         orderSquence[6] = 33;orderSquence[7] = 34;
         orderSquence[8] = 35;orderSquence[9] = 36;
         orderSquence[10] = 37;
         appcrCurve(url, div, bigTitle, smallTitle, choseTimeArray, 11, orderSquence, days, 38)

         }


}

//自由行机票查询为空
function diyFlightService()
{
     var startDate=$("#startdate2").val();
    var endDate=$("#enddate2").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
    //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#pkgbookH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='dpDe' style='height:350px;float:left;clear:left;width:"+invoke_chart_width+"px;margin-top: 5px'></div><div id='sdpDe' style='height:350px;float:left;clear:right;width:"+invoke_chart_width+"px;margin-left:10px;margin-top: 5px '></div><div id='dpIn' style='height:350px;float:left;clear:left;margin-top: 5px;width:"+invoke_chart_width+"px;'></div><div id='sdpIn' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:"+invoke_chart_width+"px;'></div>")
         if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else{
        var url = '/EagleEye/ajax/diyservicehis/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle=new Array();
        bigTitle[0]='DP 国内机票';
        bigTitle[1]='SDP 国内机票';
        bigTitle[2]='DP 国际机票';
        bigTitle[3]='SDP 国际机票';
         var smallTitle = new Array();
         smallTitle[0] = '为空率';
         smallTitle[1] = '为空数';
         smallTitle[2] = '调用数'
        var div=new Array();
         div[0]='dpDe';div[1]='sdpDe';div[2]='dpIn';div[3]='sdpIn';
         var orderSquence = new Array();
         orderSquence[0] = 38;orderSquence[1] = 39;
         orderSquence[2] = 40;orderSquence[3] = 41;
         appcrCurve(url, div, bigTitle, smallTitle, choseTimeArray, 4, orderSquence, days, 38)

         }
}

//自由行酒店查询为空
function diyHotelService()
{

     var startDate=$("#startdate3").val();
    var endDate=$("#enddate3").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
    //将选定的日期作为参数请求对应日期的数据
    $orderContainer = $("#pkgcommitH")
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='dpDeH' style='height:350px;float:left;clear:left;width:"+invoke_chart_width+"px;margin-top: 5px'></div><div id='sdpDeH' style='height:350px;float:left;clear:right;width:"+invoke_chart_width+"px;margin-left:10px;margin-top: 5px '></div><div id='dpInH' style='height:350px;float:left;clear:left;margin-top: 5px;width:"+invoke_chart_width+"px;'></div><div id='sdpInH' style='height:350px;float:left;clear:right;margin-left:10px;margin-top: 5px;width:"+invoke_chart_width+"px; '></div>")
        if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else{
        var url = '/EagleEye/ajax/diyservicehis/' + startDate + '/' + endDate;
        var days = getDays(startDate, endDate) + 1;
        var bigTitle=new Array();
         bigTitle[0]='DP 国内酒店';
        bigTitle[1]='SDP 国内酒店';
        bigTitle[2]='DP 国际酒店';
        bigTitle[3]='SDP 国际酒店';
         var smallTitle = new Array();
         smallTitle[0] = '为空率';
         smallTitle[1] = '为空数';
         smallTitle[2] = '调用数'
         var div=new Array();
         div[0]='dpDeH';div[1]='sdpDeH';div[2]='dpInH';div[3]='sdpInH';
         var orderSquence = new Array();
         orderSquence[0] = 42;orderSquence[1] = 43;
         orderSquence[2] = 44;orderSquence[3] = 45;
         appcrCurve(url, div, bigTitle, smallTitle, choseTimeArray, 4, orderSquence, days, 38)

         }
}

//团队游 APP
var pkg_chart_width;
function pkgAPP()
{
         //第一步  确定X轴   获取日历框选择的起始时间  将起始时间之内的时间塞进数据以备做成X轴横坐标
    var startDate=$("#startdate1").val();
    var endDate=$("#enddate1").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $checkContainer = $("#pkgAPPH")
    $checkContainer.empty();//清空翻页标签
     $checkContainer.append("<div id='pkgAPPAll' style='height:300px;'></div><div id='pkgAPP1' style='height:300px;margin-top:10px'></div><div id='pkgAPP2' style='height:300px;margin-top:10px'></div>")
    var url = '/EagleEye/ajax/pkgcheckhis/'+startDate+'/'+endDate ;
    pkg_chart_width= $("#pkgAPPAll").width();
     var  days=getDays(startDate,endDate)+1;
     var bigTitle = [];
    bigTitle[0] = 'APP 全部失败率';
    bigTitle[1] = 'APP 正常预订失败率';
    bigTitle[2] = 'APP 促销秒杀失败率';
     var smallTitle=new Array();
     smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var div=new Array();
     div[0]='pkgAPPAll'; div[1]='pkgAPP1'; div[2]='pkgAPP2';
     var orderSquence=new Array();
     orderSquence[0]=18;orderSquence[1]=19;orderSquence[2]=20;
     appcrCurve(url,div,bigTitle,smallTitle,choseTimeArray,3,orderSquence,days,18)

}

//团队游 Online
function pkgOnline()
{

          //第一步  确定X轴   获取日历框选择的起始时间  将起始时间之内的时间塞进数据以备做成X轴横坐标
    var startDate=$("#startdate2").val();
    var endDate=$("#enddate2").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $checkContainer = $("#pkgOnlineH")
    $checkContainer.empty();//清空翻页标签
     $checkContainer.append("<div id='pkgOnlineAll' style='height:300px;width:"+pkg_chart_width+"px;'></div><div id='pkgOnline1' style='height:300px;width:"+pkg_chart_width+"px;margin-top:10px'></div><div id='pkgOnline2' style='height:300px;width:"+pkg_chart_width+"px;margin-top:10px'></div>")
    var url = '/EagleEye/ajax/pkgcheckhis/'+startDate+'/'+endDate ;
     var  days=getDays(startDate,endDate)+1;
     var bigTitle = [];
    bigTitle[0] = 'Online 全部失败率';
    bigTitle[1] = 'Online 正常预订失败率';
    bigTitle[2] = 'Online 促销秒杀失败率';
     var smallTitle=new Array();
     smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var div=new Array();
     div[0]='pkgOnlineAll'; div[1]='pkgOnline1'; div[2]='pkgOnline2';
     var orderSquence=new Array();
     orderSquence[0]=21;orderSquence[1]=22;orderSquence[2]=23;
     appcrCurve(url,div,bigTitle,smallTitle,choseTimeArray,3,orderSquence,days,18)
}

//团队游 Offline
function pkgOffline()
{
          //第一步  确定X轴   获取日历框选择的起始时间  将起始时间之内的时间塞进数据以备做成X轴横坐标
    var startDate=$("#startdate2").val();
    var endDate=$("#enddate2").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
          //将选定的日期作为参数请求对应日期的数据
    $checkContainer = $("#pkgOfflineH")
    $checkContainer.empty();//清空翻页标签
     $checkContainer.append("<div id='pkgOfflineAll' style='height:300px;width:"+pkg_chart_width+"px;'></div><div id='pkgOffline1' style='height:300px;width:"+pkg_chart_width+"px;margin-top:10px'></div><div id='pkgOffline2' style='height:300px;width:"+pkg_chart_width+"px;margin-top:10px'></div>")
     var url = '/EagleEye/ajax/pkgcheckhis/'+startDate+'/'+endDate ;
     var days=getDays(startDate,endDate)+1;
     var bigTitle = [];
    bigTitle[0] = 'Offline 全部失败率';
    bigTitle[1] = 'Offline 正常预订失败率';
    bigTitle[2] = 'Offline 促销秒杀失败率';
     var smallTitle=new Array();
     smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var div=new Array();
     div[0]='pkgOfflineAll'; div[1]='pkgOffline1'; div[2]='pkgOffline2';
     var orderSquence=new Array();
     orderSquence[0]=24;orderSquence[1]=25;orderSquence[2]=26;
     appcrCurve(url,div,bigTitle,smallTitle,choseTimeArray,3,orderSquence,days,18)
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


function getArray(retobj, k,flag) //flag=0异常  flag=1正常 //k=0  全部,  k=1 dp  ,k=2sdp  ,k=3online ,k=4无线 ,k=5 offline    k=6 dp国内  k=7dp 国际  k=8  sdp国内  k=9sdp国际
{                             //k=10 机票国际  k=11机票大系统  k=12机票度假 k=13 机票其他  k=14 机票全部
    var resultThree = [];      //k=15 酒店全部  k=16 x资源; K=17单选项  ;k=18  当地玩乐
    var i = 0;                 //k=19 总体度假app转化率 k=20自由行转化率  k=21  团队转化率
    var fail = [];
    var total = [];
    var rate = [];
    var seriesArray = [];
    for (var j = 0; j < 30; j++) {
        if (k == 1) //dp
        {
            fail[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4];//DP失败数
            total[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 6 + 12 * j][4] + retobj.value[i + 7 + 12 * j][4] + retobj.value[i + 8 + 12 * j][4];//DP总数
             var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

        if (k == 2)//SDP
        {
            fail[j] = retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//SDP失败数
            total[j] = retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//DP总数
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

        if (k == 5)//offline
        {
            fail[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 3 + 12 * j][4];//Offline失败数
            total[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 6 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4];//Offline总数
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

        if (k == 3)//online
        {
            fail[j] = retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4];//online失败数
            total[j] = retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 7 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4];//online总数
               var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 4)//wireless
        {
            fail[j] = retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//wireless失败数
            total[j] = retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 8 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//wireless总数
             var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 0) //全部
        {
            fail[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4];//DP失败数
            total[j] = retobj.value[i + 12 * j][4] + retobj.value[i + 1 + 12 * j][4] + retobj.value[i + 2 + 12 * j][4] + retobj.value[i + 3 + 12 * j][4] + retobj.value[i + 4 + 12 * j][4] + retobj.value[i + 5 + 12 * j][4] + retobj.value[i + 6 + 12 * j][4] + retobj.value[i + 7 + 12 * j][4] + retobj.value[i + 8 + 12 * j][4] + retobj.value[i + 9 + 12 * j][4] + retobj.value[i + 10 + 12 * j][4] + retobj.value[i + 11 + 12 * j][4];//全部总数
             var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 6) {

            fail[j] = retobj.value[8 * j][4]  //DP 国内失败
            total[j] = retobj.value[8 * j][4] + retobj.value[4 + 8 * j][4]//DP国际总数
               var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 7) {
            fail[j] = retobj.value[i + 1 + 8 * j][4];//DP国际 失败
            total[j] = retobj.value[i + 1 + 8 * j][4] + retobj.value[i + 5 + 8 * j][4];//DP国际总数
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 8) {
            fail[j] = retobj.value[i + 2 + 8 * j][4];//SDP国内 失败
            total[j] = retobj.value[i + 2 + 8 * j][4] + retobj.value[i + 6 + 8 * j][4];//SDP国内总数
              var x= (fail[j]*100/ total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 9) {

            fail[j] = retobj.value[i + 3 + 8 * j][4];//SDP国际 失败
            total[j] = retobj.value[i + 3 + 8 * j][4] + retobj.value[i + 7 + 8 * j][4];//SDP国际总数
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==10)
        {
            fail[j] = retobj.value[i + 1 + 8 * j][3];//机票 国际 失败
            total[j] = retobj.value[i + 1 + 8 * j][3] + retobj.value[i + 5 + 8 * j][3];//机票国际总数
               var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==11)
        {
             fail[j] = retobj.value[i + 2 + 8 * j][3];//机票 大系统 失败
            total[j] = retobj.value[i + 2 + 8 * j][3] + retobj.value[i + 6 + 8 * j][3];//机票大系统总数
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat

        }
        if(k==12)
        {

            fail[j] = retobj.value[i + 3 + 8 * j][3];//机票 度假 失败
            total[j] = retobj.value[i + 3 + 8 * j][3] + retobj.value[i + 7 + 8 * j][3];//机票度假总数
              var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat


        }
        if(k==13)
        {
            fail[j] = retobj.value[i + 0 + 8 * j][3];//机票 其他 失败
            total[j] = retobj.value[i + 0 + 8 * j][3] + retobj.value[i + 4+ 8 * j][3];//机票其他总数
             var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==14)
        {
            fail[j] = retobj.value[i + 0 + 8 * j][3]+retobj.value[i +1+ 8 * j][3]+retobj.value[i + 2 + 8 * j][3]+retobj.value[i + 3+ 8 * j][3];//机票 全部 失败
            total[j] =fail[j]+ retobj.value[i + 4 + 8 * j][3] + retobj.value[i + 5+ 8 * j][3]+ retobj.value[i + 6+ 8 * j][3]+ retobj.value[i + 7+ 8 * j][3];//机票全部总数
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if(k==15)//资源--酒店
        {
             fail[j] = retobj.value[3 + 8 * j][3];//机票 全部 失败
            total[j] = retobj.value[3 + 8 * j][3] + retobj.value[ 7+ 8 * j][3];//机票全部总数
            console.log(' total[j]:'+ total[j]);
             var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率
        }
          if(k==16)//资源--x资源
        {
             fail[j] = retobj.value[i  + 8 * j][3];//机票 全部 失败
            total[j] = retobj.value[i  + 8 * j][3] + retobj.value[i + 4+ 8 * j][3];//机票全部总数
              var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
          if(k==17)//资源--单选项
        {
             fail[j] = retobj.value[i + 1 + 8 * j][3];//机票 全部 失败
            total[j] = retobj.value[i + 1+ 8 * j][3] + retobj.value[i + 5+ 8 * j][3];//机票全部总数
              var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
          if(k==18)//资源--当地玩乐
        {
             fail[j] = retobj.value[i + 2 + 8 * j][3];//机票 全部 失败
            total[j] = retobj.value[i + 2 + 8 * j][3] + retobj.value[i + 6+ 8 * j][3];//机票全部总数
            var x=0;
            if(total[j]!=0)
            {
                 var x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }


    }
    resultThree[0] = rate;
    resultThree[1] = fail;
    resultThree[2] = total;
    return resultThree;

}


function options(divId,type,bigTitle,timeArray,smallTitle,days)
{


    var options={};
    var data1 = {};
    var data2 = {};
    var data3 = {};
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
                tooltip: { valueSuffix: ' 个' },
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
                }],
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
    return options;
}


function getresourceType(url,data1,data2,data3,divId,name,type,timeArray,k,smallTitle)
{

 var options1=options(divId,type,name,timeArray,smallTitle)
        var mychart1 = new Highcharts.Chart(options1);

        mychart1.showLoading('Loading data from server...');

         $.getJSON(url, function (data) {
            var reObj = data;
            var dataArray1 = getArray(reObj, k,null)
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
function drawCurve(url, type, nameArray, timeArray, pageid,resourceType,smallTitle,orderSquence)//pageid=0 首页;  pageid=1  分渠道; pageid=2 机票;
{
    var data1 = {};
    var data2 = {};
    var data3 = {};

    if (pageid == 1) {
        var options1=options('char1',type,nameArray[0],timeArray,smallTitle,5)
        var options2=options('char2',type,nameArray[1],timeArray,smallTitle,5)
        var options3=options('char3',type,nameArray[2],timeArray,smallTitle,5)
        var options4=options('char4',type,nameArray[3],timeArray,smallTitle,5)
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

            var dataArray1 = getArray(reObj, orderSquence[0],null)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);

            var dataArray2 = getArray(reObj,  orderSquence[1],null)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            var dataArray3 = getArray(reObj,  orderSquence[2],null)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            var dataArray4 = getArray(reObj,  orderSquence[3],null)
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
         var options1=options('all',type,nameArray[0],timeArray,smallTitle,5)
         var options2=options('Dp',type,nameArray[1],timeArray,smallTitle,5)
         var options3=options('Sdp',type,nameArray[2],timeArray,smallTitle,5)
         var options4=options('Online',type,nameArray[3],timeArray,smallTitle,5)
         var options5=options('Wireless',type,nameArray[4],timeArray,smallTitle,5)
         var options6=options('Offline',type,nameArray[5],timeArray,smallTitle,5)
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


            var dataArray1 = getArray(reObj,  orderSquence[0],null)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);

            var dataArray2 = getArray(reObj,  orderSquence[1],null)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            var dataArray3 = getArray(reObj,  orderSquence[2],null)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            var dataArray4 = getArray(reObj,  orderSquence[3],null)
            data1 = dataArray4[0];
            data2 = dataArray4[1];
            data3 = dataArray4[2];
            mychart4.series[0].setData(data1);
            mychart4.series[1].setData(data2);
            mychart4.series[2].setData(data3);
            var dataArray5 = getArray(reObj,  orderSquence[4],null)
            data1 = dataArray5[0];
            data2 = dataArray5[1];
            data3 = dataArray5[2];
            mychart5.series[0].setData(data1);
            mychart5.series[1].setData(data2);
            mychart5.series[2].setData(data3);
            var dataArray6 = getArray(reObj,  orderSquence[5],null)
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
        var options1=options('flight0',type,nameArray[0],timeArray,smallTitle,5)
        var options2=options('flight1',type,nameArray[1],timeArray,smallTitle,5)
        var options3=options('flight2',type,nameArray[2],timeArray,smallTitle,5)
        var options4=options('flight3',type,nameArray[3],timeArray,smallTitle,5)
        var options5=options('flight4',type,nameArray[4],timeArray,smallTitle,5)
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
            var dataArray1 = getArray(reObj,  orderSquence[0],null)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);
            var dataArray2 = getArray(reObj,  orderSquence[1],null)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            var dataArray3 = getArray(reObj,  orderSquence[2],null)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            var dataArray4 = getArray(reObj,  orderSquence[3],null)
            data1 = dataArray4[0];
            data2 = dataArray4[1];
            data3 = dataArray4[2];
            mychart4.series[0].setData(data1);
            mychart4.series[1].setData(data2);
            mychart4.series[2].setData(data3);
            var dataArray5 = getArray(reObj,  orderSquence[4],null)
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
            getresourceType(url,data1,data2,data3,'hotel0',nameArray[0],type,timeArray,15,smallTitle)
        }
        if(resourceType=='xResource')
        {
             getresourceType(url,data1,data2,data3,'xResource0',nameArray[0],type,timeArray,16,smallTitle)
        }
        if(resourceType=='oneSelect')
        {

            getresourceType(url,data1,data2,data3,'select0',nameArray[0],type,timeArray,17,smallTitle)
        }
         if(resourceType=='play')
        {

            getresourceType(url,data1,data2,data3,'play0',nameArray[0],type,timeArray,18,smallTitle)
        }
    }
    if (pageid == 5) {
        var options1=options('char11',type,nameArray[0],timeArray,smallTitle,5)
        var options2=options('char12',type,nameArray[1],timeArray,smallTitle,5)
        var options3=options('char13',type,nameArray[2],timeArray,smallTitle,5)
        var options4=options('char14',type,nameArray[3],timeArray,smallTitle,5)
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

            var dataArray1 = getArray(reObj, orderSquence[0],null)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);

            var dataArray2 = getArray(reObj,  orderSquence[1],null)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            var dataArray3 = getArray(reObj,  orderSquence[2],null)
            data1 = dataArray3[0];
            data2 = dataArray3[1];
            data3 = dataArray3[2];
            mychart3.series[0].setData(data1);
            mychart3.series[1].setData(data2);
            mychart3.series[2].setData(data3);
            var dataArray4 = getArray(reObj,  orderSquence[3],null)
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
    if(pageid==4){

        var options1=options('total',type,nameArray[0],timeArray,smallTitle,5)
        var options2=options('diy',type,nameArray[1],timeArray,smallTitle,5)
        var options3=options('pkg',type,nameArray[2],timeArray,smallTitle,5)
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        var mychart3 = new Highcharts.Chart(options3);

        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        mychart3.showLoading('Loading data from server...');
          $.getJSON(url, function (data) {

            var reObj = data;
              var timeArray=new Array();
              if(reObj.value.length<180)//说明昨天数据未跑完，那就显示前天及往前退29天
              {
                  //获取前天及前天以前的日期
                    var dd = new Date();
                    dd.setDate(dd.getDate() - 31);//获取往前30天日期
                    for (var m = 0; m < 29; m++) {
                        dd.setDate(dd.getDate() + 1);//往前30天日期+1
                        timeArray[m] = dd.Format("yyyy-MM-dd")
                        }
                  mychart1.xAxis[0].setCategories(timeArray)
                  mychart1.xAxis[0].setCategories(timeArray)
                  mychart1.xAxis[0].setCategories(timeArray)
                  //解决y轴问题  获取154个数据
                   var dataArray1 = getArray(reObj, 19,0)
                    data1 = dataArray1[0];
                    data2 = dataArray1[1];
                    data3 = dataArray1[2];
                    mychart1.series[0].setData(data1);
                    mychart1.series[1].setData(data2);
                    mychart1.series[2].setData(data3);

                     // mychart1.xAxis[0].setCategories(yyz) ;

                    var dataArray2 = getArray(reObj, 20,0)
                    data1 = dataArray2[0];
                    data2 = dataArray2[1];
                    data3 = dataArray2[2];
                    mychart2.series[0].setData(data1);
                    mychart2.series[1].setData(data2);
                    mychart2.series[2].setData(data3);
                    var dataArray3 = getArray(reObj, 21,0)
                    data1 = dataArray3[0];
                    data2 = dataArray3[1];
                    data3 = dataArray3[2];
                    mychart3.series[0].setData(data1);
                    mychart3.series[1].setData(data2);
                    mychart3.series[2].setData(data3);

                    mychart1.hideLoading();
                    mychart2.hideLoading();
                    mychart3.hideLoading();

              }
            else
              {
                     var dataArray1 = getArray(reObj, 19,1)
                    data1 = dataArray1[0];
                    data2 = dataArray1[1];
                    data3 = dataArray1[2];
                    mychart1.series[0].setData(data1);
                    mychart1.series[1].setData(data2);
                    mychart1.series[2].setData(data3);

                     // mychart1.xAxis[0].setCategories(yyz) ;

                    var dataArray2 = getArray(reObj, 20,1)
                    data1 = dataArray2[0];
                    data2 = dataArray2[1];
                    data3 = dataArray2[2];
                    mychart2.series[0].setData(data1);
                    mychart2.series[1].setData(data2);
                    mychart2.series[2].setData(data3);
                    var dataArray3 = getArray(reObj, 21,1)
                    data1 = dataArray3[0];
                    data2 = dataArray3[1];
                    data3 = dataArray3[2];
                    mychart3.series[0].setData(data1);
                    mychart3.series[1].setData(data2);
                    mychart3.series[2].setData(data3);

                    mychart1.hideLoading();
                    mychart2.hideLoading();
                    mychart3.hideLoading();


              }




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
    $checkContainer.append("<div id='char1' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='char2' style='height:300px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div><div id='char3' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='char4' style='height:300px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div>")
    var url = '/EagleEye/ajax/channelCheck/'+sysdate(-31)+'/'+sysdate(0) +'/'+sysdate(-31)+'/'+sysdate(0)+'/' +channelId;
    var nameArray = [];
    nameArray[0] = 'DP 国内';
    nameArray[1] = 'DP 国际';
    nameArray[2] = 'SDP 国内';
    nameArray[3] = 'SDP 国际';
     var smallTitle=new Array();
    smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var orderSquence= new Array();
    orderSquence[0]=6;orderSquence[1]=7;orderSquence[2]=8;orderSquence[3]=9;
    drawCurve(url, 'spline', nameArray, timeArray, 1,null,smallTitle,orderSquence)


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

    var url = '/EagleEye/ajax/fhCheckHistory/'+sysdate(-30)+'/'+sysdate(0)  ;
    var nameArray = [];
    nameArray[0] = '机票-全部';
    nameArray[1] = '机票-国际';
    nameArray[2] = '机票-大系统';
    nameArray[3] = '机票-度假';
    nameArray[4] = '机票-其他';
      var smallTitle=new Array();
    smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
    var orderSquence= new Array();
    orderSquence[0]=14;orderSquence[1]=10;orderSquence[2]=11;orderSquence[3]=12;orderSquence[4]=13;
    drawCurve(url, 'spline', nameArray, timeArray, 2,null,smallTitle,orderSquence)
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

        var url = '/EagleEye/ajax/htCheckHistory/'+sysdate(-30)+'/'+sysdate(0)  ;
        var nameArray = [];
        nameArray[0] = '酒店-全部';
        var smallTitle=new Array();
    smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
            var orderSquence= new Array();
    orderSquence[0]=15;orderSquence[1]=16;orderSquence[2]=17;orderSquence[3]=18;
        drawCurve(url, 'spline', nameArray, timeArray, 3,'hotel',smallTitle,orderSquence)
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

        var url = '/EagleEye/ajax/htCheckHistory/'+sysdate(-30)+'/'+sysdate(0)  ;
        var nameArray = [];
        nameArray[0] = 'X资源-全部';
         var smallTitle=new Array();
    smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
        drawCurve(url, 'spline', nameArray, timeArray, 3,'xResource',smallTitle,null)
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

        var url = '/EagleEye/ajax/htCheckHistory/'+sysdate(-30)+'/'+sysdate(0)  ;
        var nameArray = [];
        nameArray[0] = '单选项-全部';
          var smallTitle=new Array();
        smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
        drawCurve(url, 'spline', nameArray, timeArray, 3,'oneSelect',smallTitle,null)
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

        var url = '/EagleEye/ajax/htCheckHistory/'+sysdate(-30)+'/'+sysdate(0)  ;
        var nameArray = [];
        nameArray[0] = '当地玩乐-全部';
        var smallTitle=new Array();
        smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
        drawCurve(url, 'spline', nameArray, timeArray, 3,'play',smallTitle,null)
    }
}

//度假app 转化率
function appVaCR()
{
    //第一步  确定X轴   获取日历框选择的起始时间  将起始时间之内的时间塞进数据以备做成X轴横坐标
    var startDate=$("#startdate").val();
    var endDate=$("#enddate").val();
    var taday=new Date();
    var choseTimeArray=getChoseDate(startDate,endDate)
    if(startDate>endDate)
    {
        alert("开始时间比截止时间还大，你长点心吧！！！")
    }
    else if(endDate>=taday.Format("yyyy-MM-dd"))
    {
         alert("截止时间不能选择今天及以后的时间，记住没？？")
    }
    else
    {
         //将选定的日期作为参数请求对应日期的数据
     var url = '/EagleEye/ajax/appvacr/'+startDate+'/'+endDate ;
     var days=getDays(startDate,endDate)+1;
        console.log("days:"+days);
     var bigTitle = [];
     bigTitle[0] = 'APP-总体转化率';bigTitle[1] = 'APP-自由行转化率';bigTitle[2] = 'APP-团队游转化率';
     var smallTitle=new Array();
     smallTitle[0]='转化率';smallTitle[1]='订单';smallTitle[2]='流量(uv)'
     var div=new Array();
     div[0]='total'; div[1]='diy'; div[2]='pkg';
     var orderSquence=new Array();
     orderSquence[0]=1; orderSquence[1]=2; orderSquence[2]=3;
     appcrCurve(url,div,bigTitle,smallTitle,choseTimeArray,3,orderSquence,days,6) //6代表每天json数据长度为6

    }


}
//获取选定的时间数组
function getChoseDate(StartDate,EndDate)
{
   var choseTimeArray=new Array();
   var strSeparator = "-"; //日期分隔符
   var oDate1;
   var oDate2;
   var iDays;
   oDate1= StartDate.split(strSeparator);
   oDate2= EndDate.split(strSeparator);
   var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
   var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
   iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数
    var dd = new Date(oDate1[0],oDate1[1]-1, oDate1[2]);
    for(var i=0;i<=iDays;i++)
    {
        choseTimeArray[i]=dd.Format("yyyy-MM-dd");
        dd.setDate(dd.getDate() +1);

    }
    return choseTimeArray;
}

function appcrCurve(url,div,bigTitle,smallTitle,timeArray,pageid,orderSquence,days,jsonCnt) //pageid=3代表有3个图   k=2代表两根线
{
    var type= 'spline';
    if (pageid == 1) {
        var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle)
        var mychart1 = new Highcharts.Chart(options1);
        mychart1.showLoading('Loading data from server...');
        $.getJSON(url, function (data) {

            var reObj = data;

            var dataArray1 = getArray(reObj, orderSquence[0],null)
            for(var i=0;i<k;i++)
            {
              mychart1.series[i].setData(dataArray1[i]);
            }

            mychart1.hideLoading();
        })
    }
    else if(pageid == 2)
    {
        var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle,days)
        var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle,days)
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        $.getJSON(url, function (data) {
            var reObj = data;
            var dataArray1 = getArray(reObj, orderSquence[0],null)//gethandlerDataArray(reObj,days, k,flag,crcCnt)
            var dataArray2 = getArray(reObj, orderSquence[1],null)
            for(var i=0;i<smallTitle.length;i++)
            {
              mychart1.series[i].setData(dataArray1[i]);
              mychart2.series[i].setData(dataArray2[i]);
            }

            mychart1.hideLoading();
            mychart2.hideLoading();
        })
    }
     else if(pageid == 3)
    {
         var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle,days)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle,days)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle,days)
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
                 var dataArray1 = newGetArray(reObj, orderSquence[0],0,days-1)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],0,days-1)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],0,days-1)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                }
            }
            else{
                 var dataArray1 = newGetArray(reObj, orderSquence[0],1,days)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],1,days)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],1,days)
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
         var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle,days)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle,days)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle,days)
         var options4=options(div[3],type,bigTitle[3],timeArray,smallTitle,days)
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
                 var dataArray1 = newGetArray(reObj, orderSquence[0],0,days-1)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],0,days-1)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],0,days-1)
                 var dataArray4 = newGetArray(reObj, orderSquence[3],0,days-1)
                for(var i=0;i<smallTitle.length;i++)
                {
                    mychart1.series[i].setData(dataArray1[i]);
                    mychart2.series[i].setData(dataArray2[i]);
                    mychart3.series[i].setData(dataArray3[i]);
                    mychart4.series[i].setData(dataArray4[i]);
                }
            }
            else{
                 var dataArray1 = newGetArray(reObj, orderSquence[0],1,days)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],1,days)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],1,days)
                 var dataArray4 = newGetArray(reObj, orderSquence[3],1,days)
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
         var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle,days)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle,days)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle,days)
         var options4=options(div[3],type,bigTitle[3],timeArray,smallTitle,days)
         var options5=options(div[4],type,bigTitle[4],timeArray,smallTitle,days)
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
                 var dataArray1 = newGetArray(reObj, orderSquence[0],0,days-1)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],0,days-1)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],0,days-1)
                 var dataArray4 = newGetArray(reObj, orderSquence[3],0,days-1)
                 var dataArray5 = newGetArray(reObj, orderSquence[4],0,days-1)
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
                 var dataArray1 = newGetArray(reObj, orderSquence[0],1,days)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],1,days)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],1,days)
                 var dataArray4 = newGetArray(reObj, orderSquence[3],1,days)
                 var dataArray5 = newGetArray(reObj, orderSquence[4],1,days)
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
         var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle,days)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle,days)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle,days)
         var options4=options(div[3],type,bigTitle[3],timeArray,smallTitle,days)
         var options5=options(div[4],type,bigTitle[4],timeArray,smallTitle,days)
         var options6=options(div[5],type,bigTitle[5],timeArray,smallTitle,days)
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
                 var dataArray1 = newGetArray(reObj, orderSquence[0],0,days-1)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],0,days-1)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],0,days-1)
                 var dataArray4 = newGetArray(reObj, orderSquence[3],0,days-1)
                 var dataArray5 = newGetArray(reObj, orderSquence[4],0,days-1)
                 var dataArray6 = newGetArray(reObj, orderSquence[5],0,days-1)
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
                 var dataArray1 = newGetArray(reObj, orderSquence[0],1,days)
                 var dataArray2 = newGetArray(reObj, orderSquence[1],1,days)
                 var dataArray3 = newGetArray(reObj, orderSquence[2],1,days)
                 var dataArray4 = newGetArray(reObj, orderSquence[3],1,days)
                 var dataArray5 = newGetArray(reObj, orderSquence[4],1,days)
                 var dataArray6 = newGetArray(reObj, orderSquence[5],1,days)
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
          var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle)
         var options4=options(div[3],type,bigTitle[3],timeArray,smallTitle)
         var options5=options(div[4],type,bigTitle[4],timeArray,smallTitle)
         var options6=options(div[5],type,bigTitle[5],timeArray,smallTitle)
         var options7=options(div[6],type,bigTitle[6],timeArray,smallTitle)
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
             var dataArray1 = getArray(reObj, orderSquence[0],null)
             var dataArray2 = getArray(reObj, orderSquence[1],null)
             var dataArray3 = getArray(reObj, orderSquence[2],null)
             var dataArray4 = getArray(reObj, orderSquence[3],null)
             var dataArray5 = getArray(reObj, orderSquence[4],null)
             var dataArray6 = getArray(reObj, orderSquence[5],null)
             var dataArray7 = getArray(reObj, orderSquence[6],null)
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
          var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle)
         var options4=options(div[3],type,bigTitle[3],timeArray,smallTitle)
         var options5=options(div[4],type,bigTitle[4],timeArray,smallTitle)
         var options6=options(div[5],type,bigTitle[5],timeArray,smallTitle)
         var options7=options(div[6],type,bigTitle[6],timeArray,smallTitle)
         var options8=options(div[7],type,bigTitle[7],timeArray,smallTitle)
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
             var dataArray1 = getArray(reObj, orderSquence[0],null)
             var dataArray2 = getArray(reObj, orderSquence[1],null)
             var dataArray3 = getArray(reObj, orderSquence[2],null)
             var dataArray4 = getArray(reObj, orderSquence[3],null)
             var dataArray5 = getArray(reObj, orderSquence[4],null)
             var dataArray6 = getArray(reObj, orderSquence[5],null)
             var dataArray7 = getArray(reObj, orderSquence[6],null)
             var dataArray8 = getArray(reObj, orderSquence[7],null)
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
         var options1=options(div[0],type,bigTitle[0],timeArray,smallTitle)
         var options2=options(div[1],type,bigTitle[1],timeArray,smallTitle)
         var options3=options(div[2],type,bigTitle[2],timeArray,smallTitle)
         var options4=options(div[3],type,bigTitle[3],timeArray,smallTitle)
         var options5=options(div[4],type,bigTitle[4],timeArray,smallTitle)
         var options6=options(div[5],type,bigTitle[5],timeArray,smallTitle)
         var options7=options(div[6],type,bigTitle[6],timeArray,smallTitle)
         var options8=options(div[7],type,bigTitle[7],timeArray,smallTitle)
         var options9=options(div[8],type,bigTitle[8],timeArray,smallTitle)
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
             var dataArray1 = getArray(reObj, orderSquence[0],null)
             var dataArray2 = getArray(reObj, orderSquence[1],null)
             var dataArray3 = getArray(reObj, orderSquence[2],null)
             var dataArray4 = getArray(reObj, orderSquence[3],null)
             var dataArray5 = getArray(reObj, orderSquence[4],null)
             var dataArray6 = getArray(reObj, orderSquence[5],null)
             var dataArray7 = getArray(reObj, orderSquence[6],null)
             var dataArray8 = getArray(reObj, orderSquence[7],null)
             var dataArray9 = getArray(reObj, orderSquence[8],null)
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


function newGetArray(retobj, k,flag,days)  //如 k=1自由行转化率   flag=0异常 flag=1正常   days天数
{
   var resultThree = [];
    var fail = [];
    var total = [];
    var rate = [];
    for(var j=0;j<days;j++)
    {
        if(k==1)
        {
               fail[j] = retobj.value[2+ 6 * j][2];//总订单
            total[j] = retobj.value[ 5 + 6 * j][2];//总UV
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat

        }
        else if(k==2)
        {

                 fail[j] = retobj.value[ 6 * j][2];//自由行订单
            total[j] = retobj.value[ 1 + 6 * j][2] ;//自由行UV
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat

        }
        else if(k==3)
        {
                 fail[j] = retobj.value[ 3 + 6 * j][2];//团队订单
                 total[j] = retobj.value[ 4 + 6 * j][2];//团队UV
                 var x = (fail[j]*100 / total[j]).toFixed(2);
                 rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat
        }
          if (k == 4) //SDP Online详情页
        {
            var x;
            fail[j] = retobj.value[10+ 20 * j][4] ;
            total[j] = retobj.value[10+ 20 * j][4]  +retobj.value[11+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }

            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 5) //SDP APP 详情页
        {
             var x;
             fail[j] = retobj.value[8+ 20 * j][4] ;
            total[j] = retobj.value[8+ 20 * j][4]  +retobj.value[9+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 6) //SDP Online填写页
        {
             var x;
             fail[j] = retobj.value[2+ 20 * j][4] ;
            total[j] = retobj.value[2+ 20 * j][4]  +retobj.value[3+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 7) //SDP APP填写页
        {
             var x;
             fail[j] = retobj.value[0+ 20 * j][4] ;
            total[j] = retobj.value[0+ 20 * j][4]  +retobj.value[1+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 8) //SDP 新机票引擎
        {
             var x;
             fail[j] = retobj.value[4+ 20 * j][4] ;
            total[j] = retobj.value[4+ 20 * j][4]  +retobj.value[5+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 9) //SDP 旧机票引擎
        {
              var x;
             fail[j] = retobj.value[6+ 20 * j][4] ;
            total[j] = retobj.value[6+ 20 * j][4]  +retobj.value[7+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 10) //SDP 机票
        {
             var x;
             fail[j] = retobj.value[16+ 20 * j][4] ;
            total[j] = retobj.value[16+ 20 * j][4]  +retobj.value[17+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 11) //SDP 酒店
        {
             var x;
             fail[j] = retobj.value[18+ 20 * j][4] ;
            total[j] = retobj.value[18+ 20 * j][4]  +retobj.value[19+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 12) //SDP 可选项
        {
             var x;
             fail[j] = retobj.value[14+ 20 * j][4] ;
            total[j] = retobj.value[14+ 20 * j][4]  +retobj.value[15+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 13) //SDP 产品
        {
              var x;
             fail[j] = retobj.value[12+ 20 * j][4] ;
            total[j] = retobj.value[12+ 20 * j][4]  +retobj.value[13+ 20 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 14) //DP 全部
        {
              var x;
             fail[j] = retobj.value[0+ 6 * j][4]+retobj.value[1+ 6 * j][4] +retobj.value[2+ 6 * j][4] ;
             total[j] = retobj.value[0+ 6 * j][4]+retobj.value[1+ 6 * j][4] +retobj.value[2+ 6 * j][4] +retobj.value[3+ 6 * j][4]+retobj.value[4+ 6 * j][4]+retobj.value[5+ 6 * j][4];
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);

            }
            rate[j] = parseFloat(x);

        }
         if (k == 15) //DP Online
        {
              var x;
             fail[j] = retobj.value[1+ 6 * j][4] ;
            total[j] = retobj.value[1+ 6 * j][4]  +retobj.value[4+ 6 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 16) //DP 无线
        {
              var x;
             fail[j] = retobj.value[2+ 6 * j][4] ;
            total[j] = retobj.value[2+ 6 * j][4]  +retobj.value[5+ 6 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 17) //DP Offline
        {
              var x;
             fail[j] = retobj.value[0+ 6 * j][4] ;
            total[j] = retobj.value[0+ 6 * j][4]  +retobj.value[3+ 6 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
        if (k == 18) //团队游APP全部
        {
              var x;
             fail[j] = retobj.value[6+ 18 * j][4] ;
            total[j] = retobj.value[6+ 18 * j][4]  +retobj.value[7+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 19) //团队游APP 正常
        {
              var x;
             fail[j] = retobj.value[12+ 18 * j][4] ;
            total[j] = retobj.value[12+ 18 * j][4]  +retobj.value[13+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 20) //团队游APP 促销
        {
              var x;
             fail[j] = retobj.value[0+ 18 * j][4] ;
            total[j] = retobj.value[0+ 18 * j][4]  +retobj.value[1+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 21) //团队游 Online 全部
        {
              var x;
             fail[j] = retobj.value[10+ 18 * j][4] ;
            total[j] = retobj.value[10+ 18 * j][4]  +retobj.value[11+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 22) //团队游Online 正常
        {
              var x;
             fail[j] = retobj.value[16+ 18 * j][4] ;
            total[j] = retobj.value[16+ 18 * j][4]  +retobj.value[17+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 23) //团队游Online 促销
        {
             var x;
             fail[j] = retobj.value[4+ 18 * j][4] ;
            total[j] = retobj.value[4+ 18 * j][4]  +retobj.value[5+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 24) //团队游Offline 全部
        {
             var x;
             fail[j] = retobj.value[8+ 18 * j][4] ;
            total[j] = retobj.value[8+ 18 * j][4]  +retobj.value[9+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 25) //团队游Offline 正常
        {
              var x;
             fail[j] = retobj.value[14+ 18 * j][4] ;
            total[j] = retobj.value[14+ 18 * j][4]  +retobj.value[15+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 26) //团队游Offline 促销
        {
             var x;
             fail[j] = retobj.value[2+ 18 * j][4] ;
            total[j] = retobj.value[2+ 18 * j][4]  +retobj.value[3+ 18 * j][4]
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

        //自由行为空
         if (k == 27) //自由行总体为空率
        {
             var x;
             fail[j] = retobj.value[5+ 38 * j][5] ;
            total[j] = retobj.value[4+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 28) //DP为空率
        {
             var x;
             fail[j] = retobj.value[1+ 38 * j][5] ;
            total[j] = retobj.value[0+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 29) //SDP 为空率
        {
              var x;
               fail[j] = retobj.value[3+ 38 * j][5] ;
            total[j] = retobj.value[2+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 30) //DP Online国内为空率
        {
             var x;
              fail[j] = retobj.value[7+ 38 * j][5] ;
            total[j] = retobj.value[6+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 31) //SDP Online国内为空率
        {
              var x;
              fail[j] = retobj.value[11+ 38 * j][5] ;
            total[j] = retobj.value[10+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 32) //DP 无线国内
        {
             var x;
              fail[j] = retobj.value[9+ 38 * j][5] ;
            total[j] = retobj.value[8+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 33)//SDP 无线国内
        {
             var x;
           fail[j] = retobj.value[13+ 38 * j][5] ;
            total[j] = retobj.value[12+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 34)//DP Online国际
        {
             var x;
              fail[j] = retobj.value[23+ 38 * j][5] ;
            total[j] = retobj.value[22+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 35)  //SDP Online国际
        {
             var x;
           fail[j] = retobj.value[27+ 38 * j][5] ;
            total[j] = retobj.value[26+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 36) //DP 无线国际
        {
             var x;
           fail[j] = retobj.value[25+ 38 * j][5] ;
            total[j] = retobj.value[24+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 37)//SDP 无线国际
        {
             var x;
              fail[j] = retobj.value[29+ 38 * j][5] ;
            total[j] = retobj.value[28+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 38)  //DP 国内机票
        {
             var x;
              fail[j] = retobj.value[15+ 38 * j][5] ;
            total[j] = retobj.value[14+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 39) //SDP 国内机票
        {
             var x;
            fail[j] = retobj.value[17+ 38 * j][5] ;
            total[j] = retobj.value[16+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 40) //DP 国际机票
        {
             var x;
              fail[j] = retobj.value[31+ 38 * j][5] ;
            total[j] = retobj.value[30+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 41) //SDP 国际机票
        {
             var x;
               fail[j] = retobj.value[33+ 38 * j][5] ;
            total[j] = retobj.value[32+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 42) //DP 国内酒店
        {
             var x;
               fail[j] = retobj.value[19+ 38 * j][5] ;
            total[j] = retobj.value[18+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 43) //SDP 国内酒店
        {
              var x;
             fail[j] = retobj.value[21+ 38 * j][5] ;
            total[j] = retobj.value[20+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 44) //DP 国际酒店
        {
             var x;
            fail[j] = retobj.value[35+ 38 * j][5] ;
            total[j] = retobj.value[34+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }
         if (k == 45) //SDP 国际酒店
        {
             var x;
             fail[j] = retobj.value[37+ 38 * j][5] ;
            total[j] = retobj.value[36+ 38 * j][5] ;
            if(fail[j]==0)
            {
                x=0;
            }
            else{
                x= (fail[j]*100 / total[j]).toFixed(2);
            }
            rate[j] = parseFloat(x);//失败率  toFixed(4) parseFloat
        }

    }
    resultThree[0] = rate;
    resultThree[1] = fail;
    resultThree[2] = total;
    return resultThree;

}

//两个日期相减
    function getDays(strDateStart,strDateEnd){
   var strSeparator = "-"; //日期分隔符
   var oDate1;
   var oDate2;
   var iDays;
   oDate1= strDateStart.split(strSeparator);
   oDate2= strDateEnd.split(strSeparator);
   var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
   var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
   iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数
   return iDays ;
}

function getNowDay()
{
    var initTime=new Array();
    var taday=new Date();
    taday.setDate(taday.getDate()-1)
    initTime[0]=taday.Format("yyyy-MM-dd");
    var taday=new Date();
    taday.setDate(taday.getDate()-30)
    initTime[1]=taday.Format("yyyy-MM-dd");

    return initTime;
}