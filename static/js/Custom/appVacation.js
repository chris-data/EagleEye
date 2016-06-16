/**
 * Created by wang.zy on 2016/5/25.
 */
/**
 * Created by yangyz on 2016/04/04.
 */

function appVacation()
{
    var timeArray = getMonth90(91);
    var AllTitleArray=new Array();
    AllTitleArray[0]='度假总订单';
    AllTitleArray[1]='度假online总订单';
    var AppTitleArray=new Array();
     AppTitleArray[0]='度假APP总订单';
     AppTitleArray[1]='度假iphone各版本订单';
     var h5TitleArray=new Array();
     h5TitleArray[0]='度假H5总订单';
    $orderContainer = $("#orderContainer");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='allOrder' style='height:300px'></div><div id='onlineOrder' style='height:300px;margin-top:10px'></div><div id='appOrder' style='height:300px;margin-top:10px'></div><div id='h5Order' style='height:300px;margin-top:10px'></div><div id='addiphone' style='margin-top: 10px;height:300px'></div><div id='pieAll1' style='height:450px;float:left;clear:left;width:44%;margin-top: 10px'></div><div id='pieAll2' style='height:450px;float:left;clear:right;width:44%;margin-left:80px;margin-top:10px '></div><div id='vacAmount' style='height:300px'></div>")
    var urlAll='/EagleEye/ajax/appvaallorder/'+sysdate(-91)+'/'+sysdate(0);//总订单
    var urlAPP = '/EagleEye/ajax/appvaorder/'+sysdate(-91)+'/'+sysdate(0);//app订单
    var urlH5='/EagleEye/ajax/h5vaorder/'+sysdate(-91)+'/'+sysdate(0);//h5订单
    var urlPie='/EagleEye/ajax/appvaorder/'+sysdate(-2)+'/'+sysdate(0);//饼形图
    var urlAmount='/EagleEye/ajax/appvaamount/'+sysdate(-91)+'/'+sysdate(0);//总金额
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='allOrder';AllDivIdArray[1]='onlineOrder';
    var appDivIdArray=new Array();
    appDivIdArray[0]='appOrder';appDivIdArray[1]='addiphone';
    var h5DivIdArray=new Array();
    h5DivIdArray[0]='h5Order';
    var appdataArray=new Array();
    appdataArray[0]=1;appdataArray[1]=2;
     var h5dataArray=new Array();
    h5dataArray[0]=71;
     var alldataArray=new Array();
    alldataArray[0]=11;alldataArray[1]=12;
    drawCurve(urlAll, AllDivIdArray,AllTitleArray ,alldataArray,timeArray, 2)
    drawCurve(urlAPP, appDivIdArray,AppTitleArray ,appdataArray,timeArray, 1)
    drawCurve(urlH5, h5DivIdArray,h5TitleArray ,h5dataArray,timeArray,5)
    drawCurve(urlAmount, appDivIdArray,AppTitleArray ,appdataArray,timeArray, 4)

    drawPie(urlPie,'pieAll1','度假订单来源占比',1);
    drawPie(urlPie,'pieAll2','度假订单iphone各版本占比',2);

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
function diyOrder()
{

    var timeArray = getMonth90(91);
      var diybigTitleArray=new Array()
     diybigTitleArray[0]='自由行总订单';
     diybigTitleArray[1]='自由行online订单';

     var bigTitleArray=new Array()
     bigTitleArray[0]='自由行APP总订单';
     bigTitleArray[1]='自由行iphone各版本订单';
      var h5bigTitleArray=new Array()
     h5bigTitleArray[0]='自由行H5总订单';

    $diyorderContainer = $("#orderdiyH");
    $diyorderContainer.empty();//清空翻页标签
    $diyorderContainer.append("<div id='subdiyAllOrder' style='height:300px;width:88%'></div><div id='subdiyonlineOrder' style='height:300px;width:88%;margin-top:10px'></div><div id='subdiyOrder' style='height:300px;width:88%;margin-top:10px'></div><div id='subdiyh5Order' style='height:300px;width:88%;margin-top:10px'></div><div id='diyaddiphone' style='margin-top: 10px;height:300px;width:88%'></div><div id='pieDiy1' style='height:450px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='pieDiy2' style='height:450px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div>")
    var diyurl ='/EagleEye/ajax/appvaallorder/'+sysdate(-91)+'/'+sysdate(0);//总订单
    var diyappurl = '/EagleEye/ajax/appvaorder/'+sysdate(-91)+'/'+sysdate(0);
     var urlH5='/EagleEye/ajax/h5vaorder/'+sysdate(-91)+'/'+sysdate(0);//h5订单
    var urlpie='/EagleEye/ajax/appvaorder/'+sysdate(-2)+'/'+sysdate(0);
    //自由行divID
      var divAllIdArray=new Array();
    divAllIdArray[0]='subdiyAllOrder';divAllIdArray[1]='subdiyonlineOrder';
    var divIdArray=new Array();
    divIdArray[0]='subdiyOrder';divIdArray[1]='diyaddiphone';
    var h5divIdArray=new Array();
    h5divIdArray[0]='subdiyh5Order';

    var diydataArray=new Array();
    diydataArray[0]=13;diydataArray[1]=14;
    var dataArray=new Array();
    dataArray[0]=3;dataArray[1]=4;

     var h5dataArray=new Array();
    h5dataArray[0]=72;
    drawCurve(diyurl, divAllIdArray,diybigTitleArray ,diydataArray,timeArray, 0)

    drawCurve(diyappurl, divIdArray,bigTitleArray ,dataArray,timeArray, 1)
    drawCurve(urlH5, h5divIdArray,h5bigTitleArray ,h5dataArray,timeArray, 5)
    drawPie(urlpie,'pieDiy1','自由行订单来源占比',3);
    drawPie(urlpie,'pieDiy2','自由行订单iphone各版本占比',4);


}
//团队游
function pkgOrder()
{

    var timeArray = getMonth90(91);
     var pkgbigTitleArray=new Array()
     pkgbigTitleArray[0]='团队游总订单';
     pkgbigTitleArray[1]='团队游online订单';

     var bigTitleArray=new Array();
    bigTitleArray[0]='团队游APP总订单';
     bigTitleArray[1]='团队游iphone各版本订单';

    var h5bigTitleArray=new Array();
    h5bigTitleArray[0]='团队游H5总订单';
    $diyorderContainer = $("#orderpkgH");
    $diyorderContainer.empty();//清空翻页标签
    $diyorderContainer.append("<div id='subpkgAllOrder' style='height:300px;width:88%'></div><div id='subpkgOnlineOrder' style='height:300px;width:88%;margin-top:10px'></div><div id='subpkgOrder' style='height:300px;width:88%;margin-top:10px'></div><div id='subpkgH5Order' style='height:300px;width:88%;margin-top:10px'></div><div id='pkgaddiphone' style='margin-top: 10px;height:300px;width:88%;margin-top:10px'></div><div id='piePkg1' style='height:450px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='piePkg2' style='height:450px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div>")
    var pkgurl ='/EagleEye/ajax/appvaallorder/'+sysdate(-91)+'/'+sysdate(0);//总订单
    var appurl = '/EagleEye/ajax/appvaorder/'+sysdate(-91)+'/'+sysdate(0);
    var H5url = '/EagleEye/ajax/h5vaorder/'+sysdate(-91)+'/'+sysdate(0);
    var urlPie='/EagleEye/ajax/appvaorder/'+sysdate(-2)+'/'+sysdate(0);

     var divAllIdArray=new Array();
    divAllIdArray[0]='subpkgAllOrder';divAllIdArray[1]='subpkgOnlineOrder';
    var divIdArray=new Array();
    divIdArray[0]='subpkgOrder';divIdArray[1]='pkgaddiphone';
    var h5divIdArray=new Array();
    h5divIdArray[0]='subpkgH5Order';

     var pkgdataArray=new Array();
    pkgdataArray[0]=15;pkgdataArray[1]=16;
    var dataArray=new Array();
    dataArray[0]=5;dataArray[1]=6;
    var h5dataArray=new Array();
    h5dataArray[0]=73;
    drawCurve(pkgurl, divAllIdArray,pkgbigTitleArray ,pkgdataArray,timeArray, 0)
    drawCurve(appurl, divIdArray,bigTitleArray ,dataArray,timeArray, 1)
    drawCurve(H5url, h5divIdArray,h5bigTitleArray ,h5dataArray,timeArray, 5)
    drawPie(urlPie,'piePkg1','团队游订单来源占比',5);
    drawPie(urlPie,'piePkg2','团队游订单iphone各版本占比',6);
}
//签证
function visaOrder()
{

    var timeArray = getMonth90(91);

      var visabigTitleArray=new Array()
     visabigTitleArray[0]='签证总订单';
     visabigTitleArray[1]='签证online订单';

     var bigTitleArray=new Array();
    bigTitleArray[0]='签证APP总订单';
     bigTitleArray[1]='签证iphone各版本订单';
     var h5bigTitleArray=new Array();
    h5bigTitleArray[0]='签证H5总订单';

    $diyorderContainer = $("#visaH");
    $diyorderContainer.empty();//清空翻页标签
    $diyorderContainer.append("<div id='subvisaAllOrder' style='height:300px;width:88%'></div><div id='subvisaOnlineOrder' style='height:300px;width:88%;margin-top:10px'></div><div id='subvisaOrder' style='height:300px;width:88%'></div><div id='subvisaH5Order' style='height:300px;width:88%;margin-top:10px'></div><div id='visaaddiphone' style='margin-top: 10px;height:300px;width:88%'></div><div id='pieVisa1' style='height:450px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='pieVisa2' style='height:450px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div>")
    var visaurl ='/EagleEye/ajax/appvaallorder/'+sysdate(-91)+'/'+sysdate(0);//总订单
    var appurl = '/EagleEye/ajax/appvaorder/'+sysdate(-91)+'/'+sysdate(0);
     var h5url = '/EagleEye/ajax/h5vaorder/'+sysdate(-91)+'/'+sysdate(0);
    var urlPie='/EagleEye/ajax/appvaorder/'+sysdate(-2)+'/'+sysdate(0);
         var divAllIdArray=new Array();
    divAllIdArray[0]='subvisaAllOrder';divAllIdArray[1]='subvisaOnlineOrder';
    var divIdArray=new Array();
    divIdArray[0]='subvisaOrder';divIdArray[1]='visaaddiphone';
     var h5divIdArray=new Array();
    h5divIdArray[0]='subvisaH5Order';
       var visadataArray=new Array();
    visadataArray[0]=17;visadataArray[1]=18;

    var dataArray=new Array();
    dataArray[0]=7;dataArray[1]=8;
    var h5dataArray=new Array();
    h5dataArray[0]=74;
     drawCurve(visaurl, divAllIdArray,visabigTitleArray ,visadataArray,timeArray, 0)
    drawCurve(appurl, divIdArray,bigTitleArray ,dataArray,timeArray, 1)
    drawCurve(h5url, h5divIdArray,h5bigTitleArray ,h5dataArray,timeArray, 5)
     drawPie(urlPie,'pieVisa1','签证订单来源占比',7);
    drawPie(urlPie,'pieVisa2','签证订单iphone各版本占比',8);
}

//邮轮
function curiseOrder()
{


}
function getLastYear(curDate)
{
    var strs=new Array();
    strs=curDate.split('-');
    return parseInt(strs[0])-1+'-'+strs[1]+'-'+strs[2];
}
//自由行book
function diybook()
{
    var timeArray = getMonth30(31);
    var AllTitleArray=new Array();
    AllTitleArray[0]='自由行book失败率';
    AllTitleArray[1]='sdp app失败率';
	AllTitleArray[2]='sdp online失败率';
	AllTitleArray[3]='sdp h5失败率';
	AllTitleArray[4]='dp app失败率';
	AllTitleArray[5]='dp online失败率';
	AllTitleArray[6]='dp h5失败率';
	AllTitleArray[7]='国际站失败率';
	AllTitleArray[8]='offline失败率';

    $orderContainer = $("#orderContainer");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='diyall' style='height:250px;margin-top:5px;width:98%'></div><div id='sdpapp' style='height:250px;float:left;clear:left;width:48%;margin-top: 5px'></div><div id='sdponline' style='height:250px;float:left;clear:right;width:48%;margin-left:20px;margin-top: 5px '></div><div id='sdph5' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='dpapp' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div><div id='dponline' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='dph5' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div><div id='国际站' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='offline' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div>")
    var urlAll='/EagleEye/ajax/diybookcommitnew/'+getLastYear(sysdate(-31))+'/'+getLastYear(sysdate(0))+'/'+sysdate(-31)+'/'+sysdate(0);//总订单
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='diyall';AllDivIdArray[1]='sdpapp';AllDivIdArray[2]='sdponline';AllDivIdArray[3]='sdph5';
	AllDivIdArray[4]='dpapp';AllDivIdArray[5]='dponline';AllDivIdArray[6]='dph5';AllDivIdArray[7]='国际站';AllDivIdArray[8]='offline';
    var dataArray=new Array();dataArray[0]=20;dataArray[1]=21;dataArray[2]=22;dataArray[3]=23;dataArray[4]=24;dataArray[5]=25;dataArray[6]=26;dataArray[7]=27;dataArray[8]=28;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,1)
}
//自由行commit
function diycommit()
{
  var timeArray = getMonth30(31);
    var AllTitleArray=new Array();
    AllTitleArray[0]='自由行commit失败率';
    AllTitleArray[1]='sdp app失败率';
	AllTitleArray[2]='sdp online失败率';
	AllTitleArray[3]='sdp h5失败率';
	AllTitleArray[4]='dp app失败率';
	AllTitleArray[5]='dp online失败率';
	AllTitleArray[6]='dp h5失败率';
	AllTitleArray[7]='国际站失败率';
	AllTitleArray[8]='offline失败率';

    $orderContainer = $("#diycommitH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='diyallcommit' style='height:250px;margin-top:5px;width:89%'></div><div id='sdpappcommit' style='height:250px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='sdponlinecommit' style='height:250px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div><div id='sdph5commit' style='height:250px;float:left;clear:left;margin-top: 5px;width:44%'></div><div id='dpappcommit' style='height:250px;float:left;clear:right;margin-left:80px;margin-top: 5px;width:44% '></div><div id='dponlinecommit' style='height:250px;float:left;clear:left;margin-top: 5px;width:44%'></div><div id='dph5commit' style='height:250px;float:left;clear:right;margin-left:80px;margin-top: 5px;width:44% '></div><div id='国际站commit' style='height:250px;float:left;clear:left;margin-top: 5px;width:44%'></div><div id='offlinecommit' style='height:250px;float:left;clear:right;margin-left:80px;margin-top: 5px;width:44% '></div>")
    var urlAll='/EagleEye/ajax/diybookcommitnew/'+getLastYear(sysdate(-31))+'/'+getLastYear(sysdate(0))+'/'+sysdate(-31)+'/'+sysdate(0);//总订单
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='diyallcommit';AllDivIdArray[1]='sdpappcommit';AllDivIdArray[2]='sdponlinecommit';AllDivIdArray[3]='sdph5commit';
	AllDivIdArray[4]='dpappcommit';AllDivIdArray[5]='dponlinecommit';AllDivIdArray[6]='dph5commit';AllDivIdArray[7]='国际站commit';AllDivIdArray[8]='offlinecommit';
    var dataArray=new Array();dataArray[0]=29;dataArray[1]=30;dataArray[2]=31;dataArray[3]=32;dataArray[4]=33;dataArray[5]=34;dataArray[6]=35;dataArray[7]=36;dataArray[8]=37;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,1)
}
//团队游book
function pkgbook()
{
    var timeArray = getMonth30(31);
    var AllTitleArray=new Array();
    AllTitleArray[0]='团队游book失败率';
    AllTitleArray[1]='APP失败率';
	AllTitleArray[2]='Online失败率';
	AllTitleArray[3]='H5失败率';
    AllTitleArray[4]='offline失败率';
    $orderContainer = $("#pkgbookH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='pkgall' style='height:250px;margin-top:5px;width:89%'></div><div id='pkgapp' style='height:250px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='pkgonline' style='height:250px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div><div id='pkgh5' style='height:250px;float:left;clear:left;margin-top: 5px;width:44%'></div><div id='pkgoffline' style='height:250px;float:left;clear:right;margin-left:80px;margin-top: 5px;width:44% '></div>")
    var urlAll='/EagleEye/ajax/pkgbookcommitnew/'+getLastYear(sysdate(-31))+'/'+getLastYear(sysdate(0))+'/'+sysdate(-31)+'/'+sysdate(0);//总订单
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='pkgall';AllDivIdArray[1]='pkgapp';AllDivIdArray[2]='pkgonline';AllDivIdArray[3]='pkgh5';
	AllDivIdArray[4]='pkgoffline';
    var dataArray=new Array();dataArray[0]=38;dataArray[1]=39;dataArray[2]=40;dataArray[3]=41;dataArray[4]=42;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,2)
}
//团队游commit
function pkgcommit()
{
     var timeArray = getMonth30(31);
    var AllTitleArray=new Array();
    AllTitleArray[0]='团队游commit失败率';
    AllTitleArray[1]='APP失败率';
	AllTitleArray[2]='Online失败率';
	AllTitleArray[3]='H5失败率';
    AllTitleArray[4]='offline失败率';

    $orderContainer = $("#pkgcommitH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='pkgallcommit' style='height:250px;margin-top:5px;width:89%'></div><div id='pkgappcommit' style='height:250px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='pkgonlinecommit' style='height:250px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div><div id='pkgh5commit' style='height:250px;float:left;clear:left;margin-top: 5px;width:44%'></div><div id='pkgofflinecommit' style='height:250px;float:left;clear:right;margin-left:80px;margin-top: 5px;width:44% '></div>")
      var urlAll='/EagleEye/ajax/pkgbookcommitnew/'+getLastYear(sysdate(-31))+'/'+getLastYear(sysdate(0))+'/'+sysdate(-31)+'/'+sysdate(0);//总订单
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='pkgallcommit';AllDivIdArray[1]='pkgappcommit';AllDivIdArray[2]='pkgonlinecommit';AllDivIdArray[3]='pkgh5commit';
	AllDivIdArray[4]='pkgofflinecommit';
    var dataArray=new Array();dataArray[0]=43;dataArray[1]=44;dataArray[2]=45;dataArray[3]=46;dataArray[4]=47;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,2)
}
//签证commit
function visacommit()
{
     var timeArray = getMonth30(31);
    var AllTitleArray=new Array();
    AllTitleArray[0]='签证commit失败率';
    AllTitleArray[1]='APP失败率';
	AllTitleArray[2]='Online失败率';
	AllTitleArray[3]='H5失败率';

    $orderContainer = $("#visacommitH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='visaall' style='height:250px;margin-top:5px;width:89%'></div><div id='visaapp' style='height:250px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='visaonline' style='height:250px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div><div id='visah5' style='height:250px;float:left;clear:left;margin-top: 5px;width:44%'></div>")
      var urlAll='/EagleEye/ajax/visacommitnew/'+getLastYear(sysdate(-31))+'/'+getLastYear(sysdate(0))+'/'+sysdate(-31)+'/'+sysdate(0);//总订单
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='visaall';AllDivIdArray[1]='visaapp';AllDivIdArray[2]='visaonline';AllDivIdArray[3]='visah5';
    var dataArray=new Array();dataArray[0]=48;dataArray[1]=49;dataArray[2]=50;dataArray[3]=51;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,3)
}
//搜索
//自由行book搜索
function diybookSearch()
{
    var calDate=$("#calDate1").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }else{
     var timeArray = getMonth30(31);
     var AllTitleArray=new Array();
    AllTitleArray[0]='自由行book失败率';
    AllTitleArray[1]='sdp app失败率';
	AllTitleArray[2]='sdp online失败率';
	AllTitleArray[3]='sdp h5失败率';
	AllTitleArray[4]='dp app失败率';
	AllTitleArray[5]='dp online失败率';
	AllTitleArray[6]='dp h5失败率';
	AllTitleArray[7]='国际站失败率';
	AllTitleArray[8]='offline失败率';
    $orderContainer = $("#orderContainer");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='diyall' style='height:250px;margin-top:5px;width:98%'></div><div id='sdpapp' style='height:250px;float:left;clear:left;width:48%;margin-top: 5px'></div><div id='sdponline' style='height:250px;float:left;clear:right;width:48%;margin-left:20px;margin-top: 5px '></div><div id='sdph5' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='dpapp' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div><div id='dponline' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='dph5' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div><div id='国际站' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='offline' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div>")
    var urlAll='/EagleEye/ajax/diybookcommitnew/'+getLastYear(sysdate(-31+getTimeDiff(calDate)))+'/'+getLastYear(sysdate(getTimeDiff(calDate)))+'/'+sysdate(-31+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='diyall';AllDivIdArray[1]='sdpapp';AllDivIdArray[2]='sdponline';AllDivIdArray[3]='sdph5';
	AllDivIdArray[4]='dpapp';AllDivIdArray[5]='dponline';AllDivIdArray[6]='dph5';AllDivIdArray[7]='国际站';AllDivIdArray[8]='offline';
    var dataArray=new Array();dataArray[0]=20;dataArray[1]=21;dataArray[2]=22;dataArray[3]=23;dataArray[4]=24;dataArray[5]=25;dataArray[6]=26;dataArray[7]=27;dataArray[8]=28;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,1)

    }

}
//自由行commit搜索
function diycommitSearch()
{
    var calDate=$("#calDate2").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }else{
     var timeArray = getMonth30(31-getTimeDiff(calDate));
    var AllTitleArray=new Array();
    AllTitleArray[0]='自由行commit失败率';
    AllTitleArray[1]='sdp app失败率';
	AllTitleArray[2]='sdp online失败率';
	AllTitleArray[3]='sdp h5失败率';
	AllTitleArray[4]='dp app失败率';
	AllTitleArray[5]='dp online失败率';
	AllTitleArray[6]='dp h5失败率';
	AllTitleArray[7]='国际站失败率';
	AllTitleArray[8]='offline失败率';

    $orderContainer = $("#diycommitH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='diyallcommit' style='height:250px;margin-top:5px;width:98%'></div><div id='sdpappcommit' style='height:250px;float:left;clear:left;width:48%;margin-top: 5px'></div><div id='sdponlinecommit' style='height:250px;float:left;clear:right;width:48%;margin-left:20px;margin-top: 5px '></div><div id='sdph5commit' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='dpappcommit' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div><div id='dponlinecommit' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='dph5commit' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div><div id='国际站commit' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='offlinecommit' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div>")
    var urlAll='/EagleEye/ajax/diybookcommitnew/'+getLastYear(sysdate(-31+getTimeDiff(calDate)))+'/'+getLastYear(sysdate(getTimeDiff(calDate)))+'/'+sysdate(-31+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='diyallcommit';AllDivIdArray[1]='sdpappcommit';AllDivIdArray[2]='sdponlinecommit';AllDivIdArray[3]='sdph5commit';
	AllDivIdArray[4]='dpappcommit';AllDivIdArray[5]='dponlinecommit';AllDivIdArray[6]='dph5commit';AllDivIdArray[7]='国际站commit';AllDivIdArray[8]='offlinecommit';
    var dataArray=new Array();dataArray[0]=29;dataArray[1]=30;dataArray[2]=31;dataArray[3]=32;dataArray[4]=33;dataArray[5]=34;dataArray[6]=35;dataArray[7]=36;dataArray[8]=37;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,1)

    }

}
//团队游book
function pkgbookSearch()
{
 var calDate=$("#calDate3").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }else{
    var timeArray = getMonth30(31-getTimeDiff(calDate));
    var AllTitleArray=new Array();
    AllTitleArray[0]='团队游book失败率';
    AllTitleArray[1]='APP失败率';
	AllTitleArray[2]='Online失败率';
	AllTitleArray[3]='H5失败率';
    AllTitleArray[4]='offline失败率';
    $orderContainer = $("#pkgbookH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='pkgall' style='height:250px;margin-top:5px;width:98%'></div><div id='pkgapp' style='height:250px;float:left;clear:left;width:48%;margin-top: 5px'></div><div id='pkgonline' style='height:250px;float:left;clear:right;width:48%;margin-left:20px;margin-top: 5px '></div><div id='pkgh5' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='pkgoffline' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div>")
     var urlAll='/EagleEye/ajax/pkgbookcommitnew/'+getLastYear(sysdate(-31+getTimeDiff(calDate)))+'/'+getLastYear(sysdate(getTimeDiff(calDate)))+'/'+sysdate(-31+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='pkgall';AllDivIdArray[1]='pkgapp';AllDivIdArray[2]='pkgonline';AllDivIdArray[3]='pkgh5';
	AllDivIdArray[4]='pkgoffline';
    var dataArray=new Array();dataArray[0]=38;dataArray[1]=39;dataArray[2]=40;dataArray[3]=41;dataArray[4]=42;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,2)
    }
}
//团队游commit
function pkgcommitSearch()
{
var calDate=$("#calDate4").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }else{
     var timeArray = getMonth30(31-getTimeDiff(calDate));
      var AllTitleArray=new Array();
    AllTitleArray[0]='团队游commit失败率';
    AllTitleArray[1]='APP失败率';
	AllTitleArray[2]='Online失败率';
	AllTitleArray[3]='H5失败率';
    AllTitleArray[4]='offline失败率';

    $orderContainer = $("#pkgcommitH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='pkgallcommit' style='height:250px;margin-top:5px;width:98%'></div><div id='pkgappcommit' style='height:250px;float:left;clear:left;width:48%;margin-top: 5px'></div><div id='pkgonlinecommit' style='height:250px;float:left;clear:right;width:48%;margin-left:20px;margin-top: 5px '></div><div id='pkgh5commit' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div><div id='pkgofflinecommit' style='height:250px;float:left;clear:right;margin-left:20px;margin-top: 5px;width:48% '></div>")
     var urlAll='/EagleEye/ajax/pkgbookcommitnew/'+getLastYear(sysdate(-31+getTimeDiff(calDate)))+'/'+getLastYear(sysdate(getTimeDiff(calDate)))+'/'+sysdate(-31+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='pkgallcommit';AllDivIdArray[1]='pkgappcommit';AllDivIdArray[2]='pkgonlinecommit';AllDivIdArray[3]='pkgh5commit';
	AllDivIdArray[4]='pkgofflinecommit';
    var dataArray=new Array();dataArray[0]=43;dataArray[1]=44;dataArray[2]=45;dataArray[3]=46;dataArray[4]=47;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,2)
    }
}
//签证commit
function visacommitSearch()
{
    var calDate=$("#calDate6").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }else {
     var timeArray = getMonth30(31-getTimeDiff(calDate));
     var AllTitleArray=new Array();
    AllTitleArray[0]='签证commit失败率';
    AllTitleArray[1]='APP失败率';
	AllTitleArray[2]='Online失败率';
	AllTitleArray[3]='H5失败率';

    $orderContainer = $("#visacommitH");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='visaall' style='height:250px;margin-top:5px;width:98%'></div><div id='visaapp' style='height:250px;float:left;clear:left;width:48%;margin-top: 5px'></div><div id='visaonline' style='height:250px;float:left;clear:right;width:48%;margin-left:20px;margin-top: 5px '></div><div id='visah5' style='height:250px;float:left;clear:left;margin-top: 5px;width:48%'></div>")
     var urlAll='/EagleEye/ajax/visacommitnew/'+getLastYear(sysdate(-31+getTimeDiff(calDate)))+'/'+getLastYear(sysdate(getTimeDiff(calDate)))+'/'+sysdate(-31+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='visaall';AllDivIdArray[1]='visaapp';AllDivIdArray[2]='visaonline';AllDivIdArray[3]='visah5';
    var dataArray=new Array();dataArray[0]=48;dataArray[1]=49;dataArray[2]=50;dataArray[3]=51;
    drawCurveBookCommit(urlAll,AllDivIdArray,AllTitleArray,dataArray,timeArray,3)
    }

}
function Vacationsearch()
{
   var calDate=$("#calDate1").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }
    else{
         var timeArray = getMonth90(91-getTimeDiff(calDate));
         var AllTitleArray=new Array();
    AllTitleArray[0]='度假总订单';
    AllTitleArray[1]='度假online总订单';
    var AppTitleArray=new Array();
     AppTitleArray[0]='度假APP总订单';
     AppTitleArray[1]='度假iphone各版本订单';
     var h5TitleArray=new Array();
     h5TitleArray[0]='度假H5总订单';
    $orderContainer = $("#orderContainer");
    $orderContainer.empty();//清空翻页标签
    $orderContainer.append("<div id='allOrder' style='height:300px'></div><div id='onlineOrder' style='height:300px;margin-top:10px'></div><div id='appOrder' style='height:300px;margin-top:10px'></div><div id='h5Order' style='height:300px;margin-top:10px'></div><div id='addiphone' style='margin-top: 10px;height:300px'></div><div id='pieAll1' style='height:450px;float:left;clear:left;width:44%;margin-top: 10px'></div><div id='pieAll2' style='height:450px;float:left;clear:right;width:44%;margin-left:80px;margin-top:10px '></div><div id='vacAmount' style='height:300px'></div>")
    var  urlAll='/EagleEye/ajax/appvaallorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));//总订单
    var urlAPP = '/EagleEye/ajax/appvaorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));//app订单
    var urlH5='/EagleEye/ajax/h5vaorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));//h5订单
        var urlPie='/EagleEye/ajax/appvaorder/'+sysdate(getTimeDiff(calDate)-2)+'/'+sysdate(getTimeDiff(calDate))//饼形图
     var urlAmount='/EagleEye/ajax/appvaamount/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));//总金额
    var AllDivIdArray=new Array();
    AllDivIdArray[0]='allOrder';AllDivIdArray[1]='onlineOrder';
    var appDivIdArray=new Array();
    appDivIdArray[0]='appOrder';appDivIdArray[1]='addiphone';
    var h5DivIdArray=new Array();
    h5DivIdArray[0]='h5Order';
    var appdataArray=new Array();
    appdataArray[0]=1;appdataArray[1]=2;
     var h5dataArray=new Array();
    h5dataArray[0]=71;
     var alldataArray=new Array();
    alldataArray[0]=11;alldataArray[1]=12;
    drawCurve(urlAll, AllDivIdArray,AllTitleArray ,alldataArray,timeArray, 2)
    drawCurve(urlAPP, appDivIdArray,AppTitleArray ,appdataArray,timeArray, 1)
    drawCurve(urlH5, h5DivIdArray,h5TitleArray ,h5dataArray,timeArray,5)
    drawCurve(urlAmount, appDivIdArray,AppTitleArray ,appdataArray,timeArray, 4)
    drawPie(urlPie,'pieAll1','度假订单来源占比',1);
    drawPie(urlPie,'pieAll2','度假订单iphone各版本占比',2);


    }


}

 function diysearch()
{
   var calDate=$("#calDate2").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }
    else{
     var timeArray = getMonth90(91-getTimeDiff(calDate));
        var diybigTitleArray=new Array()
     diybigTitleArray[0]='自由行总订单';
     diybigTitleArray[1]='自由行online订单';

     var bigTitleArray=new Array()
     bigTitleArray[0]='自由行APP总订单';
     bigTitleArray[1]='自由行iphone各版本订单';
      var h5bigTitleArray=new Array()
     h5bigTitleArray[0]='自由行H5总订单';

    $diyorderContainer = $("#orderdiyH");
    $diyorderContainer.empty();//清空翻页标签
    $diyorderContainer.append("<div id='subdiyAllOrder' style='height:300px;width:98%'></div><div id='subdiyonlineOrder' style='height:300px;width:98%;margin-top:10px'></div><div id='subdiyOrder' style='height:300px;width:98%;margin-top:10px'></div><div id='subdiyh5Order' style='height:300px;width:98%;margin-top:10px'></div><div id='diyaddiphone' style='margin-top: 10px;height:300px;width:98%'></div><div id='pieDiy1' style='height:450px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='pieDiy2' style='height:450px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div>")
    var diyurl ='/EagleEye/ajax/appvaallorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));//总订单
    var diyappurl = '/EagleEye/ajax/appvaorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var diyh5url = '/EagleEye/ajax/h5vaorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var urlpie='/EagleEye/ajax/appvaorder/'+sysdate(getTimeDiff(calDate)-2)+'/'+sysdate(getTimeDiff(calDate))
    //自由行divID
      var divAllIdArray=new Array();
    divAllIdArray[0]='subdiyAllOrder';divAllIdArray[1]='subdiyonlineOrder';
    var divIdArray=new Array();
    divIdArray[0]='subdiyOrder';divIdArray[1]='diyaddiphone';
    var h5divIdArray=new Array();
    h5divIdArray[0]='subdiyh5Order';

    var diydataArray=new Array();
    diydataArray[0]=13;diydataArray[1]=14;
    var dataArray=new Array();
    dataArray[0]=3;dataArray[1]=4;

     var h5dataArray=new Array();
    h5dataArray[0]=72;
    drawCurve(diyurl, divAllIdArray,diybigTitleArray ,diydataArray,timeArray, 0)

    drawCurve(diyappurl, divIdArray,bigTitleArray ,dataArray,timeArray, 1)
    drawCurve(diyh5url, h5divIdArray,h5bigTitleArray ,h5dataArray,timeArray, 5)
     drawPie(urlpie,'pieDiy1','自由行订单来源占比',3);
    drawPie(urlpie,'pieDiy2','自由行订单iphone各版本占比',4);
    }

}
//团队游搜索
function pkgsearch()
{

    var calDate=$("#calDate3").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }
    else{
         var timeArray = getMonth90(91-getTimeDiff(calDate));
         var pkgbigTitleArray=new Array()
     pkgbigTitleArray[0]='团队游总订单';
     pkgbigTitleArray[1]='团队游online订单';

     var bigTitleArray=new Array();
    bigTitleArray[0]='团队游APP总订单';
     bigTitleArray[1]='团队游iphone各版本订单';

    var h5bigTitleArray=new Array();
    h5bigTitleArray[0]='团队游H5总订单';
    $diyorderContainer = $("#orderpkgH");
    $diyorderContainer.empty();//清空翻页标签
    $diyorderContainer.append("<div id='subpkgAllOrder' style='height:300px;width:98%'></div><div id='subpkgOnlineOrder' style='height:300px;width:98%;margin-top:10px'></div><div id='subpkgOrder' style='height:300px;width:98%;margin-top:10px'></div><div id='subpkgH5Order' style='height:300px;width:98%;margin-top:10px'></div><div id='pkgaddiphone' style='margin-top: 10px;height:300px;width:98%'></div><div id='piePkg1' style='height:450px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='piePkg2' style='height:450px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div>")
    var pkgurl ='/EagleEye/ajax/appvaallorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));//总订单
    var appurl = '/EagleEye/ajax/appvaorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var h5url = '/EagleEye/ajax/h5vaorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var urlPie='/EagleEye/ajax/appvaorder/'+sysdate(getTimeDiff(calDate)-2)+'/'+sysdate(getTimeDiff(calDate));

    var divAllIdArray=new Array();
    divAllIdArray[0]='subpkgAllOrder';divAllIdArray[1]='subpkgOnlineOrder';
    var divIdArray=new Array();
    divIdArray[0]='subpkgOrder';divIdArray[1]='pkgaddiphone';
    var h5divIdArray=new Array();
    h5divIdArray[0]='subpkgH5Order';

     var pkgdataArray=new Array();
    pkgdataArray[0]=15;pkgdataArray[1]=16;
    var dataArray=new Array();
    dataArray[0]=5;dataArray[1]=6;
    var h5dataArray=new Array();
    h5dataArray[0]=73;
    drawCurve(pkgurl, divAllIdArray,pkgbigTitleArray ,pkgdataArray,timeArray, 0)
    drawCurve(appurl, divIdArray,bigTitleArray ,dataArray,timeArray, 1)
    drawCurve(h5url, h5divIdArray,h5bigTitleArray ,h5dataArray,timeArray, 5)
    drawPie(urlPie,'piePkg1','团队游订单来源占比',5);
    drawPie(urlPie,'piePkg2','团队游订单iphone各版本占比',6);


    }


}

//签证搜索
function visasearch()
{

    var calDate=$("#calDate4").val();
    if(getTimeDiff(calDate)>0)
    {
        alert('请选择正确的日期')
    }
    else{
         var timeArray = getMonth90(91-getTimeDiff(calDate));
         var visabigTitleArray=new Array()
     visabigTitleArray[0]='签证总订单';
     visabigTitleArray[1]='签证online订单';

     var bigTitleArray=new Array();
    bigTitleArray[0]='签证APP总订单';
     bigTitleArray[1]='签证iphone各版本订单';
     var h5bigTitleArray=new Array();
    h5bigTitleArray[0]='签证H5总订单';

    $diyorderContainer = $("#visaH");
    $diyorderContainer.empty();//清空翻页标签
    $diyorderContainer.append("<div id='subvisaAllOrder' style='height:300px;width:98%'></div><div id='subvisaOnlineOrder' style='height:300px;width:98%;margin-top:10px'></div><div id='subvisaOrder' style='height:300px;width:98%;margin-top:10px'></div><div id='subvisaH5Order' style='height:300px;width:98%;margin-top:10px'></div><div id='visaaddiphone' style='margin-top: 10px;height:300px;width:98%;margin-top:10px'></div><div id='pieVisa1' style='height:450px;float:left;clear:left;width:44%;margin-top: 5px'></div><div id='pieVisa2' style='height:450px;float:left;clear:right;width:44%;margin-left:80px;margin-top: 5px '></div>")
    var visaurl ='/EagleEye/ajax/appvaallorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));//总订单
    var appurl = '/EagleEye/ajax/appvaorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var h5url = '/EagleEye/ajax/h5vaorder/'+sysdate(-91+getTimeDiff(calDate))+'/'+sysdate(getTimeDiff(calDate));
    var urlPie='/EagleEye/ajax/appvaorder/'+sysdate(getTimeDiff(calDate)-2)+'/'+sysdate(getTimeDiff(calDate));
        var divAllIdArray=new Array();
    divAllIdArray[0]='subvisaAllOrder';divAllIdArray[1]='subvisaOnlineOrder';
    var divIdArray=new Array();
    divIdArray[0]='subvisaOrder';divIdArray[1]='visaaddiphone';
     var h5divIdArray=new Array();
    h5divIdArray[0]='subvisaH5Order';
       var visadataArray=new Array();
    visadataArray[0]=17;visadataArray[1]=18;

    var dataArray=new Array();
    dataArray[0]=7;dataArray[1]=8;
    var h5dataArray=new Array();
    h5dataArray[0]=74;
     drawCurve(visaurl, divAllIdArray,visabigTitleArray ,visadataArray,timeArray, 0)
    drawCurve(appurl, divIdArray,bigTitleArray ,dataArray,timeArray, 1)
    drawCurve(h5url, h5divIdArray,h5bigTitleArray ,h5dataArray,timeArray, 5)
     drawPie(urlPie,'pieVisa1','签证订单来源占比',7);
    drawPie(urlPie,'pieVisa2','签证订单iphone各版本占比',8);
    }


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
//获取过去90填日期
function getMonth90(k) {
    var timeArray = [];
    var dd = new Date();
    dd.setDate(dd.getDate() - k);//获取往前30天日期
    for (var m = 0; m < 90; m++) {
        dd.setDate(dd.getDate() + 1);//往前30天日期+1
        timeArray[m] = dd.Format("yyyy-MM-dd")
    }
    return timeArray;

}
//获取过去120天数据
function getMonth180(k) {
    var timeArray = [];
    var dd = new Date();
    dd.setDate(dd.getDate() - k);//获取往前30天日期
    for (var m = 0; m < 180; m++) {
        dd.setDate(dd.getDate() + 1);//往前30天日期+1
        timeArray[m] = dd.Format("yyyy-MM-dd")
    }
    return timeArray;

}


//自由行查询为空专用
function drawCurvediyServiceInvoke(url,divIdArray,bigTitleArray,dataArray,timeArray,pageid)
{
    var data1={};
    var  smallTitle=new Array();smallTitle[0]='为空率'
    if(pageid==1)
    {
         var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitle,11);//1条线
        var options2=getOpition(divIdArray[1],bigTitleArray[1],timeArray,smallTitle,11);//1条线
        var options3=getOpition(divIdArray[2],bigTitleArray[2],timeArray,smallTitle,11);//1条线
        var options4=getOpition(divIdArray[3],bigTitleArray[3],timeArray,smallTitle,11);//1条线
        var options5=getOpition(divIdArray[4],bigTitleArray[4],timeArray,smallTitle,11);//1条线
        var options6=getOpition(divIdArray[5],bigTitleArray[5],timeArray,smallTitle,11);//1条线
        var options7=getOpition(divIdArray[6],bigTitleArray[6],timeArray,smallTitle,11);//1条线
        var options8=getOpition(divIdArray[7],bigTitleArray[7],timeArray,smallTitle,11);//1条线
        var options9=getOpition(divIdArray[8],bigTitleArray[8],timeArray,smallTitle,11);//1条线
        var options10=getOpition(divIdArray[9],bigTitleArray[9],timeArray,smallTitle,11);//1条线
        var options11=getOpition(divIdArray[10],bigTitleArray[10],timeArray,smallTitle,11);//1条线
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
            var dataArray1 =  getOrderArray(reObj,90, dataArray[0],1)
            data1 = dataArray1[0];
            mychart1.series[0].setData(data1);
             var dataArray2 =  getOrderArray(reObj, 90,dataArray[1],1)
            data1 = dataArray2[0];
            mychart2.series[0].setData(data1);
              var dataArray3 =  getOrderArray(reObj,90, dataArray[2],1)
            data1 = dataArray3[0];
            mychart3.series[0].setData(data1);
              var dataArray4 =  getOrderArray(reObj,90, dataArray[3],1)
            data1 = dataArray4[0];
            mychart4.series[0].setData(data1);
              var dataArray5 =  getOrderArray(reObj,90, dataArray[4],1)
            data1 = dataArray5[0];
            mychart5.series[0].setData(data1);
              var dataArray6 =  getOrderArray(reObj, 90,dataArray[5],1)
            data1 = dataArray6[0];
            mychart6.series[0].setData(data1);
              var dataArray7 =  getOrderArray(reObj,90, dataArray[6],1)
            data1 = dataArray7[0];
            mychart7.series[0].setData(data1);
              var dataArray8 =  getOrderArray(reObj, 90,dataArray[7],1)
            data1 = dataArray8[0];
            mychart8.series[0].setData(data1);
              var dataArray9 =  getOrderArray(reObj,90, dataArray[8],1)
            data1 = dataArray9[0];
            mychart9.series[0].setData(data1);
               var dataArray10 =  getOrderArray(reObj,90, dataArray[9],1)
            data1 = dataArray10[0];
            mychart10.series[0].setData(data1);
               var dataArray11 =  getOrderArray(reObj, 90,dataArray[10],1)
            data1 = dataArray11[0];
            mychart11.series[0].setData(data1);

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
    else if(pageid==2)
    {
         var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitle,11);//1条线
        var options2=getOpition(divIdArray[1],bigTitleArray[1],timeArray,smallTitle,11);//1条线
        var options3=getOpition(divIdArray[2],bigTitleArray[2],timeArray,smallTitle,11);//1条线
        var options4=getOpition(divIdArray[3],bigTitleArray[3],timeArray,smallTitle,11);//1条线
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
            var dataArray1 =  getOrderArray(reObj,90, dataArray[0],1)
            data1 = dataArray1[0];
            mychart1.series[0].setData(data1);
             var dataArray2 =  getOrderArray(reObj,90, dataArray[1],1)
            data1 = dataArray2[0];
            mychart2.series[0].setData(data1);
              var dataArray3 =  getOrderArray(reObj,90, dataArray[2],1)
            data1 = dataArray3[0];
            mychart3.series[0].setData(data1);
              var dataArray4 =  getOrderArray(reObj,90, dataArray[3],1)
            data1 = dataArray4[0];
            mychart4.series[0].setData(data1);

            mychart1.hideLoading();
            mychart2.hideLoading();
             mychart3.hideLoading();
            mychart4.hideLoading();

        })
    }

}
//bookcommit专用
function drawCurveBookCommit(url,divIdArray,bigTitleArray,dataArray,timeArray,pageid)
{

    var data1={}; var data2={};
    var  smallTitle=new Array();smallTitle[0]='失败率';smallTitle[1]='去年同期失败率'
    if(pageid==1)
    {

        var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitle,2);//1条线
        var options2=getOpition(divIdArray[1],bigTitleArray[1],timeArray,smallTitle,2);//1条线
        var options3=getOpition(divIdArray[2],bigTitleArray[2],timeArray,smallTitle,2);//1条线
        var options4=getOpition(divIdArray[3],bigTitleArray[3],timeArray,smallTitle,2);//1条线
        var options5=getOpition(divIdArray[4],bigTitleArray[4],timeArray,smallTitle,2);//1条线
        var options6=getOpition(divIdArray[5],bigTitleArray[5],timeArray,smallTitle,2);//1条线
        var options7=getOpition(divIdArray[6],bigTitleArray[6],timeArray,smallTitle,2);//1条线
        var options8=getOpition(divIdArray[7],bigTitleArray[7],timeArray,smallTitle,2);//1条线
        var options9=getOpition(divIdArray[8],bigTitleArray[8],timeArray,smallTitle,2);//1条线
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
            var dataArray1 =  getOrderArray(reObj,30, dataArray[0],2)
             console.log("dataArray1[0]:"+dataArray1[0]);
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            mychart1.series[0].setData(data1);
             mychart1.series[1].setData(data2);
             var dataArray2 =  getOrderArray(reObj,30, dataArray[1],2)
            data1 = dataArray2[0];
             data2 = dataArray2[1];
            mychart2.series[0].setData(data1);
             mychart2.series[1].setData(data2);
              var dataArray3 =  getOrderArray(reObj, 30,dataArray[2],2)
            data1 = dataArray3[0];
              data2 = dataArray3[1];
            mychart3.series[0].setData(data1);
             mychart3.series[1].setData(data2);
              var dataArray4 =  getOrderArray(reObj, 30,dataArray[3],2)
            data1 = dataArray4[0];
              data2 = dataArray4[1];
            mychart4.series[0].setData(data1);
             mychart4.series[1].setData(data2);
              var dataArray5 =  getOrderArray(reObj,30, dataArray[4],2)
            data1 = dataArray5[0];
              data2 = dataArray5[1];
            mychart5.series[0].setData(data1);
             mychart5.series[1].setData(data2);
              var dataArray6 =  getOrderArray(reObj,30, dataArray[5],2)
            data1 = dataArray6[0];
              data2 = dataArray6[1];
            mychart6.series[0].setData(data1);
             mychart6.series[1].setData(data2);
              var dataArray7 =  getOrderArray(reObj,30, dataArray[6],2)
            data1 = dataArray7[0];
              data2 = dataArray7[1];
            mychart7.series[0].setData(data1);
             mychart7.series[1].setData(data2);
              var dataArray8 =  getOrderArray(reObj,30, dataArray[7],2)
            data1 = dataArray8[0];
              data2 = dataArray8[1];
            mychart8.series[0].setData(data1);
             mychart8.series[1].setData(data2);
              var dataArray9 =  getOrderArray(reObj, 30,dataArray[8],2)
            data1 = dataArray9[0];
              data2 = dataArray9[1];
            mychart9.series[0].setData(data1);
             mychart9.series[1].setData(data2);
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


    }else if(pageid==2)
    {
        var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitle,2);
        var options2=getOpition(divIdArray[1],bigTitleArray[1],timeArray,smallTitle,2);//2条线
        var options3=getOpition(divIdArray[2],bigTitleArray[2],timeArray,smallTitle,2);//2条线
        var options4=getOpition(divIdArray[3],bigTitleArray[3],timeArray,smallTitle,2);//2条线
        var options5=getOpition(divIdArray[4],bigTitleArray[4],timeArray,smallTitle,2);//2条线
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
            var dataArray1 =  getOrderArray(reObj, 30,dataArray[0],2)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            mychart1.series[0].setData(data1);
             mychart1.series[1].setData(data2);
             var dataArray2 =  getOrderArray(reObj,30, dataArray[1],2)
            data1 = dataArray2[0];
             data2 = dataArray2[1];
            mychart2.series[0].setData(data1);
             mychart2.series[1].setData(data2);
              var dataArray3 =  getOrderArray(reObj,30, dataArray[2],2)
            data1 = dataArray3[0];
             data2 = dataArray3[1];
            mychart3.series[0].setData(data1);
             mychart3.series[1].setData(data2);
              var dataArray4 =  getOrderArray(reObj, 30,dataArray[3],2)
            data1 = dataArray4[0];
             data2 = dataArray4[1];
            mychart4.series[0].setData(data1);
             mychart4.series[1].setData(data2);
              var dataArray5 =  getOrderArray(reObj,30, dataArray[4],2)
            data1 = dataArray5[0];
             data2 = dataArray5[1];
            mychart5.series[0].setData(data1);
             mychart5.series[1].setData(data2);
            mychart1.hideLoading();
            mychart2.hideLoading();
             mychart3.hideLoading();
            mychart4.hideLoading();
             mychart5.hideLoading();


        })


    }else if(pageid==3)
    {
        var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitle,2);//1条线
        var options2=getOpition(divIdArray[1],bigTitleArray[1],timeArray,smallTitle,2);//1条线
        var options3=getOpition(divIdArray[2],bigTitleArray[2],timeArray,smallTitle,2);//1条线
        var options4=getOpition(divIdArray[3],bigTitleArray[3],timeArray,smallTitle,2);//1条线

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
            var dataArray1 =  getOrderArray(reObj,30, dataArray[0],2)
            data1 = dataArray1[0];
             data2 = dataArray1[1];
            mychart1.series[0].setData(data1);
             mychart1.series[1].setData(data2);
             var dataArray2 =  getOrderArray(reObj,30, dataArray[1],2)
            data1 = dataArray2[0];
              data2 = dataArray2[1];
            mychart2.series[0].setData(data1);
             mychart2.series[1].setData(data2);
              var dataArray3 =  getOrderArray(reObj,30, dataArray[2],2)
            data1 = dataArray3[0];
              data2 = dataArray3[1];
            mychart3.series[0].setData(data1);
             mychart3.series[1].setData(data2);
              var dataArray4 =  getOrderArray(reObj, 30,dataArray[3],2)
            data1 = dataArray4[0];
              data2 = dataArray4[1];
            mychart4.series[0].setData(data1);
             mychart4.series[1].setData(data2);
            mychart1.hideLoading();
            mychart2.hideLoading();
             mychart3.hideLoading();
            mychart4.hideLoading();



        })


    }


}

//画图函数
function drawCurve(url, divIdArray,bigTitleArray ,dataArray,timeArray, pageid)
{
    var data1 = {};
    var data2 = {};
    var data3 = {};
    var data4 = {};var data5 = {};var data6 = {};var data7 = {};var data8 = {};
    //度假总订单
    var smallTitleAll=new Array();
    smallTitleAll[0]='度假总订单';smallTitleAll[1]='自由行订单';smallTitleAll[2]='团队游订单';smallTitleAll[3]='签证订单'
     var smallTitleOnline=new Array();
    smallTitleOnline[0]='online订单数';
     var smallTitleH5=new Array();
    smallTitleH5[0]='h5订单数';
    //度假app总订单
     var smallTitle1=new Array();
    smallTitle1[0]='APP订单数';smallTitle1[1]='android';smallTitle1[2]='iphone'
     var smallTitle2=new Array();
    smallTitle2[0]='iphone_6.17'; smallTitle2[1]='iphone_6.16';smallTitle2[2]='iphone_6.15';smallTitle2[3]='iphone_6.14';
    smallTitle2[4]='iphone_6.13';smallTitle2[5]='iphone_6.12';smallTitle2[6]='iphone_6.11';smallTitle2[7]='iphone_others';
    //自由定或团队分订单
    var smallTitleorder=new Array();
    smallTitleorder[0]='订单数';
    //金额
     var smallTitleAmount=new Array();
    smallTitleAmount[0]='度假总金额'; smallTitleAmount[1]='自由行总金额'; smallTitleAmount[2]='团队游总金额'; smallTitleAmount[3]='签证总金额';
    if(pageid==0)//只有一条线的情况
    {
        var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitleorder,1);
        var options2=getOpition(divIdArray[1],bigTitleArray[1],timeArray,smallTitleorder,1);
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');
        $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray1 =  getOrderArray(reObj, 90,dataArray[0],1)
            data1 = dataArray1[0];
            mychart1.series[0].setData(data1);
             var dataArray2 =  getOrderArray(reObj,90, dataArray[1],1)
            data1 = dataArray2[0];
            mychart2.series[0].setData(data1);
            mychart1.hideLoading();
            mychart2.hideLoading();

        })
    }
    if (pageid == 1) {
        var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitle1,3);
        var options2=getOpition(divIdArray[1],bigTitleArray[1],timeArray,smallTitle2,8);
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');


        $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray1 =  getOrderArray(reObj,90, dataArray[0],3)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);

            var dataArray2 = getOrderArray(reObj,90, dataArray[1],8)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            data4 = dataArray2[3];
            data5 = dataArray2[4];
            data6 = dataArray2[5];
            data7 = dataArray2[6];
            mychart2.series[0].setData(data1);
            mychart2.series[1].setData(data2);
            mychart2.series[2].setData(data3);
            mychart2.series[3].setData(data4);
            mychart2.series[4].setData(data5);
            mychart2.series[5].setData(data6);
            mychart2.series[6].setData(data7);
            mychart2.series[7].setData(data8);
            mychart1.hideLoading();
            mychart2.hideLoading();



        })
    }
    if (pageid == 2) {
        var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitleAll,4);
        var options2=getOpition(divIdArray[1],bigTitleArray[1],timeArray,smallTitleOnline,1);
        var mychart1 = new Highcharts.Chart(options1);
        var mychart2 = new Highcharts.Chart(options2);
        mychart1.showLoading('Loading data from server...');
        mychart2.showLoading('Loading data from server...');

        $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray1 =  getOrderArray(reObj,90, dataArray[0],4)
            data1 = dataArray1[0];
            data2 = dataArray1[1];
            data3 = dataArray1[2];
            data4 = dataArray1[3];

            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);
            mychart1.series[3].setData(data4);

            var dataArray2 = getOrderArray(reObj,90, dataArray[1],1)
            data1 = dataArray2[0];

            mychart2.series[0].setData(data1);


            mychart1.hideLoading();
            mychart2.hideLoading();



        })
    }
    if(pageid==4)
    {
        var options1=getOpition('vacAmount','度假金额明细',timeArray,smallTitleAmount,4);
        var mychart1 = new Highcharts.Chart(options1);
        mychart1.showLoading('Loading data from server...');
        $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray2 = getOrderArray(reObj,90, 19,4)
            data1 = dataArray2[0];
            data2 = dataArray2[1];
            data3 = dataArray2[2];
            data4 = dataArray2[3];
            mychart1.series[0].setData(data1);
            mychart1.series[1].setData(data2);
            mychart1.series[2].setData(data3);
            mychart1.series[3].setData(data4);

            mychart1.hideLoading();
             })
    }
    if(pageid==5)
    {
         var options1=getOpition(divIdArray[0],bigTitleArray[0],timeArray,smallTitleH5,1);
        var mychart1 = new Highcharts.Chart(options1);
        mychart1.showLoading('Loading data from server...');

        $.getJSON(url, function (data) {

            var reObj = data;
            var dataArray1 =  getOrderArray(reObj,90, dataArray[0],1)
            data1 = dataArray1[0];
            mychart1.series[0].setData(data1);
            mychart1.hideLoading();



        })

    }


}


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
        var  androidRate=(android*100/(android+iphone)).toFixed(2);
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


//画饼形图
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
function  getOrderArray(retobj,days, k,flag)//flag
{
var resultThree = [];      //k=15 酒店全部  k=16 x资源; K=17单选项  ;k=18  当地玩乐
    //返回4个数组
    var arr1=[];
    var arr2=[];
    var arr3=[];
    var arr4=[];
    var arr5=[];
    var arr6=[];
    var arr7=[];
    var arr8=[];
     for (var j = 0; j < days; j++)
     {
        if(k==1)//度假页app 总订单
        {
            arr2[j] = retobj.value[40 * j][3] + retobj.value[1 + 40* j][3] + retobj.value[2+ 40* j][3]+ retobj.value[3 + 40* j][3]
            arr3[j] =retobj.value[4+40* j][3] + retobj.value[5 + 40* j][3] + retobj.value[6+ 40* j][3]+ retobj.value[7 + 40* j][3]
            arr1[j] = arr3[j]+arr2[j];
        }
          if(k==2)//度假页app  分平台订单
        {
            // 0.6.17   1.6.16   2. 6.15  3. 6.14  4.6.13   5. 6.12  6.6.11 7.others
            arr1[j]=retobj.value[32+40* j][3] + retobj.value[33+ 40* j][3] + retobj.value[34+ 40* j][3]+ retobj.value[35 + 40* j][3];
            arr2[j]=retobj.value[28+40* j][3] + retobj.value[29+ 40* j][3] + retobj.value[30+ 40* j][3]+ retobj.value[31 + 40* j][3];
            arr3[j]=retobj.value[24+40* j][3] + retobj.value[25+ 40* j][3] + retobj.value[26+ 40* j][3]+ retobj.value[27 + 40* j][3];
            arr4[j]=retobj.value[20+40* j][3] + retobj.value[21+ 40* j][3] + retobj.value[22+ 40* j][3]+ retobj.value[23+ 40* j][3];
            arr5[j]=retobj.value[16+40* j][3] + retobj.value[17 + 40* j][3] + retobj.value[18 + 40* j][3]+ retobj.value[19 + 40* j][3];
            arr6[j]=retobj.value[12+40* j][3] + retobj.value[13 + 40* j][3] + retobj.value[14 + 40* j][3]+ retobj.value[15 + 40* j][3];
            arr7[j]=retobj.value[8+40* j][3] + retobj.value[9 + 40* j][3] + retobj.value[10 + 40* j][3]+ retobj.value[11 + 40* j][3];
            arr8[j]=retobj.value[36+40* j][3] + retobj.value[37 + 40* j][3] + retobj.value[38 + 40* j][3]+ retobj.value[39 + 40* j][3];
        }
          if(k==3)//自由行app   总订单
        {

            arr3[j] = retobj.value[4+40 * j][3];
            arr2[j] =retobj.value[0+40 * j][3];
            arr1[j] = arr3[j]+arr2[j];
        }
         if(k==4)//自由行app   分平台
        {
            arr1[j]=retobj.value[32+40* j][3] ;  //6.17 1.5
            arr2[j]=retobj.value[28+40* j][3] ;  //6.16 1.5
            arr3[j]=retobj.value[24+40* j][3] ;// 6.15
            arr4[j]=retobj.value[20+40* j][3] ;// 6.14
            arr5[j]=retobj.value[16+40* j][3];// 6.13
            arr6[j]=retobj.value[12+40* j][3];// 6.12
            arr7[j]=retobj.value[8+40* j][3] ;// 6.11
            arr8[j]=retobj.value[36+40* j][3] ;// others

        }
          if(k==5)//团队游app   总订单
        {
             arr3[j] = retobj.value[5+40 * j][3]+retobj.value[6+40* j][3];
            arr2[j] =retobj.value[1+40 * j][3]+retobj.value[2+40 * j][3];
            arr1[j] = arr3[j]+arr2[j];
        }
         if(k==6)//团队游app   分平台
        {
            arr1[j]=retobj.value[33+40* j][3]+retobj.value[34+40* j][3] ;  //6.17 1.5
            arr2[j]=retobj.value[29+40* j][3]+retobj.value[30+40* j][3] ;  //6.16 1.5
            arr3[j]=retobj.value[25+40* j][3] +retobj.value[26+40* j][3] ;  //6.15 1.5;
            arr4[j]=retobj.value[21+40* j][3] +retobj.value[22+40* j][3] ;  //6.15 1.5;
            arr5[j]=retobj.value[17+40* j][3]+retobj.value[18+40* j][3] ;  //6.15 1.5;
            arr6[j]=retobj.value[13+40* j][3]+retobj.value[14+40* j][3] ;  //6.15 1.5;
            arr7[j]=retobj.value[9+40* j][3]+retobj.value[10+40* j][3] ;  //6.15 1.5 ;
            arr8[j]=retobj.value[37+40* j][3]+retobj.value[38+40* j][3] ;  //6.15 1.5 ;
        }
          if(k==7)//签证app   总订单
        {
             arr3[j] = retobj.value[7+40 * j][3];
            arr2[j] =retobj.value[3+40 * j][3];
            arr1[j] = arr3[j]+arr2[j];
        }
        else if(k==8)//签证app   分平台
        {
            arr1[j]=retobj.value[35+40* j][3] ;  //6.15 1.5
            arr2[j]=retobj.value[31+40* j][3] ;  //6.15 1.5
            arr3[j]=retobj.value[27+40* j][3] ;
            arr4[j]=retobj.value[23+40* j][3] ;
            arr5[j]=retobj.value[19+40* j][3];
            arr6[j]=retobj.value[15+40* j][3];
            arr7[j]=retobj.value[11+40* j][3] ;
            arr8[j]=retobj.value[39+40* j][3] ;//others
        }
          if(k==9)//邮轮app   总订单
        {

        }
         if(k==10)//邮轮app   分平台
        {

        }
         if(k==11)//度假总订单
         {

            arr2[j]=retobj.value[4+8* j][3] ;//自由定
            arr3[j]=retobj.value[5+8* j][3]+retobj.value[6+8* j][3]  ;//团队游
            arr4[j]=retobj.value[7+8* j][3] ;//签证
            arr1[j]=arr2[j]+arr3[j]+ arr4[j];//总订单
         }
          if(k==12)//度假online
         {
             arr1[j]=retobj.value[8* j][3]+retobj.value[1+8* j][3]+retobj.value[2+8* j][3]+retobj.value[3+8* j][3];
         }
         if(k==13)//自由行总订单
         {
             arr1[j]=retobj.value[4+8* j][3];

         }
          if(k==14)//自由行online
         {
             arr1[j]=retobj.value[8* j][3];
         }
           if(k==15)//团队游总订单
         {
             arr1[j]=retobj.value[5+8* j][3]+retobj.value[6+8* j][3];
         }
          if(k==16)//团队游online
         {
              arr1[j]=retobj.value[1+8* j][3]+retobj.value[2+8* j][3];
         }
           if(k==17)//签证总订单
         {

             arr1[j]=retobj.value[7+8* j][3];
         }
          if(k==18)//签证online
         {
             arr1[j]=retobj.value[3+8* j][3];
         }
           if(k==19)//度假总金额
         {

             arr2[j]=retobj.value[0+3* j][2];
             arr3[j]=retobj.value[1+3* j][2];
             arr4[j]=retobj.value[2+3* j][2];
             arr1[j]=arr2[j]+arr3[j]+arr4[j]

         }
         if(k==20)//自由行总book
         {

             arr1[j]=toDecimal(retobj.value[30*18+7+18* j][3]*100);//现在的数据
             console.log('yy'+j+'--'+arr1[j]);
             arr2[j]=toDecimal(retobj.value[7+18* j][3]*100);//历史的数据
         }
         if(k==21)//自由行总book sdp app
         {
             arr1[j]=toDecimal(retobj.value[30*18+4+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[4+18* j][3]*100);
         }
         if(k==22)//自由行总book sdp online
         {
             arr1[j]=toDecimal(retobj.value[30*18+6+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[6+18* j][3]*100);
         }
         if(k==23)//自由行总book sdp h5
         {
             arr1[j]=toDecimal(retobj.value[30*18+5+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[5+18* j][3]*100);
         }
         if(k==24)//自由行总book dp app
         {
             arr1[j]=toDecimal(retobj.value[30*18+0+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[0+18* j][3]*100);
         }
         if(k==25)//自由行总book dp online
         {
             arr1[j]=toDecimal(retobj.value[30*18+2+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[2+18* j][3]*100);
         }
         if(k==26)//自由行总book dp h5
         {
             arr1[j]=toDecimal(retobj.value[30*18+1+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[1+18* j][3]*100);
         }
         if(k==27)//自由行总book 国际站
         {
             arr1[j]=toDecimal(retobj.value[30*18+8+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[8+18* j][3]*100);
         }
         if(k==28)//自由行总book offline
         {
             arr1[j]=toDecimal(retobj.value[30*18+3+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[3+18* j][3]*100);
         }
         if(k==29)//自由行总commit
         {
             arr1[j]=toDecimal(retobj.value[30*18+16+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[16+18* j][3]*100);
         }
         if(k==30)//自由行总commit sdp app
         {
             arr1[j]=toDecimal(retobj.value[30*18+13+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[13+18* j][3]*100);
         }
         if(k==31)//自由行总commit sdp online
         {
             arr1[j]=toDecimal(retobj.value[30*18+15+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[15+18* j][3]*100);
         }
         if(k==32)//自由行总commit sdp h5
         {
             arr1[j]=toDecimal(retobj.value[30*18+14+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[14+18* j][3]*100);
         }
         if(k==33)//自由行总commit dp app
         {
             arr1[j]=toDecimal(retobj.value[30*18+9+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[9+18* j][3]*100);
         }
         if(k==34)//自由行总commit dp online
         {
             arr1[j]=toDecimal(retobj.value[30*18+11+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[11+18* j][3]*100);
         }
          if(k==35)//自由行总commit dp h5
         {
             arr1[j]=toDecimal(retobj.value[30*18+10+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[10+18* j][3]*100);
         }
          if(k==36)//自由行总commit 国际站
         {
             arr1[j]=toDecimal(retobj.value[30*18+17+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[17+18* j][3]*100);
         }
          if(k==37)//自由行总commit offline
         {
             arr1[j]=toDecimal(retobj.value[30*18+12+18* j][3]*100);
             arr2[j]=toDecimal(retobj.value[12+18* j][3]*100);
         }
           if(k==38)//团队游总book
         {
             arr1[j]=toDecimal(retobj.value[4+10* j][3]);
             arr2[j]=toDecimal(retobj.value[4+10* j][3]);
         }
           if(k==39)//团队游book app
         {
             arr1[j]=toDecimal(retobj.value[30*10+0+10*j][3]*100);
             arr2[j]=toDecimal(retobj.value[0+10* j][3]*100);
         }
           if(k==40)//团队游 book online
         {
             arr1[j]=toDecimal(retobj.value[30*10+3+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[3+10* j][3]*100);
         }
           if(k==41)//团队游book h5
         {
             arr1[j]=toDecimal(retobj.value[30*10+1+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[1+10* j][3]*100);
         }
           if(k==42)//团队游book offline
         {
             arr1[j]=toDecimal(retobj.value[30*10+2+10* j][3]*100);
              arr2[j]=toDecimal(retobj.value[2+10* j][3]*100);
         }
           if(k==43)//团队游总commit
         {
             arr1[j]=toDecimal(retobj.value[30*10+9+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[9+10* j][3]*100);
         }
           if(k==44)//团队游总commit APP
         {
             arr1[j]=toDecimal(retobj.value[30*10+5+8* j][3]*100);
             arr2[j]=toDecimal(retobj.value[5+8* j][3]*100);
         }
           if(k==45)//团队游总commit ONLINE
         {
             arr1[j]=toDecimal(retobj.value[30*10+8+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[8+10* j][3]*100);
         }
           if(k==46)//团队游总commit H5
         {
             arr1[j]=toDecimal(retobj.value[30*10+6+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[6+10* j][3]*100);
         }
             if(k==47)//团队游总commit OFFLINE
         {
             arr1[j]=toDecimal(retobj.value[30*10+7+10* j][3]*100);
             arr2[j]=toDecimal(retobj.value[7+10* j][3]*100);
         }
          if(k==48)//签证 总commit
         {
             arr1[j]=toDecimal(retobj.value[30*3+0+3* j][3]*100)+toDecimal(retobj.value[30*3+1+3* j][3]*100)+toDecimal(retobj.value[30*3+2+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[0+3* j][3]*100)+toDecimal(retobj.value[1+3* j][3]*100)+toDecimal(retobj.value[2+3* j][3]*100);
         }
          if(k==49)//签证 app
         {
             arr1[j]=toDecimal(retobj.value[30*3+0+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[0+3* j][3]*100);
         }
          if(k==50)//签证 online
         {
             arr1[j]=toDecimal(retobj.value[30*3+2+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[2+3* j][3]*100);
         }
          if(k==51)//签证 h5
         {
             arr1[j]=toDecimal(retobj.value[30*3+1+3* j][3]*100);
             arr2[j]=toDecimal(retobj.value[1+3* j][3]*100);
         }
          if(k==52)//diy查询为空 全部
         {
             arr1[j]=toDecimal(retobj.value[2+19* j][5]*100);
         }
          if(k==53)//查询为空 dp
         {
             arr1[j]=toDecimal(retobj.value[0+19* j][5]*100);
         }
          if(k==54)//查询为空 sdp
         {
             arr1[j]=toDecimal(retobj.value[1+19* j][5]*100);
         }
          if(k==55)//查询为空 dp online 国内
         {
             arr1[j]=toDecimal(retobj.value[3+19* j][5]*100);
         }
          if(k==56)//查询为空 sdp online 国内
         {
             arr1[j]=toDecimal(retobj.value[5+19* j][5]*100);
         }
          if(k==57)//查询为空 dp 无线 国内
         {
             arr1[j]=toDecimal(retobj.value[4+19* j][5]*100);
         }
          if(k==58)//查询为空 sdp 无线 国内
         {
             arr1[j]=toDecimal(retobj.value[6+19* j][5]*100);
         }
          if(k==59)//查询为空 dp online 国际
         {
             arr1[j]=toDecimal(retobj.value[11+19* j][5]*100);
         }
          if(k==60)//查询为空 sdp online 国际
         {
             arr1[j]=toDecimal(retobj.value[13+19* j][5]*100);
         }
          if(k==61)//查询为空 dp 无线 国际
         {
             arr1[j]=toDecimal(retobj.value[12+19* j][5]*100);
         }
          if(k==62)//查询为空 sdp 无线 国际
         {
             arr1[j]=toDecimal(retobj.value[14+19* j][5]*100);
         }
          if(k==63)//查询为空 dp 国内机票
         {
             arr1[j]=toDecimal(retobj.value[7+19* j][5]*100);
         }
          if(k==64)//查询为空 sdp 国内机票
         {
             arr1[j]=toDecimal(retobj.value[8+19* j][5]*100);
         }
          if(k==65)//查询为空 dp 国际机票
         {
             arr1[j]=toDecimal(retobj.value[15+19* j][5]*100);
         }
          if(k==66)//查询为空 sdp 国际机票
         {
             arr1[j]=toDecimal(retobj.value[16+19* j][5]*100);
         }
          if(k==67)//查询为空 dp 国内酒店
         {
             arr1[j]=toDecimal(retobj.value[9+19* j][5]*100);
         }
          if(k==68)//查询为空 sdp 国内酒店
         {
             arr1[j]=toDecimal(retobj.value[10+19* j][5]*100);
         }
          if(k==69)//查询为空 dp国际酒店
         {
             arr1[j]=toDecimal(retobj.value[17+19* j][5]*100);
         }
          if(k==70)//查询为空 sdp 国际酒店
         {
             arr1[j]=toDecimal(retobj.value[18+19* j][5]*100);
         }
         if(k==71)//度假h5总订单
         {
             arr1[j]= retobj.value[0+3 * j][2]+retobj.value[1+3 * j][2]+retobj.value[2+3 * j][2];
         }
         if(k==72)//度假h5自由行总订单
         {
             arr1[j]= retobj.value[0+3 * j][2];
         }
         if(k==73)//度假h5团队游总订单
         {
             arr1[j]=retobj.value[1+3 * j][2];
         }
         if(k==74)//度假h5签证总订单
         {
             arr1[j]=retobj.value[2+3 * j][2];
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
    else if(flag==6)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
        resultThree[5]=arr6;
    }
     else if(flag==7)
    {
        resultThree[0]=arr1;
        resultThree[1]=arr2;
        resultThree[2]=arr3;
        resultThree[3]=arr4;
        resultThree[4]=arr5;
        resultThree[5]=arr6;
         resultThree[6]=arr7;
    }
     else if(flag==8)
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
return resultThree;

}
 function toDecimal(x) {
            var f = parseFloat(x);
            if (isNaN(f)) {
                return;
            }
            f = Math.round(x*100)/100;
            return f;
        }
function getOpition(divId,bigTitle,timeArray,smallTitle,flag)//flag标志位 用于定义几条线
{
    var options={};
    var data1 = {};
    var data2 = {};
    var data3 = {};
    var data4 = {};
    var data5 = {};
    var data6 = {};
    var data7 = {};
    var data8 = {};
    if(flag==1)
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
                    step:12,
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
                name:'<p style=" color:#000000">'+smallTitle[0]+'</p>',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0033',
                visible: true,
                shadow: false,
                stickyTracking: false,
            }],
                legend : {
                    //layout: 'vertical',
                    //borderWidth: 0.5,
                    itemHiddenStyle: {color: 'red'}
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
     else  if(flag==2)
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
            }],
                legend : {
                    //layout: 'vertical',
                    //borderWidth: 0.5,
                   // itemHiddenStyle: {color: '#FDFFFF'}
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
   else  if(flag==3)
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
                    step:12,
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
                }],
                legend : {
                    //layout: 'vertical',
                    //borderWidth: 0.5,
                  //  itemHiddenStyle: {color: 'red'}
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
    else if(flag==4)
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
                    step:12,
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
    else if(flag==5)
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
                    radius: 0.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step:20,
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
    }
    else if(flag==6)
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
                    step:12,
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
    else if(flag==7)
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
                    step:12,
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
                    name:smallTitle[3],
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
     else if(flag==8)
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
                    step:12,
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
                    name:smallTitle[3],
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
    else  if(flag==11)
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
                    radius: 0.5,
                },
            }
        },
            xAxis: {
                categories: timeArray,
                //tickInterval: 5  ,   //也会导致误会
                labels: {
                    step:16,
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
                name:'<p style=" color:#000000">'+smallTitle[0]+'</p>',
                lineWidth: 1,
                radius: 1,
                data: data1,
                color: '#FF0033',
                visible: true,
                shadow: false,
                stickyTracking: false,
            }],
                legend : {
                    //layout: 'vertical',
                    //borderWidth: 0.5,
                    itemHiddenStyle: {color: 'red'}
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