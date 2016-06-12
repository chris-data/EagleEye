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

function checkSDP() {   //2016-05-31
    //定义线的颜色
    var timeArray = getMonth30();
    var nameArray = [];
    nameArray[0] = 'SDP Online-详情页';
    nameArray[1] = 'SDP APP-详情页';
    nameArray[2] = 'SDP Online-填写页';
    nameArray[3] = 'SDP APP-填写页';
    nameArray[4] = '新机票引擎';
    nameArray[5] = '旧机票引擎';
    $checkContainer = $("#checkContainer")
    $checkContainer.empty();//清空翻页标签
    $checkContainer.append("<div id='all' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Dp' style='height:300px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div><div id='Sdp' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Online' style='height:300px;width:49%;float:left;margin-left:10px;margin-top:2px'></div><div id='Wireless' style='height:300px;width:49%;float:left;clear:left;margin-top: 2px'></div><div id='Offline' style='height:300px;width:49%;float:left;margin-left:10px;margin-top: 2px '></div>")
    var url = '/EagleEye/ajax/newcheckhis/'+sysdate(-30)+'/'+sysdate(0);
     var smallTitle=new Array();
    smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var orderSquence= new Array();
    orderSquence[0]=22;orderSquence[1]=23;orderSquence[2]=24;orderSquence[3]=25;orderSquence[4]=26;orderSquence[5]=27;
    drawCurve(url, 'spline', nameArray, timeArray, 0,null,smallTitle,orderSquence)

}

function checkResource()
{

 //定义线的颜色
    var timeArray = getMonth30();
    var nameArray = [];
    nameArray[0] = 'SDP 机票';
    nameArray[1] = 'SDP 酒店';
    nameArray[2] = 'SDP 可选项';
    nameArray[3] = 'SDP 产品';
    $checkContainer = $("#checkResourceH")
    $checkContainer.empty();//清空翻页标签
    $checkContainer.append("<div id='char11' style='height:300px;width:44%;float:left;clear:left;margin-top: 2px'></div><div id='char12' style='height:300px;width:44%;float:left;margin-left:90px;margin-top: 2px '></div><div id='char13' style='height:300px;width:44%;float:left;clear:left;margin-top: 10px'></div><div id='char14' style='height:300px;width:44%;float:left;margin-left:90px;margin-top:10px'></div>")
    var url = '/EagleEye/ajax/newcheckhis/'+sysdate(-30)+'/'+sysdate(0);
     var smallTitle=new Array();
    smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var orderSquence= new Array();
    orderSquence[0]=28;orderSquence[1]=29;orderSquence[2]=30;orderSquence[3]=31;
    drawCurve(url, 'spline', nameArray, timeArray,5,null,smallTitle,orderSquence)

}

function checkDP()
{

     //定义线的颜色
    var timeArray = getMonth30();
    var nameArray = [];
    nameArray[0] = 'DP 全部';
    nameArray[1] = 'DP Online';
    nameArray[2] = 'DP 无线';
    nameArray[3] = 'DP Offline';
    $checkContainer = $("#DPH")
    $checkContainer.empty();//清空翻页标签
    $checkContainer.append("<div id='char1' style='height:300px;width:44%;float:left;clear:left;margin-top: 10px'></div><div id='char2' style='height:300px;width:44%;float:left;margin-left:90px;margin-top: 10px '></div><div id='char3' style='height:300px;width:44%;float:left;clear:left;margin-top: 10px'></div><div id='char4' style='height:300px;width:44%;float:left;margin-left:90px;margin-top:10px'></div>")
    var url = '/EagleEye/ajax/olddpcheckhis/'+sysdate(-30)+'/'+sysdate(0);
     var smallTitle=new Array();
    smallTitle[0]='失败率';smallTitle[1]='失败数';smallTitle[2]='调用数'
     var orderSquence= new Array();
    orderSquence[0]=32;orderSquence[1]=33;orderSquence[2]=34;orderSquence[3]=35;
    drawCurve(url, 'spline', nameArray, timeArray, 1,null,smallTitle,orderSquence)


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
        if(k==19) //总体转化率
        {
            if(flag==1)//正常情况
            {
                  fail[j] = retobj.value[i  +2+ 6 * j][2];//总订单
            total[j] = retobj.value[i + 5 + 6 * j][2];//总UV
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat
            }
            if(flag==0)//异常情况
            {
                if(j!=29)
                {
                      fail[j] = retobj.value[i  +2+ 6 * j][2];//总订单
                    total[j] = retobj.value[i + 5 + 6 * j][2];//总UV
                    var x= (fail[j]*100 / total[j]).toFixed(2);
                    rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat
                }
            }

        }
        if(k==20)//自由行
        {
            if(flag==1)//正常情况
            {
                 fail[j] = retobj.value[i  + 6 * j][2];//自由行订单
            total[j] = retobj.value[i + 1 + 6 * j][2] ;//自由行UV
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat
            }
            if(flag==0)
            {
                if(j!=29)
                {
                       fail[j] = retobj.value[i  + 6 * j][2];//自由行订单
            total[j] = retobj.value[i + 1 + 6 * j][2] ;//自由行UV
              var x= (fail[j]*100 / total[j]).toFixed(2);
            rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat
                }
            }

        }
        if(k==21) //团队
        {
             if(flag==1)//正常情况
             {
                 fail[j] = retobj.value[i + 3 + 6 * j][2];//团队订单
                 total[j] = retobj.value[i + 4 + 6 * j][2];//团队UV
                 var x = (fail[j]*100 / total[j]).toFixed(2);
                 rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat
             }
            if(flag==0)
            {
                if(j!=29)
                {
                     fail[j] = retobj.value[i + 3 + 6 * j][2];//团队订单
                 total[j] = retobj.value[i + 4 + 6 * j][2];//团队UV
                 var x = (fail[j]*100 / total[j]).toFixed(2);
                 rate[j] = parseFloat(x);//转化率  toFixed(4) parseFloat

                }
            }
        }
         if (k == 22) //SDP Online详情页
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
         if (k == 23) //SDP APP 详情页
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
         if (k == 24) //SDP Online填写页
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
         if (k == 25) //SDP APP填写页
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
         if (k == 26) //SDP 新机票引擎
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
         if (k == 27) //SDP 旧机票引擎
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
         if (k == 28) //SDP 机票
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
         if (k == 29) //SDP 酒店
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
         if (k == 30) //SDP 可选项
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
         if (k == 31) //SDP 产品
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
         if (k == 32) //DP 全部
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
         if (k == 33) //DP Online
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
         if (k == 34) //DP 无线
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
         if (k == 35) //DP Offline
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


    }
    resultThree[0] = rate;
    resultThree[1] = fail;
    resultThree[2] = total;
    return resultThree;

}


function options(divId,type,bigTitle,timeArray,smallTitle)
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
        var options1=options('char1',type,nameArray[0],timeArray,smallTitle)
        var options2=options('char2',type,nameArray[1],timeArray,smallTitle)
        var options3=options('char3',type,nameArray[2],timeArray,smallTitle)
        var options4=options('char4',type,nameArray[3],timeArray,smallTitle)
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
         var options1=options('all',type,nameArray[0],timeArray,smallTitle)
         var options2=options('Dp',type,nameArray[1],timeArray,smallTitle)
         var options3=options('Sdp',type,nameArray[2],timeArray,smallTitle)
         var options4=options('Online',type,nameArray[3],timeArray,smallTitle)
         var options5=options('Wireless',type,nameArray[4],timeArray,smallTitle)
         var options6=options('Offline',type,nameArray[5],timeArray,smallTitle)
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
        var options1=options('flight0',type,nameArray[0],timeArray,smallTitle)
        var options2=options('flight1',type,nameArray[1],timeArray,smallTitle)
        var options3=options('flight2',type,nameArray[2],timeArray,smallTitle)
        var options4=options('flight3',type,nameArray[3],timeArray,smallTitle)
        var options5=options('flight4',type,nameArray[4],timeArray,smallTitle)
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
        var options1=options('char11',type,nameArray[0],timeArray,smallTitle)
        var options2=options('char12',type,nameArray[1],timeArray,smallTitle)
        var options3=options('char13',type,nameArray[2],timeArray,smallTitle)
        var options4=options('char14',type,nameArray[3],timeArray,smallTitle)
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

        var options1=options('total',type,nameArray[0],timeArray,smallTitle)
        var options2=options('diy',type,nameArray[1],timeArray,smallTitle)
        var options3=options('pkg',type,nameArray[2],timeArray,smallTitle)
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

     var timeArray = getMonth30();
     var url = '/EagleEye/ajax/appvacr/'+sysdate(-31)+'/'+sysdate(0) ;
     var nameArray = [];
     nameArray[0] = 'app-总体转化率';nameArray[1] = 'app-自由行转化率';nameArray[2] = 'app-团队游转化率';
     var smallTitle=new Array();
      smallTitle[0]='转化率';smallTitle[1]='订单';smallTitle[2]='流量(uv)'
     drawCurve(url, 'spline', nameArray, timeArray, 4,null,smallTitle,null)
}