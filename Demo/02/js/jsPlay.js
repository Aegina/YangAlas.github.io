/**
 * Created by Administrator on 2016/12/14 0014.
 */
window.onload = function(){
    var imgArry = [     /*�����ֲ�ͼƬ����*/
        "img/01.jpg",
        "img/02.jpg",
        "img/03.jpg",
        "img/04.jpg",
    ];
    var content = document.getElementById("content");//��ȡ�ֲ�����ΧԪ��
    var banner = document.getElementById("banner");//��ȡ�ֲ�ͼƬ
    var dots = document.getElementById("dot").getElementsByTagName("li"); /*��ȡ�㼯��*/
    var index;  //��������
    var num=0;
    var timer; //������ʱ������

    //forѭ��Ϊ�� ������긲���¼�
    for(var i=0;i <dots.length;i ++){
        dots[i].index = i;
        dots[i].onmouseover = function(){
            num = this.index;
            play();
        }
    }
    //ͼƬ�������ʼ��
    function play(){
        banner.style.backgroundImage = "url("+imgArry[num]+")";
        for(var i=0;i<dots.length;i++){
            dots[i].style.background = "white";
        }
        dots[num].style.background = "darkred";
    }
    play();//��ʼ��

    //�Զ����ź���
    function autoPlay(){
        num++;
        if(num==dots.length){
            num=0;
        }
        play();
    }
    clearInterval(timer);//�����ʱ��
    timer = setInterval(autoPlay,1500);//�����Զ�����

    //��������Ƴ��¼�
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