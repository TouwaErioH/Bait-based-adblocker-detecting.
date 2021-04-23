
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  ////https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
  

//获取div的背景图片地址
function getDivImage(divElement) {
	let imgurl = window.getComputedStyle(divElement, null).getPropertyValue('background-image');
	return imgurl.substring(5, imgurl.lastIndexOf('\"'));
}



function servicestop(){
    return ;
}

function reactalert(){
        //alert("bait img onload")
        var baitalert = document.createElement ("div") ;
        baitalert.setAttribute ("class", "baitClass2");
        
        var url1 = "https://iknow-base.cdn.bcebos.com/xuguodongpc.png"; //这张图片暂时没有被list
        var url2 = "https://ecmb.bdimg.com/kmarketingadslogo/9ec1c2fa448d4a8069825f69a10d4007_259_194.jpg"

        var Imagealert = document.createElement("img");
        Imagealert.src = url2;
        //Image.src = url1;
    
        Imagealert.setAttribute("id", "baitimgalert");
        Imagealert.setAttribute("alt", "loading");
        Imagealert.setAttribute("class", "baitClass2");
    
        baitalert.appendChild(Imagealert);
    
        baitalert = document.body.appendChild(baitalert); 
    
        console.log("baitalert onload");
    
    
        
        sleep(2000).then(() => {  //sleep 使用promise api，没有新定义。只阻塞下面的语句
            console.log("sleep over");
    
    

        if (!$("#baitimgalert").is(':visible') ) {
            alert("adblock detected! service denied");
            servicestop();  //停止服务
            console.log("img alblock hidden  detected;");
        }
        console.log(Imagealert.height)
        if (Imagealert.height<50) {
            alert("adblock detected! service denied");
            servicestop();  //停止服务
            console.log("img alblock change  detected;");
        }
    })

}

function setCookie(cname,cvalue,exdays,adblock) //出于安全考虑，chrome本地环境cookie是禁止的;firefox可以
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();

  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"+"; adblock=" +adblock;

  //document.cookie = cname + "=" + cvalue+ ";" + expires; 
  //console.log(document.cookie)  只输出username=xx

}

//https://www.zhihu.com/question/62390053
//document.cookie 只能获取name、value
function getCookie(cname)
{
    
  var name = cname;
  var ca = document.cookie.split(';'); //document.cookie获取cookie,。split变为数组
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) { //indexof:字符串首次出现的位置
        return c.substring(name.length+1,c.length); //start, stop ;unescape很重要（url编码
    }
  }
  //console.log("not found")
  return "";

}

/*Cookie是由服务器端生成并发送给客户端的
 浏览器将cookie保存

之后每次http请求浏览器都会将cookie发送给服务器端（只发送name，value，因为其他信息（domin。path是由浏览器使用的）

*/

function checkCookie(){   //关闭页面再次打开即可重新输入;
    var user=getCookie("username");
    if (user!=""){
        alert("欢迎 " + user + " 再次访问");
    }
    else {
        user = prompt("请输入你的名字:","");
          if (user!="" && user!=null){
            setCookie("username",user,30,0);  //默认adblock=0，没有检测到
        }
    }
    return user;
}

function test(){
    var url1 = "https://iknow-base.cdn.bcebos.com/xuguodongpc.png"; //这张图片暂时没有被list
    var url2 = "https://ecmb.bdimg.com/kmarketingadslogo/9ec1c2fa448d4a8069825f69a10d4007_259_194.jpg"

    var Adsarray=new Array(url2,url1);
    for(var i=0;i<Adsarray.length;i++){
        console.log(Adsarray[i]);
    }
}


function sendtoserver(){
    //发送baits的状态给server，采用TCP等方式
    //浏览器和服务器间采用HTTP连接(基于TCP)
    //也可以用google analytics等
    return ;
}

function reactcookie(){//保存adblock（bait的状态）的状态到本地cookie for future use,并将cookie（每个诱饵的状态？）发送给后端。

    //alert("bait img onload")
    var baitcookie = document.createElement ("div") ;
    baitcookie.setAttribute ("class", "baitClass2");
    
    var url1 = "https://iknow-base.cdn.bcebos.com/xuguodongpc.png"; //这张图片暂时没有被list
    var url2 = "https://ecmb.bdimg.com/kmarketingadslogo/9ec1c2fa448d4a8069825f69a10d4007_259_194.jpg"

    var Imagecookie = document.createElement("img");
    Imagecookie.src = url2;
    //Image.src = url1;

    Imagecookie.setAttribute("id", "baitimgcookie");
    Imagecookie.setAttribute("alt", "loading");
    Imagecookie.setAttribute("class", "baitClass2");

    baitcookie.appendChild(Imagecookie);

    baitcookie = document.body.appendChild(baitcookie); 

    console.log("baitcookie onload");

    checkCookie();
    
    sleep(2000).then(() => {  //sleep 使用promise api，没有新定义。只阻塞下面的语句
        console.log("sleep over");



    if (!$("#baitimgcookie").is(':visible') ) {
        setCookie("username",getCookie("username"),30,1)
        //servicestop();  //停止服务 可选。
        console.log("img alblock hidden detected;","cookie:username=",getCookie("username"),"adblock = 1");//保存到本地（其他操作可用
        sendtoserver();//除了保存bait的状态（adblock=1）到本地,也发送给服务器
    }
    else if (Imagecookie.height<50) {
        setCookie("username",getCookie("username"),30,1)
        //servicestop();  //停止服务
        console.log("img alblock change detected;","cookie:username=",getCookie("username"),"adblock = 1");
        sendtoserver();
    }

})
}



function ga(v1,v2,v3,v4,v5,v6){
    return ;
}
var desktop = "desktop"
//使用第三方提供的工具分析、记录
function reactgoogleanalytic(){

    //alert("bait img onload")
    var baitga = document.createElement ("div") ;
    baitga.setAttribute ("class", "baitClass2");
    
    var url1 = "https://iknow-base.cdn.bcebos.com/xuguodongpc.png"; //这张图片暂时没有被list
    var url2 = "https://ecmb.bdimg.com/kmarketingadslogo/9ec1c2fa448d4a8069825f69a10d4007_259_194.jpg"

    var Imagega = document.createElement("img");
    Imagega.src = url2;
    //Imagega.src = url1;

    Imagega.setAttribute("id", "baitimgga");
    Imagega.setAttribute("alt", "loading");
    Imagega.setAttribute("class", "baitClass2");

    baitga.appendChild(Imagega);

    baitga = document.body.appendChild(baitga); 

    console.log("baitga onload");

    
    sleep(2000).then(() => {  //sleep 使用promise api，没有新定义。只阻塞下面的语句
        console.log("sleep over");

        var blockStatus = "unblocked"


        if (!$("#baitimgga").is(':visible') || Imagega.height<50 || baitga == undefined || baitga.height == 0){
            //GA API
            /*
            https://support.google.com/analytics/answer/6367342?hl=zh-Hans#
            https://zhuanlan.zhihu.com/p/234372710
            https://www.jianshu.com/p/fca3c25d6923?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
            这里由于不是工作重点，不再展示

            不方便展示，给个截图在论文？即可
            效果见：



            将跟踪代码直接添加到您网站每个网页的 HTML 中


            */
            blockStatus="blocked"
            ga("send","event","Ad block",blockStatus,desktop,{nonInteraction:true});
            console.log("blockedStatus:",blockStatus,"send to GA")
            //send，event 事件追踪；Ad block 事件类别(categories)；blockStatus 事件动作（action）；
            //desktop（发生在桌面系统），{nonInteraction:true}非互动类型，影响跳出率计算
            
            //除了默默的报告给onwer，没有其他动作
            // servicestop(): //可选

            //国内也有百度统计、腾讯统计等
        }

})
}



async function reactswitchads(){ //切换新的广告（直到不被ban

    //alert("bait img onload")
    var baitsw = document.createElement ("div") ;
    baitsw.setAttribute ("class", "baitClass2");
    
    var url3 = "https://iknow-base.cdn.bcebos.com/xuguodongpc.png"; //这张图片暂时没有被list
    var url1 = "https://ecmb.bdimg.com/kmarketingadslogo/9ec1c2fa448d4a8069825f69a10d4007_259_194.jpg"
    var url2 = "https://ss0.bdstatic.com/-0U0b8Sm1A5BphGlnYG/tam-ogel/6190b9bbb412b0c9c50c42751b0aa94c_250_250.jpg"
    var url4 = "https://iknow-base.cdn.bcebos.com/tuanduizhaomupcqb.jpg?x-bce-process=image/quality,q_80"


    var Adsarray=new Array(url1,url2,url3,url4);
    var Imagesw = document.createElement("img");
    
    //第一次放入
    Imagesw.src = Adsarray[0];
    Imagesw.setAttribute("id", "baitimgswitch");
    Imagesw.setAttribute("alt", "loading");
    Imagesw.setAttribute("class", "baitClass2");
    baitsw.appendChild(Imagesw);
    baitsw = document.body.appendChild(baitsw); 
    var swblocked=true;
    var i=1;
    console.log("baitswitch onload")
    while(swblocked && i<Adsarray.length){

        await sleep(2000);  //直接用 sleep(2000).then(() => { 会无限循环？出错
        console.log("sleep over;","now ads id i=",i); //注意Adsarray[0]对应ad id = 1;
            if (!$("#baitimgswitch").is(':visible') || Imagesw.height<50 || baitsw == undefined 
                || baitsw.height == 0){
                console.log("ads",i,"blocked")
                document.getElementById('baitimgswitch').src=Adsarray[i];
                swblocked=true;
                //servicestop();
            }
            else{
                swblocked=false;
                break
            }
            i++;

    }
    if(i==Adsarray.length || swblocked) //超过 ==
    {
       console.log("ads all blocked")
       //servicestop();
    }

}