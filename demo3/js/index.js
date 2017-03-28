window.onload = function () {

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var ulLis = ul.children;
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");
    var wrap = document.getElementById("wrap");
    var mdzz = true;
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    }
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    }
    cc();
    function cc() {
        for (var i = 0; i < ulLis.length; i++) {
            animate(ulLis[i], config[i],function(){
                mdzz = true
            });
        }
    }

    arrRight.onclick = function () {
        if(mdzz){
            mdzz=false;
            config.push(config.shift())
            cc();
        }

    }
    arrLeft.onclick = function () {
        config.unshift(config.pop())
        cc();
    }
};