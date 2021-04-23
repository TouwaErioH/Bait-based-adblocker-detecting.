/*
class Student{
    constructor(name,age,sex){
        this.name = name
        this.age= age
        this.sex = sex
    }

    //read(){console.log(this.name+this.age+this.sex)}
}
*/

//https://www.webhek.com/post/javascript-sleep-function.html
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  


function sleepraw(delay) {
    for(var t = Date.now(); Date.now() - t <= delay;);
}

function judgeShowOrHide(){  
    alert($("#id").is(':visible')); //判断是否显示  显示：true 隐藏：false  
    if($("#id").is(':hidden')){  
        alert("隐藏了");  
        //处理业务  
    }else{  
        alert("显示");             
               //处理业务  
        }  
}  

class baitClass{
    constructor(name,height,width,url){
    this.name = name
    this.height= height
    this.width = width
    this.url=url
    }
}

//获取div的背景图片地址
function getDivImage(divElement) {
	let imgurl = window.getComputedStyle(divElement, null).getPropertyValue('background-image');
	return imgurl.substring(5, imgurl.lastIndexOf('\"'));
}


    //css、jQuery中，.为class引用，#为id引用
    //https://zhuanlan.zhihu.com/p/231813098
function baitFunction1()   //biatClass1,直接在bait设置background。动态创建
{
    console.log("div background 诱饵 onload")
    var bait = document.createElement ("div") ;
    bait.setAttribute ("class", "baitClass1");   //动态创建baits; this.options.baitClass感觉是简写注意没有引号，只会简单的命名？做类似的实现吧
    // 函数中this 即为window  //动态创建的baits不确定是否被adblock blocked，既可以检测，也可以用于显示
    bait = document.body.appendChild(bait);  //论文缺少document.
    //alert($(".baitClass").is(':visible'));
    //console.log(Date.now());  //毫秒数
    //sleep(3000);
    //alert("go")
    /*
    if (bait == undefined || bait.height <10|| !$(".baitClass1").is(':visible') ) {   //注意最后的'!' .is(hidden)
        alert("alblock")
    }  如果div加载但是background没有加载，不会报错，所以还需要检查background
    */

    //div 元素的背景图片检查比较复杂；https://blog.csdn.net/yanhanhui1/article/details/114315702
    //通过js获取div的style.backgroundImage的值来获取div的背景图片的地址，再以该地址为参数在js创建一个Image对象，
    //Image对象也有complete属性，根据新建对象来判断是否加载完成。
    sleep(2000).then(() => {  //sleep 使用promise api，没有新定义。只阻塞下面的语句
        //console.log("sleep over");
        if (bait == undefined || bait.height <100|| !$(".baitClass1").is(':visible') ) {   //注意最后的'!' .is(hidden)
            alert("alblock detected; div undefined")
        }  
        else{

            let divImg = document.querySelector('.baitClass1'); //获取div元素  let访问空间限制在块内
            let getImg = new Image(); //新建Image对象
            getImg.src = getDivImage(divImg); //给Image元素指定地址
            /*
            setInterval(() => {
                console.log(getImg.complete);
                if(getImg.complete)
                    console.log(getImg.src);
                else
                    console.log("not ready")
            }, 1000);*/
            
/*
setInterval("fun()",time)有两个参数；
fun()为要执行的函数；
time为多久执行一次函数，单位是毫秒；
*/  
    //console.log(getImg.complete);
    if(!getImg.complete)
        console.log("adblock background,adblocker detected")
    else
        console.log("no adblocker");
    }
    
    
})

}


function baitFunction2()   //创建div:bait,再插入img。动态创建
{
    //alert("bait img onload")
    var bait = document.createElement ("div") ;
    bait.setAttribute ("class", "baitClass2");
    

    var Image = document.createElement("img");
    //Image.src = "https://iknow-base.cdn.bcebos.com/xuguodongpc.png"; //这张图片暂时没有被list
    Image.src = "https://ecmb.bdimg.com/kmarketingadslogo/9ec1c2fa448d4a8069825f69a10d4007_259_194.jpg"
    //Image.alt = loading
    // Image.id = baitimg;
    Image.setAttribute("id", "baitimg");
    Image.setAttribute("alt", "div:img");
    Image.setAttribute("class", "baitClass2");

    bait.appendChild(Image);

    bait = document.body.appendChild(bait); 

    console.log("div img 诱饵 onload")

    //alert("ready")
    //sleep(3000);  //js语句执行不是按照一行一行执行，按照段。定义类语句等等会先执行，如果调用sleep，会先sleep，然后才appendchild到页面、做检查等待。这样sleep就失去了意义
                  //sleepraw 函数使用了var，故先执行
    //这样就失去了检查效果。为了实现等待后检查
    
    sleep(2000).then(() => {  //sleep 使用promise api，没有新定义。只阻塞下面的语句
        //console.log("sleep over");


    if (bait == undefined || bait.height == 0|| !$(".baitClass2").is(':visible') ) {
        alert("alblock div-bait");
    }
    /*
    启用adblock plus
    console报错 GET https://ecmb.bdimg.com/kmarketingadslogo/9ec1c2fa448d4a8069825f69a10d4007_259_194.jpg
     net::ERR_BLOCKED_BY_CLIENT
     一下两个检测都检测到
    */
    else if (!$("#baitimg").is(':visible') ) {
        //alert("img alblock hidden")
        console.log("img alblock; block type: hidden");
    }
    //console.log(Image.height)
    else if ($("#baitimg").height()<5) {
        //alert("img alblock change")

        console.log("img alblock: block type: change",$("#baitimg").height());
    }
    else 
        console.log("no adblocker");
})
}

//法一：根据easylist的列表，修改文件名.论文里截图示意即可
//法二：在easylist添加自定义的过滤 正则  (本地 file不行;http或https才行)
/*
 ^:代表正则表达式开始，
$代表正则表达式结束，
*代表匹配0--无穷个，
[]代表或的关系 
*/
//这里演示法二
async function quickbaits(){
    var rand= Math.floor(Math.random() * 100); //0-99 int
    rand = rand % listmini.length;
    //console.log(rand);
    var randurl=listmini[rand];
    var target=document.getElementById("QUICK");
    var randimg = document.createElement("img");

    randimg.src = randurl;
    //Image.alt = loading
    // Image.id = baitimg;
    randimg.setAttribute("id", "randimg");
    randimg.setAttribute("alt", "randimg");
    randimg.setAttribute("height", "20%");
    randimg.setAttribute("width", "20%");
    target.appendChild(randimg);
    await sleep(1000);
    if (!$("#randimg").is(':visible') || $("#randimg").height()<30 || $("#randimg") == undefined ){
        console.log("快速随机生成的诱饵 blocked. 存在adblocker");
        return ;
    //servicestop();
    }
    else
        console.log("快速随机生成的诱饵 not blocked,no adblocker");
}
 
async function test(){

 for(var i=0;i<listmini.length;i++){
     var url=listmini[i];
     console.log(url);
 }

}

/*
                    <img id = "orig" src="https://images.cnblogs.com/cnblogs_com/lqerio/1307256/o_1911180956241547556434117.jpeg"
                    alt="orignal f" height=10% width=10%>
*/

//list mini根据
    //https://easylist-downloads.adblockplus.org/easylistchina.txt
    //https://easylist-downloads.adblockplus.org/easylist.txt
    //创建

    //重命名任意文件即可；Js创建、重命名不方便，在python脚本实现，这里直接粘贴url
    //需要 /-> %2F 因为文件命名不允许 /
    var listmini=new Array("https://images.cnblogs.com/cnblogs_com/lqerio/1496609/o_c5634309b2f0fed79271700d7cc9f85d.jpg",
    "https://images.cnblogs.com/cnblogs_com/lqerio/1960758/o_2104130432091.gif",
    "https://images.cnblogs.com/cnblogs_com/lqerio/1307256/o_00.jpg",
    "https://images.cnblogs.com/cnblogs_com/lqerio/1307256/o_1911180956241547556434117.jpeg",
    "https://images.cnblogs.com/cnblogs_com/lqerio/1307256/o_1911180956191547556429550.jpeg");  //||1990tu.com%2Fi%2F*.gif

/*

//1.下载txt，并另存为utf-8 2. python替换/为%2F
 
async function test(){

//页面编码和txt文件编码必须一致否则中午可能出现乱码或者什么都不出来

$.get("../newlist.txt",function(data,status){ //文件中的 '/'不处理会报错，用python替换为%2F(/的URLencode)
    console.log(typeof(data));
    var lines=data.split("\n");
    console.log(lines[0]);
    console.log("hello");
});

}
*/
