/**
 * Created by Administrator on 2016/12/14 0014.
 */
window.onload = function(){
    var imgArry = [     /*定义轮播图片数组*/
        "img/01.jpg",
        "img/02.jpg",
        "img/03.jpg",
        "img/04.jpg",
    ];
    var content = document.getElementById("content");//获取轮播最外围元素
    var banner = document.getElementById("banner");//获取轮播图片
    var dots = document.getElementById("dot").getElementsByTagName("li"); /*获取点集合*/
    var index;  //定义索引
    var num=0;
    var timer; //声明定时器变量

    //for循环为点 加上鼠标覆盖事件
    for(var i=0;i <dots.length;i ++){
        dots[i].index = i;
        dots[i].onmouseover = function(){
            num = this.index;
            play();
        }
    }
    //图片播放与初始化
    function play(){
        banner.style.backgroundImage = "url("+imgArry[num]+")";
        for(var i=0;i<dots.length;i++){
            dots[i].style.background = "white";
        }
        dots[num].style.background = "darkred";
    }
    play();//初始化

    //自动播放函数
    function autoPlay(){
        num++;
        if(num==dots.length){
            num=0;
        }
        play();
    }
    clearInterval(timer);//清除定时器
    timer = setInterval(autoPlay,1500);//开启自动播放

    //鼠标移入移出事件
    content.onmouseover = function(){
        clearInterval(timer);
        for(var i=0;i <dots.length;i ++){
            dots[i].index = i;
            dots[i].onmouseover = function(){
                num = this.index;
                play();
            }
        }
    };
    content.onmouseout = function(){
        timer =setInterval(autoPlay,1000);
    }
};