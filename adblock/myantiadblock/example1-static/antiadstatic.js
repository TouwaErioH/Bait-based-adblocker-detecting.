
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

async function tupiancheck(){ //简单的图片bait //在这个例子直接说明真实广告和url伪造广告的关系
    await sleep(2000); 
    console.log("sleep over;","图片诱饵检测"); //$("#tupian").height(),document.getElementById('bo').height,注意区分
    
            if (!$("#tupian").is(':visible') || $("#tupian").height()<50 || $("#tupian") == undefined 
                || $("#tupian").height() == 0){
                console.log("图片诱饵blocked. 存在adblocker")
                //servicestop();
            }
            else
            console.log("图片诱饵not blocked")

}

async function multiimg(){ //多个baits，为了方便，采用多个图片;
    //多个诱饵独立检测，可能诱饵种类不同(图片、url、字符串...)检测方法不同，所以没有写成循环形式，表示分别采用不同方法检测
    //一旦检测到block，即退出
    //也可以全都检测

    //更自动化的检测见后面的  chainencode
    
    await sleep(2000); 
    console.log("sleep over;","多个诱饵检测"); //$("#tupian").height(),document.getElementById('bo').height,注意区分
    

            if (!$("#multi1").is(':visible') || $("#multi1").height()<50 || $("#multi1") == undefined 
                || $("#multi1").height() == 0){
                console.log("诱饵multi1 blocked. 存在adblocker")
                return ;
                //servicestop();
            }
            else
                console.log("诱饵multi1 not blocked")
            
            if (!$("#multi2").is(':visible') || $("#multi2").height()<50 || $("#multi2") == undefined 
            || $("#multi2").height() == 0){
                console.log("诱饵multi2 blocked. 存在adblocker")
                return ;
            //servicestop();
            }
            else
                console.log("诱饵multi2 not blocked")
            
            if (!$("#multi3").is(':visible') || $("#multi3").height()<50 || $("#multi3") == undefined 
                || $("#multi3").height() == 0){
                    console.log("诱饵multi3 blocked. 存在adblocker")
                    return ;
                //servicestop();
                }
            else
                    console.log("诱饵multi3 not blocked")
            console.log("所有诱饵均未被blocked，不存在adblocker")
}

async function multilevel(){ //多级检测bait 
    await sleep(2000); 
    console.log("sleep over;","多级检测");
    if(typeof typeof(document.getElementById('multilevel')) !="undefined"){//check level 1
        let divImg = document.querySelector('#multilevel'); //获取div元素  let访问空间限制在块内
        let getImg = new Image(); //新建Image对象
        getImg.src = getDivImage(divImg);
        if(getImg.complete){                                   //check level 2
            //no adblocker;return ok
            console.log("no adblocker")
        }
        else{
            console.log("adblock detected at level 2")
        }
            
    }
    else
        console.log("adblock detected at level 1")
}


async function littlepixel(){ //小像素bait
    await sleep(2000); 
    console.log("sleep over;","小像素检测");
    if (!$("#pixel").is(':visible')  || $("#pixel") == undefined 
    || $("#pixel").height()>1){                     //|| $("#pixel").height()<50 这个条件要去掉，因为pixel是1*1        console.log("小像素诱饵 blocked. 存在adblocker")
        console.log("小像素诱饵 blocked. 存在adblocker") //>1是原本1*1的像素，替换为alt文本反而变高了
        //servicestop();
    }
    else
        console.log("小像素诱饵  not blocked", $("#pixel").height())
}


//https://blog.csdn.net/tjj3027/article/details/81354350 火狐跨域

//图片二进制流MD5值：https://www.cnblogs.com/chris-oil/p/8607887.html'  https://www.cnblogs.com/chenjy1225/p/9661337.html
// 此处只采用base6编码，有需要也可以M做哈希等

//直接做url的编码;若需要也可以做图片编码
//与放在服务器的事先存好的编码对比

//"../small.jpg"


//md5 https://zixuephp.net/article-16.html
var premd5="94bfde14be1c1705c3478733f65de3d0"

async function encodecheck(){ //编码;    不必做出屏蔽一点点的！ base64（）-》md5hash （论文写清楚MD5和BASE64的含义

    console.log("编码检测");
    var testurl=document.getElementById("encodeimg"); //base64,string
    console.log(testurl);


    var testbase64=getBase64Image(testurl);
    await sleep(4000); 
    var testmd5= md5(testbase64)
    if(premd5 == testmd5)
        console.log("The bait is complete,no adblocker","premd5:",premd5,"testmd5",testmd5)
    else
        console.log("The bait was changed,adblocker detected. premd5:",premd5,"testmd5",testmd5)
}


var prechainmd5="735351ed8b58f16d76a7555158d3eb87"

async function chainencodecheck(){ //连锁编码;  意义在于快速检测多个;当不同的bait检测方法不同时也方便(文字、url也可以编码)

    console.log("连锁编码检测");
    var fa=document.getElementById("chainencode");
    var childlist=fa.children;
    var d=0;
    var idname="chain";
    var text1="";
    var url1="";
    //var base64ini="myencode";
    //var base64fin;
    var connect="";
    for(var i=0;i<childlist.length;i++){
        //console.log(childlist[i].tagName); //tagName 大写
        if(childlist[i].tagName=='IMG'){
            d++;
            idname="chain"+d.toString();
            console.log(idname);
            url1=document.getElementById(idname); //而非.src
            connect+=getBase64Image(url1);
            //console.log(typeof(testbase64))
            await sleep(4000);
            //base64fin=base64ini^testbase64;
            //console.log(idname,"useful elements")
        }
        else if(childlist[i].tagName=='P'){
            d++;
            idname="chain"+d.toString();
            console.log(idname);
            text1=document.getElementById(idname).innerHTML;
            connect+=Base64Str(text1);
            await sleep(4000);
            //base64fin=base64ini^testbase64;
            //console.log(idname,"useful elements")
        }
    }
    var md5fin=md5(connect);
    await sleep(4000);
    if(md5fin == prechainmd5)
    console.log("All  baits are complete,no adblocker.prechainmd5:",prechainmd5,"testmd5:",md5fin)
else
    console.log("Some baits was changed,adblocker detected. prechainmd5:",prechainmd5,"testmd5:",md5fin)
}


async function test(){

 for(var i=0;i<listmini.length;i++){
     var url=listmini[i];
     console.log(url);
 }

}


//字符串转base64
function Base64Str(str){
    // 对字符串进行编码
    var encode = encodeURI(str);
    // 对编码的字符串转化base64
    var base64 = btoa(encode);
    return base64;
    }

function getBase64Image(img){ 
    var canvas=document.createElement("canvas");
    canvas.width=img.width;
    canvas.height=img.height;
    var ctx=canvas.getContext("2d");
    ctx.drawImage(img,0,0,img.width,img.height);
    //后缀
    var ext=img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
    var dataUrl=canvas.toDataURL("images/"+ext);
    return dataUrl;
};




